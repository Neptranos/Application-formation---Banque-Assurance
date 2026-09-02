import Link from "next/link";
import { DOMAINES, getModulesByDomaine } from "@/content";

export default function ApprendrePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Apprendre</h1>
        <p className="mt-1 text-slate-600">
          Le cours de chaque module suit toujours le même parcours : fondamentaux, définitions clés,
          approfondissement, historique, évolutions juridiques, puis exercices et flashcards.
        </p>
      </div>

      {DOMAINES.map((domaine) => (
        <section key={domaine.id}>
          <h2 className="text-lg font-semibold text-slate-900">{domaine.titre}</h2>
          <p className="text-sm text-slate-500 mb-3">{domaine.description}</p>
          <ol className="space-y-2">
            {getModulesByDomaine(domaine.id).map((m, i) => (
              <li key={m.id}>
                <Link
                  href={`/apprendre/${m.domaine}/${m.id}`}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <span className="flex-none w-7 h-7 rounded-full bg-slate-100 text-slate-600 text-sm font-medium flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-medium text-slate-900">{m.titre}</span>
                    <span className="block text-sm text-slate-500">{m.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
