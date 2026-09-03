"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { ExamenBlanc } from "@/content/types";
import { NOMS_THEMES_AMF } from "@/lib/amf";
import type { ResultatExamen } from "@/lib/examenBlanc";

type Phase = "intro" | "en_cours" | "correction";

export default function ExamenRunner({ examen }: { examen: ExamenBlanc }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState<Record<string, number | null>>({});
  const [secondesRestantes, setSecondesRestantes] = useState(examen.dureeConseilleeMinutes * 60);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [resultat, setResultat] = useState<ResultatExamen | null>(null);
  const dureeEcouleeRef = useRef(0);

  const questionActuelle = examen.questions[index];

  const soumettre = useCallback(async () => {
    if (envoiEnCours) return;
    setEnvoiEnCours(true);
    const payload = examen.questions.map((q) => ({ questionId: q.id, choixIndex: reponses[q.id] ?? null }));
    try {
      const res = await fetch("/api/amf/examens/soumettre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examenId: examen.id,
          reponses: payload,
          dureeSecondes: dureeEcouleeRef.current,
        }),
      });
      const data = await res.json();
      setResultat(data.resultat);
      setPhase("correction");
    } finally {
      setEnvoiEnCours(false);
    }
  }, [examen, reponses, envoiEnCours]);

  useEffect(() => {
    if (phase !== "en_cours") return;
    const debut = Date.now();
    const interval = setInterval(() => {
      dureeEcouleeRef.current = Math.round((Date.now() - debut) / 1000);
      setSecondesRestantes((s) => {
        if (s <= 1) {
          clearInterval(interval);
          soumettre();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase, soumettre]);

  const nbRepondues = useMemo(() => Object.values(reponses).filter((v) => v !== null && v !== undefined).length, [reponses]);

  if (phase === "intro") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold tracking-tight">{examen.titre}</h1>
        <p className="mt-2 text-slate-600">{examen.description}</p>
        <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-xs text-slate-500">Questions</dt>
            <dd className="text-xl font-semibold text-slate-900">{examen.questions.length}</dd>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-xs text-slate-500">Durée</dt>
            <dd className="text-xl font-semibold text-slate-900">{examen.dureeConseilleeMinutes} min</dd>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-xs text-slate-500">Seuil de réussite</dt>
            <dd className="text-xl font-semibold text-slate-900">{examen.seuilReussitePct}%</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-slate-400">
          Une fois lancé, le chronomètre décompte en continu ; l&apos;examen se soumet automatiquement à
          expiration du temps. Vous pouvez naviguer librement entre les questions et changer vos réponses
          avant de terminer.
        </p>
        <button
          onClick={() => setPhase("en_cours")}
          className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Commencer l&apos;examen
        </button>
      </div>
    );
  }

  if (phase === "en_cours") {
    const minutes = Math.floor(secondesRestantes / 60);
    const secondes = secondesRestantes % 60;
    const tempsCritique = secondesRestantes <= 60;

    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-500">
            {nbRepondues} / {examen.questions.length} répondues
          </span>
          <span className={`font-mono text-sm font-medium ${tempsCritique ? "text-red-600" : "text-slate-700"}`}>
            {minutes}:{secondes.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {examen.questions.map((q, i) => {
            const repondu = reponses[q.id] !== undefined && reponses[q.id] !== null;
            return (
              <button
                key={q.id}
                onClick={() => setIndex(i)}
                className={`h-7 w-7 rounded text-xs font-medium transition-colors ${
                  i === index
                    ? "bg-blue-600 text-white"
                    : repondu
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-500"
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <span className="text-xs font-medium text-slate-400 uppercase">
            Question {index + 1} / {examen.questions.length} · {NOMS_THEMES_AMF[questionActuelle.theme]}
          </span>
          <p className="mt-3 text-lg font-medium text-slate-900">{questionActuelle.question}</p>
          <div className="mt-4 space-y-2">
            {questionActuelle.choix.map((c, i) => {
              const selectionne = reponses[questionActuelle.id] === i;
              return (
                <button
                  key={i}
                  onClick={() => setReponses((r) => ({ ...r, [questionActuelle.id]: i }))}
                  className={`w-full text-left rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                    selectionne
                      ? "border-blue-400 bg-blue-50 text-blue-900"
                      : "border-slate-200 text-slate-800 hover:border-blue-300"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40"
            >
              Précédent
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(examen.questions.length - 1, i + 1))}
              disabled={index === examen.questions.length - 1}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40"
            >
              Suivant
            </button>
          </div>
          <button
            onClick={soumettre}
            disabled={envoiEnCours}
            className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
          >
            Terminer l&apos;examen
          </button>
        </div>
      </div>
    );
  }

  if (!resultat) return <p className="text-slate-500">Correction en cours…</p>;

  return (
    <div className="space-y-6">
      <div
        className={`rounded-xl border p-6 text-center ${
          resultat.reussite ? "border-emerald-300 bg-emerald-50" : "border-amber-300 bg-amber-50"
        }`}
      >
        <p className="text-3xl font-semibold text-slate-900">
          {resultat.score} / {resultat.total}
        </p>
        <p className="mt-1 text-lg font-medium text-slate-700">{resultat.pct}%</p>
        <p className={`mt-2 font-medium ${resultat.reussite ? "text-emerald-700" : "text-amber-700"}`}>
          {resultat.reussite
            ? `Seuil de réussite atteint (≥ ${resultat.seuilReussitePct}%)`
            : `Seuil de réussite non atteint (${resultat.seuilReussitePct}% requis)`}
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold text-slate-900 mb-3">Résultat par thématique</h2>
        <div className="space-y-3">
          {(Object.keys(NOMS_THEMES_AMF) as (keyof typeof NOMS_THEMES_AMF)[]).map((theme) => {
            const d = resultat.detailParTheme[theme];
            if (!d) return null;
            const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
            return (
              <div key={theme}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{NOMS_THEMES_AMF[theme]}</span>
                  <span>
                    {d.correct}/{d.total} ({pct}%)
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full ${pct >= 70 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-red-400"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/amf"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Retour à la certification AMF
        </Link>
        <button
          onClick={() => {
            setPhase("intro");
            setIndex(0);
            setReponses({});
            setSecondesRestantes(examen.dureeConseilleeMinutes * 60);
            setResultat(null);
          }}
          className="rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Repasser cette version
        </button>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-900 mb-3">Corrigé détaillé</h2>
        <div className="space-y-3">
          {examen.questions.map((q, i) => {
            const r = resultat.resultats.find((x) => x.questionId === q.id);
            if (!r) return null;
            return (
              <div
                key={q.id}
                className={`rounded-lg border p-4 ${r.correct ? "border-slate-200 bg-white" : "border-red-200 bg-red-50"}`}
              >
                <p className="text-xs text-slate-400">
                  Question {i + 1} · {NOMS_THEMES_AMF[q.theme]}
                </p>
                <p className="mt-1 font-medium text-slate-900">{q.question}</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {q.choix.map((c, ci) => {
                    let style = "text-slate-600";
                    if (ci === q.bonneReponse) style = "text-emerald-700 font-medium";
                    else if (ci === r.choixDonne) style = "text-red-700 line-through";
                    return (
                      <li key={ci} className={style}>
                        {ci === q.bonneReponse ? "✓ " : ci === r.choixDonne ? "✗ " : "· "}
                        {c}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium">Explication : </span>
                  {q.explication}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
