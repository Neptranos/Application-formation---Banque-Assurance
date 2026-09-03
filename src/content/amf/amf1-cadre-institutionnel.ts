import type { ModuleFormation } from "@/content/types";

export const amf1: ModuleFormation = {
  id: "amf1",
  domaine: "amf",
  ordre: 1,
  titre: "AMF 1 — Cadre institutionnel et réglementaire",
  description:
    "L'Autorité des marchés financiers, son Règlement général, l'examen certifié AMF lui-même, et l'articulation avec l'ACPR.",
  cours: {
    fondamentaux: `L'**Autorité des marchés financiers (AMF)** est née de la fusion, par la **loi de sécurité financière du 1er août 2003**, de la Commission des opérations de bourse (COB), du Conseil des marchés financiers (CMF) et du Conseil de discipline de la gestion financière (CDGF). C'est une **autorité publique indépendante** dotée de la personnalité morale, financée principalement par les contributions des professionnels qu'elle régule.

Ses quatre grandes missions sont :

1. **réglementer** : elle édicte le **Règlement général de l'AMF (RGAMF)**, homologué par arrêté du ministre chargé de l'Économie, qui précise et complète le Code monétaire et financier ;
2. **autoriser** : agrément des sociétés de gestion de portefeuille, visa des documents d'information (prospectus, DICI/PRIIPs), habilitation des prestataires ;
3. **surveiller et contrôler** : surveillance des marchés, contrôles sur pièces et sur place des professionnels ;
4. **sanctionner** : par l'intermédiaire de sa **Commission des sanctions**, organe distinct du Collège de l'AMF qui décide des poursuites, garantissant une séparation entre l'autorité de poursuite et l'autorité de jugement.

L'AMF régule les marchés financiers et leurs acteurs (sociétés de gestion, prestataires de services d'investissement, conseillers en investissements financiers, émetteurs cotés), tandis que l'**ACPR** régule les établissements de crédit et les entreprises d'assurance. Un même professionnel (par exemple un conseiller en gestion de patrimoine multi-statuts) peut ainsi relever simultanément des deux autorités selon les activités exercées.

C'est précisément pour vérifier les compétences des professionnels en contact avec la clientèle sur des produits financiers que l'AMF a instauré, en application de l'**arrêté du 4 novembre 2009**, une obligation de certification des connaissances minimales : c'est l'**examen certifié AMF**, que ce module et les suivants préparent.`,
    definitionsCles: [
      { terme: "AMF", definition: "Autorité des marchés financiers, autorité publique indépendante née en 2003 de la fusion de la COB, du CMF et du CDGF, chargée de la régulation des marchés financiers français." },
      { terme: "Règlement général de l'AMF (RGAMF)", definition: "Corpus réglementaire édicté par l'AMF, homologué par le ministre de l'Économie, qui précise les règles applicables aux marchés, aux émetteurs, aux prestataires et aux professionnels." },
      { terme: "Collège de l'AMF", definition: "Organe décisionnel de l'AMF (16 membres), qui définit les orientations, adopte la réglementation et décide de l'ouverture des procédures de contrôle et de sanction." },
      { terme: "Commission des sanctions", definition: "Organe de l'AMF distinct du Collège, chargé de juger les personnes mises en cause à l'issue d'un contrôle ou d'une enquête, garantissant la séparation entre poursuite et jugement." },
      { terme: "Examen certifié AMF", definition: "Examen de connaissances minimales, rendu obligatoire par l'arrêté du 4 novembre 2009, pour certaines fonctions en contact avec la clientèle ou impliquées dans la commercialisation de produits financiers." },
      { terme: "Prestataire de services d'investissement (PSI)", definition: "Entreprise d'investissement ou établissement de crédit agréé pour fournir un ou plusieurs services d'investissement (négociation, conseil, gestion de portefeuille, etc.)." },
      { terme: "Conseiller en investissements financiers (CIF)", definition: "Professionnel habilité à fournir du conseil en investissement à titre de profession habituelle, immatriculé à l'ORIAS, membre obligatoire d'une association professionnelle agréée par l'AMF et soumis à son contrôle." },
      { terme: "Société de gestion de portefeuille (SGP)", definition: "Société agréée par l'AMF pour gérer des portefeuilles de titres financiers pour le compte de tiers ou gérer des organismes de placement collectif (OPC)." },
      { terme: "Médiateur de l'AMF", definition: "Service de médiation gratuit et indépendant de l'AMF, chargé de proposer des solutions amiables aux litiges entre investisseurs particuliers et professionnels régulés par l'AMF." },
      { terme: "RGAMF, Livre III", definition: "Partie du Règlement général de l'AMF consacrée aux prestataires : règles de bonne conduite, organisation, conflits d'intérêts, connaissance du client — cœur de la matière « déontologie » de l'examen." },
      { terme: "Passeport européen (PSI)", definition: "Faculté pour un prestataire de services d'investissement agréé dans un État membre d'exercer dans toute l'UE sans nouvel agrément, sur le modèle du passeport bancaire." },
      { terme: "Recours contre les décisions de sanction", definition: "Les décisions de la Commission des sanctions de l'AMF peuvent faire l'objet d'un recours devant la Cour d'appel de Paris (ou le Conseil d'État pour certaines décisions individuelles hors sanctions)." },
    ],
    approfondissement: `**Pourquoi une autorité unique des marchés en 2003 ?** Avant la loi de sécurité financière, la régulation française des marchés était éclatée entre plusieurs organismes aux compétences imbriquées (la COB pour la protection de l'épargne et l'information financière, le CMF pour les marchés et les prestataires, le CDGF pour la discipline de la gestion). Cet éclatement nuisait à la lisibilité et à l'efficacité du contrôle. La fusion en une autorité unique répondait à un mouvement européen plus large de simplification de la supervision financière, que l'on retrouvera ensuite côté bancaire et assurantiel avec la création de l'ACPR en 2010.

**La séparation Collège / Commission des sanctions** est un point fréquemment testé : le Collège, organe de gouvernance de l'AMF, décide de l'ouverture d'une procédure de sanction sur la base d'un rapport de contrôle ou d'enquête, mais ne juge jamais lui-même — c'est la Commission des sanctions, composition distincte, qui statue sur la culpabilité et la sanction. Cette séparation organique répond à une exigence d'impartialité (équivalente à la séparation des fonctions de poursuite et de jugement en matière pénale), consacrée par la jurisprudence de la Cour européenne des droits de l'homme.

**Champ d'application de l'examen certifié.** L'obligation de certification concerne prioritairement les personnes chargées, au sein d'un PSI, d'une SGP ou d'un CIF, de la commercialisation d'instruments financiers auprès de la clientèle, du conseil en investissement, de la gestion de portefeuille pour compte de tiers, de la réception-transmission d'ordres, ou encore des fonctions de compliance officer (RCCI, RCSI). La certification peut être obtenue soit en passant l'examen auprès d'un organisme certificateur habilité par l'AMF, soit via un cursus de formation initiale reconnu équivalent par l'AMF (certaines formations universitaires ou diplômantes).

**CIF : un statut à la croisée de l'AMF et de l'ORIAS.** Le conseiller en investissements financiers doit cumuler : immatriculation à l'ORIAS, adhésion à une association professionnelle agréée par l'AMF (qui exerce un contrôle de premier niveau), souscription d'une assurance de responsabilité civile professionnelle, et respect d'un code de bonne conduite propre à cette activité — le tout sous la supervision ultime de l'AMF elle-même.`,
    historique: `- **1967** : création de la Commission des opérations de bourse (COB), première autorité française de régulation boursière.
- **1996** : création du Conseil des marchés financiers (CMF), succédant au Conseil des bourses de valeurs.
- **2003** : loi de sécurité financière du 1er août 2003, fusion de la COB, du CMF et du CDGF en une autorité unique, l'AMF.
- **2009** : arrêté du 4 novembre 2009, qui instaure l'obligation de certification des connaissances minimales (examen certifié AMF).
- **2010** : création de l'ACPR côté bancaire et assurantiel, achevant le mouvement de rationalisation de la supervision financière française amorcé en 2003.`,
    evolutionsJuridiques: [
      { date: "2003", evenement: "Loi de sécurité financière", texte: "Fusionne COB, CMF et CDGF pour créer l'AMF, autorité unique de régulation des marchés financiers." },
      { date: "2009", evenement: "Arrêté du 4 novembre 2009", texte: "Instaure l'obligation, pour certaines fonctions, de justifier d'une certification des connaissances minimales AMF." },
      { date: "2010", evenement: "Création de l'ACPR", texte: "Achève, côté bancaire et assurantiel, le mouvement de simplification de la supervision entamé par l'AMF en 2003." },
    ],
    citations: [
      {
        texte:
          "L'Autorité des marchés financiers veille à la protection de l'épargne investie dans les instruments financiers [...], à l'information des investisseurs et au bon fonctionnement des marchés d'instruments financiers.",
        auteur: "Code monétaire et financier",
        contexte: "Article L621-1, définition légale des missions de l'AMF.",
      },
    ],
    sourcesReference: [
      "Code monétaire et financier, art. L621-1 et suivants (AMF)",
      "Règlement général de l'AMF, Livres I à VI",
      "Arrêté du 4 novembre 2009 relatif à la vérification des connaissances minimales",
      "AMF — rapports annuels et guides pédagogiques",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "amf1-fc-01", recto: "En quelle année l'AMF a-t-elle été créée, et par quelle loi ?", verso: "2003, par la loi de sécurité financière du 1er août 2003.", difficulte: "fondamental" },
    { id: "amf1-fc-02", recto: "Quelles trois entités ont fusionné pour former l'AMF ?", verso: "La COB, le CMF et le CDGF.", difficulte: "fondamental" },
    { id: "amf1-fc-03", recto: "Quelles sont les 4 grandes missions de l'AMF ?", verso: "Réglementer, autoriser, surveiller/contrôler, sanctionner.", difficulte: "fondamental" },
    { id: "amf1-fc-04", recto: "Qu'est-ce que le RGAMF ?", verso: "Le Règlement général de l'AMF, homologué par le ministre de l'Économie, qui précise les règles applicables aux marchés et aux professionnels.", difficulte: "fondamental" },
    { id: "amf1-fc-05", recto: "Qui décide de l'ouverture d'une procédure de sanction à l'AMF ?", verso: "Le Collège de l'AMF.", difficulte: "intermediaire" },
    { id: "amf1-fc-06", recto: "Qui juge les personnes mises en cause à l'AMF ?", verso: "La Commission des sanctions, organe distinct du Collège.", difficulte: "intermediaire" },
    { id: "amf1-fc-07", recto: "Pourquoi le Collège et la Commission des sanctions sont-ils séparés ?", verso: "Pour garantir l'impartialité, en séparant la fonction de poursuite de la fonction de jugement.", difficulte: "avance" },
    { id: "amf1-fc-08", recto: "Quel texte a créé l'obligation de l'examen certifié AMF ?", verso: "L'arrêté du 4 novembre 2009.", difficulte: "fondamental" },
    { id: "amf1-fc-09", recto: "Que signifie PSI ?", verso: "Prestataire de services d'investissement.", difficulte: "fondamental" },
    { id: "amf1-fc-10", recto: "Que signifie CIF, et à quel registre doit-il être immatriculé ?", verso: "Conseiller en investissements financiers, immatriculé à l'ORIAS.", difficulte: "fondamental" },
    { id: "amf1-fc-11", recto: "À quoi un CIF doit-il obligatoirement adhérer ?", verso: "Une association professionnelle agréée par l'AMF.", difficulte: "intermediaire" },
    { id: "amf1-fc-12", recto: "Quelle autorité régule les établissements de crédit et les assureurs, par opposition à l'AMF ?", verso: "L'ACPR.", difficulte: "fondamental" },
    { id: "amf1-fc-13", recto: "Devant quelle juridiction peut-on faire appel d'une décision de sanction de l'AMF ?", verso: "La Cour d'appel de Paris (le Conseil d'État pour certaines décisions individuelles hors sanctions).", difficulte: "avance" },
    { id: "amf1-fc-14", recto: "Qu'est-ce que le médiateur de l'AMF ?", verso: "Un service de médiation gratuit et indépendant pour les litiges entre investisseurs particuliers et professionnels régulés par l'AMF.", difficulte: "intermediaire" },
    { id: "amf1-fc-15", recto: "Qu'est-ce qu'une société de gestion de portefeuille (SGP) ?", verso: "Une société agréée par l'AMF pour gérer des portefeuilles pour compte de tiers ou des OPC.", difficulte: "fondamental" },
    { id: "amf1-fc-16", recto: "L'AMF est-elle financée par le budget de l'État ?", verso: "Non, principalement par les contributions des professionnels régulés.", difficulte: "intermediaire" },
    { id: "amf1-fc-17", recto: "Quel livre du RGAMF concentre l'essentiel des règles de bonne conduite des prestataires ?", verso: "Le Livre III.", difficulte: "avance" },
    { id: "amf1-fc-18", recto: "Combien de membres compte le Collège de l'AMF ?", verso: "16 membres.", difficulte: "avance" },
    { id: "amf1-fc-19", recto: "Le passeport européen permet-il à un PSI agréé en France d'exercer dans un autre État membre sans nouvel agrément ?", verso: "Oui.", difficulte: "intermediaire" },
    { id: "amf1-fc-20", recto: "Comment peut-on obtenir la certification AMF sans passer l'examen ?", verso: "Via un cursus de formation initiale reconnu équivalent par l'AMF.", difficulte: "avance" },
    { id: "amf1-fc-21", recto: "Quelle autorité a précédé la COB pour la régulation boursière avant 1967 ?", verso: "Aucune autorité indépendante équivalente n'existait ; la COB, créée en 1967, a été la première du genre.", difficulte: "avance" },
    { id: "amf1-fc-22", recto: "Un CIF doit-il souscrire une assurance de responsabilité civile professionnelle ?", verso: "Oui, c'est une condition de son statut.", difficulte: "intermediaire" },
    { id: "amf1-fc-23", recto: "Quel document l'AMF vise-t-elle avant la commercialisation de certains produits financiers ?", verso: "Le prospectus (et le DICI/document PRIIPs pour les produits packagés destinés aux particuliers).", difficulte: "intermediaire" },
    { id: "amf1-fc-24", recto: "Le CMF (Conseil des marchés financiers) régulait-il plutôt l'information financière ou les marchés et prestataires ?", verso: "Les marchés et les prestataires (l'information financière relevait davantage de la COB).", difficulte: "avance" },
  ],
  quiz: [
    { id: "amf1-qz-01", question: "L'AMF a été créée par :", choix: ["La loi de sécurité financière de 2003", "La loi PACTE de 2019", "La directive MIF2", "Le règlement Solvabilité II"], bonneReponse: 0, explication: "La loi de sécurité financière du 1er août 2003 fusionne COB, CMF et CDGF pour créer l'AMF.", difficulte: "fondamental" },
    { id: "amf1-qz-02", question: "Laquelle de ces missions n'est PAS une mission de l'AMF ?", choix: ["Réglementer", "Sanctionner", "Fixer les taux directeurs de la zone euro", "Autoriser"], bonneReponse: 2, explication: "La fixation des taux directeurs relève de la BCE, pas de l'AMF.", difficulte: "fondamental" },
    { id: "amf1-qz-03", question: "La Commission des sanctions de l'AMF :", choix: ["Est un sous-comité du Collège", "Est un organe distinct du Collège, chargé de juger", "N'existe plus depuis 2010", "Ne peut sanctionner que des personnes morales"], bonneReponse: 1, explication: "La séparation organique entre Collège (poursuite) et Commission des sanctions (jugement) garantit l'impartialité.", difficulte: "intermediaire" },
    { id: "amf1-qz-04", question: "L'obligation de l'examen certifié AMF résulte de :", choix: ["La loi de sécurité financière de 2003", "L'arrêté du 4 novembre 2009", "Le règlement général de l'AMF seul, sans texte externe", "La directive DDA"], bonneReponse: 1, explication: "L'arrêté du 4 novembre 2009 institue la vérification des connaissances minimales pour certaines fonctions.", difficulte: "fondamental" },
    { id: "amf1-qz-05", question: "Un conseiller en investissements financiers (CIF) doit être immatriculé :", choix: ["À l'AMF directement", "À l'ORIAS", "Au greffe du tribunal de commerce uniquement", "À l'ACPR"], bonneReponse: 1, explication: "Comme les autres intermédiaires (assurance, banque), le CIF doit être immatriculé à l'ORIAS.", difficulte: "fondamental" },
    { id: "amf1-qz-06", question: "L'ACPR régule principalement :", choix: ["Les marchés financiers et leurs émetteurs", "Les établissements de crédit et les entreprises d'assurance", "Uniquement les sociétés de gestion", "Les seules plateformes de cryptoactifs"], bonneReponse: 1, explication: "L'AMF régule les marchés financiers, l'ACPR les banques et les assureurs — un même professionnel peut relever des deux.", difficulte: "fondamental" },
    { id: "amf1-qz-07", question: "Le Règlement général de l'AMF est homologué par :", choix: ["Le Premier ministre", "Le ministre chargé de l'Économie", "Le Parlement européen", "La Commission des sanctions"], bonneReponse: 1, explication: "Le RGAMF, bien qu'édicté par l'AMF, doit être homologué par arrêté du ministre de l'Économie.", difficulte: "intermediaire" },
    { id: "amf1-qz-08", question: "Le médiateur de l'AMF est saisi :", choix: ["Uniquement par les professionnels", "Gratuitement par les investisseurs particuliers en litige avec un professionnel régulé", "Uniquement après une décision de justice", "Par la Commission des sanctions"], bonneReponse: 1, explication: "Le médiateur de l'AMF offre un recours amiable et gratuit aux investisseurs particuliers.", difficulte: "intermediaire" },
    { id: "amf1-qz-09", question: "Une décision de sanction de l'AMF peut être contestée devant :", choix: ["Le tribunal de commerce", "La Cour d'appel de Paris", "Le tribunal judiciaire de son domicile", "La Cour de cassation en premier ressort"], bonneReponse: 1, explication: "Les recours contre les sanctions de l'AMF relèvent en principe de la Cour d'appel de Paris.", difficulte: "avance" },
    { id: "amf1-qz-10", question: "Le passeport européen pour un PSI permet :", choix: ["D'exercer dans toute l'UE sans nouvel agrément national", "D'être exonéré de tout contrôle AMF", "De ne plus payer de contribution à l'AMF", "De fusionner automatiquement avec un établissement étranger"], bonneReponse: 0, explication: "Comme en matière bancaire, le passeport européen évite un nouvel agrément dans chaque État membre.", difficulte: "intermediaire" },
    { id: "amf1-qz-11", question: "Le CDGF, fusionné dans l'AMF en 2003, était chargé :", choix: ["De la discipline de la gestion financière", "De la politique monétaire", "De la supervision bancaire", "De la fiscalité de l'épargne"], bonneReponse: 0, explication: "Le Conseil de discipline de la gestion financière (CDGF) est l'une des trois entités fusionnées en 2003.", difficulte: "avance" },
    { id: "amf1-qz-12", question: "Une société de gestion de portefeuille doit être :", choix: ["Simplement déclarée à l'URSSAF", "Agréée par l'AMF", "Agréée par l'ACPR uniquement", "Cotée en bourse"], bonneReponse: 1, explication: "La gestion de portefeuille pour compte de tiers ou d'OPC nécessite un agrément AMF.", difficulte: "fondamental" },
    { id: "amf1-qz-13", question: "L'AMF est financée principalement par :", choix: ["Le budget général de l'État", "Les contributions des professionnels régulés", "Les amendes qu'elle prononce", "L'Union européenne"], bonneReponse: 1, explication: "L'AMF perçoit des contributions et redevances des acteurs qu'elle régule, ce qui garantit aussi son indépendance vis-à-vis de l'État.", difficulte: "intermediaire" },
    { id: "amf1-qz-14", question: "L'examen certifié AMF concerne en priorité :", choix: ["Tous les salariés d'une banque sans exception", "Les fonctions de commercialisation, conseil, gestion et conformité liées aux instruments financiers", "Uniquement les dirigeants de sociétés cotées", "Les seuls agents généraux d'assurance"], bonneReponse: 1, explication: "L'obligation cible les fonctions en lien direct avec la clientèle ou la conformité sur les produits financiers.", difficulte: "intermediaire" },
    { id: "amf1-qz-15", question: "Le RGAMF Livre III porte principalement sur :", choix: ["Les marchés réglementés", "Les règles de bonne conduite des prestataires", "La fiscalité de l'épargne", "Les sanctions pénales"], bonneReponse: 1, explication: "Le Livre III concentre l'essentiel des obligations professionnelles et de bonne conduite testées à l'examen.", difficulte: "avance" },
    { id: "amf1-qz-16", question: "Un CIF peut exercer son activité :", choix: ["Sans aucune obligation d'assurance", "Sans adhésion à une association professionnelle si son chiffre d'affaires est faible", "Seulement après immatriculation ORIAS, adhésion associative et assurance RC pro", "Uniquement s'il est salarié d'une banque"], bonneReponse: 2, explication: "Les trois conditions cumulatives (ORIAS, association agréée, assurance RC pro) sont indissociables du statut CIF.", difficulte: "avance" },
    { id: "amf1-qz-17", question: "La séparation entre Collège et Commission des sanctions de l'AMF s'inspire notamment :", choix: [
      "Du droit des sociétés",
      "De l'exigence d'impartialité issue de la jurisprudence de la Cour européenne des droits de l'homme",
      "Du droit du travail",
      "D'une directive purement bancaire",
    ], bonneReponse: 1, explication: "La séparation poursuite/jugement répond à un standard d'impartialité consacré par la jurisprudence de la CEDH.", difficulte: "avance" },
    { id: "amf1-qz-18", question: "Avant 2003, quelle autorité était la plus proche de l'actuelle mission « protection de l'épargne et information financière » de l'AMF ?", choix: ["Le CMF", "La COB", "Le CDGF", "L'ACPR"], bonneReponse: 1, explication: "La Commission des opérations de bourse (COB) était historiquement centrée sur la protection de l'épargne et l'information des investisseurs.", difficulte: "avance" },
    { id: "amf1-qz-19", question: "L'AMF peut viser :", choix: ["Le prospectus d'une opération financière", "Le contrat de mariage d'un dirigeant", "Le bail commercial d'une société cotée", "Le casier judiciaire d'un client"], bonneReponse: 0, explication: "Le visa du prospectus (ou son enregistrement selon les cas) est l'un des actes d'autorisation caractéristiques de l'AMF.", difficulte: "fondamental" },
    { id: "amf1-qz-20", question: "Un professionnel peut-il relever à la fois de l'AMF et de l'ACPR ?", choix: ["Non, les compétences sont mutuellement exclusives", "Oui, selon les activités exercées (ex. conseiller multi-statuts)", "Uniquement s'il est fonctionnaire", "Uniquement pour les sociétés cotées"], bonneReponse: 1, explication: "Un même professionnel multi-casquettes (CIF + courtier en assurance, par exemple) peut relever simultanément des deux autorités selon ses activités.", difficulte: "intermediaire" },
  ],
  exercices: [
    {
      id: "amf1-ex-01",
      titre: "Qui régule quoi ?",
      enonce:
        "Une personne exerce trois activités : (1) la gestion de portefeuille pour compte de tiers via sa société de gestion, (2) le courtage en assurance-vie, (3) la vente de crédits immobiliers pour le compte d'une banque partenaire. Identifiez, pour chaque activité, l'autorité de supervision compétente et le registre d'immatriculation applicable.",
      corrige:
        "(1) Gestion de portefeuille : agrément AMF (société de gestion de portefeuille), supervision AMF. (2) Courtage en assurance-vie : immatriculation ORIAS comme courtier d'assurance, supervision ACPR (et DDA pour les règles de distribution). (3) Intermédiation en opération de banque : immatriculation ORIAS comme IOBSP, supervision ACPR. Cette personne relève donc simultanément de l'AMF (pour l'activité 1) et de l'ACPR (pour les activités 2 et 3), avec une triple casquette ORIAS/AMF à gérer.",
      difficulte: "intermediaire",
    },
    {
      id: "amf1-ex-02",
      titre: "Le circuit d'une sanction AMF",
      enonce:
        "Un contrôle AMF révèle qu'un prestataire a manqué à son obligation de meilleure exécution. Décrivez, étape par étape, le circuit procédural jusqu'à une éventuelle sanction et son recours.",
      corrige:
        "1) Les services de l'AMF réalisent un contrôle et rédigent un rapport. 2) Le Collège de l'AMF examine ce rapport et décide, le cas échéant, d'ouvrir une procédure de sanction (notification de griefs au prestataire). 3) Le dossier est transmis à la Commission des sanctions, organe distinct du Collège, qui instruit contradictoirement l'affaire (le mis en cause peut se défendre, être assisté d'un avocat). 4) La Commission des sanctions rend sa décision (sanction pécuniaire et/ou disciplinaire, publication de la décision en principe). 5) Le prestataire sanctionné peut former un recours devant la Cour d'appel de Paris.",
      difficulte: "avance",
    },
    {
      id: "amf1-ex-03",
      titre: "Statut CIF : les 3 conditions cumulatives",
      enonce:
        "Une personne souhaite exercer comme conseiller en investissements financiers indépendant. Listez les trois conditions cumulatives qu'elle doit remplir avant de pouvoir exercer légalement, et expliquez le rôle de chacune.",
      corrige:
        "1) Immatriculation à l'ORIAS (registre unique des intermédiaires), condition d'accès formelle à l'activité. 2) Adhésion à une association professionnelle agréée par l'AMF, qui exerce un contrôle de premier niveau (vérification des conditions d'honorabilité, de compétence, suivi de l'activité) avant tout contrôle direct de l'AMF. 3) Souscription d'une assurance de responsabilité civile professionnelle, pour garantir l'indemnisation des clients en cas de faute dans l'exercice du conseil. Ces trois conditions sont cumulatives : l'absence de l'une d'elles rend l'exercice de l'activité illégal.",
      difficulte: "intermediaire",
    },
  ],
};
