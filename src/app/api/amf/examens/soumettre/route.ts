import { NextRequest, NextResponse } from "next/server";
import { corrigerEtEnregistrerExamen } from "@/lib/examenBlanc";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.examenId !== "string" ||
    !Array.isArray(body.reponses) ||
    !body.reponses.every(
      (r: unknown) =>
        typeof r === "object" &&
        r !== null &&
        typeof (r as { questionId?: unknown }).questionId === "string" &&
        (typeof (r as { choixIndex?: unknown }).choixIndex === "number" ||
          (r as { choixIndex?: unknown }).choixIndex === null),
    )
  ) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const dureeSecondes =
    typeof body.dureeSecondes === "number" && Number.isFinite(body.dureeSecondes)
      ? Math.max(0, Math.round(body.dureeSecondes))
      : undefined;

  const resultat = await corrigerEtEnregistrerExamen(body.examenId, body.reponses, dureeSecondes);
  if (!resultat) {
    return NextResponse.json({ error: "Examen introuvable." }, { status: 404 });
  }

  return NextResponse.json({ resultat });
}
