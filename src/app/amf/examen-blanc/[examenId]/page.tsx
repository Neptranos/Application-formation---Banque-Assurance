import { notFound } from "next/navigation";
import { getExamenAvecChoixMelanges } from "@/lib/examenBlanc";
import ExamenRunner from "./ExamenRunner";

export function generateStaticParams() {
  return [{ examenId: "v1" }, { examenId: "v2" }, { examenId: "v3" }];
}

export default async function ExamenBlancPage({
  params,
}: {
  params: Promise<{ examenId: string }>;
}) {
  const { examenId } = await params;
  const examen = getExamenAvecChoixMelanges(examenId);
  if (!examen) notFound();

  return (
    <div className="space-y-6">
      <ExamenRunner examen={examen} />
    </div>
  );
}
