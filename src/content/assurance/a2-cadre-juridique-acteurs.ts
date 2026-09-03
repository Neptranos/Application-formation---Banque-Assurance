import type { ModuleFormation } from "@/content/types";

export const a2: ModuleFormation = {
  id: "a2",
  domaine: "assurance",
  ordre: 2,
  titre: "Le cadre juridique et les acteurs de l'assurance",
  description:
    "Code des assurances, ACPR, Solvabilité II, et la diversité des distributeurs (agents, courtiers, mandataires, bancassureurs).",
  cours: {
    fondamentaux: `L'activité d'assurance en France est encadrée par trois grands corpus, qui coexistent selon la nature juridique de l'organisme assureur : le **Code des assurances** (sociétés d'assurance), le **Code de la mutualité** (mutuelles) et le **Code de la sécurité sociale** (institutions de prévoyance). Ces trois familles d'organismes — parfois désignées par l'acronyme **SMI** (Sociétés, Mutuelles, Institutions de prévoyance) — répondent à des logiques différentes (société anonyme à but lucratif, mutuelle à but non lucratif sans actionnaires, institution paritaire gérée par employeurs et salariés) mais sont toutes trois soumises au contrôle de l'**ACPR**.

Aucun organisme ne peut pratiquer d'opérations d'assurance sans un **agrément** délivré par l'ACPR, qui vérifie sa solidité financière (exigences de fonds propres sous le régime prudentiel **Solvabilité II**, en vigueur depuis 2016) et sa gouvernance.

La distribution de l'assurance passe par plusieurs canaux :

- les **agents généraux**, mandataires exclusifs d'une compagnie d'assurance ;
- les **courtiers**, mandataires du client, en principe indépendants des assureurs et pouvant comparer plusieurs compagnies ;
- les **mandataires d'assurance** et **mandataires d'intermédiaire**, qui agissent pour le compte d'un assureur ou d'un courtier ;
- la **bancassurance**, vente de produits d'assurance (notamment assurance-vie et assurance emprunteur) par le réseau des banques, devenue le premier canal de distribution de l'assurance-vie en France.

Tous les distributeurs d'assurance doivent être immatriculés au registre unique des intermédiaires (**ORIAS**) avant d'exercer.`,
    definitionsCles: [
      { terme: "Code des assurances", definition: "Corpus législatif et réglementaire régissant les sociétés d'assurance et le contrat d'assurance en France." },
      { terme: "ACPR", definition: "Autorité de contrôle prudentiel et de résolution, adossée à la Banque de France, superviseur commun des banques et des assureurs en France depuis 2010." },
      { terme: "Solvabilité II", definition: "Régime prudentiel européen applicable aux assureurs depuis 2016, fondé sur une approche par les risques (exigences de fonds propres proportionnées aux risques réellement portés) et structuré en trois piliers, sur le modèle de Bâle III pour les banques." },
      { terme: "Agent général d'assurance", definition: "Intermédiaire mandataire exclusif d'une (ou plusieurs, selon les branches) compagnie d'assurance, exerçant une profession libérale réglementée." },
      { terme: "Courtier d'assurance", definition: "Intermédiaire mandataire du client, juridiquement indépendant des compagnies d'assurance, en principe en mesure de comparer les offres de plusieurs assureurs." },
      { terme: "Bancassurance", definition: "Distribution de produits d'assurance par le réseau commercial d'une banque, canal dominant de la distribution de l'assurance-vie en France." },
      { terme: "ORIAS", definition: "Organisme pour le registre unique des intermédiaires en assurance, banque et finance, tenant le registre obligatoire de tous les intermédiaires habilités à exercer." },
      { terme: "Institution de prévoyance", definition: "Organisme à but non lucratif, à gouvernance paritaire (employeurs et salariés), régi par le Code de la sécurité sociale, souvent issu des accords de branche professionnelle." },
      { terme: "Mutuelle (Code de la mutualité)", definition: "Organisme d'assurance à but non lucratif, sans actionnaires, régi par le Code de la mutualité, fonctionnant sur un principe de solidarité entre adhérents." },
      { terme: "Fonds de garantie des assurances de personnes (FGAP)", definition: "Mécanisme protégeant les assurés en cas de défaillance d'un organisme d'assurance de personnes, dans la limite de plafonds réglementaires." },
      { terme: "Fonds de garantie des assurances obligatoires (FGAO)", definition: "Fonds qui indemnise les victimes de dommages corporels causés par un responsable non assuré ou non identifié, notamment en matière automobile." },
      { terme: "SFCR (rapport de solvabilité)", definition: "Solvency and Financial Condition Report : rapport public annuel détaillant la solvabilité et la situation financière d'un assureur, imposé par le pilier 3 de Solvabilité II." },
      { terme: "Transfert de portefeuille", definition: "Opération par laquelle un assureur cède tout ou partie de ses contrats à un autre assureur agréé, notamment en cas de retrait d'agrément, sous le contrôle de l'ACPR et avec information des assurés concernés." },
      { terme: "Administration provisoire", definition: "Mesure de police administrative par laquelle l'ACPR peut désigner un administrateur pour gérer un organisme d'assurance en difficulté grave, en lieu et place de ses dirigeants." },
    ],
    approfondissement: `**Solvabilité II, les trois piliers.** Le pilier 1 fixe les exigences quantitatives de fonds propres, avec deux seuils clés : le **SCR** (capital de solvabilité requis, niveau cible calibré sur un choc à horizon un an avec probabilité de ruine de 0,5 %) et le **MCR** (minimum de capital requis, seuil plancher en deçà duquel l'agrément est menacé). Le pilier 2 porte sur la gouvernance et la gestion des risques (exigences ORSA — évaluation interne des risques et de la solvabilité). Le pilier 3 impose la transparence via un reporting public détaillé (rapport SFCR).

**La distinction courtier / agent général** est structurante pour comprendre la responsabilité en cas de litige : le courtier, mandataire du client, engage sa responsabilité pour le conseil donné et le choix de l'assureur ; l'agent général, mandataire de la compagnie, engage en principe la responsabilité de celle-ci pour les fautes commises dans le cadre de son mandat.

**Une profession à statuts multiples.** Un même individu peut cumuler plusieurs statuts ORIAS (par exemple courtier et intermédiaire en opérations de banque) ; chaque statut correspond à des exigences de capacité professionnelle, de garantie financière et d'assurance de responsabilité civile professionnelle distinctes, contrôlées par l'ORIAS et sanctionnées par l'ACPR.

**Que se passe-t-il si un assureur est défaillant ?** L'ACPR dispose d'une gamme d'outils gradués : mise en demeure de rétablir une situation financière conforme, puis, en cas d'échec, désignation d'un **administrateur provisoire** qui se substitue aux dirigeants pour gérer l'organisme, et en dernier recours **transfert d'office du portefeuille de contrats** vers un ou plusieurs autres assureurs agréés, ou retrait pur et simple de l'agrément. Les assurés bénéficient en complément, selon la nature de leurs contrats, de la garantie du FGAP (assurances de personnes, dont l'assurance-vie) ou du FGAO (dommages corporels liés à un tiers non assuré ou non identifié), dans la limite de plafonds réglementaires — des mécanismes de dernier recours, à ne pas confondre avec le fonctionnement normal du marché.`,
    historique: `- **1938** : création du contrôle de l'État sur les entreprises d'assurance en France.
- **1976** : codification du Code des assurances.
- **1994-2003** : premières directives européennes d'harmonisation du marché unique de l'assurance (« troisième génération » de directives).
- **2010** : fusion des autorités de contrôle bancaire et assurantiel françaises, création de l'ACPR (Autorité de contrôle prudentiel, puis « et de résolution » en 2013).
- **2016** : entrée en vigueur du régime prudentiel Solvabilité II, remplaçant l'ancien régime Solvabilité I jugé trop peu sensible aux risques réels.
- **2013** : création de l'ORIAS sous sa forme actuelle de registre unique obligatoire pour tous les intermédiaires (assurance, banque, finance).`,
    evolutionsJuridiques: [
      { date: "1976", evenement: "Codification du Code des assurances", texte: "Structuration d'ensemble du droit français de l'assurance." },
      { date: "2010", evenement: "Création de l'ACPR", texte: "Fusion des autorités de contrôle prudentiel bancaire et assurantiel sous l'égide de la Banque de France." },
      { date: "2016", evenement: "Entrée en vigueur de Solvabilité II", texte: "Nouveau régime prudentiel européen fondé sur une approche par les risques, structuré en trois piliers." },
    ],
    citations: [
      {
        texte:
          "Nul ne peut, directement ou indirectement, dans les mêmes locaux ou par voie de publicité, faire souscrire les contrats [...] sans immatriculation au registre unique des intermédiaires.",
        auteur: "Code des assurances",
        contexte: "Principe résumant l'obligation d'immatriculation à l'ORIAS (art. L512-1 et s.).",
      },
    ],
    sourcesReference: [
      "Code des assurances, Code de la mutualité, Code de la sécurité sociale",
      "Directive 2009/138/CE (Solvabilité II) et ses actes délégués",
      "ACPR — rapports annuels et fiches pratiques Solvabilité II",
      "ORIAS — registre public et guides d'immatriculation",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "a2-fc-01", recto: "Quels sont les trois grands types d'organismes d'assurance en France ?", verso: "Sociétés d'assurance (Code des assurances), mutuelles (Code de la mutualité), institutions de prévoyance (Code de la sécurité sociale).", difficulte: "fondamental" },
    { id: "a2-fc-02", recto: "Qui supervise les assureurs en France ?", verso: "L'ACPR, Autorité de contrôle prudentiel et de résolution.", difficulte: "fondamental" },
    { id: "a2-fc-03", recto: "Différence entre agent général et courtier ?", verso: "L'agent général est mandataire exclusif d'une compagnie ; le courtier est mandataire du client et peut comparer plusieurs assureurs.", difficulte: "intermediaire" },
    { id: "a2-fc-04", recto: "Que signifie SCR en Solvabilité II ?", verso: "Le capital de solvabilité requis, niveau cible de fonds propres calibré sur un choc à un an.", difficulte: "avance" },
    { id: "a2-fc-05", recto: "Que signifie MCR en Solvabilité II ?", verso: "Le minimum de capital requis, seuil plancher en deçà duquel l'agrément de l'assureur est menacé.", difficulte: "avance" },
    { id: "a2-fc-06", recto: "Qu'est-ce que l'ORIAS ?", verso: "Le registre unique obligatoire de tous les intermédiaires en assurance, banque et finance.", difficulte: "fondamental" },
    { id: "a2-fc-07", recto: "Qu'est-ce que l'ORSA en Solvabilité II ?", verso: "L'évaluation interne des risques et de la solvabilité que l'assureur doit conduire lui-même (pilier 2).", difficulte: "avance" },
    { id: "a2-fc-08", recto: "Quel est le premier canal de distribution de l'assurance-vie en France ?", verso: "La bancassurance.", difficulte: "intermediaire" },
    { id: "a2-fc-09", recto: "Qu'est-ce que le SFCR ?", verso: "Le rapport public annuel de solvabilité et de situation financière imposé par le pilier 3 de Solvabilité II.", difficulte: "avance" },
    { id: "a2-fc-10", recto: "Qu'est-ce qu'un transfert de portefeuille ?", verso: "La cession de tout ou partie des contrats d'un assureur à un autre, notamment en cas de retrait d'agrément, sous contrôle de l'ACPR.", difficulte: "avance" },
    { id: "a2-fc-11", recto: "Qu'est-ce que l'administration provisoire d'un assureur ?", verso: "La désignation par l'ACPR d'un administrateur qui se substitue aux dirigeants d'un organisme en difficulté grave.", difficulte: "avance" },
    { id: "a2-fc-12", recto: "Que couvre le FGAO ?", verso: "L'indemnisation des victimes de dommages corporels causés par un responsable non assuré ou non identifié, notamment en automobile.", difficulte: "intermediaire" },
    { id: "a2-fc-13", recto: "Que couvre le FGAP ?", verso: "Les assurés en cas de défaillance d'un organisme d'assurance de personnes, dans la limite de plafonds réglementaires.", difficulte: "intermediaire" },
    { id: "a2-fc-14", recto: "En quelle année le contrôle de l'État sur les entreprises d'assurance a-t-il été créé en France ?", verso: "1938.", difficulte: "avance" },
    { id: "a2-fc-15", recto: "Quel régime prudentiel Solvabilité II a-t-il remplacé ?", verso: "Solvabilité I, jugé trop peu sensible aux risques réellement portés par l'assureur.", difficulte: "intermediaire" },
    { id: "a2-fc-16", recto: "Un même intermédiaire peut-il cumuler plusieurs statuts ORIAS ?", verso: "Oui, par exemple courtier en assurance et intermédiaire en opérations de banque.", difficulte: "intermediaire" },
  ],
  quiz: [
    {
      id: "a2-qz-01",
      question: "Solvabilité II est structuré en :",
      choix: ["Deux piliers", "Trois piliers", "Quatre piliers", "Aucun pilier, c'est un texte unique"],
      bonneReponse: 1,
      explication: "Pilier 1 (exigences quantitatives), pilier 2 (gouvernance et gestion des risques), pilier 3 (transparence et reporting).",
      difficulte: "intermediaire",
    },
    {
      id: "a2-qz-02",
      question: "Le courtier d'assurance est juridiquement :",
      choix: ["Le mandataire exclusif d'une compagnie", "Le mandataire du client", "Un salarié de l'ACPR", "Un salarié de l'ORIAS"],
      bonneReponse: 1,
      explication: "Contrairement à l'agent général, le courtier est mandataire du client, ce qui structure sa responsabilité en cas de litige.",
      difficulte: "fondamental",
    },
    {
      id: "a2-qz-03",
      question: "Quelle institution supervise à la fois les banques et les assureurs en France depuis 2010 ?",
      choix: ["L'AMF", "L'ACPR", "L'ORIAS", "La CNIL"],
      bonneReponse: 1,
      explication: "L'ACPR, adossée à la Banque de France, a fusionné le contrôle prudentiel bancaire et assurantiel.",
      difficulte: "fondamental",
    },
    {
      id: "a2-qz-04",
      question: "Le SFCR, imposé par le pilier 3 de Solvabilité II, est :",
      choix: ["Un document interne confidentiel", "Un rapport public annuel de solvabilité et de situation financière", "Un contrat d'assurance type", "Une déclaration fiscale"],
      bonneReponse: 1,
      explication: "Le pilier 3 impose la transparence via ce rapport rendu public chaque année.",
      difficulte: "avance",
    },
    {
      id: "a2-qz-05",
      question: "En cas de défaillance grave d'un assureur, l'ACPR peut notamment :",
      choix: [
        "Désigner un administrateur provisoire",
        "Fixer directement le taux du Livret A",
        "Remplacer le Code des assurances",
        "Supprimer l'ORIAS"
      ],
      bonneReponse: 0,
      explication: "L'administration provisoire permet à l'ACPR de faire gérer l'organisme par un tiers en lieu et place des dirigeants défaillants.",
      difficulte: "avance",
    },
    {
      id: "a2-qz-06",
      question: "Le FGAO indemnise notamment :",
      choix: [
        "Les victimes de dommages corporels causés par un responsable non assuré ou non identifié",
        "Les actionnaires d'un assureur en faillite",
        "Les seuls dommages matériels",
        "Les seuls contrats d'assurance-vie"
      ],
      bonneReponse: 0,
      explication: "Le Fonds de garantie des assurances obligatoires cible spécifiquement les dommages corporels non couverts par un responsable identifié et assuré.",
      difficulte: "intermediaire",
    },
    {
      id: "a2-qz-07",
      question: "Le transfert de portefeuille d'un assureur vers un autre :",
      choix: ["Est libre et non contrôlé", "S'effectue sous le contrôle de l'ACPR, avec information des assurés", "Est interdit par le Code des assurances", "Ne concerne que les mutuelles"],
      bonneReponse: 1,
      explication: "Ce mécanisme protecteur est encadré pour garantir la continuité des garanties des assurés concernés.",
      difficulte: "avance",
    },
    { id: "a2-qz-08", question: "Une mutuelle relève :", choix: ["Du Code des assurances", "Du Code de la mutualité", "Du seul Code civil", "D'aucun texte spécifique"], bonneReponse: 1, explication: "Les mutuelles ont leur propre code, distinct de celui des sociétés d'assurance.", difficulte: "fondamental" },
    { id: "a2-qz-09", question: "Une institution de prévoyance a une gouvernance :", choix: ["Actionnariale classique", "Paritaire (employeurs et salariés)", "Étatique", "Familiale"], bonneReponse: 1, explication: "C'est la caractéristique distinctive des institutions de prévoyance, issues du monde professionnel.", difficulte: "intermediaire" },
    { id: "a2-qz-10", question: "L'agrément d'un assureur est délivré par :", choix: ["L'AMF", "L'ACPR", "L'ORIAS", "France Assureurs"], bonneReponse: 1, explication: "L'ACPR agrée et supervise les entreprises d'assurance en France.", difficulte: "fondamental" },
  ],
  exercices: [
    {
      id: "a2-ex-01",
      titre: "Identifier le bon statut d'intermédiaire",
      enonce:
        "Un professionnel souhaite proposer à ses clients les produits de plusieurs compagnies d'assurance différentes, en toute indépendance vis-à-vis de chacune. Quel statut ORIAS doit-il revendiquer, et quelles obligations principales en découlent ?",
      corrige:
        "Il doit s'immatriculer comme courtier d'assurance. Ce statut implique une obligation de capacité professionnelle, la souscription d'une assurance de responsabilité civile professionnelle, une garantie financière s'il encaisse des fonds pour le compte de tiers, ainsi que le respect du devoir de conseil et de l'obligation d'information précontractuelle propres à la distribution d'assurance (régime DDA).",
      difficulte: "intermediaire",
    },
    {
      id: "a2-ex-02",
      titre: "Calculer un taux de couverture du SCR",
      enonce:
        "Un assureur dispose de 450 millions d'euros de fonds propres éligibles. Son capital de solvabilité requis (SCR), calculé selon la formule standard Solvabilité II, s'élève à 300 millions d'euros. Calculez son taux de couverture du SCR. Ce niveau est-il rassurant ?",
      corrige:
        "Taux de couverture du SCR = fonds propres éligibles / SCR = 450 / 300 = 150 %. Un taux de couverture de 150 % signifie que l'assureur dispose d'une fois et demie le capital réglementairement exigé pour absorber un choc calibré sur une probabilité de ruine de 0,5 % à un an : c'est un niveau confortable, supérieur au minimum réglementaire de 100 %, qui lui laisse une marge de sécurité face aux aléas de marché ou de sinistralité. Un taux proche de 100 % serait en revanche un signal de vigilance pour le superviseur comme pour l'assureur lui-même.",
      difficulte: "avance",
    },
    {
      id: "a2-ex-03",
      titre: "Distinguer courtier et agent général en cas de litige",
      enonce:
        "Un client s'estime mal conseillé par son intermédiaire d'assurance et souhaite engager une action en responsabilité. Selon que l'intermédiaire est un agent général ou un courtier, contre qui l'action doit-elle en principe être dirigée, et pourquoi ?",
      corrige:
        "Si l'intermédiaire est un agent général, mandataire exclusif de la compagnie, la faute commise dans le cadre de son mandat engage en principe la responsabilité de la compagnie d'assurance elle-même, l'agent agissant pour son compte. Si l'intermédiaire est un courtier, mandataire du client et juridiquement indépendant des assureurs, c'est sa propre responsabilité professionnelle qui est engagée (d'où l'obligation pour tout courtier de souscrire une assurance de responsabilité civile professionnelle) : l'action se dirige alors contre le courtier lui-même, et non contre la ou les compagnies dont il a proposé les produits.",
      difficulte: "avance",
    },
  ],
};
