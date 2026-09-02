import type { ModuleFormation } from "@/content/types";

export const a5: ModuleFormation = {
  id: "a5",
  domaine: "assurance",
  ordre: 5,
  titre: "L'assurance de personnes : vie, prévoyance, santé, retraite",
  description:
    "Assurance-vie, prévoyance individuelle, complémentaire santé et épargne retraite : les produits qui protègent la personne et préparent l'avenir.",
  cours: {
    fondamentaux: `**L'assurance-vie** est le produit d'épargne préféré des Français : ce n'est pas seulement une assurance de personnes classique, c'est avant tout un **contrat d'épargne** permettant de constituer un capital, disponible à tout moment (rachat), avec une fiscalité avantageuse après 8 ans de détention et un régime successoral dérogatoire au droit commun (hors succession dans certaines limites, grâce à la **clause bénéficiaire**). Techniquement, on distingue les contrats en **euros** (capital garanti, rendement annuel net des frais, effet cliquet qui rend les intérêts acquis définitivement) et les contrats en **unités de compte (UC)** (investis sur des supports financiers, sans garantie de capital, potentiel de performance supérieur).

**La prévoyance individuelle** couvre les risques qui ne sont pas ou insuffisamment pris en charge par la Sécurité sociale : décès, incapacité temporaire de travail, invalidité, dépendance. Elle est particulièrement importante pour les travailleurs non salariés, moins bien couverts par le régime obligatoire que les salariés.

**La complémentaire santé** (mutuelle santé) intervient en complément des remboursements de l'Assurance maladie obligatoire, pour couvrir tout ou partie du **ticket modérateur**, des dépassements d'honoraires et des postes peu remboursés (optique, dentaire, audioprothèses), notamment via le dispositif **100 % Santé** qui garantit un reste à charge nul sur un panier de soins défini.

**L'épargne retraite** vise à compléter les pensions du régime obligatoire par répartition. Le **Plan d'épargne retraite (PER)**, créé par la loi PACTE (2019), a unifié et simplifié les anciens dispositifs (PERP, Madelin, article 83), avec une sortie possible en capital ou en rente, et une fiscalité incitative à l'entrée.`,
    definitionsCles: [
      { terme: "Assurance-vie", definition: "Contrat d'épargne à moyen-long terme, adossé à un ou plusieurs supports (fonds en euros, unités de compte), permettant de constituer un capital transmissible selon des règles fiscales et successorales dérogatoires." },
      { terme: "Fonds en euros", definition: "Support d'assurance-vie au capital garanti par l'assureur, dont les intérêts annuels sont définitivement acquis (effet cliquet) et ne peuvent être repris." },
      { terme: "Unité de compte (UC)", definition: "Support d'assurance-vie investi sur des actifs financiers (actions, obligations, immobilier), dont la valeur varie et qui ne bénéficie d'aucune garantie de capital." },
      { terme: "Clause bénéficiaire", definition: "Clause du contrat d'assurance-vie désignant la ou les personnes qui recevront le capital au décès de l'assuré, en dehors du cadre successoral classique dans certaines limites fiscales." },
      { terme: "Rachat (assurance-vie)", definition: "Retrait, total ou partiel, effectué par le souscripteur sur son contrat d'assurance-vie avant son terme ou son dénouement par décès." },
      { terme: "Ticket modérateur", definition: "Part des dépenses de santé restant à la charge de l'assuré social après remboursement de l'Assurance maladie obligatoire, généralement prise en charge par la complémentaire santé." },
      { terme: "100 % Santé", definition: "Dispositif garantissant un reste à charge nul pour un panier de soins défini en optique, dentaire et audiologie, sous réserve de contrats complémentaires responsables." },
      { terme: "Contrat responsable", definition: "Contrat de complémentaire santé respectant un cahier des charges réglementaire (planchers et plafonds de remboursement), condition d'un régime fiscal et social avantageux pour l'employeur et l'assuré." },
      { terme: "PER (Plan d'épargne retraite)", definition: "Dispositif d'épargne retraite créé par la loi PACTE (2019), regroupant un compartiment individuel, un compartiment collectif et un compartiment obligatoire, avec sortie possible en capital ou en rente." },
      { terme: "Rente viagère", definition: "Versement périodique garanti jusqu'au décès du bénéficiaire, en contrepartie de l'aliénation d'un capital, mode de sortie classique de l'épargne retraite ou de certains contrats de prévoyance." },
    ],
    approfondissement: `**La fiscalité de l'assurance-vie**, pilier de son attractivité, distingue le régime des rachats (impôt sur les seuls intérêts compris dans le retrait, avec un abattement annuel après 8 ans et un taux réduit au-delà de cette durée) du régime successoral (article 990 I du Code général des impôts pour les sommes versées avant 70 ans, avec un abattement par bénéficiaire, et article 757 B pour les versements après 70 ans, régime moins favorable). Cette dualité de régime justifie la recommandation classique d'ouvrir un contrat le plus tôt possible et de privilégier les versements avant 70 ans.

**Le devoir de conseil renforcé en assurance-vie**, sous le régime DDA, impose une analyse du profil investisseur (horizon de placement, tolérance au risque, connaissance des marchés financiers) avant toute recommandation d'allocation entre fonds en euros et unités de compte, avec traçabilité écrite de cette analyse.

**Les 4 compartiments de la retraite française** (repères utiles pour situer le PER) : le régime de base obligatoire par répartition, les régimes complémentaires obligatoires (également par répartition), l'épargne retraite collective d'entreprise (ex-PERCO, devenu PER collectif), et l'épargne retraite individuelle (PER individuel, ex-PERP/Madelin). Le PER a simplifié la portabilité entre ces compartiments individuel et collectif, un des objectifs premiers de la réforme PACTE.`,
    historique: `- **1787** : première compagnie française d'assurance sur la vie.
- **1945** : création de la Sécurité sociale, redéfinissant le socle de la protection santé obligatoire.
- **1980-1990s** : essor massif de l'assurance-vie comme produit d'épargne de masse en France, porté par sa fiscalité avantageuse.
- **1999** : création de la couverture maladie universelle (CMU), ancêtre de l'actuelle protection universelle maladie (PUMA, 2016).
- **2003** : loi Fillon, création du PERP et du contrat Madelin modernisé pour l'épargne retraite individuelle.
- **2019** : loi PACTE, création du PER unifié, simplification du paysage de l'épargne retraite.
- **2019-2021** : déploiement progressif du dispositif 100 % Santé.`,
    evolutionsJuridiques: [
      { date: "1999", evenement: "Création de la CMU", texte: "Généralise l'accès à une couverture maladie de base, remplacée en 2016 par la protection universelle maladie (PUMA)." },
      { date: "2003", evenement: "Loi Fillon sur les retraites", texte: "Crée le PERP et modernise le cadre du contrat Madelin pour l'épargne retraite individuelle." },
      { date: "2019", evenement: "Loi PACTE", texte: "Crée le Plan d'épargne retraite (PER), unifiant les anciens dispositifs et facilitant la portabilité entre compartiments." },
      { date: "2019-2021", evenement: "Déploiement du 100 % Santé", texte: "Garantit un reste à charge nul sur un panier de soins défini en optique, dentaire et audiologie." },
    ],
    citations: [],
    sourcesReference: [
      "Code des assurances (assurance-vie), Code de la sécurité sociale (santé, retraite)",
      "Code général des impôts, articles 990 I et 757 B (fiscalité successorale de l'assurance-vie)",
      "Loi n°2019-486 du 22 mai 2019 (loi PACTE)",
      "France Assureurs — chiffres clés de l'assurance-vie",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "a5-fc-01", recto: "Quelle est la différence entre un fonds en euros et une unité de compte ?", verso: "Le fonds en euros garantit le capital avec effet cliquet ; l'unité de compte n'offre aucune garantie de capital mais un potentiel de performance supérieur.", difficulte: "fondamental" },
    { id: "a5-fc-02", recto: "Qu'est-ce que la clause bénéficiaire ?", verso: "La clause du contrat d'assurance-vie qui désigne qui recevra le capital au décès de l'assuré, hors cadre successoral classique dans certaines limites.", difficulte: "fondamental" },
    { id: "a5-fc-03", recto: "À partir de combien d'années de détention la fiscalité des rachats en assurance-vie devient-elle plus favorable ?", verso: "8 ans.", difficulte: "intermediaire" },
    { id: "a5-fc-04", recto: "Quel article du CGI régit la fiscalité successorale des versements avant 70 ans en assurance-vie ?", verso: "L'article 990 I du Code général des impôts.", difficulte: "avance" },
    { id: "a5-fc-05", recto: "Que garantit le dispositif 100 % Santé ?", verso: "Un reste à charge nul sur un panier de soins défini en optique, dentaire et audiologie, sous contrat responsable.", difficulte: "intermediaire" },
    { id: "a5-fc-06", recto: "Qu'est-ce que le PER, créé en 2019 ?", verso: "Le Plan d'épargne retraite, qui unifie les anciens dispositifs (PERP, Madelin, article 83) avec sortie possible en capital ou en rente.", difficulte: "fondamental" },
    { id: "a5-fc-07", recto: "Qu'est-ce que le ticket modérateur ?", verso: "La part des dépenses de santé restant à charge après remboursement de l'Assurance maladie obligatoire.", difficulte: "fondamental" },
    { id: "a5-fc-08", recto: "Qu'est-ce qu'une rente viagère ?", verso: "Un versement périodique garanti jusqu'au décès du bénéficiaire, en contrepartie de l'aliénation d'un capital.", difficulte: "intermediaire" },
  ],
  quiz: [
    {
      id: "a5-qz-01",
      question: "Un contrat en unités de compte garantit-il le capital investi ?",
      choix: ["Oui, toujours", "Non, jamais", "Oui, mais seulement après 8 ans", "Oui, uniquement pour les personnes de plus de 70 ans"],
      bonneReponse: 1,
      explication: "Les UC sont soumises aux fluctuations des marchés financiers, sans garantie de capital, contrairement au fonds en euros.",
      difficulte: "fondamental",
    },
    {
      id: "a5-qz-02",
      question: "Le PER, créé par la loi PACTE, a notamment pour objectif de :",
      choix: [
        "Supprimer l'assurance-vie",
        "Unifier et rendre portables les anciens produits d'épargne retraite",
        "Remplacer la Sécurité sociale",
        "Rendre l'épargne retraite obligatoire pour tous",
      ],
      bonneReponse: 1,
      explication: "Le PER simplifie le paysage de l'épargne retraite en regroupant PERP, Madelin, PERCO et article 83 sous un cadre commun et portable.",
      difficulte: "intermediaire",
    },
    {
      id: "a5-qz-03",
      question: "Le régime fiscal successoral de l'assurance-vie est en principe plus favorable pour les sommes versées :",
      choix: ["Après 70 ans", "Avant 70 ans", "Peu importe l'âge du versement", "Uniquement pour les fonds en euros"],
      bonneReponse: 1,
      explication: "L'article 990 I (versements avant 70 ans) offre un abattement par bénéficiaire plus favorable que l'article 757 B (versements après 70 ans).",
      difficulte: "avance",
    },
  ],
  exercices: [
    {
      id: "a5-ex-01",
      titre: "Conseiller une allocation assurance-vie",
      enonce:
        "Un client de 35 ans souhaite épargner pour un projet à horizon 15-20 ans, avec une tolérance au risque modérée mais réelle. Quelle répartition de principe entre fonds en euros et unités de compte lui recommanderiez-vous, et pourquoi, en vous appuyant sur le devoir de conseil DDA ?",
      corrige:
        "Compte tenu de l'horizon long (15-20 ans) et d'une tolérance au risque modérée mais réelle, une allocation diversifiée intégrant une part significative d'unités de compte est cohérente : le temps long permet théoriquement de lisser la volatilité des marchés financiers, tandis qu'une poche de fonds en euros peut sécuriser une partie du capital selon le profil exact du client. Le conseiller doit formaliser cette analyse (horizon, objectifs, connaissance des marchés, tolérance au risque) dans le cadre du devoir de conseil DDA, et documenter par écrit la recommandation d'allocation avant la souscription.",
      difficulte: "avance",
    },
  ],
};
