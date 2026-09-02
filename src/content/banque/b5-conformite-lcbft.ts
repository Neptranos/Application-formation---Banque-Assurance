import type { ModuleFormation } from "@/content/types";

export const b5: ModuleFormation = {
  id: "b5",
  domaine: "banque",
  ordre: 5,
  titre: "Conformité bancaire : LCB-FT, RGPD et secret bancaire",
  description:
    "Les obligations qui protègent le système financier et le client : lutte contre le blanchiment, protection des données personnelles, secret bancaire.",
  cours: {
    fondamentaux: `La **conformité** désigne l'ensemble des dispositifs qu'une banque met en place pour respecter la loi et la déontologie de la profession. Trois piliers structurent ce module :

1. La **lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT)** : chaque banque doit connaître son client (**KYC — Know Your Customer**), évaluer le risque qu'il présente, surveiller ses opérations et déclarer à **Tracfin** (cellule de renseignement financier française) toute opération suspecte.
2. Le **secret bancaire** (art. L511-33 CMF) : les banques sont tenues à une obligation de discrétion sur les informations concernant leurs clients, opposable aux tiers mais **levée** dans certains cas prévus par la loi (administration fiscale, juge pénal, Tracfin, ACPR).
3. La protection des données personnelles, régie par le **RGPD** (Règlement général sur la protection des données, applicable depuis 2018), qui encadre la collecte, l'usage et la conservation des données des clients.

Ces obligations ne sont pas de simples formalités : leur non-respect expose la banque à des sanctions administratives (amendes de l'ACPR), voire pénales, et engage la responsabilité personnelle des collaborateurs en cas de manquement grave et intentionnel.`,
    definitionsCles: [
      { terme: "LCB-FT", definition: "Lutte contre le blanchiment de capitaux et le financement du terrorisme : ensemble des obligations de vigilance imposées aux professionnels assujettis, dont les banques." },
      { terme: "KYC (Know Your Customer)", definition: "Processus de connaissance du client (identité, origine des fonds, objet de la relation) mené à l'entrée en relation et actualisé périodiquement, socle de la vigilance LCB-FT." },
      { terme: "Tracfin", definition: "Service de renseignement financier français, rattaché à Bercy, destinataire des déclarations de soupçon transmises par les banques et autres professionnels assujettis." },
      { terme: "Déclaration de soupçon", definition: "Signalement obligatoire à Tracfin d'une opération dont l'origine ou la destination des fonds pourrait être liée au blanchiment ou au financement du terrorisme." },
      { terme: "Secret bancaire", definition: "Obligation de discrétion professionnelle du banquier sur les informations relatives à ses clients (art. L511-33 CMF), opposable aux tiers mais levée dans des cas légalement définis." },
      { terme: "RGPD", definition: "Règlement général sur la protection des données (UE 2016/679), applicable depuis le 25 mai 2018, qui encadre la collecte et le traitement des données personnelles par toute organisation traitant des données de résidents européens." },
      { terme: "DPO (délégué à la protection des données)", definition: "Personne désignée au sein de l'organisme pour veiller au respect du RGPD, point de contact de la CNIL et des personnes concernées." },
      { terme: "Vigilance constante", definition: "Obligation de surveiller en continu la relation d'affaires et les opérations du client, au-delà du seul contrôle réalisé à l'entrée en relation." },
      { terme: "Approche par les risques", definition: "Méthode qui module l'intensité des mesures de vigilance LCB-FT selon le niveau de risque (faible, standard, renforcé) présenté par le client, le produit ou le pays concerné." },
      { terme: "Gel des avoirs", definition: "Mesure administrative interdisant à une banque de mettre des fonds à disposition d'une personne ou entité inscrite sur une liste de sanctions internationales." },
    ],
    approfondissement: `**L'approche par les risques**, pierre angulaire du dispositif LCB-FT français et européen (transposition des directives européennes successives, dites « 4e » puis « 5e » directive anti-blanchiment), impose d'adapter l'intensité de la vigilance au profil de risque : vigilance simplifiée pour un client standard à faible risque, vigilance renforcée pour une personne politiquement exposée (PPE), une relation à distance, ou un pays classé à haut risque par le GAFI (Groupe d'action financière).

**Articulation secret bancaire / LCB-FT.** Le secret bancaire ne peut jamais être opposé à Tracfin, à l'ACPR ou à l'autorité judiciaire agissant dans le cadre d'une procédure pénale. La déclaration de soupçon bénéficie en outre d'une **irresponsabilité civile et pénale** pour le déclarant de bonne foi, et son existence même est elle-même couverte par un secret absolu (interdiction pour la banque d'en informer le client concerné, sous peine de sanctions pénales pour l'infraction de divulgation).

**RGPD et relation bancaire.** La banque doit respecter les grands principes du règlement : licéité et transparence du traitement, minimisation des données collectées, limitation de la durée de conservation, sécurité des données, et droits reconnus aux personnes (accès, rectification, effacement sous conditions, opposition). Ces obligations coexistent avec les obligations de conservation imposées par la LCB-FT (archivage des données client plusieurs années après la fin de la relation), qui priment sur le droit à l'effacement pendant la durée légale de conservation.`,
    historique: `- **1990** : première loi anti-blanchiment en France, création de Tracfin.
- **2001** : après les attentats du 11 septembre, extension du dispositif au financement du terrorisme.
- **2005-2017** : transpositions successives des directives européennes anti-blanchiment (3e à 5e directive), élargissant le champ des professions assujetties et la définition des bénéficiaires effectifs.
- **2016** : adoption du RGPD au niveau européen.
- **2018** : entrée en application du RGPD (25 mai) et transposition de la 5e directive anti-blanchiment, renforçant la transparence sur les cryptoactifs et les bénéficiaires effectifs.`,
    evolutionsJuridiques: [
      { date: "1990", evenement: "Première loi anti-blanchiment française", texte: "Création de Tracfin et de l'obligation de déclaration de soupçon pour les établissements financiers." },
      { date: "2005", evenement: "3e directive anti-blanchiment européenne", texte: "Harmonisation du dispositif LCB-FT au niveau de l'Union européenne." },
      { date: "2016", evenement: "Adoption du RGPD", texte: "Règlement (UE) 2016/679, applicable à compter du 25 mai 2018." },
      { date: "2018", evenement: "5e directive anti-blanchiment", texte: "Renforcement de la transparence sur les bénéficiaires effectifs et extension aux plateformes de cryptoactifs." },
    ],
    citations: [
      {
        texte:
          "Tout membre d'un conseil d'administration ou de surveillance et, selon le cas, toute personne participant à la direction ou à la gestion d'un établissement de crédit ou d'une société de financement, ou employée par ceux-ci, est tenu au secret professionnel.",
        auteur: "Code monétaire et financier",
        contexte: "Article L511-33, fondement du secret bancaire.",
      },
    ],
    sourcesReference: [
      "Code monétaire et financier, art. L511-33 et suivants (secret bancaire), art. L561-* (LCB-FT)",
      "Règlement (UE) 2016/679 — RGPD",
      "Tracfin — rapports annuels d'activité",
      "ACPR — lignes directrices LCB-FT",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "b5-fc-01", recto: "Que signifie LCB-FT ?", verso: "Lutte contre le blanchiment de capitaux et le financement du terrorisme.", difficulte: "fondamental" },
    { id: "b5-fc-02", recto: "À qui la banque adresse-t-elle une déclaration de soupçon ?", verso: "À Tracfin, la cellule de renseignement financier française.", difficulte: "fondamental" },
    { id: "b5-fc-03", recto: "Le secret bancaire est-il opposable à Tracfin ?", verso: "Non, il ne peut jamais être opposé à Tracfin, à l'ACPR ni à l'autorité judiciaire pénale.", difficulte: "intermediaire" },
    { id: "b5-fc-04", recto: "Que risque une banque qui informe son client d'une déclaration de soupçon le concernant ?", verso: "Des sanctions pénales pour divulgation, car l'existence même de la déclaration est couverte par un secret absolu.", difficulte: "avance" },
    { id: "b5-fc-05", recto: "Qu'est-ce qu'une personne politiquement exposée (PPE) ?", verso: "Une personne occupant ou ayant occupé une fonction publique importante, soumise de ce fait à une vigilance LCB-FT renforcée.", difficulte: "intermediaire" },
    { id: "b5-fc-06", recto: "Depuis quand le RGPD s'applique-t-il ?", verso: "Depuis le 25 mai 2018.", difficulte: "fondamental" },
    { id: "b5-fc-07", recto: "Qu'est-ce que l'approche par les risques en LCB-FT ?", verso: "L'adaptation de l'intensité de la vigilance (simplifiée, standard, renforcée) au niveau de risque présenté par le client, le produit ou le pays.", difficulte: "avance" },
    { id: "b5-fc-08", recto: "Le droit à l'effacement RGPD prime-t-il toujours sur les obligations LCB-FT ?", verso: "Non : les obligations légales de conservation des données (LCB-FT) priment pendant leur durée légale.", difficulte: "avance" },
  ],
  quiz: [
    {
      id: "b5-qz-01",
      question: "La déclaration de soupçon est adressée à :",
      choix: ["L'ACPR", "Tracfin", "La CNIL", "Le procureur de la République directement"],
      bonneReponse: 1,
      explication: "Tracfin est la cellule de renseignement financier destinataire des déclarations de soupçon des professionnels assujettis.",
      difficulte: "fondamental",
    },
    {
      id: "b5-qz-02",
      question: "Un client demande à son conseiller si une déclaration de soupçon a été faite le concernant. Le conseiller doit :",
      choix: [
        "Répondre honnêtement, secret bancaire oblige",
        "Ne jamais confirmer ni infirmer l'existence d'une déclaration de soupçon",
        "Demander l'autorisation du client avant de déclarer",
        "Transmettre la question à Tracfin pour réponse",
      ],
      bonneReponse: 1,
      explication: "L'interdiction de divulgation (« tipping-off ») est une obligation légale distincte du secret bancaire classique, sanctionnée pénalement.",
      difficulte: "avance",
    },
    {
      id: "b5-qz-03",
      question: "Le RGPD repose notamment sur le principe de :",
      choix: [
        "Collecte illimitée de données pour anticiper les besoins futurs",
        "Minimisation des données et limitation de leur durée de conservation",
        "Conservation permanente de toutes les données clients",
        "Interdiction totale de transmettre des données à un tiers",
      ],
      bonneReponse: 1,
      explication: "Le RGPD impose de ne collecter que les données nécessaires et de ne pas les conserver au-delà de ce qui est justifié.",
      difficulte: "fondamental",
    },
  ],
  exercices: [
    {
      id: "b5-ex-01",
      titre: "Qualifier le niveau de vigilance",
      enonce:
        "Un client résidant en France ouvre un compte pour son usage personnel courant, sans opération atypique. Un autre client, ressortissant d'un pays classé à haut risque par le GAFI, souhaite ouvrir un compte avec des virements internationaux réguliers de montants élevés. Comparez le niveau de vigilance applicable dans chaque cas.",
      corrige:
        "Le premier cas relève d'une vigilance standard, voire simplifiée si le profil est jugé à faible risque (produit courant, absence d'élément atypique). Le second cas impose une vigilance renforcée : identification approfondie de l'origine des fonds, examen renforcé des opérations, validation par un niveau hiérarchique supérieur, et surveillance accrue dans la durée, conformément à l'approche par les risques du dispositif LCB-FT.",
      difficulte: "avance",
    },
  ],
};
