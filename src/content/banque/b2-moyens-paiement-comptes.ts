import type { ModuleFormation } from "@/content/types";

export const b2: ModuleFormation = {
  id: "b2",
  domaine: "banque",
  ordre: 2,
  titre: "Les comptes et les moyens de paiement",
  description:
    "Le compte de dépôt, la carte, le virement, le prélèvement et le chèque : le socle quotidien de la relation bancaire, et sa régulation (DSP2).",
  cours: {
    fondamentaux: `Le **compte de dépôt** (ou compte courant) est le contrat par lequel une banque enregistre les opérations de son client : dépôts, retraits, virements, prélèvements. Toute personne physique ou morale domiciliée en France dispose du **droit au compte** (art. L312-1 CMF) : en cas de refus d'ouverture par plusieurs banques, la Banque de France peut désigner d'office un établissement, qui doit alors fournir des services bancaires de base gratuits.

Les principaux **moyens de paiement** encadrés par le Code monétaire et financier sont :

- le **virement**, ordre de transférer des fonds d'un compte à un autre (ponctuel ou permanent) ;
- le **prélèvement**, initié par le créancier sur autorisation (mandat) du débiteur — la norme européenne **SEPA** l'a harmonisé ;
- la **carte bancaire**, moyen de paiement et parfois de retrait, avec ou sans fonction crédit ;
- le **chèque**, moyen de paiement en déclin mais toujours encadré strictement (délai de présentation, provision, interdiction bancaire en cas de rejet) ;
- les **espèces**, dont l'usage est plafonné pour les paiements entre professionnels et particuliers au-delà de certains seuils, dans une logique de lutte anti-blanchiment.

La directive européenne **DSP2** (2018) a modernisé ce cadre : elle impose l'**authentification forte du client (SCA)** pour la plupart des paiements en ligne, et ouvre l'accès aux données de compte à des tiers agréés (agrégateurs, initiateurs de paiement) via des interfaces sécurisées (API), sous réserve du consentement explicite du client.`,
    definitionsCles: [
      { terme: "Compte de dépôt", definition: "Contrat bancaire enregistrant les opérations courantes du client ; base de la relation bancaire quotidienne." },
      { terme: "Droit au compte", definition: "Droit, pour toute personne dépourvue de compte, d'obtenir l'ouverture d'un compte assorti de services bancaires de base gratuits, via désignation d'un établissement par la Banque de France en cas de refus (art. L312-1 CMF)." },
      { terme: "IBAN / BIC", definition: "Identifiants internationaux du compte (IBAN) et de la banque (BIC), harmonisés au niveau européen dans le cadre du SEPA." },
      { terme: "Prélèvement SEPA", definition: "Ordre de paiement récurrent ou ponctuel initié par le créancier sur la base d'un mandat signé par le débiteur, harmonisé dans toute la zone SEPA." },
      { terme: "DSP2", definition: "Directive sur les services de paiement (UE 2015/2366), transposée en 2018, qui impose l'authentification forte et ouvre l'accès aux comptes à des tiers de confiance agréés (open banking)." },
      { terme: "Authentification forte (SCA)", definition: "Vérification de l'identité du payeur combinant au moins deux éléments indépendants parmi : ce qu'il sait (code), ce qu'il possède (téléphone), ce qu'il est (biométrie)." },
      { terme: "Interdit bancaire", definition: "Interdiction d'émettre des chèques prononcée après rejet d'un chèque pour défaut de provision non régularisé, avec inscription au Fichier central des chèques (FCC) tenu par la Banque de France." },
      { terme: "Frais d'incident bancaire", definition: "Frais facturés par la banque en cas d'anomalie de fonctionnement du compte (rejet de prélèvement, dépassement de découvert autorisé) ; plafonnés par la réglementation, notamment pour les clientèles fragiles." },
      { terme: "Établissement de paiement", definition: "Prestataire agréé pour fournir des services de paiement sans nécessairement recevoir de dépôts remboursables du public ni octroyer de crédits classiques." },
      { terme: "Open banking", definition: "Ouverture régulée de l'accès aux données de compte à des tiers agréés (agrégateurs, initiateurs de paiement) via des API sécurisées, avec le consentement du client, introduite par DSP2." },
      { terme: "Carte à débit immédiat", definition: "Carte bancaire dont chaque paiement est débité du compte au fil de l'eau, dans les jours suivant l'opération." },
      { terme: "Carte à débit différé", definition: "Carte bancaire dont l'ensemble des paiements du mois est prélevé en une seule fois, généralement en fin de mois, sur une date convenue avec la banque." },
      { terme: "Opposition sur moyen de paiement", definition: "Démarche par laquelle le titulaire fait bloquer un moyen de paiement perdu, volé ou utilisé frauduleusement, afin d'en stopper l'utilisation." },
      { terme: "Délai légal d'exécution d'un virement SEPA", definition: "Délai maximal d'un jour ouvré (J+1) entre la réception de l'ordre par la banque du payeur et la mise à disposition des fonds sur le compte du bénéficiaire, pour un virement standard en euros au sein de l'UE." },
      { terme: "Monnaie électronique", definition: "Valeur monétaire stockée sous forme électronique, représentative d'une créance sur l'émetteur, acceptée comme moyen de paiement par des tiers (ex. cartes prépayées, portefeuilles électroniques)." },
    ],
    approfondissement: `**La chaîne de traitement d'un virement SEPA** passe par un système de compensation interbancaire (en France, notamment via la plateforme STET) qui échange les ordres entre banques avant leur règlement final, généralement en système de règlement brut temps réel pour les montants les plus importants ou les virements instantanés (SCT Inst), disponibles 24h/24 et 7j/7 en quelques secondes.

**La responsabilité en cas de fraude** est un point clé du droit des paiements : sauf négligence grave du client (par exemple communication de ses codes secrets), la banque doit rembourser une opération de paiement non autorisée, en principe sous un jour ouvré après signalement (art. L133-18 CMF). Cette protection a été renforcée par DSP2, qui responsabilise davantage les émetteurs de moyens de paiement en cas de défaut d'authentification forte.

**Les services bancaires de base**, obtenus via le droit au compte, comprennent notamment : ouverture, tenue et clôture du compte, une carte de paiement à autorisation systématique, deux RIB par an, la domiciliation de virements, des moyens de consultation à distance, un nombre limité de chèques de banque, et deux formules d'alerte sur le niveau du solde — le tout sans frais.

**L'offre spécifique clientèle fragile (OCF)**, imposée par la loi, plafonne les frais d'incidents pour les clients en situation de fragilité financière identifiée par la banque (accumulation d'incidents, bénéficiaires de minima sociaux, etc.).`,
    historique: `- **1865-1875** : apparition du chèque moderne en France.
- **1967-1975** : généralisation du compte bancaire et de la mensualisation des salaires, essor de la bancarisation de masse.
- **1984** : consécration légale du droit au compte.
- **2001-2002** : généralisation de la carte à puce et de la norme EMV en France, réduisant fortement la fraude.
- **2007** : première directive sur les services de paiement (DSP1), premier cadre européen harmonisé.
- **2015-2018** : DSP2, ouverture des comptes aux tiers de confiance (open banking) et authentification forte.
- **2010s-2020s** : essor du paiement instantané (SCT Inst) et du paiement mobile sans contact.`,
    evolutionsJuridiques: [
      { date: "1984", evenement: "Consécration du droit au compte", texte: "Toute personne domiciliée en France peut obtenir l'ouverture d'un compte, y compris via désignation d'office par la Banque de France." },
      { date: "2009", evenement: "Transposition de la DSP1", texte: "Premier cadre juridique harmonisé des services de paiement au niveau européen." },
      { date: "2013-2014", evenement: "Loi bancaire française et plafonnement des frais", texte: "Encadrement renforcé des frais d'incidents bancaires, en particulier pour les clientèles fragiles." },
      { date: "2018", evenement: "Transposition de la DSP2", texte: "Authentification forte obligatoire et ouverture régulée de l'accès aux comptes (open banking)." },
      { date: "2020", evenement: "Généralisation de l'authentification forte pour le e-commerce", texte: "Application progressive de la SCA aux paiements par carte en ligne en Europe." },
    ],
    citations: [
      {
        texte:
          "Toute personne physique ou morale domiciliée en France, dépourvue d'un compte de dépôt, a droit à l'ouverture d'un tel compte.",
        auteur: "Code monétaire et financier",
        contexte: "Article L312-1, fondement du droit au compte.",
      },
    ],
    sourcesReference: [
      "Code monétaire et financier, Livre I et III (moyens de paiement)",
      "Directive (UE) 2015/2366 (DSP2)",
      "Banque de France — Droit au compte, guides pratiques",
      "Fédération bancaire française — publications pédagogiques",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "b2-fc-01", recto: "Qu'est-ce que le droit au compte ?", verso: "Le droit d'obtenir l'ouverture d'un compte avec services bancaires de base gratuits, via désignation d'un établissement par la Banque de France en cas de refus.", difficulte: "fondamental" },
    { id: "b2-fc-02", recto: "Que signifie DSP2 ?", verso: "Directive sur les services de paiement n°2, qui impose l'authentification forte et ouvre l'accès aux comptes à des tiers agréés.", difficulte: "fondamental" },
    { id: "b2-fc-03", recto: "Quels sont les 3 facteurs possibles de l'authentification forte (SCA) ?", verso: "Ce que je sais (code), ce que je possède (téléphone), ce que je suis (biométrie) — au moins 2 combinés.", difficulte: "intermediaire" },
    { id: "b2-fc-04", recto: "Quel fichier recense les interdits bancaires liés aux chèques ?", verso: "Le Fichier central des chèques (FCC), tenu par la Banque de France.", difficulte: "intermediaire" },
    { id: "b2-fc-05", recto: "Qu'est-ce que le SCT Inst ?", verso: "Le virement instantané SEPA, exécuté en quelques secondes, disponible 24h/24 et 7j/7.", difficulte: "intermediaire" },
    { id: "b2-fc-06", recto: "En cas de fraude sans négligence grave du client, sous quel délai la banque doit-elle rembourser ?", verso: "En principe un jour ouvré après signalement (art. L133-18 CMF).", difficulte: "avance" },
    { id: "b2-fc-07", recto: "Qu'est-ce que l'offre clientèle fragile (OCF) ?", verso: "Une offre bancaire à frais d'incidents plafonnés, destinée aux clients identifiés en situation de fragilité financière.", difficulte: "avance" },
    { id: "b2-fc-08", recto: "Qu'est-ce qu'un mandat de prélèvement SEPA ?", verso: "L'autorisation signée par le débiteur permettant à un créancier d'initier des prélèvements sur son compte.", difficulte: "fondamental" },
    { id: "b2-fc-09", recto: "Différence entre carte à débit immédiat et carte à débit différé ?", verso: "Le débit immédiat prélève chaque opération au fil de l'eau ; le débit différé regroupe tous les paiements du mois en un seul prélèvement.", difficulte: "fondamental" },
    { id: "b2-fc-10", recto: "Quel est le délai légal d'exécution d'un virement SEPA standard ?", verso: "1 jour ouvré (J+1) entre la réception de l'ordre et la mise à disposition des fonds au bénéficiaire.", difficulte: "intermediaire" },
    { id: "b2-fc-11", recto: "Que doit faire un client qui perd sa carte bancaire ?", verso: "Faire opposition immédiatement, pour bloquer toute utilisation frauduleuse ultérieure.", difficulte: "fondamental" },
    { id: "b2-fc-12", recto: "Qu'est-ce que la monnaie électronique ?", verso: "Une valeur monétaire stockée électroniquement, représentative d'une créance sur l'émetteur, acceptée comme moyen de paiement par des tiers.", difficulte: "intermediaire" },
    { id: "b2-fc-13", recto: "Un client reste-t-il responsable des opérations effectuées après avoir fait opposition ?", verso: "Non, en principe, sauf fraude de sa part antérieure à l'opposition ; celle-ci arrête sa responsabilité pour les opérations postérieures.", difficulte: "avance" },
    { id: "b2-fc-14", recto: "Quelle norme technique a réduit fortement la fraude à la carte bancaire en France au début des années 2000 ?", verso: "La norme EMV (carte à puce), généralisée en 2001-2002.", difficulte: "intermediaire" },
    { id: "b2-fc-15", recto: "Quels sont les 2 principaux systèmes de compensation utilisés pour les virements SEPA en France ?", verso: "La plateforme STET, notamment, pour l'échange des ordres entre banques avant règlement final.", difficulte: "avance" },
    { id: "b2-fc-16", recto: "L'usage des espèces entre professionnel et particulier est-il plafonné ?", verso: "Oui, au-delà de certains seuils, dans une logique de lutte anti-blanchiment.", difficulte: "intermediaire" },
    { id: "b2-fc-17", recto: "Combien de RIB par an la banque doit-elle fournir gratuitement dans le cadre des services bancaires de base ?", verso: "Deux RIB par an.", difficulte: "avance" },
    { id: "b2-fc-18", recto: "Qu'est-ce qu'une carte à autorisation systématique ?", verso: "Une carte qui vérifie la disponibilité du solde avant chaque paiement, empêchant tout dépassement ; fournie dans le cadre des services bancaires de base.", difficulte: "intermediaire" },
    { id: "b2-fc-19", recto: "Quel article du CMF impose le remboursement rapide d'une fraude sans négligence grave du client ?", verso: "L'article L133-18.", difficulte: "avance" },
    { id: "b2-fc-20", recto: "Le chèque est-il un moyen de paiement en croissance ou en déclin en France ?", verso: "En déclin, mais toujours strictement encadré (provision, délai de présentation, interdiction bancaire).", difficulte: "fondamental" },
    { id: "b2-fc-21", recto: "Quelle directive européenne a créé le premier cadre harmonisé des services de paiement, avant DSP2 ?", verso: "La DSP1 (2007).", difficulte: "intermediaire" },
    { id: "b2-fc-22", recto: "Qu'est-ce qu'un initiateur de paiement, au sens DSP2 ?", verso: "Un tiers agréé qui peut, avec le consentement du client, initier un virement directement depuis son compte bancaire sans passer par une carte.", difficulte: "avance" },
    { id: "b2-fc-23", recto: "Qu'est-ce qu'un agrégateur de comptes, au sens DSP2 ?", verso: "Un tiers agréé qui, avec le consentement du client, peut consulter et regrouper les informations de plusieurs comptes bancaires en un seul endroit.", difficulte: "avance" },
    { id: "b2-fc-24", recto: "Une carte prépayée relève-t-elle de la monnaie électronique ?", verso: "Oui, c'est un exemple typique de support de monnaie électronique.", difficulte: "intermediaire" },
    { id: "b2-fc-25", recto: "Le virement est-il un ordre initié par le débiteur ou le créancier ?", verso: "Par le débiteur (le payeur), à la différence du prélèvement initié par le créancier sur mandat.", difficulte: "fondamental" },
    { id: "b2-fc-26", recto: "Combien de formules d'alerte sur le solde la banque doit-elle proposer gratuitement dans les services bancaires de base ?", verso: "Deux formules d'alerte.", difficulte: "avance" },
  ],
  quiz: [
    {
      id: "b2-qz-01",
      question: "Le droit au compte permet, en cas de refus d'ouverture, de :",
      choix: [
        "Saisir le tribunal de commerce",
        "Demander à la Banque de France de désigner un établissement",
        "Ouvrir automatiquement un compte auprès de la Banque de France",
        "Porter plainte auprès de l'ACPR",
      ],
      bonneReponse: 1,
      explication: "La Banque de France peut désigner d'office un établissement tenu d'ouvrir un compte avec services bancaires de base gratuits.",
      difficulte: "fondamental",
    },
    {
      id: "b2-qz-02",
      question: "La DSP2 a notamment introduit :",
      choix: [
        "La suppression du chèque en France",
        "L'authentification forte du client et l'open banking",
        "La gratuité obligatoire de toutes les cartes bancaires",
        "La fin du plafonnement des paiements en espèces",
      ],
      bonneReponse: 1,
      explication: "La DSP2 impose la SCA et régule l'accès des tiers agréés aux données de compte.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-03",
      question: "En cas d'opération de paiement non autorisée signalée par le client, sans négligence grave de sa part, la banque doit en principe rembourser :",
      choix: ["Sous 1 jour ouvré", "Sous 1 mois", "Sous 70 jours", "Jamais avant enquête complète"],
      bonneReponse: 0,
      explication: "L'article L133-18 du CMF impose un remboursement rapide, en principe le jour ouvrable suivant le signalement.",
      difficulte: "avance",
    },
    {
      id: "b2-qz-04",
      question: "Le SCT Inst désigne :",
      choix: ["Un virement instantané SEPA disponible 24h/24", "Un chèque certifié", "Un prélèvement automatique unique", "Une carte de paiement internationale"],
      bonneReponse: 0,
      explication: "Le SEPA Credit Transfer Instant permet un virement exécuté en quelques secondes, en continu.",
      difficulte: "fondamental",
    },
    {
      id: "b2-qz-05",
      question: "Le délai légal d'exécution d'un virement SEPA standard est de :",
      choix: ["Immédiat obligatoirement", "1 jour ouvré", "5 jours ouvrés", "1 mois"],
      bonneReponse: 1,
      explication: "J+1 est le délai maximal légal pour un virement SEPA standard en euros au sein de l'UE.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-06",
      question: "Une carte à débit différé :",
      choix: [
        "Prélève chaque opération immédiatement",
        "Regroupe l'ensemble des paiements du mois en un seul prélèvement",
        "Ne peut jamais être utilisée à l'étranger",
        "Est interdite en France"
      ],
      bonneReponse: 1,
      explication: "Le débit différé cumule les opérations et les prélève en une fois, en général en fin de mois.",
      difficulte: "fondamental",
    },
    {
      id: "b2-qz-07",
      question: "Après une opposition sur carte bancaire, le client reste-t-il responsable des opérations postérieures ?",
      choix: ["Oui, systématiquement", "Non, sauf fraude de sa part antérieure à l'opposition", "Oui, pendant encore 30 jours", "Cela dépend uniquement du montant"],
      bonneReponse: 1,
      explication: "L'opposition arrête en principe la responsabilité du titulaire pour les opérations réalisées après son signalement.",
      difficulte: "avance",
    },
    {
      id: "b2-qz-08",
      question: "La norme EMV (carte à puce), généralisée en France au début des années 2000, a eu pour effet :",
      choix: ["D'augmenter la fraude", "De réduire fortement la fraude à la carte bancaire", "De supprimer le chèque", "De créer le SEPA"],
      bonneReponse: 1,
      explication: "La sécurisation par puce et code confidentiel a nettement réduit la fraude par rapport à la piste magnétique seule.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-09",
      question: "Parmi les services bancaires de base gratuits obtenus via le droit au compte figure :",
      choix: [
        "Une carte de crédit renouvelable",
        "Une carte de paiement à autorisation systématique",
        "Un chéquier illimité",
        "Un prêt immobilier"
      ],
      bonneReponse: 1,
      explication: "La carte à autorisation systématique, qui empêche tout dépassement de solde, fait partie du socle gratuit.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-10",
      question: "L'usage des espèces entre un professionnel et un particulier est :",
      choix: ["Totalement libre et illimité", "Plafonné au-delà de certains seuils", "Interdit dans tous les cas", "Réservé aux transactions immobilières"],
      bonneReponse: 1,
      explication: "Le plafonnement des paiements en espèces s'inscrit dans la logique de lutte anti-blanchiment.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-11",
      question: "Le virement est initié par :",
      choix: ["Le créancier", "Le débiteur (payeur)", "La Banque de France systématiquement", "L'AMF"],
      bonneReponse: 1,
      explication: "Contrairement au prélèvement (initié par le créancier), le virement est déclenché par le payeur.",
      difficulte: "fondamental",
    },
    {
      id: "b2-qz-12",
      question: "Un initiateur de paiement agréé au sens DSP2 peut :",
      choix: [
        "Initier un virement depuis le compte du client avec son consentement",
        "Modifier unilatéralement les conditions générales de la banque",
        "Émettre de la monnaie fiduciaire",
        "Se substituer à l'ACPR"
      ],
      bonneReponse: 0,
      explication: "C'est l'un des deux grands rôles ouverts par l'open banking, avec l'agrégation de comptes.",
      difficulte: "avance",
    },
    {
      id: "b2-qz-13",
      question: "Un agrégateur de comptes agréé peut :",
      choix: [
        "Consulter et regrouper les informations de plusieurs comptes avec le consentement du client",
        "Bloquer unilatéralement un compte",
        "Modifier le solde du compte",
        "Remplacer le rôle de l'ACPR"
      ],
      bonneReponse: 0,
      explication: "L'agrégation de comptes est un service d'information, pas un service de paiement à proprement parler.",
      difficulte: "avance",
    },
    {
      id: "b2-qz-14",
      question: "Une carte prépayée est un support de :",
      choix: ["Crédit renouvelable", "Monnaie électronique", "Épargne réglementée", "Assurance emprunteur"],
      bonneReponse: 1,
      explication: "La carte prépayée est l'exemple le plus courant de support de monnaie électronique.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-15",
      question: "La DSP1, premier cadre harmonisé des services de paiement en Europe, date de :",
      choix: ["1999", "2007", "2015", "2020"],
      bonneReponse: 1,
      explication: "La directive DSP1 de 2007 précède la DSP2, transposée en 2018.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-16",
      question: "Le chèque reste encadré par des règles strictes concernant notamment :",
      choix: ["Le délai de présentation et la provision", "Le taux d'intérêt applicable", "Le plafond de l'épargne réglementée", "Le taux d'usure"],
      bonneReponse: 0,
      explication: "Le chèque doit être provisionné et présenté dans un délai encadré, sous peine de rejet et d'interdiction bancaire.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-17",
      question: "Un rejet de prélèvement non régularisé peut entraîner :",
      choix: ["Une interdiction bancaire automatique", "Des frais d'incident, encadrés notamment pour les clientèles fragiles", "La clôture immédiate du compte sans préavis", "Aucune conséquence"],
      bonneReponse: 1, explication: "Le rejet de prélèvement génère des frais d'incident, plafonnés pour les clients OCF ; il ne déclenche pas d'interdiction bancaire (spécifique au chèque).",
      difficulte: "intermediaire",
    },
    {
      id: "b2-qz-18",
      question: "Un ordre de virement passé après l'heure limite de traitement (« cut-off ») de la banque est considéré comme reçu :",
      choix: ["Immédiatement quand même", "Le jour ouvré suivant", "Une semaine plus tard automatiquement", "Jamais"],
      bonneReponse: 1,
      explication: "Le décompte du délai légal d'exécution démarre à la réception effective de l'ordre selon les horaires de traitement de la banque.",
      difficulte: "avance",
    },
  ],
  exercices: [
    {
      id: "b2-ex-01",
      titre: "Mobiliser le droit au compte",
      enonce:
        "Un client s'est vu refuser l'ouverture d'un compte par trois banques successives. Décrivez la procédure qu'il peut engager et les services minimums qu'il obtiendra une fois le compte ouvert.",
      corrige:
        "Le client doit demander à l'une des banques ayant refusé de lui remettre une attestation de refus, puis saisir la Banque de France (en ligne, en agence ou par courrier) avec les pièces justificatives d'identité et de domicile. La Banque de France désigne alors un établissement dans un délai réglementaire, qui est tenu d'ouvrir le compte et de fournir gratuitement les services bancaires de base : tenue de compte, carte à autorisation systématique, RIB, domiciliation de virements, consultation à distance, etc.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-ex-02",
      titre: "Calculer une date d'exécution de virement",
      enonce:
        "Un client passe un ordre de virement SEPA standard un mardi à 16h (avant l'heure limite de traitement fixée par sa banque). En appliquant le délai légal maximal de J+1 ouvré, à quelle date au plus tard le bénéficiaire doit-il disposer des fonds si le mercredi n'est pas un jour férié ?",
      corrige:
        "Le délai légal maximal étant de 1 jour ouvré à compter de la réception de l'ordre, et l'ordre étant reçu le mardi dans les délais de traitement de la banque, les fonds doivent être mis à disposition du bénéficiaire au plus tard le mercredi (J+1). Si l'ordre avait été passé après l'heure limite de traitement (« cut-off »), il aurait été considéré comme reçu le jour ouvré suivant, décalant d'autant le délai d'exécution.",
      difficulte: "intermediaire",
    },
    {
      id: "b2-ex-03",
      titre: "Calculer des frais d'incidents et le plafond OCF",
      enonce:
        "Un client identifié en situation de fragilité financière (offre clientèle fragile) subit dans le mois 3 rejets de prélèvement facturés 8 € chacun par sa banque avant plafonnement. Sachant que l'OCF plafonne les frais d'incidents à un montant mensuel réduit fixé par la réglementation, ce client paiera-t-il l'intégralité de 24 € (3 × 8 €) ?",
      corrige:
        "Non : dans le cadre de l'offre clientèle fragile, les frais d'incidents sont plafonnés à un montant mensuel (et annuel) réduit fixé par la réglementation, très inférieur au tarif standard. La banque doit donc appliquer ce plafond spécifique et non le tarif de 8 € par incident habituellement facturé : le montant exact du plafond doit être vérifié dans la grille tarifaire en vigueur, mais le principe à retenir est que le cumul des frais d'incidents d'un client OCF ne peut jamais dépasser ce plafond réglementaire, quel que soit le nombre d'incidents survenus dans le mois.",
      difficulte: "avance",
    },
    {
      id: "b2-ex-04",
      titre: "Conseiller le bon type de carte",
      enonce:
        "Un client indépendant avec des revenus irréguliers en cours de mois souhaite éviter les découverts liés à des paiements imprévus. Un salarié avec un salaire fixe mensuel préfère lisser sa vision de trésorerie. Quel type de carte (débit immédiat ou différé) recommandez-vous à chacun, et pourquoi ?",
      corrige:
        "Pour l'indépendant aux revenus irréguliers, une carte à débit immédiat est plus prudente : chaque paiement est débité au fil de l'eau, ce qui limite le risque de découvert massif en fin de mois si la trésorerie est tendue à un moment donné. Pour le salarié au revenu fixe et prévisible, une carte à débit différé peut être préférée : elle regroupe les paiements du mois en un seul prélèvement, simplifiant le suivi budgétaire, sans risque particulier puisque le salaire mensuel couvre par construction l'ensemble des dépenses du mois.",
      difficulte: "fondamental",
    },
  ],
};
