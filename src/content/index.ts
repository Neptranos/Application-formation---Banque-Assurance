import type { Domaine, ItemRevisable, ModuleFormation } from "@/content/types";

import { b1 } from "@/content/banque/b1-systeme-bancaire";
import { b2 } from "@/content/banque/b2-moyens-paiement-comptes";
import { b3 } from "@/content/banque/b3-epargne-bancaire";
import { b4 } from "@/content/banque/b4-credit-particuliers";
import { b5 } from "@/content/banque/b5-conformite-lcbft";
import { b6 } from "@/content/banque/b6-relation-client";
import { a1 } from "@/content/assurance/a1-fondamentaux-assurance";
import { a2 } from "@/content/assurance/a2-cadre-juridique-acteurs";
import { a3 } from "@/content/assurance/a3-contrat-assurance";
import { a4 } from "@/content/assurance/a4-assurance-iard";
import { a5 } from "@/content/assurance/a5-assurance-personnes";
import { a6 } from "@/content/assurance/a6-distribution-protection-client";

export const MODULES: ModuleFormation[] = [b1, b2, b3, b4, b5, b6, a1, a2, a3, a4, a5, a6];

export const DOMAINES: { id: Domaine; titre: string; description: string }[] = [
  {
    id: "banque",
    titre: "Banque",
    description:
      "Le système bancaire, les comptes et moyens de paiement, l'épargne, le crédit, la conformité et la relation client.",
  },
  {
    id: "assurance",
    titre: "Assurance",
    description:
      "Les fondamentaux techniques, le cadre juridique, le contrat, l'IARD, l'assurance de personnes et la distribution.",
  },
];

export function getModule(id: string): ModuleFormation | undefined {
  return MODULES.find((m) => m.id === id);
}

export function getModulesByDomaine(domaine: Domaine): ModuleFormation[] {
  return MODULES.filter((m) => m.domaine === domaine).sort((a, b) => a.ordre - b.ordre);
}

/** Construit la liste plate de tous les éléments révisables (flashcards + quiz) de tout le contenu. */
export function getTousLesItemsRevisables(): ItemRevisable[] {
  const items: ItemRevisable[] = [];
  for (const m of MODULES) {
    for (const fc of m.flashcards) {
      items.push({ id: fc.id, type: "flashcard", moduleId: m.id, domaine: m.domaine, difficulte: fc.difficulte });
    }
    for (const q of m.quiz) {
      items.push({ id: q.id, type: "quiz", moduleId: m.id, domaine: m.domaine, difficulte: q.difficulte });
    }
  }
  return items;
}

type ItemResolu =
  | { module: ModuleFormation; flashcard: ModuleFormation["flashcards"][number]; question?: undefined }
  | { module: ModuleFormation; question: ModuleFormation["quiz"][number]; flashcard?: undefined };

export function resoudreItem(itemId: string, itemType: "flashcard" | "quiz"): ItemResolu | undefined {
  for (const m of MODULES) {
    if (itemType === "flashcard") {
      const fc = m.flashcards.find((f) => f.id === itemId);
      if (fc) return { module: m, flashcard: fc };
    } else {
      const q = m.quiz.find((q) => q.id === itemId);
      if (q) return { module: m, question: q };
    }
  }
  return undefined;
}
