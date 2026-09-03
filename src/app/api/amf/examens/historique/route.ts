import { NextResponse } from "next/server";
import { listerHistoriqueExamens } from "@/lib/examenBlanc";

export async function GET() {
  const historique = await listerHistoriqueExamens();
  return NextResponse.json({ historique });
}
