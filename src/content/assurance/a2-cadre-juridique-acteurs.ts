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
    ],
    approfondissement: `**Solvabilité II, les trois piliers.** Le pilier 1 fixe les exigences quantitatives de fonds propres, avec deux seuils clés : le **SCR** (capital de solvabilité requis, niveau cible calibré sur un choc à horizon un an avec probabilité de ruine de 0,5 %) et le **MCR** (minimum de capital requis, seuil plancher en deçà duquel l'agrément est menacé). Le pilier 2 porte sur la gouvernance et la gestion des risques (exigences ORSA — évaluation interne des risques et de la solvabilité). Le pilier 3 impose la transparence via un reporting public détaillé (rapport SFCR).

**La distinction courtier / agent général** est structurante pour comprendre la responsabilité en cas de litige : le courtier, mandataire du client, engage sa responsabilité pour le conseil donné et le choix de l'assureur ; l'agent général, mandataire de la compagnie, engage en principe la responsabilité de celle-ci pour les fautes commises dans le cadre de son mandat.

**Une profession à statuts multiples.** Un même individu peut cumuler plusieurs statuts ORIAS (par exemple courtier et intermédiaire en opérations de banque) ; chaque statut correspond à des exigences de capacité professionnelle, de garantie financière et d'assurance de responsabilité civile professionnelle distinctes, contrôlées par l'ORIAS et sanctionnées par l'ACPR.`,
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
  ],
};
