import type { ExamenBlanc } from "@/content/types";
import { examenV1 } from "@/content/amf/examen-blanc-v1";
import { examenV2 } from "@/content/amf/examen-blanc-v2";
import { examenV3 } from "@/content/amf/examen-blanc-v3";

export const EXAMENS_BLANCS: ExamenBlanc[] = [examenV1, examenV2, examenV3];

export function getExamenBlanc(id: string): ExamenBlanc | undefined {
  return EXAMENS_BLANCS.find((e) => e.id === id);
}
