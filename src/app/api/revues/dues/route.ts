import { NextRequest, NextResponse } from "next/server";
import { construireSession } from "@/lib/revision";
import type { Domaine } from "@/content/types";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const domaine = searchParams.get("domaine") as Domaine | null;
  const moduleId = searchParams.get("moduleId") ?? undefined;
  const tailleParam = searchParams.get("taille");

  const session = await construireSession({
    domaine: domaine ?? undefined,
    moduleId,
    taille: tailleParam ? Number(tailleParam) : undefined,
  });

  return NextResponse.json({ session });
}
