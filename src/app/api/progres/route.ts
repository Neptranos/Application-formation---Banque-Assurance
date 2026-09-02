import { NextResponse } from "next/server";
import { calculerProgres } from "@/lib/revision";

export async function GET() {
  const progres = await calculerProgres();
  return NextResponse.json({ progres });
}
