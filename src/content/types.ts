export type Domaine = "banque" | "assurance";

export type Difficulte = "fondamental" | "intermediaire" | "avance";

export interface DefinitionCle {
  terme: string;
  definition: string;
}

export interface EvolutionJuridique {
  date: string;
  evenement: string;
  texte?: string;
}

export interface Citation {
  texte: string;
  auteur: string;
  contexte?: string;
}

export interface Flashcard {
  id: string;
  recto: string;
  verso: string;
  difficulte: Difficulte;
}

export interface QuestionQuiz {
  id: string;
  question: string;
  choix: string[];
  bonneReponse: number;
  explication: string;
  difficulte: Difficulte;
}

export interface Exercice {
  id: string;
  titre: string;
  enonce: string;
  corrige: string;
  difficulte: Difficulte;
}

export interface Cours {
  fondamentaux: string;
  definitionsCles: DefinitionCle[];
  approfondissement: string;
  historique?: string;
  evolutionsJuridiques?: EvolutionJuridique[];
  citations?: Citation[];
  sourcesReference: string[];
  derniereMaj: string;
}

export interface ModuleFormation {
  id: string;
  domaine: Domaine;
  ordre: number;
  titre: string;
  description: string;
  cours: Cours;
  flashcards: Flashcard[];
  quiz: QuestionQuiz[];
  exercices: Exercice[];
}

export type ItemType = "flashcard" | "quiz";

export interface ItemRevisable {
  id: string;
  type: ItemType;
  moduleId: string;
  domaine: Domaine;
  difficulte: Difficulte;
}
