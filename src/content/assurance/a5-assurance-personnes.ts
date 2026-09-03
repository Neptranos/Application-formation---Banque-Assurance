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
      { terme: "Garantie plancher (assurance-vie)", definition: "Garantie optionnelle d'un contrat en unités de compte qui assure, en cas de décès de l'assuré, le versement d'un capital au moins égal aux sommes versées, malgré une éventuelle baisse de valeur des supports." },
      { terme: "Invalidité (catégories 1, 2, 3)", definition: "Classification de la Sécurité sociale selon le degré de capacité de travail restante : catégorie 1 (capable d'exercer une activité rémunérée), catégorie 2 (incapable d'exercer toute profession), catégorie 3 (incapable de travailler et nécessitant l'aide d'une tierce personne)." },
      { terme: "Incapacité temporaire de travail (ITT)", definition: "Impossibilité temporaire d'exercer son activité professionnelle à la suite d'une maladie ou d'un accident, indemnisée par un contrat de prévoyance en complément des indemnités journalières de la Sécurité sociale." },
      { terme: "PEE (plan d'épargne entreprise)", definition: "Dispositif d'épargne salariale permettant aux salariés d'investir, avec un abondement possible de l'employeur, les sommes issues de l'intéressement ou de la participation, bloquées 5 ans sauf cas de déblocage anticipé." },
      { terme: "PER collectif (ex-PERCO)", definition: "Compartiment collectif du PER, alimenté par l'épargne salariale de l'entreprise, dédié à la constitution d'une épargne retraite avec sortie en capital ou en rente." },
      { terme: "Intéressement / participation", definition: "Dispositifs collectifs associant les salariés aux résultats ou à la performance de l'entreprise ; les sommes perçues peuvent être versées immédiatement (fiscalisées) ou placées sur un PEE/PER collectif (exonérées d'impôt sur le revenu sous conditions)." },
    ],
    approfondissement: `**La fiscalité de l'assurance-vie**, pilier de son attractivité, distingue le régime des rachats (impôt sur les seuls intérêts compris dans le retrait, avec un abattement annuel après 8 ans et un taux réduit au-delà de cette durée) du régime successoral (article 990 I du Code général des impôts pour les sommes versées avant 70 ans, avec un abattement par bénéficiaire, et article 757 B pour les versements après 70 ans, régime moins favorable). Cette dualité de régime justifie la recommandation classique d'ouvrir un contrat le plus tôt possible et de privilégier les versements avant 70 ans.

**Le devoir de conseil renforcé en assurance-vie**, sous le régime DDA, impose une analyse du profil investisseur (horizon de placement, tolérance au risque, connaissance des marchés financiers) avant toute recommandation d'allocation entre fonds en euros et unités de compte, avec traçabilité écrite de cette analyse.

**Les 4 compartiments de la retraite française** (repères utiles pour situer le PER) : le régime de base obligatoire par répartition, les régimes complémentaires obligatoires (également par répartition), l'épargne retraite collective d'entreprise (ex-PERCO, devenu PER collectif), et l'épargne retraite individuelle (PER individuel, ex-PERP/Madelin). Le PER a simplifié la portabilité entre ces compartiments individuel et collectif, un des objectifs premiers de la réforme PACTE.

**L'épargne salariale, un pont entre l'entreprise et l'épargne du salarié.** L'intéressement (facultatif, lié à la performance) et la participation (obligatoire au-delà de 50 salariés, liée aux bénéfices) permettent aux salariés de percevoir une part de la performance de l'entreprise. Placées sur un PEE (blocage 5 ans) ou un PER collectif (blocage jusqu'à la retraite), ces sommes bénéficient d'une exonération d'impôt sur le revenu (les prélèvements sociaux restant dus), à la différence d'un versement immédiat en espèces qui serait fiscalisé comme un salaire. L'employeur peut compléter ces versements par un **abondement**, plafonné réglementairement, qui constitue un complément de rémunération particulièrement avantageux fiscalement pour le salarié.

**Les catégories d'invalidité, un repère indispensable pour la prévoyance.** La Sécurité sociale classe l'invalidité en trois catégories dont dépend le niveau de pension versée : catégorie 1 (capacité de travail réduite d'au moins deux tiers mais activité rémunérée possible), catégorie 2 (incapacité à exercer une profession quelconque), catégorie 3 (incapacité totale nécessitant l'aide d'une tierce personne pour les actes de la vie courante, avec une majoration de pension). Un contrat de prévoyance individuelle vient compléter ces pensions souvent insuffisantes pour maintenir le niveau de vie antérieur, en particulier pour les indépendants et professions libérales.`,
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
    { id: "a5-fc-09", recto: "Qu'est-ce que la garantie plancher en assurance-vie ?", verso: "Une garantie optionnelle assurant, en cas de décès, un capital au moins égal aux sommes versées malgré la baisse de valeur des UC.", difficulte: "avance" },
    { id: "a5-fc-10", recto: "Quelles sont les 3 catégories d'invalidité de la Sécurité sociale ?", verso: "Catégorie 1 (activité rémunérée possible), catégorie 2 (incapacité à exercer toute profession), catégorie 3 (incapacité totale avec aide d'une tierce personne).", difficulte: "avance" },
    { id: "a5-fc-11", recto: "Qu'est-ce que l'ITT en prévoyance ?", verso: "L'incapacité temporaire de travail, indemnisée en complément des indemnités journalières de la Sécurité sociale.", difficulte: "intermediaire" },
    { id: "a5-fc-12", recto: "Différence entre intéressement et participation ?", verso: "L'intéressement est facultatif et lié à la performance ; la participation est obligatoire au-delà de 50 salariés et liée aux bénéfices.", difficulte: "intermediaire" },
    { id: "a5-fc-13", recto: "Combien de temps les sommes sont-elles bloquées sur un PEE ?", verso: "5 ans, sauf cas de déblocage anticipé prévus par la loi.", difficulte: "intermediaire" },
    { id: "a5-fc-14", recto: "Qu'est-ce que l'abondement de l'employeur ?", verso: "Un complément de versement de l'employeur sur le PEE/PER collectif du salarié, plafonné réglementairement, fiscalement avantageux.", difficulte: "avance" },
    { id: "a5-fc-15", recto: "Les prélèvements sociaux sont-ils dus sur les sommes de participation placées sur un PEE ?", verso: "Oui, seul l'impôt sur le revenu est exonéré sous conditions, pas les prélèvements sociaux.", difficulte: "avance" },
    { id: "a5-fc-16", recto: "Pourquoi la prévoyance individuelle est-elle particulièrement importante pour les indépendants ?", verso: "Parce qu'ils sont moins bien couverts par le régime obligatoire que les salariés.", difficulte: "intermediaire" },
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
    {
      id: "a5-qz-04",
      question: "La garantie plancher en assurance-vie protège en cas de :",
      choix: ["Rachat total", "Décès de l'assuré avec des UC en moins-value", "Retard de paiement de la prime", "Divorce"],
      bonneReponse: 1,
      explication: "Elle garantit un capital minimal au décès, même si les unités de compte ont perdu de la valeur.",
      difficulte: "avance",
    },
    {
      id: "a5-qz-05",
      question: "Une personne classée en invalidité catégorie 2 par la Sécurité sociale est :",
      choix: ["Capable d'exercer une activité rémunérée", "Incapable d'exercer une profession quelconque", "Nécessite obligatoirement l'aide d'une tierce personne", "Non reconnue invalide"],
      bonneReponse: 1,
      explication: "La catégorie 2 correspond à l'incapacité d'exercer toute profession, sans nécessairement requérir l'aide d'un tiers (catégorie 3).",
      difficulte: "avance",
    },
    {
      id: "a5-qz-06",
      question: "La participation aux résultats de l'entreprise est obligatoire :",
      choix: ["Dans toutes les entreprises sans exception", "Au-delà de 50 salariés", "Uniquement dans les entreprises cotées", "Jamais, elle est toujours facultative"],
      bonneReponse: 1,
      explication: "Contrairement à l'intéressement (toujours facultatif), la participation devient obligatoire à partir de 50 salariés.",
      difficulte: "intermediaire",
    },
    {
      id: "a5-qz-07",
      question: "Les sommes de participation placées sur un PEE sont exonérées :",
      choix: ["D'impôt sur le revenu et de prélèvements sociaux", "D'impôt sur le revenu uniquement, sous conditions", "De toute fiscalité pendant 5 ans puis taxées rétroactivement", "Uniquement pour les cadres"],
      bonneReponse: 1,
      explication: "Seul l'impôt sur le revenu est exonéré sous conditions ; les prélèvements sociaux restent dus.",
      difficulte: "avance",
    },
    { id: "a5-qz-08", question: "Le capital versé sur un contrat d'assurance-vie (hors intérêts) est-il taxé lors d'un rachat ?", choix: ["Oui, toujours", "Non, jamais", "Oui après 8 ans", "Oui avant 4 ans"], bonneReponse: 1, explication: "Seule la part d'intérêts/plus-values comprise dans le retrait est imposable, jamais le capital versé.", difficulte: "intermediaire" },
    { id: "a5-qz-09", question: "Le PER individuel a remplacé notamment :", choix: ["Le Livret A", "Le PERP et le contrat Madelin", "Le PEA", "L'assurance-vie"], bonneReponse: 1, explication: "Le PER unifie les anciens dispositifs individuels d'épargne retraite.", difficulte: "fondamental" },
    { id: "a5-qz-10", question: "Le 100 % Santé garantit un reste à charge nul pour un panier de soins défini en :", choix: ["Chirurgie esthétique", "Optique, dentaire, audiologie", "Cures thermales", "Médecines douces"], bonneReponse: 1, explication: "Ce sont les trois postes ciblés par le dispositif 100 % Santé.", difficulte: "intermediaire" },
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
    {
      id: "a5-ex-02",
      titre: "Calculer un rachat net d'assurance-vie après 8 ans",
      enonce:
        "Un souscripteur célibataire, dont le contrat a plus de 8 ans, effectue un rachat partiel dont la part d'intérêts (produits) s'élève à 6 000 €. Il n'a jamais effectué de rachat auparavant, il bénéficie donc de son abattement annuel complet de 4 600 €. Le taux d'imposition applicable au-delà de l'abattement est, à titre illustratif, de 7,5 % (primes versées inférieures à 150 000 €), auquel s'ajoutent 17,2 % de prélèvements sociaux sur la totalité des intérêts. Calculez le montant net perçu par le souscripteur.",
      corrige:
        "Base taxable à l'impôt sur le revenu après abattement : 6 000 € − 4 600 € = 1 400 €. Impôt sur le revenu = 1 400 € × 7,5 % = 105 €. Prélèvements sociaux, dus sur la totalité des intérêts sans abattement : 6 000 € × 17,2 % = 1 032 €. Total des prélèvements = 105 € + 1 032 € = 1 137 €. Montant net perçu sur la part d'intérêts = 6 000 € − 1 137 € = 4 863 € (auquel s'ajoute intégralement la part de capital rachetée, jamais taxée). L'abattement annuel réduit donc significativement la fiscalité par rapport à un rachat avant 8 ans, qui aurait été taxé au PFU de 30 % sans aucun abattement.",
      difficulte: "avance",
    },
    {
      id: "a5-ex-03",
      titre: "Calculer un capital décès net d'abattement (art. 990 I)",
      enonce:
        "Un assuré décède en laissant un contrat d'assurance-vie alimenté exclusivement par des primes versées avant ses 70 ans. Le capital décès est de 300 000 €, à répartir entre deux bénéficiaires désignés à parts égales. Calculez, pour chaque bénéficiaire, la part soumise au prélèvement de l'article 990 I après application de l'abattement de 152 500 € par bénéficiaire.",
      corrige:
        "Chaque bénéficiaire reçoit 300 000 / 2 = 150 000 €. L'abattement de l'article 990 I étant de 152 500 € par bénéficiaire, et la part reçue (150 000 €) étant inférieure à cet abattement, chaque bénéficiaire perçoit sa part en totale franchise de prélèvement : 150 000 € nets pour chacun, sans aucune taxation au titre de l'article 990 I. Si le capital avait été plus élevé ou réparti entre un seul bénéficiaire, la part excédant 152 500 € aurait été taxée à 20 % puis 31,25 % au-delà d'un second seuil.",
      difficulte: "avance",
    },
  ],
};
