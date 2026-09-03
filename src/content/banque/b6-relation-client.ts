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
      { terme: "Tribunal compétent en matière bancaire", definition: "En principe le tribunal judiciaire du domicile du défendeur pour un litige entre un client particulier et sa banque ; le tribunal de commerce est compétent lorsque le litige oppose deux commerçants ou relève d'un acte de commerce." },
      { terme: "Prescription civile de droit commun", definition: "Délai de 5 ans, à compter du jour où le titulaire du droit a connu ou aurait dû connaître les faits, au-delà duquel une action en justice n'est plus recevable (art. 2224 du Code civil), applicable par défaut aux litiges bancaires sauf délai spécial." },
      { terme: "Obligation de moyens / obligation de résultat", definition: "Distinction civile classique : le banquier est en principe tenu d'une obligation de moyens (mettre en œuvre une diligence raisonnable) pour le conseil, mais d'une obligation de résultat plus stricte pour certaines opérations matérielles (exécution d'un virement selon les instructions reçues, par exemple)." },
      { terme: "Charge de la preuve (opération contestée)", definition: "En cas de contestation d'une opération de paiement par le client, il incombe en principe à la banque de prouver que l'opération a été authentifiée, dûment enregistrée et comptabilisée, et qu'elle n'a pas été affectée par une déficience technique (art. L133-23 CMF)." },
    ],
    approfondissement: `**MIF2 en pratique** distingue plusieurs niveaux de service : la simple exécution d'ordre (sans conseil), le conseil non indépendant (rémunéré notamment par rétrocessions, sous conditions de transparence), et le conseil indépendant (rémunéré exclusivement par honoraires, sans rétrocessions). Le conseiller doit préciser explicitely au client sous quel régime il intervient, condition de la transparence exigée par le texte.

**La gouvernance des produits** oblige le concepteur d'un produit financier à définir un « marché cible » (profil de client auquel le produit est destiné) et impose au distributeur de vérifier la cohérence entre ce marché cible et le client réel avant toute vente — un garde-fou structurel contre la vente de produits inadaptés (mis-selling), qui a suivi les scandales de commercialisation abusive révélés après la crise de 2008.

**Le traitement des réclamations** suit un parcours en trois temps : réclamation auprès de l'agence ou du service dédié (accusé de réception sous 10 jours ouvrables, réponse sous deux mois maximum en règle générale), puis, en cas d'insatisfaction ou d'absence de réponse, saisine du médiateur bancaire compétent (gratuite pour le client), dont l'avis est rendu en principe sous 90 jours. Le client conserve toujours la possibilité, à tout moment, de saisir le juge.

**Le contentieux bancaire, en repère.** Lorsque la médiation échoue ou que le client saisit directement le juge, plusieurs règles structurent le contentieux. La **compétence juridictionnelle** revient en principe au tribunal judiciaire du domicile du défendeur pour un litige avec un particulier (le tribunal de commerce n'intervenant qu'entre commerçants ou pour un acte de commerce). L'action se prescrit en principe par **5 ans** à compter du jour où le titulaire du droit a connu ou aurait dû connaître les faits lui permettant d'agir (prescription civile de droit commun, art. 2224 du Code civil), sauf délai spécial plus court prévu par un texte particulier. En cas de contestation d'une opération de paiement, c'est à la **banque** de prouver que l'opération a été correctement authentifiée et exécutée, et non au client de prouver l'inverse — un renversement de la charge de la preuve protecteur pour le consommateur, sauf négligence grave démontrée de sa part.`,
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
    { id: "b6-fc-07", recto: "Quel tribunal est compétent pour un litige entre un particulier et sa banque ?", verso: "Le tribunal judiciaire du domicile du défendeur, en principe.", difficulte: "intermediaire" },
    { id: "b6-fc-08", recto: "Dans quel cas le tribunal de commerce est-il compétent pour un litige bancaire ?", verso: "Lorsque le litige oppose deux commerçants ou relève d'un acte de commerce.", difficulte: "avance" },
    { id: "b6-fc-09", recto: "Quel est le délai de prescription civile de droit commun ?", verso: "5 ans à compter du jour où le titulaire du droit a connu ou aurait dû connaître les faits (art. 2224 du Code civil).", difficulte: "intermediaire" },
    { id: "b6-fc-10", recto: "En cas de contestation d'une opération de paiement, qui doit prouver quoi ?", verso: "C'est à la banque de prouver que l'opération a été authentifiée et correctement exécutée, pas au client de prouver le contraire.", difficulte: "avance" },
    { id: "b6-fc-11", recto: "Le banquier est-il tenu d'une obligation de moyens ou de résultat pour son devoir de conseil ?", verso: "D'une obligation de moyens en principe (diligence raisonnable), mais d'une obligation de résultat plus stricte pour certaines opérations matérielles comme l'exécution d'un virement.", difficulte: "avance" },
    { id: "b6-fc-12", recto: "Quels sont les 3 niveaux de service distingués par MIF2 ?", verso: "Exécution simple sans conseil, conseil non indépendant (rétrocessions possibles sous conditions), conseil indépendant (honoraires exclusifs).", difficulte: "avance" },
    { id: "b6-fc-13", recto: "Sous quel délai le médiateur bancaire rend-il en principe son avis ?", verso: "90 jours.", difficulte: "intermediaire" },
    { id: "b6-fc-14", recto: "L'avis du médiateur bancaire est-il contraignant ?", verso: "Non, il n'est pas juridiquement contraignant, mais il est suivi dans l'immense majorité des cas.", difficulte: "intermediaire" },
    { id: "b6-fc-15", recto: "Qu'est-ce que le 'mis-selling' que la gouvernance des produits MIF2 cherche à prévenir ?", verso: "La vente de produits financiers inadaptés au profil réel du client.", difficulte: "intermediaire" },
    { id: "b6-fc-16", recto: "Quelle loi de 2001 a généralisé l'obligation de désigner un médiateur bancaire ?", verso: "La loi sur les nouvelles régulations économiques (loi NRE).", difficulte: "avance" },
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
    {
      id: "b6-qz-04",
      question: "Le tribunal compétent pour un litige entre un particulier et sa banque est en principe :",
      choix: ["Le tribunal de commerce systématiquement", "Le tribunal judiciaire du domicile du défendeur", "La Cour de cassation en premier ressort", "Le Conseil d'État"],
      bonneReponse: 1,
      explication: "Le tribunal de commerce n'intervient qu'entre commerçants ou pour un acte de commerce.",
      difficulte: "intermediaire",
    },
    {
      id: "b6-qz-05",
      question: "Le délai de prescription civile de droit commun est de :",
      choix: ["1 an", "2 ans", "5 ans", "10 ans"],
      bonneReponse: 2,
      explication: "Article 2224 du Code civil : 5 ans à compter de la connaissance des faits permettant d'agir.",
      difficulte: "intermediaire",
    },
    {
      id: "b6-qz-06",
      question: "En cas de contestation d'une opération de paiement, la charge de la preuve pèse en principe sur :",
      choix: ["Le client", "La banque", "Le médiateur", "L'ACPR"],
      bonneReponse: 1,
      explication: "C'est à la banque de prouver que l'opération a été authentifiée et correctement exécutée.",
      difficulte: "avance",
    },
    {
      id: "b6-qz-07",
      question: "Le banquier est en principe tenu, pour son devoir de conseil, d'une obligation :",
      choix: ["De résultat absolue", "De moyens", "Aucune obligation", "Uniquement morale, non juridique"],
      bonneReponse: 1,
      explication: "L'obligation de moyens impose une diligence raisonnable, sans garantir un résultat.",
      difficulte: "avance",
    },
    {
      id: "b6-qz-08",
      question: "Un conseil MIF2 dit 'indépendant' est rémunéré :",
      choix: ["Par des rétrocessions uniquement", "Exclusivement par des honoraires, sans rétrocessions", "Gratuitement pour le client", "Par l'AMF"],
      bonneReponse: 1,
      explication: "L'indépendance suppose l'absence de toute rétrocession de tiers.",
      difficulte: "intermediaire",
    },
    { id: "b6-qz-09", question: "L'avis du médiateur bancaire est-il juridiquement contraignant ?", choix: ["Oui, comme un jugement", "Non, mais il est suivi dans l'immense majorité des cas", "Oui, mais seulement pour l'ACPR", "Non, il n'a aucune valeur"], bonneReponse: 1, explication: "L'avis reste consultatif mais bénéficie d'une forte autorité pratique.", difficulte: "intermediaire" },
    { id: "b6-qz-10", question: "Le mis-selling désigne :", choix: ["Une vente légale et adaptée", "La vente de produits inadaptés au profil du client", "Un type de virement", "Une catégorie de client MIF2"], bonneReponse: 1, explication: "C'est précisément ce que la gouvernance des produits cherche à prévenir.", difficulte: "intermediaire" },
    { id: "b6-qz-11", question: "Une réclamation bancaire doit être accusée réception sous :", choix: ["24 heures", "10 jours ouvrables", "1 mois", "6 mois"], bonneReponse: 1, explication: "L'accusé de réception rapide fait partie du formalisme encadré du traitement des réclamations.", difficulte: "intermediaire" },
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
    {
      id: "b6-ex-02",
      titre: "Calculer un délai de prescription",
      enonce:
        "Un client découvre le 3 mars 2026 qu'une opération frauduleuse a été prélevée sur son compte le 15 janvier 2020, sans qu'il en ait eu connaissance avant cette découverte. En application de la prescription civile de droit commun (5 ans à compter de la connaissance des faits), son action est-elle encore recevable au 3 mars 2026 ?",
      corrige:
        "Oui : le point de départ de la prescription de droit commun n'est pas la date de l'opération elle-même (15 janvier 2020) mais la date à laquelle le titulaire du droit a connu ou aurait dû connaître les faits lui permettant d'agir, soit ici le 3 mars 2026. Le délai de 5 ans court donc à partir de cette date de découverte, jusqu'au 3 mars 2031 : l'action du client est parfaitement recevable en 2026. Ce mécanisme protège les victimes de fraudes découvertes tardivement, à condition qu'elles ne pouvaient raisonnablement pas en avoir connaissance plus tôt.",
      difficulte: "avance",
    },
    {
      id: "b6-ex-03",
      titre: "Qualifier l'obligation du banquier selon la situation",
      enonce:
        "Un client reproche à sa banque (1) d'avoir mal exécuté un virement en se trompant d'IBAN alors que les instructions étaient correctes, et (2) de lui avoir recommandé un placement qui a finalement perdu de la valeur en raison d'une baisse générale des marchés. Dans lequel de ces deux cas la responsabilité de la banque est-elle la plus facilement engagée, et pourquoi ?",
      corrige:
        "Le premier cas (erreur d'IBAN) relève d'une obligation de résultat : la banque devait exécuter le virement conformément aux instructions reçues, sans marge d'appréciation ; l'erreur d'exécution engage donc sa responsabilité de façon quasi automatique, sans que le client ait à démontrer une faute particulière au-delà du mauvais résultat constaté. Le second cas (perte de valeur d'un placement recommandé) relève d'une obligation de moyens : la banque n'est pas tenue de garantir la performance du placement, mais seulement d'avoir exercé un devoir de conseil diligent (test d'adéquation correctement réalisé, information claire sur les risques). Sa responsabilité ne sera engagée que si le client démontre un manquement dans le processus de conseil lui-même (produit inadapté à son profil, information insuffisante), pas simplement parce que le placement a perdu de la valeur.",
      difficulte: "avance",
    },
  ],
};
