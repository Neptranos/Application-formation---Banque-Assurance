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
      { terme: "Collège de supervision (ACPR)", definition: "Organe de gouvernance de l'ACPR qui décide, sur la base d'un rapport de contrôle, de l'ouverture d'une procédure disciplinaire à l'encontre d'un établissement." },
      { terme: "Commission des sanctions (ACPR)", definition: "Organe de l'ACPR distinct du Collège, chargé de juger les établissements mis en cause à l'issue d'un contrôle, pouvant prononcer avertissement, blâme, interdiction d'exercer ou retrait d'agrément." },
      { terme: "Responsable de la conformité (RCCI/RCSI)", definition: "Collaborateur désigné au sein d'un établissement pour veiller au respect des règles de conformité (LCB-FT, protection de la clientèle, déontologie) et servir de point de contact avec le superviseur." },
      { terme: "Bénéficiaire effectif", definition: "Personne physique qui contrôle en dernier ressort une personne morale cliente (directement ou par une chaîne de participations), dont l'identification est une obligation centrale du dispositif LCB-FT." },
    ],
    approfondissement: `**L'approche par les risques**, pierre angulaire du dispositif LCB-FT français et européen (transposition des directives européennes successives, dites « 4e » puis « 5e » directive anti-blanchiment), impose d'adapter l'intensité de la vigilance au profil de risque : vigilance simplifiée pour un client standard à faible risque, vigilance renforcée pour une personne politiquement exposée (PPE), une relation à distance, ou un pays classé à haut risque par le GAFI (Groupe d'action financière).

**Articulation secret bancaire / LCB-FT.** Le secret bancaire ne peut jamais être opposé à Tracfin, à l'ACPR ou à l'autorité judiciaire agissant dans le cadre d'une procédure pénale. La déclaration de soupçon bénéficie en outre d'une **irresponsabilité civile et pénale** pour le déclarant de bonne foi, et son existence même est elle-même couverte par un secret absolu (interdiction pour la banque d'en informer le client concerné, sous peine de sanctions pénales pour l'infraction de divulgation).

**RGPD et relation bancaire.** La banque doit respecter les grands principes du règlement : licéité et transparence du traitement, minimisation des données collectées, limitation de la durée de conservation, sécurité des données, et droits reconnus aux personnes (accès, rectification, effacement sous conditions, opposition). Ces obligations coexistent avec les obligations de conservation imposées par la LCB-FT (archivage des données client plusieurs années après la fin de la relation), qui priment sur le droit à l'effacement pendant la durée légale de conservation.

**La procédure de sanction de l'ACPR**, sur le modèle de celle de l'AMF, sépare la fonction de contrôle et de poursuite de la fonction de jugement. Le **Collège de supervision** de l'ACPR décide, sur la base d'un rapport de contrôle sur pièces ou sur place, d'ouvrir ou non une procédure disciplinaire (notification de griefs). Le dossier est alors instruit et jugé par la **Commission des sanctions** de l'ACPR, organe distinct du Collège, qui peut prononcer un avertissement, un blâme, une interdiction temporaire ou définitive d'exercer certaines opérations, voire le retrait d'agrément, assortis le cas échéant d'une sanction pécuniaire. Comme pour l'AMF, cette séparation organique garantit l'impartialité de la procédure, et les décisions de la Commission des sanctions de l'ACPR peuvent faire l'objet d'un recours devant le Conseil d'État.`,
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
    { id: "b5-fc-09", recto: "Qui décide d'ouvrir une procédure de sanction à l'ACPR ?", verso: "Le Collège de supervision, sur la base d'un rapport de contrôle.", difficulte: "avance" },
    { id: "b5-fc-10", recto: "Qui juge les établissements mis en cause à l'ACPR ?", verso: "La Commission des sanctions, organe distinct du Collège de supervision.", difficulte: "avance" },
    { id: "b5-fc-11", recto: "Quelles sanctions la Commission des sanctions de l'ACPR peut-elle prononcer ?", verso: "Avertissement, blâme, interdiction temporaire ou définitive d'exercer certaines opérations, retrait d'agrément, sanction pécuniaire.", difficulte: "avance" },
    { id: "b5-fc-12", recto: "Devant quelle juridiction se forme le recours contre une décision de la Commission des sanctions de l'ACPR ?", verso: "Le Conseil d'État.", difficulte: "avance" },
    { id: "b5-fc-13", recto: "Qu'est-ce qu'un bénéficiaire effectif ?", verso: "La personne physique qui contrôle en dernier ressort une personne morale cliente, dont l'identification est une obligation centrale de la LCB-FT.", difficulte: "intermediaire" },
    { id: "b5-fc-14", recto: "Que signifie RCCI/RCSI ?", verso: "Le responsable de la conformité (et du contrôle interne / des services d'investissement), point de contact interne pour les questions de conformité.", difficulte: "intermediaire" },
    { id: "b5-fc-15", recto: "En quelle année Tracfin a-t-il été créé ?", verso: "1990, avec la première loi anti-blanchiment française.", difficulte: "intermediaire" },
    { id: "b5-fc-16", recto: "Qu'a élargi la 5e directive anti-blanchiment (2018) ?", verso: "La transparence sur les bénéficiaires effectifs et l'extension du dispositif aux plateformes de cryptoactifs.", difficulte: "avance" },
    { id: "b5-fc-17", recto: "La vigilance LCB-FT s'arrête-t-elle après l'entrée en relation avec le client ?", verso: "Non, elle doit être exercée en continu tout au long de la relation d'affaires (vigilance constante).", difficulte: "intermediaire" },
    { id: "b5-fc-18", recto: "Le RGPD s'applique-t-il uniquement aux entreprises situées dans l'UE ?", verso: "Non, il s'applique à toute organisation traitant des données de résidents européens, où qu'elle soit établie.", difficulte: "avance" },
    { id: "b5-fc-19", recto: "Qu'est-ce que le principe de minimisation des données sous le RGPD ?", verso: "Ne collecter que les données strictement nécessaires à la finalité du traitement.", difficulte: "intermediaire" },
    { id: "b5-fc-20", recto: "Une déclaration de soupçon de bonne foi engage-t-elle la responsabilité civile ou pénale du déclarant ?", verso: "Non, elle bénéficie d'une irresponsabilité civile et pénale pour le déclarant de bonne foi.", difficulte: "avance" },
    { id: "b5-fc-21", recto: "Qu'est-ce que le gel des avoirs ?", verso: "Une mesure administrative interdisant de mettre des fonds à disposition d'une personne ou entité inscrite sur une liste de sanctions internationales.", difficulte: "intermediaire" },
    { id: "b5-fc-22", recto: "Quel évènement de 2001 a conduit à l'extension du dispositif LCB-FT au financement du terrorisme ?", verso: "Les attentats du 11 septembre 2001.", difficulte: "intermediaire" },
    { id: "b5-fc-23", recto: "Un client peut-il refuser de communiquer l'identité de son bénéficiaire effectif ?", verso: "En pratique non sans conséquence : la banque doit refuser ou mettre fin à la relation d'affaires si elle ne peut identifier le bénéficiaire effectif.", difficulte: "avance" },
    { id: "b5-fc-24", recto: "Qui est le point de contact interne de la CNIL et des personnes concernées au sein d'un établissement ?", verso: "Le délégué à la protection des données (DPO).", difficulte: "intermediaire" },
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
    {
      id: "b5-qz-04",
      question: "À l'ACPR, l'ouverture d'une procédure de sanction est décidée par :",
      choix: ["La Commission des sanctions elle-même", "Le Collège de supervision", "Tracfin", "Le ministre de l'Économie"],
      bonneReponse: 1,
      explication: "Comme à l'AMF, le Collège décide l'ouverture, la Commission des sanctions instruit et juge.",
      difficulte: "avance",
    },
    {
      id: "b5-qz-05",
      question: "La Commission des sanctions de l'ACPR peut prononcer :",
      choix: [
        "Uniquement des amendes",
        "Avertissement, blâme, interdiction d'exercer, retrait d'agrément",
        "Uniquement des peines de prison",
        "Aucune sanction, elle n'a qu'un rôle consultatif"
      ],
      bonneReponse: 1,
      explication: "L'éventail des sanctions disciplinaires et pécuniaires est large, jusqu'au retrait d'agrément dans les cas les plus graves.",
      difficulte: "avance",
    },
    {
      id: "b5-qz-06",
      question: "Le recours contre une décision de la Commission des sanctions de l'ACPR se porte devant :",
      choix: ["La Cour d'appel de Paris", "Le Conseil d'État", "Le tribunal de commerce", "La CNIL"],
      bonneReponse: 1,
      explication: "Contrairement à l'AMF (Cour d'appel de Paris), les décisions de l'ACPR relèvent en principe du Conseil d'État.",
      difficulte: "avance",
    },
    {
      id: "b5-qz-07",
      question: "Le bénéficiaire effectif d'une personne morale cliente est :",
      choix: [
        "Le dirigeant salarié uniquement",
        "La personne physique qui la contrôle en dernier ressort",
        "L'expert-comptable de l'entreprise",
        "Le premier client de l'entreprise"
      ],
      bonneReponse: 1,
      explication: "L'identification du bénéficiaire effectif (personne physique de contrôle final) est une pierre angulaire de la LCB-FT.",
      difficulte: "intermediaire",
    },
    {
      id: "b5-qz-08",
      question: "Une banque qui ne parvient pas à identifier le bénéficiaire effectif d'un client doit :",
      choix: ["Ignorer ce point", "Refuser ou mettre fin à la relation d'affaires", "Ouvrir le compte quand même sans réserve", "Attendre la fin de l'année pour vérifier"],
      bonneReponse: 1,
      explication: "L'absence d'identification du bénéficiaire effectif empêche la poursuite normale de la relation d'affaires.",
      difficulte: "avance",
    },
    {
      id: "b5-qz-09",
      question: "La vigilance LCB-FT doit être exercée :",
      choix: ["Uniquement à l'entrée en relation", "En continu tout au long de la relation d'affaires", "Uniquement en cas de plainte du client", "Une fois par an seulement"],
      bonneReponse: 1,
      explication: "La vigilance constante impose une surveillance continue, pas seulement ponctuelle.",
      difficulte: "intermediaire",
    },
    {
      id: "b5-qz-10",
      question: "Le RGPD s'applique :",
      choix: [
        "Uniquement aux entreprises situées dans l'UE",
        "À toute organisation traitant des données de résidents européens, où qu'elle soit établie",
        "Uniquement aux banques",
        "Uniquement en France"
      ],
      bonneReponse: 1,
      explication: "Le RGPD a une portée extraterritoriale dès lors que des données de résidents européens sont traitées.",
      difficulte: "avance",
    },
    {
      id: "b5-qz-11",
      question: "La déclaration de soupçon de bonne foi expose-t-elle le déclarant à une action en responsabilité de la part du client ?",
      choix: ["Oui, systématiquement", "Non, elle bénéficie d'une irresponsabilité civile et pénale", "Uniquement si le soupçon s'avère infondé", "Uniquement pour les personnes morales"],
      bonneReponse: 1,
      explication: "Cette irresponsabilité encourage les professionnels à déclarer sans crainte de représailles judiciaires.",
      difficulte: "avance",
    },
    {
      id: "b5-qz-12",
      question: "Le gel des avoirs empêche la banque de :",
      choix: ["Ouvrir de nouveaux comptes en général", "Mettre des fonds à disposition d'une personne inscrite sur une liste de sanctions", "Facturer des frais de tenue de compte", "Appliquer le taux d'usure"],
      bonneReponse: 1, explication: "Le gel des avoirs est une mesure administrative ciblée sur des personnes ou entités précisément désignées.",
      difficulte: "intermediaire",
    },
    { id: "b5-qz-13", question: "Le KYC est mené :", choix: ["Uniquement à la clôture du compte", "À l'entrée en relation et actualisé périodiquement", "Une seule fois dans toute la vie du client", "Par le client lui-même sans contrôle"], bonneReponse: 1, explication: "La connaissance du client n'est jamais figée, elle doit être actualisée dans la durée.", difficulte: "intermediaire" },
    { id: "b5-qz-14", question: "Le RCCI/RCSI est notamment destinataire :", choix: ["Des budgets marketing", "Des soupçons internes de manquement à la conformité", "Des seules réclamations RH", "Des seules demandes de congés"], bonneReponse: 1, explication: "C'est un maillon clé du signalement interne en matière de conformité.", difficulte: "intermediaire" },
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
    {
      id: "b5-ex-02",
      titre: "Calculer une date de conservation puis d'effacement",
      enonce:
        "Un client clôture son compte le 15 juin 2025. La réglementation LCB-FT impose une conservation des données client pendant 5 ans après la fin de la relation d'affaires. À quelle date la banque pourra-t-elle, sauf autre obligation légale de conservation plus longue, effacer ces données conformément au droit à l'effacement du RGPD ?",
      corrige:
        "La conservation LCB-FT court à partir de la fin de la relation d'affaires, soit le 15 juin 2025. Ajouter 5 ans conduit au 15 juin 2030 : c'est à partir de cette date que l'obligation légale de conservation LCB-FT s'éteint, et que le droit à l'effacement du RGPD peut effectivement s'exercer, sauf si une autre obligation légale de conservation plus longue s'applique par ailleurs (par exemple des obligations fiscales ou comptables sur d'autres documents). Avant cette date, le droit à l'effacement ne peut pas primer sur l'obligation légale de conservation LCB-FT.",
      difficulte: "avance",
    },
    {
      id: "b5-ex-03",
      titre: "Dérouler une procédure de sanction ACPR",
      enonce:
        "Un contrôle sur place de l'ACPR révèle des manquements graves et répétés aux obligations de vigilance LCB-FT d'une banque régionale. Décrivez, étape par étape, le circuit procédural jusqu'à une éventuelle sanction et son recours.",
      corrige:
        "1) Les services de contrôle de l'ACPR rédigent un rapport de contrôle sur place, transmis à l'établissement qui peut formuler des observations. 2) Le Collège de supervision de l'ACPR examine ce rapport et décide, le cas échéant, d'ouvrir une procédure disciplinaire (notification de griefs à l'établissement). 3) Le dossier est transmis à la Commission des sanctions de l'ACPR, organe distinct du Collège, qui instruit contradictoirement l'affaire. 4) La Commission des sanctions rend sa décision, pouvant aller de l'avertissement à l'interdiction d'exercer certaines opérations ou au retrait d'agrément, assortie le cas échéant d'une sanction pécuniaire, généralement rendue publique. 5) L'établissement sanctionné peut former un recours devant le Conseil d'État.",
      difficulte: "avance",
    },
    {
      id: "b5-ex-04",
      titre: "Qualifier le niveau de risque d'un bénéficiaire effectif complexe",
      enonce:
        "Une société cliente est détenue à 40 % par une première société elle-même détenue à 60 % par une personne physique M. Durand, et à 60 % par une autre société détenue à parts égales par 4 personnes physiques. M. Durand exerce-t-il un contrôle nécessitant son identification comme bénéficiaire effectif au sens LCB-FT (seuil usuel de détection : plus de 25 % de contrôle direct ou indirect) ?",
      corrige:
        "Le contrôle indirect de M. Durand sur la société cliente se calcule en multipliant les taux de détention successifs : 40 % (part de la première société dans la cliente) × 60 % (part de M. Durand dans cette première société) = 24 % de contrôle indirect. Ce taux étant inférieur au seuil usuel de 25 % retenu pour la détection automatique d'un bénéficiaire effectif par détention capitalistique, M. Durand ne serait pas identifié comme bénéficiaire effectif sur ce seul critère — mais la banque doit néanmoins examiner s'il exerce un contrôle par d'autres moyens (droits de vote, pouvoir de nomination des dirigeants) qui justifierait son identification malgré tout, la LCB-FT ne se limitant jamais au seul critère capitalistique.",
      difficulte: "avance",
    },
  ],
};
