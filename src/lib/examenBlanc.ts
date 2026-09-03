import { prisma } from "@/lib/prisma";
import { getExamenBlanc } from "@/content/amf/examens-blancs";
import type { ExamenBlanc, ThemeAMF } from "@/content/types";
import { melangerChoixDeterministe } from "@/lib/shuffle";

/**
 * Renvoie l'examen avec, pour chaque question, ses choix mélangés de façon
 * déterministe (graine = id d'examen + id de question) : le même mélange est
 * obtenu à l'affichage et à la correction, sans avoir à le stocker nulle part,
 * et il évite tout biais de position de la bonne réponse (ex. "toujours en 2e").
 */
export function getExamenAvecChoixMelanges(examenId: string): ExamenBlanc | undefined {
  const examen = getExamenBlanc(examenId);
  if (!examen) return undefined;
  return {
    ...examen,
    questions: examen.questions.map((q) => {
      const melange = melangerChoixDeterministe(q.choix, q.bonneReponse, `${examenId}:${q.id}`);
      return { ...q, choix: melange.choix, bonneReponse: melange.bonneReponse };
    }),
  };
}

export interface ReponseSoumise {
  questionId: string;
  choixIndex: number | null;
}

export interface ResultatQuestion {
  questionId: string;
  correct: boolean;
  choixDonne: number | null;
  bonneReponse: number;
}

export interface ResultatExamen {
  examenId: string;
  score: number;
  total: number;
  pct: number;
  reussite: boolean;
  seuilReussitePct: number;
  detailParTheme: Record<ThemeAMF, { correct: number; total: number }>;
  resultats: ResultatQuestion[];
}

/** Corrige une copie d'examen blanc côté serveur (jamais confiance dans un score envoyé par le client) et enregistre la tentative. */
export async function corrigerEtEnregistrerExamen(
  examenId: string,
  reponses: ReponseSoumise[],
  dureeSecondes?: number,
): Promise<ResultatExamen | undefined> {
  const examen = getExamenAvecChoixMelanges(examenId);
  if (!examen) return undefined;

  const reponsesParId = new Map(reponses.map((r) => [r.questionId, r.choixIndex]));
  const detailParTheme = {} as Record<ThemeAMF, { correct: number; total: number }>;
  const resultats: ResultatQuestion[] = [];
  let score = 0;

  for (const q of examen.questions) {
    const choixDonne = reponsesParId.get(q.id) ?? null;
    const correct = choixDonne === q.bonneReponse;
    if (correct) score += 1;

    if (!detailParTheme[q.theme]) detailParTheme[q.theme] = { correct: 0, total: 0 };
    detailParTheme[q.theme].total += 1;
    if (correct) detailParTheme[q.theme].correct += 1;

    resultats.push({ questionId: q.id, correct, choixDonne, bonneReponse: q.bonneReponse });
  }

  const total = examen.questions.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const reussite = pct >= examen.seuilReussitePct;

  await prisma.tentativeExamenBlanc.create({
    data: {
      examenId,
      score,
      total,
      reussite,
      seuilReussitePct: examen.seuilReussitePct,
      dureeSecondes,
      detailParTheme,
    },
  });

  return { examenId, score, total, pct, reussite, seuilReussitePct: examen.seuilReussitePct, detailParTheme, resultats };
}

export async function listerHistoriqueExamens(limite = 20) {
  return prisma.tentativeExamenBlanc.findMany({
    orderBy: { creeLe: "desc" },
    take: limite,
  });
}
