import type { ModuleFormation } from "@/content/types";

export const a3: ModuleFormation = {
  id: "a3",
  domaine: "assurance",
  ordre: 3,
  titre: "Le contrat d'assurance",
  description:
    "Formation du contrat, déclaration du risque, gestion du sinistre et résiliation : le cycle de vie complet d'une police d'assurance.",
  cours: {
    fondamentaux: `Le contrat d'assurance est un **contrat consensuel** (formé par le seul accord des volontés) mais dont la preuve exige un écrit : la **police d'assurance**, complétée des conditions générales (règles communes à tous les assurés d'un même produit) et des conditions particulières (éléments propres à l'assuré : montants, options, personnalisation).

À la souscription, le futur assuré doit répondre **exactement** aux questions posées par l'assureur dans le **questionnaire de risque** (déclaration du risque). Cette déclaration conditionne toute la vie du contrat : une **fausse déclaration intentionnelle** entraîne la nullité du contrat, tandis qu'une **omission ou déclaration inexacte non intentionnelle**, découverte après sinistre, entraîne une réduction proportionnelle de l'indemnité (règle proportionnelle de prime).

En cours de contrat, l'assuré doit déclarer son sinistre dans un délai contractuel (généralement **5 jours ouvrés**, réduit à **2 jours ouvrés** pour le vol), sous peine de déchéance de garantie en cas de préjudice prouvé pour l'assureur. L'assureur dispose ensuite d'un délai pour indemniser, variable selon les branches et souvent précisé au contrat.

Le contrat peut prendre fin par **résiliation** à l'échéance annuelle (avec préavis, en principe deux mois), ou, depuis la **loi Hamon** (2014), à tout moment après un an de contrat pour les assurances de dommages non professionnelles (auto, habitation notamment), sans frais ni justification.`,
    definitionsCles: [
      { terme: "Police d'assurance", definition: "Document écrit matérialisant le contrat d'assurance, comprenant conditions générales et conditions particulières." },
      { terme: "Questionnaire de risque", definition: "Ensemble des questions posées par l'assureur au futur assuré avant la conclusion du contrat, dont les réponses déterminent l'acceptation du risque et le calcul de la prime." },
      { terme: "Fausse déclaration intentionnelle", definition: "Réponse sciemment inexacte au questionnaire de risque, changeant l'objet du risque ou diminuant l'opinion de l'assureur sur celui-ci ; sanctionnée par la nullité du contrat (art. L113-8 du Code des assurances)." },
      { terme: "Règle proportionnelle de prime", definition: "Réduction de l'indemnité, en proportion du rapport entre la prime payée et la prime qui aurait dû être payée, appliquée en cas de déclaration inexacte non intentionnelle découverte après sinistre (art. L113-9)." },
      { terme: "Déchéance de garantie", definition: "Perte du droit à indemnisation pour un sinistre déterminé, sanctionnant un manquement de l'assuré (ex. déclaration tardive ayant causé un préjudice à l'assureur), sans remettre en cause le contrat pour l'avenir." },
      { terme: "Délai de déclaration de sinistre", definition: "Délai contractuel (généralement 5 jours ouvrés, 2 jours pour le vol) dans lequel l'assuré doit signaler un sinistre à son assureur." },
      { terme: "Loi Hamon", definition: "Loi du 17 mars 2014 relative à la consommation, qui ouvre la faculté de résilier à tout moment, sans frais, un contrat d'assurance de dommages non professionnel après un an d'ancienneté." },
      { terme: "Prescription biennale", definition: "Délai de deux ans au-delà duquel toute action dérivant d'un contrat d'assurance est prescrite (art. L114-1 du Code des assurances), sauf exceptions légales portant ce délai à 10 ans dans certains cas (dommages corporels notamment)." },
      { terme: "Franchise", definition: "Part du sinistre qui reste à la charge de l'assuré, non prise en charge par l'assureur, exprimée en montant fixe ou en pourcentage." },
      { terme: "Expertise", definition: "Évaluation contradictoire du sinistre et de son montant, réalisée par un expert mandaté par l'assureur, éventuellement contestable par une contre-expertise à la charge de l'assuré." },
    ],
    approfondissement: `**Le formalisme informatif précontractuel.** Avant la signature, l'assureur (ou l'intermédiaire) doit remettre une **fiche d'information** sur le prix et les garanties, ainsi qu'un document d'information normalisé pour certains produits (IPID pour les produits non-vie, sous le régime DDA). Ce formalisme, renforcé depuis 2018, vise à garantir un consentement éclairé, en amont du questionnaire de risque lui-même.

**L'articulation entre les trois sanctions du questionnaire de risque** est un point souvent mal maîtrisé : (1) la fausse déclaration intentionnelle entraîne la nullité rétroactive du contrat, l'assureur conservant les primes versées à titre de dommages-intérêts ; (2) l'omission ou déclaration inexacte de bonne foi, découverte **avant** sinistre, permet à l'assureur de maintenir le contrat moyennant une surprime, ou de le résilier ; (3) la même omission découverte **après** sinistre entraîne la règle proportionnelle de prime — l'indemnité est réduite dans le rapport entre la prime payée et celle qui aurait dû l'être.

**La résiliation, un droit à plusieurs vitesses.** Outre la résiliation Hamon (après un an, sans frais), le Code des assurances prévoit des cas de résiliation spécifiques à l'initiative de l'une ou l'autre partie : non-paiement de prime, aggravation du risque, changement de situation (déménagement, cessation d'activité), ou encore après sinistre si le contrat le prévoit expressément.`,
    historique: `- **1930** : loi fondatrice, qui fixe encore aujourd'hui l'architecture générale du contrat d'assurance (formation, obligations, sinistre).
- **1989** : loi renforçant l'information de l'assuré et encadrant plus strictement la résiliation.
- **2005** : loi Chatel, qui impose à l'assureur d'informer l'assuré de la date limite de résiliation avant chaque échéance, sous peine de reconduction possible du droit à résiliation.
- **2014** : loi Hamon, qui introduit la résiliation à tout moment après un an pour les contrats de dommages non professionnels.
- **2018** : transposition de la directive sur la distribution d'assurance (DDA), qui renforce l'information précontractuelle (document IPID).`,
    evolutionsJuridiques: [
      { date: "1930", evenement: "Loi du 13 juillet 1930", texte: "Fixe le cadre général du contrat d'assurance encore en vigueur pour l'essentiel." },
      { date: "2005", evenement: "Loi Chatel", texte: "Renforce l'obligation d'information de l'assuré sur ses droits de résiliation avant chaque échéance annuelle." },
      { date: "2014", evenement: "Loi Hamon", texte: "Ouvre la résiliation à tout moment après un an de contrat pour l'assurance de dommages non professionnelle." },
      { date: "2018", evenement: "Directive sur la distribution d'assurance (DDA)", texte: "Renforce l'information précontractuelle standardisée (document IPID) et le devoir de conseil documenté." },
    ],
    citations: [
      {
        texte:
          "L'assuré est obligé de répondre exactement aux questions posées par l'assureur, notamment dans le formulaire de déclaration du risque.",
        auteur: "Code des assurances",
        contexte: "Article L113-2, fondement de l'obligation de sincérité déclarative.",
      },
    ],
    sourcesReference: [
      "Code des assurances, articles L112-1 et suivants (formation du contrat), L113-1 et suivants (obligations des parties)",
      "Loi n°2014-344 du 17 mars 2014 (loi Hamon)",
      "Directive (UE) 2016/97 (DDA)",
      "Yvonne Lambert-Faivre, Droit des assurances",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "a3-fc-01", recto: "Quelle est la sanction d'une fausse déclaration intentionnelle à la souscription ?", verso: "La nullité du contrat ; l'assureur conserve les primes versées à titre de dommages-intérêts.", difficulte: "intermediaire" },
    { id: "a3-fc-02", recto: "Quelle est la sanction d'une déclaration inexacte de bonne foi découverte après sinistre ?", verso: "La règle proportionnelle de prime : l'indemnité est réduite selon le rapport entre la prime payée et la prime due.", difficulte: "avance" },
    { id: "a3-fc-03", recto: "Quel est le délai habituel de déclaration d'un sinistre (hors vol) ?", verso: "5 jours ouvrés.", difficulte: "fondamental" },
    { id: "a3-fc-04", recto: "Quel est le délai de déclaration en cas de vol ?", verso: "2 jours ouvrés.", difficulte: "fondamental" },
    { id: "a3-fc-05", recto: "Depuis quelle loi peut-on résilier à tout moment un contrat auto/habitation après 1 an ?", verso: "La loi Hamon (2014).", difficulte: "fondamental" },
    { id: "a3-fc-06", recto: "Qu'est-ce que la prescription biennale en assurance ?", verso: "Le délai de 2 ans au-delà duquel toute action dérivant du contrat d'assurance est prescrite (art. L114-1), sauf exceptions légales.", difficulte: "avance" },
    { id: "a3-fc-07", recto: "Qu'est-ce que le document IPID ?", verso: "Le document d'information normalisé sur les produits d'assurance non-vie, imposé par la directive DDA.", difficulte: "intermediaire" },
    { id: "a3-fc-08", recto: "Que renforce la loi Chatel de 2005 ?", verso: "L'obligation pour l'assureur d'informer l'assuré de la date limite de résiliation avant chaque échéance.", difficulte: "intermediaire" },
  ],
  quiz: [
    {
      id: "a3-qz-01",
      question: "Une déclaration inexacte de bonne foi, découverte après sinistre, entraîne :",
      choix: [
        "La nullité automatique du contrat",
        "La règle proportionnelle de prime",
        "Aucune conséquence si l'assuré est de bonne foi",
        "Le doublement de l'indemnité",
      ],
      bonneReponse: 1,
      explication: "Seule la fausse déclaration intentionnelle entraîne la nullité ; la bonne foi ouvre droit à une réduction proportionnelle, pas à une absence de sanction.",
      difficulte: "avance",
    },
    {
      id: "a3-qz-02",
      question: "La résiliation « loi Hamon » s'applique :",
      choix: [
        "Dès la signature du contrat",
        "Après un an d'ancienneté du contrat, pour les assurances de dommages non professionnelles",
        "Uniquement à l'assurance-vie",
        "Uniquement aux contrats professionnels",
      ],
      bonneReponse: 1,
      explication: "La loi Hamon vise spécifiquement l'assurance de dommages non professionnelle (auto, habitation, etc.) après un an.",
      difficulte: "intermediaire",
    },
    {
      id: "a3-qz-03",
      question: "Le délai de prescription de principe pour une action dérivant du contrat d'assurance est de :",
      choix: ["1 an", "2 ans", "5 ans", "10 ans"],
      bonneReponse: 1,
      explication: "L'article L114-1 du Code des assurances fixe une prescription biennale de principe, avec des exceptions légales.",
      difficulte: "avance",
    },
  ],
  exercices: [
    {
      id: "a3-ex-01",
      titre: "Qualifier une déclaration inexacte",
      enonce:
        "Un assuré a, par erreur de bonne foi, indiqué un usage « privé » de son véhicule alors qu'il l'utilisait aussi pour des livraisons ponctuelles. Un sinistre survient. Quelle sanction s'applique, et comment est-elle calculée ?",
      corrige:
        "Il s'agit d'une déclaration inexacte non intentionnelle découverte après sinistre : la règle proportionnelle de prime s'applique (art. L113-9 du Code des assurances). L'indemnité normalement due est réduite dans la proportion du rapport entre la prime effectivement payée et la prime qui aurait dû être payée compte tenu du risque réel (usage mixte). Le contrat n'est pas annulé, contrairement au cas d'une fausse déclaration intentionnelle.",
      difficulte: "avance",
    },
  ],
};
