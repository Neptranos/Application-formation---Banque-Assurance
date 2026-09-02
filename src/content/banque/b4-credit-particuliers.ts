import type { ModuleFormation } from "@/content/types";

export const b4: ModuleFormation = {
  id: "b4",
  domaine: "banque",
  ordre: 4,
  titre: "Le crédit aux particuliers",
  description:
    "Crédit à la consommation, crédit immobilier, assurance emprunteur, taux d'usure et traitement du surendettement.",
  cours: {
    fondamentaux: `Le crédit consiste, pour une banque, à mettre des fonds à disposition d'un emprunteur contre l'engagement de rembourser le capital et des intérêts. On distingue principalement :

- le **crédit à la consommation** (crédit affecté à un bien précis, prêt personnel, crédit renouvelable / revolving), encadré par le **Code de la consommation** ;
- le **crédit immobilier**, destiné à l'acquisition, la construction ou les travaux d'un bien immobilier, avec un formalisme protecteur renforcé (offre de prêt, délai de réflexion) ;
- le **crédit professionnel**, hors du champ de ce module centré sur les particuliers.

Chaque type de crédit est assorti d'un **taux annuel effectif global (TAEG)**, qui intègre non seulement le taux d'intérêt nominal mais aussi l'ensemble des frais obligatoires (dossier, garanties, assurance emprunteur exigée) pour permettre une comparaison homogène entre offres. Le TAEG ne peut jamais dépasser le **taux d'usure**, plafond légal actualisé trimestriellement par la Banque de France selon la catégorie de prêt.

Avant tout octroi, la banque doit vérifier la **solvabilité** de l'emprunteur (revenus, charges, taux d'endettement, "reste à vivre") et respecter un devoir de mise en garde, en particulier si le crédit paraît inadapté à sa situation financière.`,
    definitionsCles: [
      { terme: "TAEG", definition: "Taux annuel effectif global : coût total du crédit exprimé en pourcentage annuel, intégrant intérêts et frais obligatoires, permettant de comparer les offres entre elles." },
      { terme: "Taux d'usure", definition: "Taux maximal légal au-delà duquel un crédit ne peut être consenti, fixé et publié trimestriellement par la Banque de France selon la catégorie et le montant du prêt." },
      { terme: "Crédit affecté", definition: "Crédit à la consommation lié à l'achat d'un bien ou service déterminé ; son annulation entraîne celle de la vente, et inversement." },
      { terme: "Crédit renouvelable (revolving)", definition: "Réserve d'argent reconstituable au fur et à mesure des remboursements, souvent assortie d'un taux plus élevé ; strictement encadré depuis la loi Lagarde (2010)." },
      { terme: "Offre de prêt immobilier", definition: "Document écrit obligatoire précisant toutes les conditions du crédit immobilier, que l'emprunteur doit conserver au moins 10 jours avant de pouvoir l'accepter (délai de réflexion)." },
      { terme: "Assurance emprunteur", definition: "Assurance garantissant le remboursement du crédit en cas de décès, invalidité ou incapacité de travail de l'emprunteur ; non obligatoire légalement mais quasi systématiquement exigée par la banque pour un crédit immobilier." },
      { terme: "Taux d'endettement", definition: "Rapport entre les charges de crédit et les revenus de l'emprunteur, indicateur central de sa capacité de remboursement (seuil indicatif encadré par le Haut Conseil de stabilité financière pour l'immobilier)." },
      { terme: "Devoir de mise en garde", definition: "Obligation pour le prêteur d'alerter un emprunteur non averti lorsque le crédit envisagé paraît excessif au regard de ses capacités financières." },
      { terme: "FICP", definition: "Fichier national des incidents de remboursement des crédits aux particuliers, tenu par la Banque de France, consulté par les banques avant tout octroi de crédit." },
      { terme: "Commission de surendettement", definition: "Instance départementale, adossée à la Banque de France, qui examine les dossiers de particuliers ne pouvant plus faire face à leurs dettes et propose un plan de traitement." },
    ],
    approfondissement: `**La loi Lagarde (2010)** a profondément réformé le crédit à la consommation : encadrement strict du crédit renouvelable (amortissement minimal obligatoire, fiche de dialogue sur la solvabilité), obligation de proposer une alternative en prêt personnel lors de la vente en magasin, et création d'un régime spécifique de publicité encadrée.

**La loi Scrivener puis Hamon** ont façonné le crédit immobilier moderne : offre de prêt écrite, délai de réflexion incompressible, faculté de résiliation annuelle de l'assurance emprunteur ensuite étendue par la loi Lemoine (2022) à une résiliation **à tout moment**, sans frais ni pénalité, pour favoriser la concurrence sur ce marché longtemps dominé par les contrats groupe des banques.

**Le rôle du HCSF** (Haut Conseil de stabilité financière) est d'encadrer, par des recommandations devenues juridiquement contraignantes depuis 2021, les critères d'octroi du crédit immobilier : taux d'endettement maximal indicatif et durée de prêt plafonnée, avec une marge de flexibilité laissée aux banques pour un pourcentage limité de leur production, notamment en faveur de la primo-accession.

**Le traitement du surendettement** repose sur la commission de surendettement, qui peut proposer un rééchelonnement des dettes, un moratoire, voire recommander un effacement partiel ou total (rétablissement personnel) en cas de situation irrémédiablement compromise, sous le contrôle du juge.`,
    historique: `- **1978** : loi Scrivener, premier corpus protecteur de l'emprunteur en matière de crédit immobilier et de crédit à la consommation.
- **1989** : première loi sur le traitement du surendettement des particuliers, création des commissions départementales.
- **2010** : loi Lagarde, réforme du crédit renouvelable et de la publicité pour le crédit à la consommation.
- **2014** : loi Hamon, extension du droit de résiliation annuelle de l'assurance emprunteur.
- **2017** : loi Sapin 2, amendement Bourquin, résiliation annuelle possible à chaque date anniversaire du contrat d'assurance emprunteur.
- **2022** : loi Lemoine, résiliation à tout moment de l'assurance emprunteur et suppression du questionnaire médical pour certains prêts.`,
    evolutionsJuridiques: [
      { date: "1978", evenement: "Loi Scrivener", texte: "Pose les bases de la protection de l'emprunteur (offre écrite, délai de réflexion) pour le crédit immobilier et à la consommation." },
      { date: "2010", evenement: "Loi Lagarde", texte: "Réforme structurante du crédit renouvelable : amortissement minimal, fiche de dialogue, encadrement de la publicité." },
      { date: "2014", evenement: "Loi Hamon", texte: "Instaure la résiliation annuelle de l'assurance emprunteur durant la première année du crédit." },
      { date: "2017", evenement: "Amendement Bourquin (loi Sapin 2)", texte: "Étend la résiliation annuelle de l'assurance emprunteur à chaque date anniversaire du contrat, au-delà de la première année." },
      { date: "2022", evenement: "Loi Lemoine", texte: "Permet la résiliation de l'assurance emprunteur à tout moment, sans frais, et supprime le questionnaire médical sous conditions de montant et d'âge." },
      { date: "2021", evenement: "Recommandations du HCSF rendues contraignantes", texte: "Encadrement légal du taux d'endettement et de la durée des crédits immobiliers." },
    ],
    citations: [],
    sourcesReference: [
      "Code de la consommation, Livre III (crédit)",
      "Code monétaire et financier (assurance emprunteur, articles L313-*)",
      "Banque de France — taux d'usure publiés trimestriellement",
      "Haut Conseil de stabilité financière — recommandations sur le crédit immobilier",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "b4-fc-01", recto: "Que signifie TAEG ?", verso: "Taux annuel effectif global, intégrant intérêts et frais obligatoires du crédit.", difficulte: "fondamental" },
    { id: "b4-fc-02", recto: "Qui fixe le taux d'usure et à quelle fréquence ?", verso: "La Banque de France, chaque trimestre, par catégorie de prêt.", difficulte: "fondamental" },
    { id: "b4-fc-03", recto: "Depuis quelle loi peut-on résilier son assurance emprunteur à tout moment ?", verso: "La loi Lemoine (2022).", difficulte: "intermediaire" },
    { id: "b4-fc-04", recto: "Qu'a changé la loi Lagarde de 2010 ?", verso: "Encadrement strict du crédit renouvelable : amortissement minimal, fiche de dialogue, alternative en prêt personnel obligatoire en magasin.", difficulte: "intermediaire" },
    { id: "b4-fc-05", recto: "Quel est le rôle du HCSF sur le crédit immobilier ?", verso: "Encadrer le taux d'endettement maximal et la durée du prêt, avec des recommandations devenues contraignantes depuis 2021.", difficulte: "avance" },
    { id: "b4-fc-06", recto: "Qu'est-ce que le devoir de mise en garde du prêteur ?", verso: "L'obligation d'alerter un emprunteur non averti si le crédit paraît excessif au regard de ses capacités de remboursement.", difficulte: "avance" },
    { id: "b4-fc-07", recto: "Que peut proposer une commission de surendettement ?", verso: "Un rééchelonnement des dettes, un moratoire, ou en dernier recours un effacement (rétablissement personnel) sous contrôle du juge.", difficulte: "intermediaire" },
    { id: "b4-fc-08", recto: "Quel fichier la banque consulte-t-elle avant d'octroyer un crédit ?", verso: "Le FICP (fichier des incidents de remboursement des crédits aux particuliers), tenu par la Banque de France.", difficulte: "fondamental" },
  ],
  quiz: [
    {
      id: "b4-qz-01",
      question: "Le TAEG intègre :",
      choix: [
        "Uniquement le taux d'intérêt nominal",
        "Le taux nominal et les frais obligatoires liés au crédit",
        "Uniquement les frais de dossier",
        "Le taux d'usure",
      ],
      bonneReponse: 1,
      explication: "Le TAEG additionne intérêts et frais obligatoires (dossier, garanties, assurance exigée) pour donner un coût réel comparable.",
      difficulte: "fondamental",
    },
    {
      id: "b4-qz-02",
      question: "La possibilité de résilier l'assurance emprunteur à tout moment, sans frais, résulte de :",
      choix: ["La loi Scrivener (1978)", "La loi Lagarde (2010)", "L'amendement Bourquin (2017)", "La loi Lemoine (2022)"],
      bonneReponse: 3,
      explication: "La loi Lemoine de 2022 a généralisé la résiliation à tout moment, après les étapes intermédiaires Hamon (annuelle, 1re année) puis Bourquin (annuelle, chaque date anniversaire).",
      difficulte: "avance",
    },
    {
      id: "b4-qz-03",
      question: "Le devoir de mise en garde du prêteur s'applique en priorité :",
      choix: [
        "À tous les emprunteurs sans exception",
        "Aux emprunteurs non avertis pour lesquels le crédit paraît excessif",
        "Uniquement aux crédits immobiliers",
        "Uniquement en cas de défaut de paiement déjà survenu",
      ],
      bonneReponse: 1,
      explication: "Le devoir de mise en garde protège spécifiquement l'emprunteur non averti face à un risque d'endettement excessif.",
      difficulte: "avance",
    },
    {
      id: "b4-qz-04",
      question: "Une commission de surendettement peut, en dernier recours et sous contrôle du juge :",
      choix: [
        "Emprisonner le débiteur",
        "Recommander un effacement de dettes (rétablissement personnel)",
        "Saisir automatiquement le salaire sans limite",
        "Annuler le FICP du débiteur",
      ],
      bonneReponse: 1,
      explication: "Face à une situation irrémédiablement compromise, la commission peut recommander un rétablissement personnel, avec ou sans liquidation judiciaire.",
      difficulte: "intermediaire",
    },
  ],
  exercices: [
    {
      id: "b4-ex-01",
      titre: "Vérifier la conformité d'une offre de crédit",
      enonce:
        "Une banque propose un TAEG de 6,2 % sur un prêt personnel, alors que le taux d'usure applicable à cette catégorie de prêt, publié par la Banque de France, est de 6 %. Que doit faire le conseiller ?",
      corrige:
        "L'offre est illégale : aucun crédit ne peut être consenti à un TAEG supérieur au taux d'usure en vigueur pour sa catégorie. Le conseiller doit revoir les conditions du prêt (taux, frais, garanties) pour ramener le TAEG sous le seuil légal avant toute proposition au client, sous peine de nullité du prêt et de sanctions pénales pour le prêteur.",
      difficulte: "intermediaire",
    },
  ],
};
