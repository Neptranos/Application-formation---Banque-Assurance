import SessionRevision from "./SessionRevision";
import { DOMAINES, getModule } from "@/content";

export default async function ReviserPage({
  searchParams,
}: {
  searchParams: Promise<{ domaine?: string; moduleId?: string }>;
}) {
  const { domaine, moduleId } = await searchParams;
  const module_ = moduleId ? getModule(moduleId) : undefined;
  const domaineTrouve = DOMAINES.find((d) => d.id === domaine);
  const domaineValide = domaineTrouve?.id;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Réviser</h1>
        <p className="mt-1 text-slate-600">
          {module_
            ? `Session ciblée sur : ${module_.titre}.`
            : domaineTrouve
              ? `Session sur le domaine : ${domaineTrouve.titre}.`
              : "Session mêlant tout le programme, priorisée sur ce qui est dû aujourd'hui."}
        </p>
      </div>
      <SessionRevision domaine={domaineValide} moduleId={module_?.id} />
    </div>
  );
}
