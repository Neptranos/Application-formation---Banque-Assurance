import { NextRequest, NextResponse } from "next/server";
import { enregistrerReponse } from "@/lib/revision";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.itemId !== "string" ||
    (body.itemType !== "flashcard" && body.itemType !== "quiz") ||
    typeof body.moduleId !== "string" ||
    typeof body.qualite !== "number" ||
    !Number.isInteger(body.qualite) ||
    body.qualite < 0 ||
    body.qualite > 5
  ) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const resultat = await enregistrerReponse({
    itemId: body.itemId,
    itemType: body.itemType,
    moduleId: body.moduleId,
    qualite: body.qualite,
  });

  return NextResponse.json({ resultat });
}
