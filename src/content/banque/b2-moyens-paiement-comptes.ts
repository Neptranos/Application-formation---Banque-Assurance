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
  ],
};
