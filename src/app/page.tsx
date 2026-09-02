import Link from "next/link";
import { calculerProgres } from "@/lib/revision";
import { DOMAINES, MODULES, getModulesByDomaine } from "@/content";

// Progression propre à l'utilisateur local : jamais pertinent à pré-générer statiquement.
export const dynamic = "force-dynamic";

export default async function AccueilPage() {
  const progres = await calculerProgres();
  const progresParModule = new Map(progres.map((p) => [p.moduleId, p]));

  const totaux = progres.reduce(
    (acc, p) => {
      acc.total += p.total;
      acc.dus += p.dus;
      acc.pointsFaibles += p.pointsFaibles;
      acc.maitrise += p.maitrise;
      return acc;
    },
    { total: 0, dus: 0, pointsFaibles: 0, maitrise: 0 },
  );

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">Votre formation Banque-Assurance</h1>
        <p className="mt-1 text-slate-600">
          {MODULES.length} modules, {totaux.total} éléments à maîtriser (flashcards et questions). La
          répétition espacée priorise vos points faibles sans jamais laisser filer ce que vous maîtrisez déjà.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="À réviser aujourd'hui" value={totaux.dus} accent="text-blue-600" />
        <StatCard label="Points faibles" value={totaux.pointsFaibles} accent="text-amber-600" />
        <StatCard label="Maîtrisés" value={totaux.maitrise} accent="text-emerald-600" />
        <StatCard label="Total du programme" value={totaux.total} accent="text-slate-700" />
      </section>

      <section className="flex flex-wrap gap-3">
        <Link
          href="/reviser"
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Réviser maintenant{totaux.dus > 0 ? ` (${totaux.dus} dus)` : ""}
        </Link>
        <Link
          href="/apprendre"
          className="rounded-lg bg-white border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
        >
          Parcourir les cours
        </Link>
        <Link
          href="/progres"
          className="rounded-lg bg-white border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
        >
          Voir mes progrès détaillés
        </Link>
      </section>

      {DOMAINES.map((domaine) => (
        <section key={domaine.id}>
          <h2 className="text-lg font-semibold text-slate-900">{domaine.titre}</h2>
          <p className="text-sm text-slate-500 mb-3">{domaine.description}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {getModulesByDomaine(domaine.id).map((m) => {
              const p = progresParModule.get(m.id);
              const pct = p && p.total > 0 ? Math.round((p.maitrise / p.total) * 100) : 0;
              return (
                <Link
                  key={m.id}
                  href={`/apprendre/${m.domaine}/${m.id}`}
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
        </section>
      ))}
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className={`text-2xl font-semibold ${accent}`}>{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  );
}
