import { prisma } from "@/lib/prisma";
import { calculerProchainEtat, dateEcheance, ETAT_INITIAL, niveauMaitrise, type Qualite } from "@/lib/srs";
import { getTousLesItemsRevisables, resoudreItem } from "@/content";
import type { ItemRevisable } from "@/content/types";

const TAILLE_SESSION_DEFAUT = 20;
const PART_NOUVEAUX_MAX = 0.4;

export interface ItemDeSession {
  item: ItemRevisable;
  contenu:
    | { type: "flashcard"; recto: string; verso: string; moduleTitre: string }
    | { type: "quiz"; question: string; choix: string[]; bonneReponse: number; explication: string; moduleTitre: string };
  nouveau: boolean;
}

/** Sélectionne les éléments à réviser maintenant : en priorité les plus en retard, puis quelques nouveaux. */
export async function construireSession(options?: {
  domaine?: "banque" | "assurance";
  moduleId?: string;
  taille?: number;
}): Promise<ItemDeSession[]> {
  const taille = options?.taille ?? TAILLE_SESSION_DEFAUT;
  const tousLesItems = getTousLesItemsRevisables().filter(
    (i) =>
      (!options?.domaine || i.domaine === options.domaine) &&
      (!options?.moduleId || i.moduleId === options.moduleId),
  );

  const etats = await prisma.etatRevision.findMany({
    where: { itemId: { in: tousLesItems.map((i) => i.id) } },
  });
  const etatsParId = new Map(etats.map((e) => [e.itemId, e]));

  const maintenant = new Date();

  const dus = tousLesItems
    .map((item) => ({ item, etat: etatsParId.get(item.id) }))
    .filter((x) => x.etat && x.etat.dueLe <= maintenant)
    .sort((a, b) => a.etat!.dueLe.getTime() - b.etat!.dueLe.getTime());

  const nouveaux = tousLesItems.filter((item) => !etatsParId.has(item.id));

  const nbNouveauxMax = Math.max(1, Math.round(taille * PART_NOUVEAUX_MAX));
  const selection: { item: ItemRevisable; nouveau: boolean }[] = [
    ...dus.slice(0, taille).map((x) => ({ item: x.item, nouveau: false })),
  ];
  const placesRestantes = taille - selection.length;
  if (placesRestantes > 0) {
    selection.push(
      ...nouveaux.slice(0, Math.min(placesRestantes, nbNouveauxMax)).map((item) => ({ item, nouveau: true })),
    );
  }

  const session: ItemDeSession[] = [];
  for (const { item, nouveau } of selection) {
    const resolu = resoudreItem(item.id, item.type);
    if (!resolu) continue;
    if (item.type === "flashcard" && resolu.flashcard) {
      session.push({
        item,
        nouveau,
        contenu: {
          type: "flashcard",
          recto: resolu.flashcard.recto,
          verso: resolu.flashcard.verso,
          moduleTitre: resolu.module.titre,
        },
      });
    } else if (item.type === "quiz" && resolu.question) {
      session.push({
        item,
        nouveau,
        contenu: {
          type: "quiz",
          question: resolu.question.question,
          choix: resolu.question.choix,
          bonneReponse: resolu.question.bonneReponse,
          explication: resolu.question.explication,
          moduleTitre: resolu.module.titre,
        },
      });
    }
  }
  return session;
}

export async function enregistrerReponse(input: {
  itemId: string;
  itemType: "flashcard" | "quiz";
  moduleId: string;
  qualite: Qualite;
}) {
  const existant = await prisma.etatRevision.findUnique({ where: { itemId: input.itemId } });
  const etatActuel = existant ?? { ...ETAT_INITIAL };
  const prochain = calculerProchainEtat(etatActuel, input.qualite);

  await prisma.etatRevision.upsert({
    where: { itemId: input.itemId },
    create: {
      itemId: input.itemId,
      itemType: input.itemType,
      facilite: prochain.facilite,
      intervalleJours: prochain.intervalleJours,
      repetitions: prochain.repetitions,
      serieReussite: prochain.serieReussite,
      serieEchec: prochain.serieEchec,
      dernierQualite: input.qualite,
      dueLe: dateEcheance(prochain.dueDansJours),
    },
    update: {
      facilite: prochain.facilite,
      intervalleJours: prochain.intervalleJours,
      repetitions: prochain.repetitions,
      serieReussite: prochain.serieReussite,
      serieEchec: prochain.serieEchec,
      dernierQualite: input.qualite,
      dueLe: dateEcheance(prochain.dueDansJours),
    },
  });

  await prisma.tentative.create({
    data: {
      itemId: input.itemId,
      itemType: input.itemType,
      moduleId: input.moduleId,
      correct: input.qualite >= 3,
      qualite: input.qualite,
    },
  });

  return { ...prochain, niveau: niveauMaitrise(prochain) };
}

export interface ProgresModule {
  moduleId: string;
  total: number;
  nouveaux: number;
  enApprentissage: number;
  pointsFaibles: number;
  maitrise: number;
  dus: number;
}

export async function calculerProgres(): Promise<ProgresModule[]> {
  const tousLesItems = getTousLesItemsRevisables();
  const etats = await prisma.etatRevision.findMany();
  const etatsParId = new Map(etats.map((e) => [e.itemId, e]));
  const maintenant = new Date();

  const parModule = new Map<string, ProgresModule>();
  for (const item of tousLesItems) {
    if (!parModule.has(item.moduleId)) {
      parModule.set(item.moduleId, {
        moduleId: item.moduleId,
        total: 0,
        nouveaux: 0,
        enApprentissage: 0,
        pointsFaibles: 0,
        maitrise: 0,
        dus: 0,
      });
    }
    const p = parModule.get(item.moduleId)!;
    p.total += 1;
    const etat = etatsParId.get(item.id);
    if (!etat) {
      p.nouveaux += 1;
      continue;
    }
    if (etat.dueLe <= maintenant) p.dus += 1;
    const niveau = niveauMaitrise(etat);
    if (niveau === "nouveau") p.nouveaux += 1;
    else if (niveau === "point_faible") p.pointsFaibles += 1;
    else if (niveau === "maitrise") p.maitrise += 1;
    else p.enApprentissage += 1;
  }
  return [...parModule.values()];
}
