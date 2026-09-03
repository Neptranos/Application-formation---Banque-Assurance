import Link from "next/link";
import { getModulesByDomaine } from "@/content";
import { EXAMENS_BLANCS } from "@/content/amf/examens-blancs";
import { calculerProgres } from "@/lib/revision";
import { listerHistoriqueExamens } from "@/lib/examenBlanc";
import { NOMS_THEMES_AMF } from "@/lib/amf";

export const dynamic = "force-dynamic";

export default async function AmfPage() {
  const modules = getModulesByDomaine("amf");
  const progres = await calculerProgres();
  const progresParModule = new Map(progres.map((p) => [p.moduleId, p]));
  const historique = await listerHistoriqueExamens(50);

  const meilleurScoreParExamen = new Map<string, number>();
  const derniereTentativeParExamen = new Map<string, (typeof historique)[number]>();
  for (const t of historique) {
    const meilleur = meilleurScoreParExamen.get(t.examenId) ?? -1;
    if (t.score > meilleur) meilleurScoreParExamen.set(t.examenId, t.score);
    if (!derniereTentativeParExamen.has(t.examenId)) derniereTentativeParExamen.set(t.examenId, t);
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Certification AMF</h1>
        <p className="mt-1 text-slate-600">
          Préparation à l&apos;examen certifié AMF (arrêté du 4 novembre 2009) : cinq modules de cours
          couvrant le référentiel — cadre institutionnel, instruments financiers, gestion de
          portefeuille, déontologie, abus de marché — puis des examens blancs en conditions réelles.
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Format indicatif à titre pédagogique (QCM, environ 145 questions, seuil de réussite autour de
          70 %, durée 2h pour l&apos;examen réel) : vérifiez les modalités exactes et à jour auprès de
          l&apos;AMF ou de votre organisme certificateur avant de vous inscrire.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Cours par thématique</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {modules.map((m) => {
            const p = progresParModule.get(m.id);
            const pct = p && p.total > 0 ? Math.round((p.maitrise / p.total) * 100) : 0;
            return (
              <Link
                key={m.id}
                href={`/apprendre/amf/${m.id}`}
                className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-900">{m.titre}</span>
                  {p && p.pointsFaibles > 0 && (
                    <span className="text-xs font-medium text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">
                      {p.pointsFaibles} à retravailler
                    </span>
                  )}
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${pct}%` }} />
                </div>
                <span className="mt-1 block text-xs text-slate-500">{pct}% maîtrisé</span>
              </Link>
            );
          })}
        </div>
        <Link
          href="/reviser?domaine=amf"
          className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Réviser flashcards &amp; quiz AMF (répétition espacée) →
        </Link>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Examens blancs</h2>
        <p className="text-sm text-slate-500 mb-3">
          3 versions indépendantes de 60 questions, réparties dans les mêmes proportions thématiques
          (déontologie la plus représentée, comme à l&apos;examen réel). Conditions chronométrées.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {EXAMENS_BLANCS.map((ex) => {
            const meilleur = meilleurScoreParExamen.get(ex.id);
            const derniere = derniereTentativeParExamen.get(ex.id);
            return (
              <Link
                key={ex.id}
                href={`/amf/examen-blanc/${ex.id}`}
                className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <span className="font-medium text-slate-900">{ex.titre}</span>
                <p className="mt-1 text-xs text-slate-500">
                  {ex.questions.length} questions · {ex.dureeConseilleeMinutes} min · seuil {ex.seuilReussitePct}%
                </p>
                {meilleur !== undefined ? (
                  <p className="mt-2 text-xs">
                    <span className="font-medium text-slate-700">
                      Meilleur score : {meilleur}/{ex.questions.length}
                    </span>
                    {derniere && (
                      <span className={`ml-2 ${derniere.reussite ? "text-emerald-600" : "text-amber-600"}`}>
                        {derniere.reussite ? "Réussi" : "Non acquis"} (dernier essai)
                      </span>
                    )}
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-slate-400">Pas encore passé</p>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {historique.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Historique des tentatives</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs text-slate-400">
                  <th className="px-4 py-2 font-medium">Date</th>
                  <th className="px-4 py-2 font-medium">Version</th>
                  <th className="px-4 py-2 font-medium">Score</th>
                  <th className="px-4 py-2 font-medium">Résultat</th>
                </tr>
              </thead>
              <tbody>
                {historique.slice(0, 15).map((t) => (
                  <tr key={t.id} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-2 text-slate-500">
                      {new Date(t.creeLe).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-2 text-slate-700">{t.examenId.toUpperCase()}</td>
                    <td className="px-4 py-2 text-slate-700">
                      {t.score}/{t.total} ({Math.round((t.score / t.total) * 100)}%)
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`text-xs font-medium rounded-full px-2 py-0.5 ${
                          t.reussite ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {t.reussite ? "Réussi" : "Non acquis"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold text-slate-900 mb-2">Répartition thématique des examens blancs</h2>
        <ul className="text-sm text-slate-600 space-y-1">
          {Object.entries(NOMS_THEMES_AMF).map(([id, nom]) => (
            <li key={id}>• {nom}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
