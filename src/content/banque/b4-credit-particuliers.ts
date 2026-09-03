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
- le **crédit immobilier**, destiné à l'acquisition, la construction ou les travaux d'un bien immobilier, avec un formalisme protecteur renforcé (offre de prêt, délai de réflexion).

Ce module est centré sur le crédit aux particuliers ; il aborde toutefois, en repère, les principales techniques de **financement des professionnels et entreprises** (crédit-bail, affacturage, cession Dailly), qu'un conseiller bancaire généraliste croise fréquemment et doit savoir distinguer du crédit classique.

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
      { terme: "Taux nominal", definition: "Taux d'intérêt de base du crédit, hors frais annexes, servant de base au calcul des intérêts périodiques ; toujours inférieur ou égal au TAEG qui l'englobe." },
      { terme: "Mensualité (crédit amortissable)", definition: "Somme versée chaque mois par l'emprunteur, composée d'une part de capital remboursé et d'une part d'intérêts, dont la répartition évolue au fil du prêt (plus d'intérêts en début de prêt, plus de capital en fin de prêt)." },
      { terme: "Capital restant dû", definition: "Montant du capital emprunté qui reste à rembourser à un instant donné, base de calcul des intérêts de la mensualité suivante dans un prêt amortissable classique." },
      { terme: "Reste à vivre", definition: "Somme dont dispose un foyer après paiement de toutes ses charges de crédit et charges fixes, indicateur central de sa capacité réelle à supporter un nouvel emprunt au-delà du seul taux d'endettement." },
      { terme: "Garantie de prêt (caution / hypothèque)", definition: "Sûreté exigée par la banque pour un crédit immobilier, sous forme de caution (organisme spécialisé garantissant le remboursement) ou d'hypothèque (droit réel sur le bien financé), pour se prémunir contre le risque de défaillance de l'emprunteur." },
      { terme: "Crédit-bail (leasing)", definition: "Contrat de location d'un bien professionnel assorti d'une option d'achat en fin de contrat, qui finance l'usage d'un bien sans en financer l'acquisition immédiate." },
      { terme: "Affacturage (factoring)", definition: "Technique de financement par laquelle une entreprise cède ses créances clients à un factor, qui en avance le montant moyennant commission, pour financer son besoin en fonds de roulement." },
      { terme: "Cession Dailly", definition: "Mécanisme, issu de la loi du 2 janvier 1981, permettant de céder ou de nantir des créances professionnelles par simple bordereau, pour garantir un crédit bancaire." },
    ],
    approfondissement: `**La loi Lagarde (2010)** a profondément réformé le crédit à la consommation : encadrement strict du crédit renouvelable (amortissement minimal obligatoire, fiche de dialogue sur la solvabilité), obligation de proposer une alternative en prêt personnel lors de la vente en magasin, et création d'un régime spécifique de publicité encadrée.

**La loi Scrivener puis Hamon** ont façonné le crédit immobilier moderne : offre de prêt écrite, délai de réflexion incompressible, faculté de résiliation annuelle de l'assurance emprunteur ensuite étendue par la loi Lemoine (2022) à une résiliation **à tout moment**, sans frais ni pénalité, pour favoriser la concurrence sur ce marché longtemps dominé par les contrats groupe des banques.

**Le rôle du HCSF** (Haut Conseil de stabilité financière) est d'encadrer, par des recommandations devenues juridiquement contraignantes depuis 2021, les critères d'octroi du crédit immobilier : taux d'endettement maximal indicatif et durée de prêt plafonnée, avec une marge de flexibilité laissée aux banques pour un pourcentage limité de leur production, notamment en faveur de la primo-accession.

**Le traitement du surendettement** repose sur la commission de surendettement, qui peut proposer un rééchelonnement des dettes, un moratoire, voire recommander un effacement partiel ou total (rétablissement personnel) en cas de situation irrémédiablement compromise, sous le contrôle du juge.

**Le financement des professionnels, en repère.** Une entreprise ne finance pas ses besoins comme un particulier. Le **crédit-bail** (leasing) finance l'usage d'un bien (véhicule, matériel, local professionnel) via une location assortie d'une option d'achat en fin de contrat, sans immobiliser de trésorerie dans l'acquisition. L'**affacturage** (factoring) permet de céder ses créances clients à un factor, qui avance immédiatement leur montant (moyennant commission), pour financer le besoin en fonds de roulement sans attendre le paiement effectif des clients. La **cession ou le nantissement de créances professionnelles**, dite « cession Dailly » (loi du 2 janvier 1981), permet de mobiliser des créances professionnelles à titre de garantie d'un crédit bancaire, par simple bordereau. Ces trois techniques répondent à des besoins de trésorerie ou d'investissement différents de ceux d'un particulier, mais reposent sur la même logique de mise à disposition de fonds contre engagement de remboursement ou cession d'un droit.`,
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
    { id: "b4-fc-09", recto: "Le taux nominal est-il toujours égal au TAEG ?", verso: "Non, le taux nominal est toujours inférieur ou égal au TAEG, qui intègre en plus les frais obligatoires.", difficulte: "intermediaire" },
    { id: "b4-fc-10", recto: "Comment évolue la répartition capital/intérêts d'une mensualité au fil d'un prêt amortissable ?", verso: "La part d'intérêts diminue et la part de capital augmente progressivement, car les intérêts se calculent sur le capital restant dû qui diminue.", difficulte: "avance" },
    { id: "b4-fc-11", recto: "Qu'est-ce que le reste à vivre ?", verso: "La somme dont dispose un foyer après paiement de toutes ses charges de crédit et charges fixes.", difficulte: "intermediaire" },
    { id: "b4-fc-12", recto: "Le taux d'endettement seul suffit-il à apprécier la capacité d'emprunt d'un foyer ?", verso: "Non, le reste à vivre est un indicateur complémentaire essentiel, notamment pour les foyers à revenus modestes ou à charge de famille importante.", difficulte: "avance" },
    { id: "b4-fc-13", recto: "Quelles sont les deux principales formes de garantie d'un crédit immobilier ?", verso: "La caution (organisme spécialisé) et l'hypothèque (droit réel sur le bien financé).", difficulte: "intermediaire" },
    { id: "b4-fc-14", recto: "Un crédit affecté à l'achat d'un bien précis : que se passe-t-il si la vente est annulée ?", verso: "Le crédit est annulé automatiquement, et inversement (les deux contrats sont juridiquement liés).", difficulte: "intermediaire" },
    { id: "b4-fc-15", recto: "Le taux d'endettement maximal indicatif recommandé par le HCSF pour le crédit immobilier est de :", verso: "35 % (recommandation devenue contraignante depuis 2021, avec une marge de flexibilité limitée laissée aux banques).", difficulte: "avance" },
    { id: "b4-fc-16", recto: "Un crédit renouvelable doit-il prévoir un amortissement minimal du capital ?", verso: "Oui, depuis la loi Lagarde de 2010, pour éviter les réserves qui ne se remboursent jamais.", difficulte: "avance" },
    { id: "b4-fc-17", recto: "Quelle est la durée maximale indicative recommandée par le HCSF pour un crédit immobilier ?", verso: "25 ans (avec des dérogations possibles notamment pour les biens à construire ou avec travaux importants).", difficulte: "avance" },
    { id: "b4-fc-18", recto: "Qu'est-ce que le crédit-bail ?", verso: "Une location d'un bien professionnel assortie d'une option d'achat en fin de contrat.", difficulte: "intermediaire" },
    { id: "b4-fc-19", recto: "Qu'est-ce que l'affacturage ?", verso: "La cession de créances clients à un factor, qui en avance le montant moyennant commission, pour financer le besoin en fonds de roulement.", difficulte: "intermediaire" },
    { id: "b4-fc-20", recto: "Qu'est-ce que la cession Dailly ?", verso: "Un mécanisme permettant de céder ou nantir des créances professionnelles par simple bordereau, pour garantir un crédit bancaire.", difficulte: "avance" },
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
    {
      id: "b4-qz-05",
      question: "Dans un prêt amortissable classique, la part d'intérêts dans la mensualité :",
      choix: ["Reste strictement constante", "Diminue progressivement au fil du prêt", "Augmente progressivement au fil du prêt", "N'existe qu'la première année"],
      bonneReponse: 1,
      explication: "Les intérêts se calculent sur le capital restant dû, qui diminue mensualité après mensualité.",
      difficulte: "avance",
    },
    {
      id: "b4-qz-06",
      question: "Le reste à vivre est particulièrement déterminant pour :",
      choix: ["Les très hauts revenus uniquement", "Les foyers modestes ou avec charge de famille importante", "Les seuls crédits renouvelables", "Les seuls crédits professionnels"],
      bonneReponse: 1,
      explication: "À taux d'endettement égal, deux foyers de revenus différents n'ont pas le même reste à vivre réel une fois les charges fixes payées.",
      difficulte: "avance",
    },
    {
      id: "b4-qz-07",
      question: "La recommandation du HCSF sur le taux d'endettement maximal pour le crédit immobilier est de :",
      choix: ["25 %", "35 %", "50 %", "Aucun seuil n'existe"],
      bonneReponse: 1,
      explication: "35 % est le seuil de référence, avec une marge de flexibilité limitée laissée aux banques pour une part de leur production.",
      difficulte: "avance",
    },
    {
      id: "b4-qz-08",
      question: "L'affacturage permet à une entreprise de :",
      choix: [
        "Céder ses créances clients à un tiers pour obtenir un financement immédiat",
        "Emprunter sans aucune garantie",
        "Éviter tout contrôle de l'ACPR",
        "Se dispenser de comptabilité"
      ],
      bonneReponse: 0,
      explication: "L'affacturage (factoring) est une technique de financement du poste clients, distincte du crédit classique.",
      difficulte: "avance",
    },
    {
      id: "b4-qz-09",
      question: "La cession Dailly permet à une entreprise de :",
      choix: [
        "Céder ou nantir des créances professionnelles à titre de garantie de crédit",
        "Créer un crédit renouvelable",
        "Obtenir automatiquement un prêt immobilier",
        "S'exonérer du taux d'usure"
      ],
      bonneReponse: 0,
      explication: "La cession de créances professionnelles (loi Dailly, 1981) est un mode de mobilisation de créances utilisé pour garantir un financement bancaire.",
      difficulte: "avance",
    },
    {
      id: "b4-qz-10",
      question: "Le crédit-bail (leasing) permet à une entreprise de :",
      choix: [
        "Louer un bien avec option d'achat en fin de contrat",
        "Obtenir un prêt sans intérêt",
        "Échapper au TAEG",
        "Bénéficier automatiquement d'une garantie de l'État"
      ],
      bonneReponse: 0,
      explication: "Le crédit-bail finance l'usage d'un bien (matériel, véhicule, immobilier professionnel) via une location assortie d'une option d'achat.",
      difficulte: "intermediaire",
    },
    { id: "b4-qz-11", question: "L'assurance emprunteur est-elle légalement obligatoire ?", choix: ["Oui, par la loi", "Non, mais quasi systématiquement exigée par la banque pour un crédit immobilier", "Uniquement pour le crédit à la consommation", "Interdite pour les prêts de plus de 20 ans"], bonneReponse: 1, explication: "Aucun texte ne l'impose, mais l'usage bancaire la rend incontournable en pratique pour l'immobilier.", difficulte: "intermediaire" },
    { id: "b4-qz-12", question: "Le crédit affecté est lié :", choix: ["À aucun bien particulier", "À l'achat d'un bien ou service déterminé", "Uniquement à l'immobilier", "Uniquement aux entreprises"], bonneReponse: 1, explication: "L'annulation de la vente entraîne celle du crédit affecté, et inversement.", difficulte: "fondamental" },
    { id: "b4-qz-13", question: "La cession Dailly résulte de la loi de :", choix: ["1978", "1981", "2010", "2022"], bonneReponse: 1, explication: "Loi du 2 janvier 1981, encore utilisée aujourd'hui pour mobiliser des créances professionnelles.", difficulte: "avance" },
    { id: "b4-qz-14", question: "Le FICP est consulté par la banque :", choix: ["Après l'octroi du crédit uniquement", "Avant tout octroi de crédit", "Jamais", "Uniquement pour le crédit immobilier"], bonneReponse: 1, explication: "La consultation du FICP fait partie de l'évaluation de solvabilité préalable obligatoire.", difficulte: "intermediaire" },
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
    {
      id: "b4-ex-02",
      titre: "Calculer un taux d'endettement et un reste à vivre",
      enonce:
        "Un couple perçoit 3 800 € de revenus mensuels nets cumulés. Il rembourse déjà un crédit auto à 250 €/mois et envisage un crédit immobilier dont la mensualité serait de 1 100 €. Calculez le taux d'endettement total après ce nouveau crédit. Ce taux respecte-t-il le seuil indicatif de 35 % recommandé par le HCSF ? Si les charges fixes du foyer (hors crédits) s'élèvent à 900 €/mois, calculez également le reste à vivre.",
      corrige:
        "Charges de crédit totales après le nouveau prêt : 250 € + 1 100 € = 1 350 €/mois. Taux d'endettement = 1 350 / 3 800 ≈ 35,5 %. Ce taux dépasse (de peu) le seuil indicatif de 35 % recommandé par le HCSF : le dossier est à la limite, et la banque devra soit rester dans sa marge de flexibilité réglementaire (réservée à une part limitée de sa production, souvent orientée vers la primo-accession), soit revoir les conditions (durée allongée, apport plus important) pour redescendre sous le seuil. Reste à vivre = revenus (3 800 €) − charges de crédit (1 350 €) − charges fixes (900 €) = 1 550 € pour le foyer, un niveau à apprécier au regard de la composition du foyer (nombre d'enfants à charge, notamment) au-delà du seul taux d'endettement.",
      difficulte: "avance",
    },
    {
      id: "b4-ex-03",
      titre: "Comprendre l'amortissement d'un prêt",
      enonce:
        "Un emprunteur souscrit un prêt de 200 000 € à un taux nominal de 3 % sur 20 ans. Sans calculer la mensualité exacte (qui nécessite la formule d'annuité constante), expliquez pourquoi la première mensualité contient une part d'intérêts plus élevée que la dernière, et pourquoi le capital restant dû diminue plus vite en fin de prêt qu'en début de prêt.",
      corrige:
        "Dans un prêt amortissable à mensualités constantes, les intérêts de chaque échéance se calculent sur le capital restant dû au moment de cette échéance. En début de prêt, le capital restant dû est proche des 200 000 € empruntés : la part d'intérêts dans la mensualité est donc maximale, et la part de capital remboursé minimale. Au fil des remboursements, le capital restant dû diminue, donc les intérêts calculés dessus diminuent aussi ; comme la mensualité totale reste constante, la part consacrée au remboursement du capital augmente mécaniquement. C'est pourquoi le capital restant dû diminue lentement au début du prêt et de plus en plus vite vers la fin — un point essentiel à expliquer à un client qui s'étonnerait de voir son capital restant dû baisser peu les premières années.",
      difficulte: "avance",
    },
    {
      id: "b4-ex-04",
      titre: "Choisir la bonne technique de financement professionnel",
      enonce:
        "Une entreprise a besoin (1) d'acquérir un véhicule utilitaire sans mobiliser sa trésorerie, et (2) de financer rapidement son besoin en fonds de roulement car ses clients la paient à 60 jours alors que ses fournisseurs exigent un paiement à 30 jours. Quelle technique de financement recommandez-vous pour chaque besoin ?",
      corrige:
        "Pour l'acquisition du véhicule sans mobiliser de trésorerie : le crédit-bail (leasing) est adapté, l'entreprise loue le véhicule avec option d'achat en fin de contrat, sans immobiliser de capital dans l'acquisition. Pour le décalage de trésorerie entre paiement clients (60 jours) et paiement fournisseurs (30 jours) : l'affacturage permet de céder les créances clients à un factor qui en avance le montant, comblant ainsi le besoin en fonds de roulement généré par ce décalage, moyennant une commission.",
      difficulte: "intermediaire",
    },
  ],
};
