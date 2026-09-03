import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DOMAINES, getModule, getModulesByDomaine } from "@/content";

export function generateStaticParams() {
  return DOMAINES.flatMap((domaine) =>
    getModulesByDomaine(domaine.id).map((m) => ({ domaine: domaine.id, moduleId: m.id })),
  );
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ domaine: string; moduleId: string }>;
}) {
  const { domaine, moduleId } = await params;
  const module_ = getModule(moduleId);
  if (!module_ || module_.domaine !== domaine) notFound();

  const { cours } = module_;

  return (
    <div className="space-y-8">
      <div>
        <Link href="/apprendre" className="text-sm text-blue-600 hover:underline">
          ← Tous les modules
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{module_.titre}</h1>
        <p className="mt-1 text-slate-600">{module_.description}</p>
        <p className="mt-1 text-xs text-slate-400">Dernière mise à jour du contenu : {cours.derniereMaj}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href={`/reviser?moduleId=${module_.id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          S&apos;entraîner sur ce module
        </Link>
      </div>

      <Section titre="Fondamentaux">
        <div className="prose-cours">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{cours.fondamentaux}</ReactMarkdown>
        </div>
      </Section>

      <Section titre="Définitions clés">
        <dl className="grid sm:grid-cols-2 gap-3">
          {cours.definitionsCles.map((d) => (
            <div key={d.terme} className="rounded-lg border border-slate-200 bg-white p-3">
              <dt className="font-medium text-slate-900 text-sm">{d.terme}</dt>
              <dd className="mt-1 text-sm text-slate-600">{d.definition}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section titre="Pour aller plus loin">
        <div className="prose-cours">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{cours.approfondissement}</ReactMarkdown>
        </div>
      </Section>

      {cours.historique && (
        <Section titre="Repères historiques">
          <div className="prose-cours">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{cours.historique}</ReactMarkdown>
          </div>
        </Section>
      )}

      {cours.evolutionsJuridiques && cours.evolutionsJuridiques.length > 0 && (
        <Section titre="Évolutions juridiques">
          <ol className="relative border-l border-slate-200 pl-4 space-y-4">
            {cours.evolutionsJuridiques.map((e, i) => (
              <li key={i}>
                <div className="text-xs font-semibold text-blue-600">{e.date}</div>
                <div className="text-sm font-medium text-slate-900">{e.evenement}</div>
                {e.texte && <div className="text-sm text-slate-600">{e.texte}</div>}
              </li>
            ))}
          </ol>
        </Section>
      )}

      {cours.citations && cours.citations.length > 0 && (
        <Section titre="Citations">
          <div className="space-y-3">
            {cours.citations.map((c, i) => (
              <blockquote key={i} className="border-l-4 border-blue-200 pl-4 italic text-slate-700">
                « {c.texte} »
                <footer className="mt-1 text-sm not-italic text-slate-500">
                  — {c.auteur}
                  {c.contexte ? `, ${c.contexte}` : ""}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>
      )}

      <Section titre="Exercices">
        <div className="space-y-4">
          {module_.exercices.map((ex) => (
            <details key={ex.id} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-medium text-slate-900">
                {ex.titre}{" "}
                <span className="ml-2 text-xs font-normal text-slate-400 uppercase">{ex.difficulte}</span>
              </summary>
              <p className="mt-2 text-sm text-slate-700">{ex.enonce}</p>
              <div className="mt-3 rounded-md bg-slate-50 p-3 text-sm text-slate-700">
                <span className="font-medium">Corrigé : </span>
                {ex.corrige}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section titre="Sources de référence">
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
          {cours.sourcesReference.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 mb-3">{titre}</h2>
      {children}
    </section>
  );
}
