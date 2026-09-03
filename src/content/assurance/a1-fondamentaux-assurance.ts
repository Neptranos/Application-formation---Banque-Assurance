import type { ModuleFormation } from "@/content/types";

export const a1: ModuleFormation = {
  id: "a1",
  domaine: "assurance",
  ordre: 1,
  titre: "Les fondamentaux techniques de l'assurance",
  description:
    "Mutualisation, aléa, prime et sinistre : les mécanismes de base qui rendent l'assurance possible, et leur histoire.",
  cours: {
    fondamentaux: `Assurer un risque, c'est appliquer un principe simple mais puissant : la **mutualisation**. Un grand nombre de personnes exposées au même type de risque (incendie, accident, maladie) versent chacune une **prime** modeste ; l'assureur mutualise ces primes dans un fonds commun qui permet d'indemniser les quelques assurés effectivement touchés par un **sinistre**. Ce mécanisme repose sur la **loi des grands nombres** : plus le nombre d'assurés exposés à un risque est élevé, plus la fréquence de survenance du sinistre devient statistiquement prévisible, même si l'on ignore lequel des assurés sera concerné.

Pour qu'un risque soit assurable, il doit présenter un caractère d'**aléa** : l'événement garanti doit être incertain, dans sa survenance ou dans sa date (on ne peut pas assurer un événement déjà survenu, ni un événement certain et daté avec précision — sauf le décès, dont seule la date est aléatoire).

Le contrat d'assurance met en relation :

- **l'assureur**, qui s'engage à garantir le risque moyennant le paiement d'une prime (ou cotisation, en assurance mutualiste) ;
- **le souscripteur**, qui signe le contrat et paie la prime ;
- **l'assuré**, sur la tête ou les biens duquel repose le risque garanti (souvent la même personne que le souscripteur, mais pas toujours) ;
- **le bénéficiaire**, qui perçoit l'indemnité ou le capital en cas de sinistre.

On distingue traditionnellement les **assurances de dommages** (indemnisent un préjudice réellement subi, selon le principe indemnitaire : on ne peut pas s'enrichir via l'assurance) et les **assurances de personnes** (versent un capital ou une rente forfaitaire prédéfini, indépendamment du préjudice réel, en cas de décès, d'invalidité ou de maladie).`,
    definitionsCles: [
      { terme: "Mutualisation", definition: "Principe fondateur de l'assurance : regrouper un grand nombre de risques similaires dans un fonds commun alimenté par les primes, pour indemniser les sinistres effectivement survenus." },
      { terme: "Aléa", definition: "Caractère incertain, dans sa survenance ou sa date, que doit présenter un événement pour être assurable." },
      { terme: "Prime (ou cotisation)", definition: "Somme versée par le souscripteur à l'assureur en contrepartie de la garantie ; « prime » dans une société d'assurance, « cotisation » dans une mutuelle." },
      { terme: "Sinistre", definition: "Réalisation de l'événement garanti par le contrat, déclenchant en principe le versement d'une indemnité ou d'un capital." },
      { terme: "Principe indemnitaire", definition: "Règle propre à l'assurance de dommages selon laquelle l'indemnisation ne peut excéder le préjudice réellement subi, pour éviter tout enrichissement de l'assuré." },
      { terme: "Assurance de dommages", definition: "Assurance qui répare un préjudice patrimonial effectivement subi (biens, responsabilité civile), soumise au principe indemnitaire." },
      { terme: "Assurance de personnes", definition: "Assurance qui verse un capital ou une rente forfaitaire déterminé à l'avance (décès, invalidité, santé, retraite), sans lien direct avec un préjudice mesurable." },
      { terme: "Souscripteur", definition: "Personne qui signe le contrat d'assurance et s'engage à payer la prime, distincte le cas échéant de l'assuré ou du bénéficiaire." },
      { terme: "Loi des grands nombres", definition: "Principe statistique selon lequel la fréquence observée d'un événement converge vers sa probabilité théorique lorsque le nombre d'observations (d'assurés) augmente, fondement actuariel de la mutualisation." },
      { terme: "Sélection des risques", definition: "Processus par lequel l'assureur évalue le risque présenté par un candidat à l'assurance (questionnaire, expertise) avant d'accepter de le garantir et de fixer sa prime." },
      { terme: "Franchise", definition: "Part du sinistre qui reste à la charge de l'assuré, non prise en charge par l'assureur, exprimée en montant fixe, en pourcentage, ou en combinaison des deux." },
      { terme: "Plafond de garantie", definition: "Montant maximal que l'assureur s'engage à indemniser pour un sinistre ou sur une période donnée, au-delà duquel le préjudice reste à la charge de l'assuré." },
      { terme: "Exclusion de garantie", definition: "Clause du contrat qui écarte expressément certains événements ou circonstances du champ de la garantie, devant être formelle et limitée pour être opposable à l'assuré (art. L113-1 du Code des assurances)." },
      { terme: "Ratio sinistres sur primes (S/P)", definition: "Indicateur clé de la rentabilité technique d'un portefeuille d'assurance, rapportant le montant des sinistres indemnisés aux primes encaissées sur une période donnée." },
      { terme: "Taux de prime", definition: "Pourcentage appliqué à une base assurable (valeur du bien, capital garanti) pour déterminer le montant de la prime, reflet direct du niveau de risque évalué." },
    ],
    approfondissement: `**Anti-sélection et aléa moral**, les deux grandes limites théoriques de l'assurance. L'**anti-sélection** (ou sélection adverse) désigne le risque que seules les personnes les plus exposées à un risque cherchent à s'assurer, déséquilibrant la mutualité (d'où l'importance du questionnaire de risque à la souscription). L'**aléa moral** désigne, lui, le risque que l'existence même de l'assurance modifie le comportement de l'assuré en le rendant moins prudent, voire en l'incitant à la fraude — d'où l'existence de franchises, de plafonds de garantie et de clauses d'exclusion.

**La technique actuarielle**, cœur de métier de l'actuaire, consiste à calculer la **prime pure** (probabilité de survenance × coût moyen du sinistre) à laquelle s'ajoutent les chargements (frais de gestion, commissions, marge de l'assureur, chargement de sécurité) pour obtenir la **prime commerciale** effectivement payée par l'assuré.

**Réassurance.** Un assureur peut lui-même se réassurer, c'est-à-dire céder une partie du risque qu'il a accepté à un réassureur, pour limiter son exposition aux sinistres exceptionnels (catastrophes naturelles, sinistres de très grande ampleur) et sécuriser sa propre solvabilité — un mécanisme de mutualisation « au carré », entre assureurs cette fois.`,
    historique: `- **Antiquité** : prémices de la mutualisation avec les caisses de secours mutuel des marchands et artisans (avaries communes maritimes).
- **XIVe siècle** : apparition des premiers contrats d'assurance maritime écrits en Italie (Gênes, vers 1347).
- **1666** : après le grand incendie de Londres, création des premières compagnies d'assurance incendie.
- **1787** : première compagnie française d'assurance sur la vie, la Compagnie royale d'assurances.
- **1898** : loi française sur les accidents du travail, qui introduit une logique de responsabilité et d'assurance obligatoire de l'employeur.
- **1930** : loi fondatrice du contrat d'assurance en France, matrice de l'actuel Code des assurances.
- **1945** : création de la Sécurité sociale, qui redéfinit les frontières entre protection sociale obligatoire et assurance privée complémentaire.`,
    evolutionsJuridiques: [
      { date: "1930", evenement: "Loi du 13 juillet 1930", texte: "Premier corpus législatif structurant du contrat d'assurance en France, à l'origine du Code des assurances (créé en 1976 par codification)." },
      { date: "1945", evenement: "Ordonnances créant la Sécurité sociale", texte: "Redéfinissent le périmètre de la protection sociale obligatoire, laissant à l'assurance privée un rôle complémentaire." },
      { date: "1976", evenement: "Codification du Code des assurances", texte: "Rassemble et organise l'ensemble des textes régissant le contrat et les entreprises d'assurance." },
    ],
    citations: [
      {
        texte: "Assurer, c'est prévoir.",
        auteur: "Adage professionnel de l'assurance",
      },
    ],
    sourcesReference: [
      "Code des assurances, Livre I (le contrat)",
      "France Assureurs (ex-FFA) — publications pédagogiques",
      "ENASS / IFPASS — manuels de formation aux fondamentaux de l'assurance",
      "Yvonne Lambert-Faivre, Droit des assurances",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "a1-fc-01", recto: "Qu'est-ce que la mutualisation en assurance ?", verso: "Regrouper de nombreux risques similaires dans un fonds commun alimenté par les primes pour indemniser les sinistres survenus.", difficulte: "fondamental" },
    { id: "a1-fc-02", recto: "Qu'est-ce que l'aléa en droit des assurances ?", verso: "Le caractère incertain, dans sa survenance ou sa date, que doit présenter tout événement pour être assurable.", difficulte: "fondamental" },
    { id: "a1-fc-03", recto: "Différence entre souscripteur, assuré et bénéficiaire ?", verso: "Le souscripteur signe le contrat et paie la prime ; l'assuré porte le risque ; le bénéficiaire perçoit l'indemnité ou le capital — ces trois rôles peuvent être une seule ou plusieurs personnes distinctes.", difficulte: "intermediaire" },
    { id: "a1-fc-04", recto: "Qu'est-ce que le principe indemnitaire ?", verso: "En assurance de dommages, l'indemnisation ne peut jamais dépasser le préjudice réellement subi.", difficulte: "intermediaire" },
    { id: "a1-fc-05", recto: "Qu'est-ce que l'anti-sélection ?", verso: "Le risque que seules les personnes les plus exposées à un risque cherchent à s'assurer, déséquilibrant la mutualité.", difficulte: "avance" },
    { id: "a1-fc-06", recto: "Qu'est-ce que l'aléa moral en assurance ?", verso: "Le risque que l'assurance elle-même incite l'assuré à moins de prudence, voire à la fraude.", difficulte: "avance" },
    { id: "a1-fc-07", recto: "Différence entre prime pure et prime commerciale ?", verso: "La prime pure couvre le coût statistique du risque (fréquence × coût moyen) ; la prime commerciale y ajoute les chargements (frais, commissions, marge).", difficulte: "avance" },
    { id: "a1-fc-08", recto: "Qu'est-ce que la réassurance ?", verso: "Le mécanisme par lequel un assureur cède une partie d'un risque à un réassureur pour limiter son exposition et sécuriser sa solvabilité.", difficulte: "avance" },
    { id: "a1-fc-09", recto: "En quelle année le Code des assurances a-t-il été créé par codification ?", verso: "1976.", difficulte: "fondamental" },
    { id: "a1-fc-10", recto: "Qu'est-ce qu'une franchise ?", verso: "La part du sinistre qui reste à la charge de l'assuré, non indemnisée par l'assureur.", difficulte: "fondamental" },
    { id: "a1-fc-11", recto: "Qu'est-ce que le plafond de garantie ?", verso: "Le montant maximal que l'assureur s'engage à indemniser pour un sinistre ou sur une période donnée.", difficulte: "fondamental" },
    { id: "a1-fc-12", recto: "Que doit respecter une clause d'exclusion pour être opposable à l'assuré ?", verso: "Elle doit être formelle et limitée (art. L113-1 du Code des assurances).", difficulte: "avance" },
    { id: "a1-fc-13", recto: "Que mesure le ratio S/P (sinistres sur primes) ?", verso: "La rentabilité technique d'un portefeuille d'assurance : montant des sinistres indemnisés rapporté aux primes encaissées.", difficulte: "avance" },
    { id: "a1-fc-14", recto: "Qu'est-ce que le taux de prime ?", verso: "Le pourcentage appliqué à une base assurable (valeur du bien, capital garanti) pour déterminer le montant de la prime.", difficulte: "intermediaire" },
    { id: "a1-fc-15", recto: "En quel siècle apparaissent les premiers contrats d'assurance maritime écrits ?", verso: "Le XIVe siècle, en Italie (Gênes, vers 1347).", difficulte: "avance" },
    { id: "a1-fc-16", recto: "Quel évènement de 1666 a favorisé la naissance des premières compagnies d'assurance incendie ?", verso: "Le grand incendie de Londres.", difficulte: "avance" },
    { id: "a1-fc-17", recto: "Quelle loi de 1898 introduit une logique d'assurance obligatoire pour l'employeur ?", verso: "La loi sur les accidents du travail.", difficulte: "avance" },
    { id: "a1-fc-18", recto: "Peut-on assurer un événement déjà survenu ?", verso: "Non, l'absence d'aléa rend le contrat nul.", difficulte: "fondamental" },
    { id: "a1-fc-19", recto: "Le décès est-il assurable malgré sa certitude absolue ?", verso: "Oui : seule sa date est aléatoire, ce qui suffit à conserver le caractère assurable du risque.", difficulte: "avance" },
  ],
  quiz: [
    {
      id: "a1-qz-01",
      question: "Le principe indemnitaire s'applique :",
      choix: ["À toutes les assurances", "Uniquement aux assurances de dommages", "Uniquement aux assurances de personnes", "Uniquement à l'assurance-vie"],
      bonneReponse: 1,
      explication: "Les assurances de personnes versent un capital forfaitaire prédéfini, sans lien avec un préjudice mesurable ; seules les assurances de dommages sont soumises au principe indemnitaire.",
      difficulte: "intermediaire",
    },
    {
      id: "a1-qz-02",
      question: "L'anti-sélection désigne :",
      choix: [
        "Le refus systématique de l'assureur d'assurer certains profils",
        "Le fait que les profils les plus risqués cherchent davantage à s'assurer",
        "La sélection des meilleurs assureurs par le client",
        "Un mode de calcul de la prime pure",
      ],
      bonneReponse: 1,
      explication: "L'anti-sélection déséquilibre la mutualité si l'assureur ne parvient pas à bien évaluer et tarifer le risque réel de chaque candidat.",
      difficulte: "avance",
    },
    {
      id: "a1-qz-03",
      question: "Quel texte fondateur, à l'origine du Code des assurances, a été adopté en 1930 ?",
      choix: [
        "La loi sur le contrat d'assurance",
        "La loi sur les accidents du travail",
        "L'ordonnance créant la Sécurité sociale",
        "La directive Solvabilité II",
      ],
      bonneReponse: 0,
      explication: "La loi du 13 juillet 1930 est le texte fondateur du droit du contrat d'assurance en France.",
      difficulte: "intermediaire",
    },
    {
      id: "a1-qz-04",
      question: "Une clause d'exclusion de garantie doit être :",
      choix: ["Vague pour couvrir un maximum de cas", "Formelle et limitée", "Uniquement orale", "Interdite dans tous les contrats"],
      bonneReponse: 1,
      explication: "L'article L113-1 du Code des assurances impose que les exclusions soient formelles et limitées pour être opposables.",
      difficulte: "avance",
    },
    {
      id: "a1-qz-05",
      question: "Le ratio S/P (sinistres sur primes) mesure :",
      choix: ["La solvabilité de l'assureur au sens Solvabilité II", "La rentabilité technique d'un portefeuille d'assurance", "Le nombre de contrats souscrits", "Le taux de commission des intermédiaires"],
      bonneReponse: 1,
      explication: "Un ratio S/P élevé signale une rentabilité technique dégradée : les sinistres consomment une part importante des primes encaissées.",
      difficulte: "avance",
    },
    {
      id: "a1-qz-06",
      question: "La prime pure se calcule comme :",
      choix: ["Fréquence de survenance × coût moyen du sinistre", "Coût moyen du sinistre uniquement", "Chargements + commissions", "Plafond de garantie / franchise"],
      bonneReponse: 0,
      explication: "C'est la définition actuarielle de base de la prime pure, avant ajout des chargements pour obtenir la prime commerciale.",
      difficulte: "avance",
    },
    {
      id: "a1-qz-07",
      question: "Le décès est un risque assurable car :",
      choix: ["Il n'est pas certain", "Seule sa date est incertaine, ce qui suffit", "Il n'engage aucune prime", "Il relève uniquement de la Sécurité sociale"],
      bonneReponse: 1,
      explication: "C'est l'exception classique : la certitude de l'événement n'exclut pas l'aléa quand seule la date reste incertaine.",
      difficulte: "avance",
    },
    { id: "a1-qz-08", question: "L'assureur qui cède une partie d'un risque à un réassureur pratique :", choix: ["La mutualisation", "La réassurance", "L'anti-sélection", "La subrogation"], bonneReponse: 1, explication: "La réassurance est une mutualisation de second niveau, entre assureurs.", difficulte: "avance" },
    { id: "a1-qz-09", question: "Le souscripteur d'un contrat d'assurance est :", choix: ["Toujours identique à l'assuré", "La personne qui signe le contrat et paie la prime", "Toujours le bénéficiaire", "L'assureur lui-même"], bonneReponse: 1, explication: "Le souscripteur peut être distinct de l'assuré et du bénéficiaire selon les contrats.", difficulte: "fondamental" },
    { id: "a1-qz-10", question: "Un plafond de garantie sert à :", choix: ["Augmenter la prime automatiquement", "Limiter le montant maximal indemnisable", "Supprimer la franchise", "Prolonger la durée du contrat"], bonneReponse: 1, explication: "Au-delà du plafond, le préjudice reste à la charge de l'assuré.", difficulte: "fondamental" },
  ],
  exercices: [
    {
      id: "a1-ex-01",
      titre: "Assurable ou non ?",
      enonce:
        "Un propriétaire souhaite assurer un bâtiment déjà partiellement détruit par un incendie survenu la veille de la signature du contrat. Cette situation est-elle assurable ? Justifiez avec le vocabulaire technique approprié.",
      corrige:
        "Non : l'événement ayant déjà eu lieu au moment de la souscription, il manque l'élément d'aléa, condition essentielle de validité de tout contrat d'assurance. Un contrat souscrit dans ces conditions serait nul pour absence d'aléa (voire pourrait caractériser une fraude à l'assurance si le souscripteur avait connaissance du sinistre).",
      difficulte: "fondamental",
    },
    {
      id: "a1-ex-02",
      titre: "Calculer une prime pure",
      enonce:
        "Sur un portefeuille de 10 000 véhicules assurés, l'assureur observe statistiquement 400 sinistres par an, pour un coût moyen de 1 500 € par sinistre. Calculez la fréquence de sinistralité, puis la prime pure annuelle par véhicule assuré.",
      corrige:
        "Fréquence de sinistralité = nombre de sinistres / nombre de véhicules assurés = 400 / 10 000 = 4 % (soit 0,04). Prime pure = fréquence × coût moyen du sinistre = 0,04 × 1 500 € = 60 € par véhicule et par an. C'est cette prime pure de 60 € qui, une fois augmentée des chargements (frais de gestion, commissions, marge de l'assureur, chargement de sécurité), donnera la prime commerciale effectivement facturée à l'assuré — toujours supérieure à la prime pure.",
      difficulte: "avance",
    },
    {
      id: "a1-ex-03",
      titre: "Calculer un ratio S/P et l'interpréter",
      enonce:
        "Un assureur encaisse 12 millions d'euros de primes sur une branche donnée au cours d'un exercice, et verse 9,6 millions d'euros d'indemnités de sinistres sur la même période. Calculez le ratio S/P de cette branche. Ce résultat est-il favorable ou préoccupant pour l'équilibre technique de l'assureur (sachant qu'il faut aussi couvrir les frais de gestion et la marge, généralement de l'ordre de 20 à 30 % des primes) ?",
      corrige:
        "Ratio S/P = sinistres / primes = 9,6 / 12 = 80 %. Ce ratio signifie que 80 % des primes encaissées repartent en indemnisation de sinistres, ne laissant que 20 % des primes pour couvrir les frais de gestion, les commissions et la marge de l'assureur. Si les chargements nécessaires représentent 20 à 30 % des primes, un ratio S/P de 80 % est à la limite de l'équilibre technique, voire déficitaire selon le niveau exact des frais : l'assureur devra probablement ajuster ses tarifs à la hausse ou revoir sa politique de souscription sur cette branche pour restaurer sa rentabilité.",
      difficulte: "avance",
    },
  ],
};
