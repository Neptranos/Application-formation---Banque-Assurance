import type { ModuleFormation } from "@/content/types";

export const b6: ModuleFormation = {
  id: "b6",
  domaine: "banque",
  ordre: 6,
  titre: "La relation client et la commercialisation bancaire",
  description:
    "Devoir de conseil, gouvernance des produits, réclamations et médiation : le cadre qui protège le client dans la vente de produits bancaires et financiers.",
  cours: {
    fondamentaux: `Vendre un produit bancaire n'est pas un acte neutre : le conseiller est tenu à un **devoir de conseil**, qui l'oblige à s'informer sur la situation, les besoins et les objectifs du client avant de proposer un produit adapté, et à l'informer clairement des caractéristiques, risques et coûts de ce produit.

Pour les produits financiers (parts d'OPCVM, comptes-titres, PEA, produits structurés), la directive européenne **MIF2** (Marchés d'instruments financiers 2, 2018) impose en amont un **test d'adéquation ou de caractère approprié** : le conseiller évalue la connaissance, l'expérience, la situation financière et les objectifs du client avant toute recommandation.

En cas de désaccord, le client dispose d'un droit de **réclamation** auprès de sa banque (traitement encadré par un délai réglementaire, généralement deux mois maximum), puis, en cas d'échec, du recours gratuit à un **médiateur bancaire**, tiers indépendant dont l'avis, bien que non contraignant, est suivi dans l'immense majorité des cas.`,
    definitionsCles: [
      { terme: "Devoir de conseil", definition: "Obligation pour le professionnel de s'informer sur la situation du client et de lui proposer un produit adapté à ses besoins, en l'éclairant sur ses caractéristiques, risques et coûts." },
      { terme: "MIF2", definition: "Directive « Marchés d'instruments financiers 2 » (2014/65/UE), applicable depuis 2018, qui renforce la protection des investisseurs (test d'adéquation, transparence des frais, enregistrement des conversations commerciales)." },
      { terme: "Test d'adéquation", definition: "Questionnaire structuré évaluant la connaissance, l'expérience, la situation financière et les objectifs d'investissement d'un client avant toute recommandation personnalisée d'un produit financier." },
      { terme: "Gouvernance des produits", definition: "Exigence MIF2 imposant au concepteur d'un produit financier de définir un marché cible et de vérifier que la distribution reste cohérente avec ce marché cible." },
      { terme: "Médiateur bancaire", definition: "Tiers indépendant, saisi gratuitement par le client après épuisement des recours internes, chargé de proposer une solution amiable à un litige avec sa banque." },
      { terme: "Réclamation", definition: "Expression d'un mécontentement du client à l'égard de sa banque, à traiter selon une procédure encadrée avec accusé de réception et délai de réponse réglementaire." },
      { terme: "Convention AERAS", definition: "Convention « s'Assurer et Emprunter avec un Risque Aggravé de Santé », qui facilite l'accès à l'assurance emprunteur et au crédit pour les personnes présentant un risque de santé aggravé." },
      { terme: "Clause bénéficiaire", definition: "Bien que davantage rattachée à l'assurance-vie, elle intervient aussi en relation bancaire lors du conseil patrimonial global du client." },
    ],
    approfondissement: `**MIF2 en pratique** distingue plusieurs niveaux de service : la simple exécution d'ordre (sans conseil), le conseil non indépendant (rémunéré notamment par rétrocessions, sous conditions de transparence), et le conseil indépendant (rémunéré exclusivement par honoraires, sans rétrocessions). Le conseiller doit préciser explicitely au client sous quel régime il intervient, condition de la transparence exigée par le texte.

**La gouvernance des produits** oblige le concepteur d'un produit financier à définir un « marché cible » (profil de client auquel le produit est destiné) et impose au distributeur de vérifier la cohérence entre ce marché cible et le client réel avant toute vente — un garde-fou structurel contre la vente de produits inadaptés (mis-selling), qui a suivi les scandales de commercialisation abusive révélés après la crise de 2008.

**Le traitement des réclamations** suit un parcours en trois temps : réclamation auprès de l'agence ou du service dédié (accusé de réception sous 10 jours ouvrables, réponse sous deux mois maximum en règle générale), puis, en cas d'insatisfaction ou d'absence de réponse, saisine du médiateur bancaire compétent (gratuite pour le client), dont l'avis est rendu en principe sous 90 jours. Le client conserve toujours la possibilité, à tout moment, de saisir le juge.`,
    historique: `- **1984** : première mention légale de la médiation bancaire en germe dans la loi bancaire.
- **2001** : loi sur les nouvelles régulations économiques (NRE), qui généralise l'obligation pour les banques de désigner un médiateur.
- **2007-2014** : premières directives MIF (MIF1 en 2007), posant les bases de la protection de l'investisseur en Europe.
- **2018** : entrée en application de MIF2, renforçant fortement les exigences de transparence, de gouvernance des produits et de traçabilité des conseils.`,
    evolutionsJuridiques: [
      { date: "2001", evenement: "Loi NRE", texte: "Généralise l'obligation pour chaque établissement bancaire de désigner un médiateur accessible gratuitement aux clients." },
      { date: "2007", evenement: "Directive MIF1", texte: "Premier cadre européen harmonisé de protection de l'investisseur sur les marchés financiers." },
      { date: "2018", evenement: "Directive MIF2", texte: "Renforce le test d'adéquation, la gouvernance des produits et la transparence des frais et rémunérations." },
    ],
    citations: [],
    sourcesReference: [
      "Directive 2014/65/UE (MIF2) et son règlement délégué",
      "Code monétaire et financier, dispositions relatives à la médiation bancaire",
      "Comité consultatif du secteur financier (CCSF) — chartes et recommandations",
      "Rapports annuels des médiateurs bancaires",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "b6-fc-01", recto: "Qu'impose le devoir de conseil au conseiller bancaire ?", verso: "S'informer sur la situation et les besoins du client, puis proposer un produit adapté en l'éclairant sur ses risques et coûts.", difficulte: "fondamental" },
    { id: "b6-fc-02", recto: "Que signifie MIF2 ?", verso: "Directive « Marchés d'instruments financiers 2 », en application depuis 2018, renforçant la protection de l'investisseur.", difficulte: "fondamental" },
    { id: "b6-fc-03", recto: "Qu'est-ce que le test d'adéquation ?", verso: "Un questionnaire évaluant connaissance, expérience, situation financière et objectifs du client avant une recommandation personnalisée.", difficulte: "intermediaire" },
    { id: "b6-fc-04", recto: "Le recours au médiateur bancaire est-il payant ?", verso: "Non, il est gratuit pour le client.", difficulte: "fondamental" },
    { id: "b6-fc-05", recto: "Qu'est-ce que la gouvernance des produits en MIF2 ?", verso: "L'obligation de définir un marché cible pour chaque produit et de vérifier la cohérence entre ce marché cible et le client avant la vente.", difficulte: "avance" },
    { id: "b6-fc-06", recto: "Quel est le délai maximal habituel de réponse à une réclamation bancaire ?", verso: "Deux mois en règle générale, avec un accusé de réception sous 10 jours ouvrables.", difficulte: "intermediaire" },
  ],
  quiz: [
    {
      id: "b6-qz-01",
      question: "Le test d'adéquation MIF2 doit être réalisé :",
      choix: [
        "Une seule fois à la première ouverture de compte",
        "Avant toute recommandation personnalisée d'un produit financier",
        "Uniquement pour les produits d'épargne réglementée",
        "Uniquement si le client le demande",
      ],
      bonneReponse: 1,
      explication: "Le test d'adéquation est un préalable systématique à toute recommandation personnalisée d'instrument financier sous MIF2.",
      difficulte: "intermediaire",
    },
    {
      id: "b6-qz-02",
      question: "En cas d'échec du traitement d'une réclamation par la banque, le client peut :",
      choix: [
        "Uniquement saisir directement le juge",
        "Saisir gratuitement le médiateur bancaire",
        "Payer des frais d'expertise pour poursuivre le dossier",
        "Aucune de ces réponses",
      ],
      bonneReponse: 1,
      explication: "La médiation bancaire est un recours amiable, gratuit et indépendant, avant ou en parallèle d'une éventuelle action en justice.",
      difficulte: "fondamental",
    },
    {
      id: "b6-qz-03",
      question: "La gouvernance des produits sous MIF2 vise principalement à :",
      choix: [
        "Réduire les coûts de production des produits financiers",
        "Éviter la vente de produits inadaptés au profil du client (mis-selling)",
        "Augmenter les commissions des distributeurs",
        "Standardiser tous les produits financiers européens",
      ],
      bonneReponse: 1,
      explication: "En imposant un marché cible et sa vérification par le distributeur, la gouvernance des produits cherche à prévenir la commercialisation inadaptée.",
      difficulte: "avance",
    },
  ],
  exercices: [
    {
      id: "b6-ex-01",
      titre: "Réagir à une réclamation client",
      enonce:
        "Un client s'estime mal conseillé après avoir souscrit un produit structuré complexe qu'il ne comprend pas. Décrivez le parcours de traitement de sa réclamation, étape par étape, jusqu'à l'issue possible.",
      corrige:
        "1) Le client adresse sa réclamation à l'agence ou au service réclamations, qui doit accuser réception sous 10 jours ouvrables et répondre sur le fond sous deux mois maximum. 2) Si la réponse ne le satisfait pas, ou en l'absence de réponse dans les délais, le client peut saisir gratuitement le médiateur bancaire de l'établissement. 3) Le médiateur instruit le dossier de façon indépendante et rend un avis, en principe sous 90 jours, non contraignant mais généralement suivi. 4) Le client conserve à tout moment la faculté de saisir le juge civil, notamment pour contester un éventuel manquement au devoir de conseil ou au test d'adéquation lors de la commercialisation du produit.",
      difficulte: "intermediaire",
    },
  ],
};
