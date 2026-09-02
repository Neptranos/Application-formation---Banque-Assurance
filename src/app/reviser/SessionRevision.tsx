"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ItemDeSession } from "@/lib/revision";

type Etape = "question" | "reponse";

export default function SessionRevision({ domaine, moduleId }: { domaine?: string; moduleId?: string }) {
  const [chargement, setChargement] = useState(true);
  const [session, setSession] = useState<ItemDeSession[]>([]);
  const [index, setIndex] = useState(0);
  const [etape, setEtape] = useState<Etape>("question");
  const [choixSelectionne, setChoixSelectionne] = useState<number | null>(null);
  const [stats, setStats] = useState({ revues: 0, correctes: 0 });
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();
    if (domaine) params.set("domaine", domaine);
    if (moduleId) params.set("moduleId", moduleId);
    fetch(`/api/revues/dues?${params.toString()}`)
      .then((r) => r.json())
      .then((data) => {
        setSession(data.session ?? []);
        setChargement(false);
      })
      .catch(() => setChargement(false));
  }, [domaine, moduleId]);

  const itemActuel = session[index];
  const terminee = !chargement && (session.length === 0 || index >= session.length);

  async function repondre(qualite: number) {
    if (!itemActuel || envoiEnCours) return;
    setEnvoiEnCours(true);
    const correct = qualite >= 3;
    try {
      await fetch("/api/revues/repondre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: itemActuel.item.id,
          itemType: itemActuel.item.type,
          moduleId: itemActuel.item.moduleId,
          qualite,
        }),
      });
    } finally {
      setStats((s) => ({ revues: s.revues + 1, correctes: s.correctes + (correct ? 1 : 0) }));
      setChoixSelectionne(null);
      setEtape("question");
      setIndex((i) => i + 1);
      setEnvoiEnCours(false);
    }
  }

  if (chargement) {
    return <p className="text-slate-500">Chargement de votre session…</p>;
  }

  if (terminee) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 text-center">
        {stats.revues > 0 ? (
          <>
            <p className="text-lg font-medium text-slate-900">Session terminée 🎉</p>
            <p className="mt-1 text-slate-600">
              {stats.revues} élément{stats.revues > 1 ? "s" : ""} révisé{stats.revues > 1 ? "s" : ""}, dont{" "}
              {stats.correctes} maîtrisé{stats.correctes > 1 ? "s" : ""} du premier coup.
            </p>
          </>
        ) : (
          <p className="text-slate-600">
            Rien à réviser pour l&apos;instant sur ce périmètre — tout est à jour. Revenez plus tard, ou
            explorez un nouveau module.
          </p>
        )}
        <div className="mt-4 flex justify-center gap-3">
          <Link href="/apprendre" className="text-sm font-medium text-blue-600 hover:underline">
            Parcourir les cours
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-500 hover:underline">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
        <span>
          Élément {index + 1} / {session.length}
        </span>
        {itemActuel.nouveau && (
          <span className="rounded-full bg-blue-50 text-blue-600 px-2 py-0.5 font-medium">Nouveau</span>
        )}
      </div>
      <div className="h-1 rounded-full bg-slate-100 overflow-hidden mb-6">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${(index / session.length) * 100}%` }}
        />
      </div>

      {itemActuel.contenu.type === "flashcard" ? (
        <CarteFlashcard
          moduleTitre={itemActuel.contenu.moduleTitre}
          recto={itemActuel.contenu.recto}
          verso={itemActuel.contenu.verso}
          etape={etape}
          onAfficherReponse={() => setEtape("reponse")}
          onNoter={repondre}
          desactive={envoiEnCours}
        />
      ) : (
        <CarteQuiz
          moduleTitre={itemActuel.contenu.moduleTitre}
          question={itemActuel.contenu.question}
          choix={itemActuel.contenu.choix}
          bonneReponse={itemActuel.contenu.bonneReponse}
          explication={itemActuel.contenu.explication}
          choixSelectionne={choixSelectionne}
          onSelectionner={setChoixSelectionne}
          onNoter={repondre}
          desactive={envoiEnCours}
        />
      )}
    </div>
  );
}

function CarteFlashcard({
  moduleTitre,
  recto,
  verso,
  etape,
  onAfficherReponse,
  onNoter,
  desactive,
}: {
  moduleTitre: string;
  recto: string;
  verso: string;
  etape: Etape;
  onAfficherReponse: () => void;
  onNoter: (qualite: number) => void;
  desactive: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 min-h-[220px] flex flex-col">
      <span className="text-xs font-medium text-slate-400 uppercase">{moduleTitre}</span>
      <p className="mt-3 text-lg font-medium text-slate-900">{recto}</p>
      {etape === "reponse" && (
        <p className="mt-4 rounded-md bg-slate-50 p-3 text-slate-700">{verso}</p>
      )}
      <div className="mt-auto pt-6">
        {etape === "question" ? (
          <button
            onClick={onAfficherReponse}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Afficher la réponse
          </button>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            <BoutonNote label="Encore" sousTexte="< 1 j" couleur="bg-red-100 text-red-700 hover:bg-red-200" onClick={() => onNoter(1)} desactive={desactive} />
            <BoutonNote label="Difficile" sousTexte="qq jours" couleur="bg-amber-100 text-amber-700 hover:bg-amber-200" onClick={() => onNoter(3)} desactive={desactive} />
            <BoutonNote label="Bien" sousTexte="quelques semaines" couleur="bg-blue-100 text-blue-700 hover:bg-blue-200" onClick={() => onNoter(4)} desactive={desactive} />
            <BoutonNote label="Facile" sousTexte="long terme" couleur="bg-emerald-100 text-emerald-700 hover:bg-emerald-200" onClick={() => onNoter(5)} desactive={desactive} />
          </div>
        )}
      </div>
    </div>
  );
}

function CarteQuiz({
  moduleTitre,
  question,
  choix,
  bonneReponse,
  explication,
  choixSelectionne,
  onSelectionner,
  onNoter,
  desactive,
}: {
  moduleTitre: string;
  question: string;
  choix: string[];
  bonneReponse: number;
  explication: string;
  choixSelectionne: number | null;
  onSelectionner: (i: number) => void;
  onNoter: (qualite: number) => void;
  desactive: boolean;
}) {
  const aRepondu = choixSelectionne !== null;
  const estCorrect = choixSelectionne === bonneReponse;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <span className="text-xs font-medium text-slate-400 uppercase">{moduleTitre}</span>
      <p className="mt-3 text-lg font-medium text-slate-900">{question}</p>
      <div className="mt-4 space-y-2">
        {choix.map((c, i) => {
          let style = "border-slate-200 hover:border-blue-300";
          if (aRepondu) {
            if (i === bonneReponse) style = "border-emerald-400 bg-emerald-50";
            else if (i === choixSelectionne) style = "border-red-400 bg-red-50";
            else style = "border-slate-200 opacity-60";
          }
          return (
            <button
              key={i}
              disabled={aRepondu}
              onClick={() => onSelectionner(i)}
              className={`w-full text-left rounded-lg border px-4 py-2.5 text-sm text-slate-800 transition-colors ${style}`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {aRepondu && (
        <div className="mt-4 rounded-md bg-slate-50 p-3 text-sm text-slate-700">
          <span className={`font-medium ${estCorrect ? "text-emerald-700" : "text-red-700"}`}>
            {estCorrect ? "Bonne réponse. " : "Pas tout à fait. "}
          </span>
          {explication}
        </div>
      )}

      {aRepondu && (
        <div className="mt-4">
          {estCorrect ? (
            <div className="grid grid-cols-3 gap-2">
              <BoutonNote label="Difficile" sousTexte="qq jours" couleur="bg-amber-100 text-amber-700 hover:bg-amber-200" onClick={() => onNoter(3)} desactive={desactive} />
              <BoutonNote label="Bien" sousTexte="quelques semaines" couleur="bg-blue-100 text-blue-700 hover:bg-blue-200" onClick={() => onNoter(4)} desactive={desactive} />
              <BoutonNote label="Facile" sousTexte="long terme" couleur="bg-emerald-100 text-emerald-700 hover:bg-emerald-200" onClick={() => onNoter(5)} desactive={desactive} />
            </div>
          ) : (
            <button
              onClick={() => onNoter(1)}
              disabled={desactive}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Continuer
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function BoutonNote({
  label,
  sousTexte,
  couleur,
  onClick,
  desactive,
}: {
  label: string;
  sousTexte: string;
  couleur: string;
  onClick: () => void;
  desactive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={desactive}
      className={`rounded-lg px-2 py-2 text-xs font-medium text-center transition-colors disabled:opacity-50 ${couleur}`}
    >
      <span className="block">{label}</span>
      <span className="block font-normal opacity-70">{sousTexte}</span>
    </button>
  );
}
