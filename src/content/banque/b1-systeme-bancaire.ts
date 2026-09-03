import type { ModuleFormation } from "@/content/types";

export const b1: ModuleFormation = {
  id: "b1",
  domaine: "banque",
  ordre: 1,
  titre: "Le système bancaire français et européen",
  description:
    "Les acteurs, les institutions et l'architecture de supervision qui encadrent l'activité bancaire, du guichet jusqu'à la Banque centrale européenne.",
  cours: {
    fondamentaux: `Une banque exerce trois métiers de base : elle **collecte des dépôts**, elle **distribue du crédit** et elle **gère les moyens de paiement**. En prêtant plus qu'elle ne détient en dépôts immédiatement disponibles (tout en respectant des ratios prudentiels stricts), elle participe à la **création monétaire** — c'est le mécanisme des "crédits qui font les dépôts".

En France, on distingue plusieurs familles d'acteurs régis par le **Code monétaire et financier (CMF)** :

- les **établissements de crédit** (banques universelles, banques mutualistes/coopératives, sociétés financières spécialisées) : seuls habilités à recevoir des fonds remboursables du public et à octroyer des crédits ;
- les **établissements de paiement** et **établissements de monnaie électronique**, qui gèrent des services de paiement sans avoir la capacité d'octroyer certains crédits ;
- les **entreprises d'investissement**, tournées vers les services sur titres financiers.

Toute banque a besoin d'un **agrément** délivré par le superviseur avant d'exercer, et bénéficie ensuite du **passeport européen** pour opérer dans toute l'Union européenne sans nouvel agrément national.

Au sommet du système se trouve la **banque centrale**. En zone euro, la politique monétaire est unique et conduite par la **Banque centrale européenne (BCE)**, en lien avec les banques centrales nationales (dont la **Banque de France**) au sein de l'**Eurosystème**. Le Conseil des gouverneurs de la BCE fixe les **taux directeurs**, qui influencent le coût de l'argent pour toute l'économie.`,
    definitionsCles: [
      {
        terme: "Établissement de crédit",
        definition:
          "Personne morale qui effectue à titre de profession habituelle des opérations de banque (réception de fonds remboursables du public, opérations de crédit) — art. L511-1 du Code monétaire et financier.",
      },
      {
        terme: "Banque de France",
        definition:
          "Banque centrale nationale française, membre de l'Eurosystème. Assure la mise en œuvre locale de la politique monétaire, la stabilité financière, la tenue des fichiers d'incidents (FICP, FCC) et le secrétariat de plusieurs commissions de surendettement.",
      },
      {
        terme: "BCE (Banque centrale européenne)",
        definition:
          "Institution de l'Union européenne, indépendante, chargée de la politique monétaire unique de la zone euro (objectif de stabilité des prix) et, depuis 2014, de la supervision prudentielle directe des banques les plus importantes via le Mécanisme de surveillance unique (MSU).",
      },
      {
        terme: "ACPR",
        definition:
          "Autorité de contrôle prudentiel et de résolution, adossée à la Banque de France. Supervise l'agrément, la solidité financière et le respect des règles de protection de la clientèle des banques et des assureurs en France.",
      },
      {
        terme: "AMF",
        definition:
          "Autorité des marchés financiers. Régule les marchés financiers, les sociétés de gestion et veille à la bonne information et à la protection des investisseurs (produits financiers, épargne salariale, conseillers en investissements financiers).",
      },
      {
        terme: "Passeport européen",
        definition:
          "Faculté pour un établissement agréé dans un État membre d'exercer son activité dans les autres États membres, par succursale ou en libre prestation de services, sans nouvel agrément local.",
      },
      {
        terme: "Union bancaire",
        definition:
          "Cadre européen construit après la crise de 2008, reposant sur trois piliers : le Mécanisme de surveillance unique (MSU, supervision), le Mécanisme de résolution unique (MRU, gestion des défaillances) et un projet de garantie des dépôts européenne encore inachevé.",
      },
      {
        terme: "Taux directeurs",
        definition:
          "Taux d'intérêt fixés par la banque centrale (taux de refinancement, taux de facilité de dépôt, taux de facilité de prêt marginal) qui orientent le coût de l'argent sur le marché interbancaire et, par ricochet, les taux appliqués aux clients.",
      },
      {
        terme: "Ratio de solvabilité (CET1)",
        definition:
          "Rapport entre les fonds propres de meilleure qualité (Common Equity Tier 1) d'une banque et ses actifs pondérés des risques ; exigé par Bâle III pour garantir sa capacité à absorber des pertes.",
      },
      {
        terme: "SEPA",
        definition:
          "Single Euro Payments Area : espace unique de paiement en euros harmonisant virements et prélèvements entre 36 pays européens selon des standards communs (IBAN, BIC).",
      },
      {
        terme: "LCR (Liquidity Coverage Ratio)",
        definition:
          "Ratio de liquidité à court terme exigé par Bâle III : actifs liquides de haute qualité rapportés aux sorties nettes de trésorerie prévisibles sur 30 jours en scénario de stress ; doit être ≥ 100 %.",
      },
      {
        terme: "NSFR (Net Stable Funding Ratio)",
        definition:
          "Ratio de liquidité structurelle qui rapporte les ressources stables disponibles aux besoins de financement stable à un an, pour éviter qu'une banque finance des actifs longs par des ressources trop courtes.",
      },
      {
        terme: "Coussins de fonds propres",
        definition:
          "Exigences de fonds propres supplémentaires au minimum réglementaire de base (coussin de conservation de 2,5 %, coussin contracyclique variable, coussin pour les établissements systémiques), qui s'ajoutent au CET1 minimum de 4,5 %.",
      },
      {
        terme: "Autorité bancaire européenne (ABE/EBA)",
        definition:
          "Agence de l'Union européenne chargée d'élaborer les normes techniques harmonisées applicables aux banques (dont les tests de résistance européens) et de veiller à la convergence des pratiques de supervision.",
      },
    ],
    approfondissement: `**La supervision à deux étages.** Depuis 2014, le Mécanisme de surveillance unique (MSU) confie à la BCE la supervision directe des établissements dits "significatifs" (grands groupes bancaires), tandis que l'ACPR continue de superviser directement les établissements plus petits, en lien étroit avec la BCE. C'est la réponse structurelle à la crise des dettes souveraines de 2010-2012, pour éviter que la fragilité d'une banque nationale ne contamine tout le système européen.

**Bâle III, en bref.** Le corpus prudentiel issu du Comité de Bâle (accords post-2008, transposés en droit européen via CRD IV/CRR puis leurs révisions) repose sur trois piliers : (1) des exigences de fonds propres et de liquidité renforcées (ratio CET1, ratio de levier, LCR pour la liquidité court terme, NSFR pour la liquidité structurelle) ; (2) un processus de surveillance prudentielle individualisé ; (3) une discipline de marché via la transparence de l'information publiée.

**Les quatre grands risques bancaires** que la réglementation cherche à couvrir : le **risque de crédit** (un emprunteur ne rembourse pas), le **risque de marché** (variation de valeur des positions de marché), le **risque de liquidité** (incapacité à honorer ses engagements à court terme malgré une solvabilité suffisante) et le **risque opérationnel** (fraude, panne informatique, erreur humaine).

**Le mécanisme de résolution.** Depuis la directive BRRD (2014), une banque en grande difficulté n'est plus systématiquement "sauvée" par l'argent public : le principe du **bail-in** impose d'abord aux actionnaires puis à certains créanciers d'absorber les pertes avant toute intervention publique, pour limiter l'aléa moral.`,
    historique: `- **1800** : création de la Banque de France par Bonaparte, chargée d'émettre la monnaie fiduciaire.
- **1945** : nationalisation de la Banque de France et des principales banques de dépôt à la Libération.
- **1984** : la "loi bancaire" instaure le statut unique de banque universelle et crée le cadre encore largement en vigueur du Code monétaire et financier.
- **1986-1987 puis années 1990** : vagues de privatisation des banques nationalisées.
- **1999** : l'euro devient monnaie scripturale unique pour onze pays ; la BCE, créée en 1998, prend en charge la politique monétaire.
- **2002** : mise en circulation des pièces et billets en euros.
- **2008** : la crise financière mondiale (subprimes, faillite de Lehman Brothers) révèle la fragilité du système bancaire international et déclenche une refonte réglementaire mondiale (Bâle III).
- **2010-2012** : crise des dettes souveraines en zone euro, qui accélère le projet d'union bancaire.
- **2014** : entrée en vigueur du Mécanisme de surveillance unique confiant à la BCE la supervision des grandes banques européennes.`,
    evolutionsJuridiques: [
      {
        date: "1984",
        evenement: "Loi bancaire du 24 janvier 1984",
        texte:
          "Fonde le statut de banque universelle et unifie le cadre juridique des établissements de crédit, matrice du futur Code monétaire et financier.",
      },
      {
        date: "1999-2002",
        evenement: "Passage à l'euro",
        texte:
          "L'euro devient la monnaie unique, d'abord scripturale (1999) puis fiduciaire (2002), transférant la politique monétaire à la BCE.",
      },
      {
        date: "2010",
        evenement: "Loi de régulation bancaire et financière",
        texte:
          "Réforme la supervision française post-crise 2008 et prépare la fusion des autorités de contrôle bancaire et assurantiel.",
      },
      {
        date: "2013",
        evenement: "Création de l'ACPR",
        texte:
          "Fusion de l'Autorité de contrôle prudentiel (banque) avec les missions de contrôle de l'assurance, sous l'égide de la Banque de France.",
      },
      {
        date: "2014",
        evenement: "Entrée en vigueur du Mécanisme de surveillance unique (MSU)",
        texte:
          "La BCE devient superviseur prudentiel direct des groupes bancaires les plus importants de la zone euro.",
      },
      {
        date: "2014",
        evenement: "Directive BRRD (redressement et résolution bancaire)",
        texte:
          "Introduit le principe de bail-in pour faire porter les pertes d'une banque en faillite d'abord sur ses actionnaires et créanciers.",
      },
    ],
    citations: [
      {
        texte:
          "L'établissement de crédit est une personne morale qui effectue à titre de profession habituelle des opérations de banque.",
        auteur: "Code monétaire et financier",
        contexte: "Article L511-1, définition légale de référence.",
      },
      {
        texte: "L'inflation est toujours et partout un phénomène monétaire.",
        auteur: "Milton Friedman",
        contexte:
          "Formule résumant l'école monétariste, utile pour comprendre la logique des politiques de taux directeurs.",
      },
    ],
    sourcesReference: [
      "Code monétaire et financier, notamment Livre V (les prestataires de services)",
      "Banque de France — publications pédagogiques ABC de l'économie",
      "ACPR — rapports annuels et fiches pratiques",
      "Sylvie Diatkine, Monnaie, banque, finance",
      "Manuels du Centre de Formation de la Profession Bancaire (CFPB)",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "b1-fc-01", recto: "Que signifie ACPR ?", verso: "Autorité de contrôle prudentiel et de résolution.", difficulte: "fondamental" },
    { id: "b1-fc-02", recto: "Qui fixe la politique monétaire de la zone euro ?", verso: "La Banque centrale européenne (BCE), au sein de l'Eurosystème.", difficulte: "fondamental" },
    { id: "b1-fc-03", recto: "Quels sont les trois métiers de base d'une banque ?", verso: "Collecte des dépôts, distribution du crédit, gestion des moyens de paiement.", difficulte: "fondamental" },
    { id: "b1-fc-04", recto: "Que permet le passeport européen ?", verso: "Exercer dans toute l'UE avec un seul agrément national, par succursale ou en libre prestation de services.", difficulte: "intermediaire" },
    { id: "b1-fc-05", recto: "Depuis quand la BCE supervise-t-elle directement les grandes banques ?", verso: "Depuis 2014, via le Mécanisme de surveillance unique (MSU).", difficulte: "intermediaire" },
    { id: "b1-fc-06", recto: "Quels sont les trois piliers de l'union bancaire européenne ?", verso: "MSU (supervision), MRU (résolution), et un projet de garantie des dépôts commune encore inachevé.", difficulte: "avance" },
    { id: "b1-fc-07", recto: "Que mesure le ratio CET1 ?", verso: "La part des fonds propres de meilleure qualité rapportée aux actifs pondérés des risques d'une banque.", difficulte: "avance" },
    { id: "b1-fc-08", recto: "Citez les 4 grands risques bancaires réglementés.", verso: "Risque de crédit, de marché, de liquidité, opérationnel.", difficulte: "intermediaire" },
    { id: "b1-fc-09", recto: "Qu'est-ce que le bail-in ?", verso: "Le principe, issu de la directive BRRD (2014), qui fait porter les pertes d'une banque en difficulté d'abord sur ses actionnaires et certains créanciers avant tout recours à l'argent public.", difficulte: "avance" },
    { id: "b1-fc-10", recto: "En quelle année la loi bancaire fondatrice a-t-elle été adoptée en France ?", verso: "1984 (loi du 24 janvier 1984).", difficulte: "fondamental" },
    { id: "b1-fc-11", recto: "Que signifie SEPA ?", verso: "Single Euro Payments Area, l'espace unique de paiement en euros harmonisant virements et prélèvements en Europe.", difficulte: "fondamental" },
    { id: "b1-fc-12", recto: "Quelle institution régule les marchés financiers et la protection des investisseurs en France ?", verso: "L'AMF, Autorité des marchés financiers.", difficulte: "fondamental" },
    { id: "b1-fc-13", recto: "Que mesure le LCR ?", verso: "Les actifs liquides de haute qualité rapportés aux sorties nettes de trésorerie prévisibles sur 30 jours en scénario de stress ; doit être ≥ 100 %.", difficulte: "avance" },
    { id: "b1-fc-14", recto: "Que mesure le NSFR ?", verso: "Les ressources stables disponibles rapportées aux besoins de financement stable à un an.", difficulte: "avance" },
    { id: "b1-fc-15", recto: "Quel est le minimum réglementaire de base du ratio CET1 sous Bâle III ?", verso: "4,5 %, avant application des coussins supplémentaires.", difficulte: "avance" },
    { id: "b1-fc-16", recto: "Quel est le taux du coussin de conservation des fonds propres ?", verso: "2,5 %, s'ajoutant au minimum CET1 de 4,5 %.", difficulte: "avance" },
    { id: "b1-fc-17", recto: "Qu'est-ce que le coussin contracyclique ?", verso: "Un coussin de fonds propres variable, activé par le régulateur national pour freiner une croissance excessive du crédit.", difficulte: "avance" },
    { id: "b1-fc-18", recto: "Que signifie EBA/ABE et quel est son rôle ?", verso: "L'Autorité bancaire européenne, qui élabore les normes techniques harmonisées et organise les tests de résistance (stress tests) européens.", difficulte: "intermediaire" },
    { id: "b1-fc-19", recto: "Quels sont les trois piliers de Bâle III ?", verso: "Exigences de fonds propres et de liquidité, processus de surveillance prudentielle, discipline de marché par la transparence.", difficulte: "intermediaire" },
    { id: "b1-fc-20", recto: "Qu'est-ce qu'un établissement 'systémique' (G-SIB) ?", verso: "Un établissement dont la taille et l'interconnexion sont telles que sa défaillance menacerait la stabilité financière mondiale, soumis à des exigences de fonds propres renforcées.", difficulte: "avance" },
    { id: "b1-fc-21", recto: "En quelle année la Banque de France a-t-elle été créée, et par qui ?", verso: "1800, par Bonaparte.", difficulte: "intermediaire" },
    { id: "b1-fc-22", recto: "Quel événement de 2008 a déclenché la refonte réglementaire mondiale de Bâle III ?", verso: "La crise financière mondiale (subprimes, faillite de Lehman Brothers).", difficulte: "fondamental" },
    { id: "b1-fc-23", recto: "Quelle crise a accéléré le projet d'union bancaire européenne ?", verso: "La crise des dettes souveraines en zone euro (2010-2012).", difficulte: "intermediaire" },
    { id: "b1-fc-24", recto: "Quelle est la différence entre un établissement de crédit et un établissement de paiement ?", verso: "Seul l'établissement de crédit peut recevoir des fonds remboursables du public et octroyer tout type de crédit ; l'établissement de paiement gère des services de paiement sans cette capacité.", difficulte: "intermediaire" },
    { id: "b1-fc-25", recto: "Qui compose les équipes de surveillance conjointes (Joint Supervisory Teams) du MSU ?", verso: "Des agents de la BCE et de l'autorité nationale compétente (ACPR pour la France), pour la supervision des établissements significatifs.", difficulte: "avance" },
    { id: "b1-fc-26", recto: "Le risque de liquidité suppose-t-il nécessairement une insolvabilité ?", verso: "Non : une banque peut être solvable mais temporairement incapable d'honorer ses engagements à court terme, faute de liquidités immédiatement mobilisables.", difficulte: "avance" },
    { id: "b1-fc-27", recto: "Quelle institution tient le FCC (fichier central des chèques) ?", verso: "La Banque de France.", difficulte: "intermediaire" },
    { id: "b1-fc-28", recto: "Quel est le montant de la garantie des dépôts par déposant et par établissement en France ?", verso: "100 000 €.", difficulte: "fondamental" },
  ],
  quiz: [
    {
      id: "b1-qz-01",
      question: "Quel article du Code monétaire et financier définit l'établissement de crédit ?",
      choix: ["L511-1", "L312-1", "L613-1", "L221-1"],
      bonneReponse: 0,
      explication: "L'article L511-1 du CMF pose la définition légale de l'établissement de crédit.",
      difficulte: "intermediaire",
    },
    {
      id: "b1-qz-02",
      question: "Le Mécanisme de surveillance unique (MSU) confie la supervision directe des grandes banques européennes à :",
      choix: ["L'ACPR", "La BCE", "L'AMF", "La Commission européenne"],
      bonneReponse: 1,
      explication: "Depuis 2014, la BCE supervise directement les groupes bancaires jugés « significatifs » ; l'ACPR garde la main sur les autres, en coordination avec elle.",
      difficulte: "fondamental",
    },
    {
      id: "b1-qz-03",
      question: "Lequel de ces éléments n'est PAS un pilier officiel de l'union bancaire européenne ?",
      choix: [
        "Le Mécanisme de surveillance unique",
        "Le Mécanisme de résolution unique",
        "Un système commun de garantie des dépôts pleinement en vigueur",
        "Aucune des réponses ci-dessus",
      ],
      bonneReponse: 2,
      explication: "Le troisième pilier, la garantie européenne des dépôts, reste à ce jour un projet non finalisé ; seule une garantie nationale harmonisée (100 000 € par déposant et par établissement) existe pleinement.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-04",
      question: "Le principe de « bail-in » introduit par la directive BRRD signifie que :",
      choix: [
        "L'État recapitalise systématiquement les banques en difficulté",
        "Les pertes sont d'abord absorbées par les actionnaires et certains créanciers",
        "Les déposants perdent automatiquement leurs dépôts au-delà de 100 000 €",
        "La banque centrale rachète automatiquement la banque en difficulté",
      ],
      bonneReponse: 1,
      explication: "Le bail-in fait porter la charge du sauvetage d'abord sur les actionnaires puis certains créanciers, avant tout recours à l'argent public, pour limiter l'aléa moral.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-05",
      question: "Quelle institution est chargée en France de la tenue du FICP (fichier des incidents de remboursement des crédits aux particuliers) ?",
      choix: ["L'AMF", "La Banque de France", "L'ACPR", "Le ministère de l'Économie"],
      bonneReponse: 1,
      explication: "La Banque de France gère plusieurs fichiers d'incidents, dont le FICP et le FCC (chèques).",
      difficulte: "intermediaire",
    },
    {
      id: "b1-qz-06",
      question: "Le ratio de solvabilité CET1 rapporte les fonds propres de meilleure qualité à :",
      choix: [
        "Le total du bilan de la banque",
        "Les dépôts collectés",
        "Les actifs pondérés des risques",
        "Le résultat net annuel",
      ],
      bonneReponse: 2,
      explication: "CET1 = fonds propres de base durs / actifs pondérés des risques (RWA), pierre angulaire de Bâle III.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-07",
      question: "L'euro fiduciaire (pièces et billets) est entré en circulation en :",
      choix: ["1999", "2002", "2008", "1992"],
      bonneReponse: 1,
      explication: "1999 marque le passage à l'euro scriptural ; les pièces et billets ne circulent qu'à partir du 1er janvier 2002.",
      difficulte: "fondamental",
    },
    {
      id: "b1-qz-08",
      question: "Parmi ces risques, lequel correspond à une fraude interne ou une panne informatique ?",
      choix: ["Risque de crédit", "Risque de marché", "Risque de liquidité", "Risque opérationnel"],
      bonneReponse: 3,
      explication: "Le risque opérationnel couvre les pertes liées aux processus, aux personnes, aux systèmes internes ou à des événements externes (fraude, panne, erreur).",
      difficulte: "fondamental",
    },
    {
      id: "b1-qz-09",
      question: "Le minimum réglementaire de base du ratio CET1 sous Bâle III est de :",
      choix: ["2 %", "4,5 %", "8 %", "10,5 %"],
      bonneReponse: 1,
      explication: "4,5 % est le socle, auquel s'ajoutent les coussins (conservation, contracyclique, systémique).",
      difficulte: "avance",
    },
    {
      id: "b1-qz-10",
      question: "Le coussin de conservation des fonds propres représente :",
      choix: ["0,5 %", "2,5 %", "5 %", "10 %"],
      bonneReponse: 1,
      explication: "Coussin fixe de 2,5 %, applicable à tous les établissements en plus du minimum CET1.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-11",
      question: "Le LCR doit être au minimum de :",
      choix: ["50 %", "80 %", "100 %", "150 %"],
      bonneReponse: 2,
      explication: "Le LCR doit être supérieur ou égal à 100 % : les actifs liquides doivent couvrir les sorties nettes de trésorerie sur 30 jours de stress.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-12",
      question: "L'Autorité bancaire européenne (EBA) est notamment chargée :",
      choix: [
        "De fixer les taux directeurs",
        "D'élaborer les normes techniques harmonisées et d'organiser les tests de résistance européens",
        "De sanctionner pénalement les dirigeants de banque",
        "De gérer le FICP français",
      ],
      bonneReponse: 1,
      explication: "L'EBA promeut la convergence des pratiques prudentielles, sans être elle-même un superviseur direct comme la BCE.",
      difficulte: "intermediaire",
    },
    {
      id: "b1-qz-13",
      question: "Un établissement 'systémique' (G-SIB) est soumis à :",
      choix: [
        "Aucune exigence particulière",
        "Des exigences de fonds propres renforcées du fait du risque qu'il fait peser sur tout le système",
        "Une exonération de supervision par la BCE",
        "Une interdiction d'exercer en zone euro",
      ],
      bonneReponse: 1,
      explication: "La taille et l'interconnexion des G-SIB justifient un coussin de fonds propres systémique additionnel.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-14",
      question: "Les Joint Supervisory Teams du MSU rassemblent :",
      choix: [
        "Uniquement des agents de la BCE",
        "Des agents de la BCE et de l'autorité nationale compétente",
        "Uniquement des agents de l'ACPR",
        "Des agents de l'AMF et de la BCE"
      ],
      bonneReponse: 1,
      explication: "La supervision des établissements significatifs associe BCE et superviseur national (ACPR pour la France).",
      difficulte: "avance",
    },
    {
      id: "b1-qz-15",
      question: "Le risque de liquidité, par définition, suppose :",
      choix: [
        "Toujours une insolvabilité de la banque",
        "Une incapacité à honorer ses engagements à court terme, indépendamment de la solvabilité",
        "Une fraude interne",
        "Un défaut de l'emprunteur"
      ],
      bonneReponse: 1,
      explication: "Une banque solvable peut néanmoins connaître une crise de liquidité si ses actifs ne sont pas mobilisables assez vite.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-16",
      question: "Le FCC, fichier tenu par la Banque de France, recense :",
      choix: ["Les incidents de remboursement de crédit", "Les chèques irréguliers et interdits bancaires", "Les comptes courants ouverts", "Les taux d'usure en vigueur"],
      bonneReponse: 1,
      explication: "Le FCC (Fichier central des chèques) est distinct du FICP, consacré au crédit.",
      difficulte: "intermediaire",
    },
    {
      id: "b1-qz-17",
      question: "La garantie des dépôts en France couvre, par déposant et par établissement :",
      choix: ["10 000 €", "50 000 €", "100 000 €", "500 000 €"],
      bonneReponse: 2,
      explication: "Le plafond harmonisé européen de garantie des dépôts est de 100 000 €.",
      difficulte: "fondamental",
    },
    {
      id: "b1-qz-18",
      question: "Le passage à l'euro fiduciaire (billets et pièces) a eu lieu :",
      choix: ["Le 1er janvier 1999", "Le 1er janvier 2002", "Le 1er janvier 2008", "Le 1er janvier 1992"],
      bonneReponse: 1,
      explication: "1999 : euro scriptural ; 2002 : euro fiduciaire (pièces et billets).",
      difficulte: "fondamental",
    },
    {
      id: "b1-qz-19",
      question: "La crise des dettes souveraines de 2010-2012 a notamment eu pour conséquence :",
      choix: [
        "La création de la Banque de France",
        "L'accélération du projet d'union bancaire européenne",
        "La suppression de l'euro",
        "La fin de la supervision bancaire nationale"
      ],
      bonneReponse: 1,
      explication: "Cette crise a révélé le risque de contagion entre dette souveraine et fragilité bancaire nationale, d'où l'union bancaire.",
      difficulte: "intermediaire",
    },
    {
      id: "b1-qz-20",
      question: "Un établissement de paiement, contrairement à un établissement de crédit, ne peut pas en principe :",
      choix: [
        "Gérer des moyens de paiement",
        "Recevoir des fonds remboursables du public et octroyer tout type de crédit",
        "Obtenir un agrément",
        "Bénéficier du passeport européen"
      ],
      bonneReponse: 1,
      explication: "C'est la distinction structurante entre établissement de crédit et établissement de paiement.",
      difficulte: "intermediaire",
    },
    {
      id: "b1-qz-21",
      question: "Le NSFR vise à éviter :",
      choix: [
        "Qu'une banque finance des actifs longs par des ressources trop courtes",
        "Toute prise de risque de crédit",
        "La fraude interne",
        "Les abus de marché"
      ],
      bonneReponse: 0,
      explication: "Le NSFR encadre la transformation de maturité excessive, source de fragilité structurelle.",
      difficulte: "avance",
    },
    {
      id: "b1-qz-22",
      question: "En 1984, la loi bancaire française a notamment :",
      choix: [
        "Créé l'euro",
        "Institué le statut unique de banque universelle",
        "Créé l'ACPR",
        "Créé le MSU"
      ],
      bonneReponse: 1,
      explication: "La loi du 24 janvier 1984 est la matrice encore largement en vigueur du droit bancaire français.",
      difficulte: "intermediaire",
    },
  ],
  exercices: [
    {
      id: "b1-ex-01",
      titre: "Identifier le bon superviseur",
      enonce:
        "Une grande banque française, dont le bilan dépasse le seuil de significativité européen, souhaite savoir qui assure sa supervision prudentielle au quotidien. Expliquez le mécanisme applicable et le rôle respectif de la BCE et de l'ACPR dans ce cas.",
      corrige:
        "Les établissements « significatifs » (au-delà de certains seuils de taille et d'importance systémique) sont supervisés directement par la BCE dans le cadre du Mécanisme de surveillance unique (MSU), en s'appuyant sur des équipes de surveillance conjointes (Joint Supervisory Teams) où l'ACPR est représentée. L'ACPR conserve un rôle opérationnel de terrain et reste seule compétente pour les établissements non significatifs, ainsi que pour l'ensemble des missions de protection de la clientèle, qui ne relèvent pas du MSU.",
      difficulte: "intermediaire",
    },
    {
      id: "b1-ex-02",
      titre: "Bail-in en pratique",
      enonce:
        "Une banque de taille moyenne rencontre de graves difficultés financières. Décrivez, dans l'ordre, les catégories de parties prenantes qui doivent en principe absorber les pertes avant toute intervention publique, selon la logique du bail-in.",
      corrige:
        "L'ordre d'absorption des pertes suit la hiérarchie du passif : d'abord les actionnaires (capital social), puis les détenteurs d'instruments de dette subordonnée (AT1, Tier 2), puis les créanciers chirographaires selon leur rang, avant que les dépôts garantis (jusqu'à 100 000 € par déposant et par établissement) ne soient jamais mis à contribution. Ce n'est qu'en dernier recours, et sous conditions strictes, que des fonds de résolution ou publics peuvent intervenir.",
      difficulte: "avance",
    },
    {
      id: "b1-ex-03",
      titre: "Calculer un ratio CET1",
      enonce:
        "Une banque affiche des fonds propres CET1 de 9 milliards d'euros pour des actifs pondérés des risques (RWA) de 120 milliards d'euros. Calculez son ratio CET1. Respecte-t-elle le minimum réglementaire de 4,5 % plus le coussin de conservation de 2,5 % (soit 7 % au total) ?",
      corrige:
        "Ratio CET1 = fonds propres CET1 / RWA = 9 / 120 = 7,5 %. Ce ratio est supérieur au seuil combiné de 7 % (4,5 % de minimum + 2,5 % de coussin de conservation) : la banque respecte donc cette exigence, avec une marge de 0,5 point. Elle pourrait ne pas respecter un coussin systémique ou contracyclique supplémentaire si celui-ci portait l'exigence totale au-delà de 7,5 %.",
      difficulte: "avance",
    },
    {
      id: "b1-ex-04",
      titre: "Calculer un LCR simplifié",
      enonce:
        "Une banque détient 45 millions d'euros d'actifs liquides de haute qualité. Ses sorties nettes de trésorerie estimées sur 30 jours en scénario de stress s'élèvent à 40 millions d'euros. Calculez son LCR. Respecte-t-elle l'exigence réglementaire ?",
      corrige:
        "LCR = actifs liquides de haute qualité / sorties nettes de trésorerie à 30 jours = 45 / 40 = 112,5 %. Le LCR minimum exigé étant de 100 %, la banque respecte l'exigence avec une marge confortable : elle dispose de plus d'actifs liquides mobilisables que ce que le scénario de stress à 30 jours exigerait.",
      difficulte: "avance",
    },
    {
      id: "b1-ex-05",
      titre: "Identifier le régulateur compétent selon l'activité",
      enonce:
        "Un groupe bancaire français exerce trois activités : (1) collecte de dépôts et distribution de crédits aux particuliers, (2) gestion de portefeuilles de titres pour compte de tiers via sa filiale société de gestion, (3) filiale d'assurance-vie. Pour chaque activité, identifiez le ou les régulateurs compétents.",
      corrige:
        "(1) Activité bancaire classique : ACPR (agrément, supervision prudentielle et de la protection de la clientèle), et BCE dans le cadre du MSU si le groupe est classé « significatif ». (2) Gestion de portefeuille pour compte de tiers : AMF (agrément de société de gestion de portefeuille, contrôle des règles de conduite). (3) Filiale d'assurance-vie : ACPR (agrément et supervision prudentielle des assureurs), sous le régime Solvabilité II. Ce groupe relève donc simultanément de trois autorités selon l'activité concernée.",
      difficulte: "intermediaire",
    },
  ],
};
