import Link from "next/link";
import { calculerProgres } from "@/lib/revision";
import { DOMAINES, getModulesByDomaine } from "@/content";

export const dynamic = "force-dynamic";

export default async function ProgresPage() {
  const progres = await calculerProgres();
  const progresParModule = new Map(progres.map((p) => [p.moduleId, p]));

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Vos progrès</h1>
        <p className="mt-1 text-slate-600">
          Le détail, module par module : ce qui est maîtrisé, ce qui est en cours d&apos;apprentissage, et ce
          qui mérite d&apos;être retravaillé.
        </p>
      </div>

      {DOMAINES.map((domaine) => (
        <section key={domaine.id}>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">{domaine.titre}</h2>
          <div className="space-y-3">
            {getModulesByDomaine(domaine.id).map((m) => {
              const p = progresParModule.get(m.id) ?? {
                total: 0,
                nouveaux: 0,
                enApprentissage: 0,
                pointsFaibles: 0,
                maitrise: 0,
                dus: 0,
              };
              return (
                <div key={m.id} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <Link href={`/apprendre/${m.domaine}/${m.id}`} className="font-medium text-slate-900 hover:underline">
                      {m.titre}
                    </Link>
                    {p.dus > 0 && (
                      <Link
                        href={`/reviser?moduleId=${m.id}`}
                        className="text-xs font-medium text-blue-600 hover:underline"
                      >
                        {p.dus} à réviser →
                      </Link>
                    )}
                  </div>
                  <BarreRepartition p={p} />
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span>{p.total} éléments</span>
                    <span className="text-slate-400">·</span>
                    <span>{p.nouveaux} nouveaux</span>
                    <span className="text-slate-400">·</span>
                    <span>{p.enApprentissage} en apprentissage</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-amber-600">{p.pointsFaibles} points faibles</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-emerald-600">{p.maitrise} maîtrisés</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

function BarreRepartition({
  p,
}: {
  p: { total: number; nouveaux: number; enApprentissage: number; pointsFaibles: number; maitrise: number };
}) {
  const total = p.total || 1;
  const segments = [
    { valeur: p.maitrise, couleur: "bg-emerald-500" },
    { valeur: p.enApprentissage, couleur: "bg-blue-400" },
    { valeur: p.pointsFaibles, couleur: "bg-amber-500" },
    { valeur: p.nouveaux, couleur: "bg-slate-200" },
  ];
  return (
    <div className="mt-3 flex h-2 rounded-full overflow-hidden bg-slate-100">
      {segments.map((s, i) => (
        <div key={i} className={s.couleur} style={{ width: `${(s.valeur / total) * 100}%` }} />
      ))}
    </div>
  );
}
