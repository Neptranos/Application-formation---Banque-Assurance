import type { ModuleFormation } from "@/content/types";

export const amf5: ModuleFormation = {
  id: "amf5",
  domaine: "amf",
  ordre: 5,
  titre: "AMF 5 — Abus de marché et lutte contre le blanchiment",
  description:
    "Délit et manquement d'initié, manipulation de marché, liste d'initiés, déclarations STOR, et articulation avec la LCB-FT du secteur financier.",
  cours: {
    fondamentaux: `Le **règlement MAR** (Market Abuse Regulation, 2016) définit et sanctionne trois grandes catégories d'**abus de marché**, applicables à tout instrument financier négocié sur un marché réglementé ou un SMN :

1. **l'opération d'initié** : le fait, pour une personne détenant une **information privilégiée** (information précise, non publique, susceptible d'avoir une influence sensible sur le cours si elle était rendue publique), d'utiliser cette information pour acquérir ou céder, pour son compte ou celui d'autrui, les instruments financiers concernés ;
2. **la manipulation de cours** : le fait de passer des ordres ou d'effectuer des transactions donnant des indications fausses ou trompeuses sur l'offre, la demande ou le cours d'un instrument financier ;
3. **la diffusion de fausse information** : le fait de répandre des informations donnant des indications fausses ou trompeuses sur un instrument financier, y compris par la diffusion de rumeurs.

Ce même comportement peut être sanctionné sous **deux voies distinctes** en France : la voie **pénale** (délit d'initié, manipulation de cours, poursuivis par le Parquet national financier devant le tribunal correctionnel) et la voie **administrative** (manquement d'initié, manquement de manipulation, poursuivis par l'AMF devant sa Commission des sanctions). Depuis la réforme de 2016 (à la suite d'une décision du Conseil constitutionnel dans l'affaire EADS posant le principe **non bis in idem**), un mécanisme d'aiguillage entre le Parquet national financier et l'AMF évite qu'une même personne soit poursuivie et sanctionnée deux fois pour les mêmes faits.

En parallèle des règles propres aux abus de marché, les professionnels du secteur financier restent pleinement soumis au dispositif de **lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT)** déjà vu à propos du secteur bancaire : connaissance du client, vigilance selon le niveau de risque, déclaration de soupçon à Tracfin.`,
    definitionsCles: [
      { terme: "Règlement MAR", definition: "Market Abuse Regulation (UE 596/2014), règlement européen directement applicable depuis 2016, définissant et encadrant la répression des abus de marché." },
      { terme: "Information privilégiée", definition: "Information précise, non publique, concernant directement ou indirectement un émetteur ou un instrument financier, qui serait susceptible d'avoir une influence sensible sur le cours si elle était rendue publique." },
      { terme: "Opération / délit d'initié", definition: "Utilisation d'une information privilégiée pour acquérir ou céder, directement ou indirectement, pour son compte ou celui d'autrui, les instruments financiers auxquels elle se rapporte." },
      { terme: "Manquement d'initié", definition: "Pendant administratif du délit d'initié, poursuivi par l'AMF devant sa Commission des sanctions plutôt que par la voie pénale." },
      { terme: "Manipulation de cours (de marché)", definition: "Fait de passer des ordres ou d'effectuer des transactions donnant des indications fausses ou trompeuses sur l'offre, la demande ou le cours d'un instrument financier." },
      { terme: "Diffusion de fausse information", definition: "Fait de répandre, par tout moyen, des informations donnant des indications fausses ou trompeuses sur un instrument financier, y compris la diffusion de rumeurs dont l'auteur savait ou aurait dû savoir qu'elles étaient fausses." },
      { terme: "Liste d'initiés", definition: "Registre que doit tenir tout émetteur (ou personne agissant pour son compte) recensant les personnes ayant accès à une information privilégiée, avec la date d'accès et de perte d'accès à cette information." },
      { terme: "Fenêtre négative (black-out period)", definition: "Période précédant l'annonce de résultats financiers pendant laquelle les dirigeants et personnes assimilées d'un émetteur coté doivent s'abstenir de toute opération sur les titres de la société." },
      { terme: "Déclaration STOR", definition: "Suspicious Transaction and Order Report : déclaration obligatoire à l'AMF, par tout prestataire ou toute plateforme de négociation, d'un ordre ou d'une transaction suspecté de constituer un abus de marché." },
      { terme: "Déclaration des opérations des dirigeants (« PDMR dealings »)", definition: "Obligation pour les dirigeants et cadres dirigeants d'un émetteur coté (et leurs proches) de déclarer à l'AMF leurs opérations sur les titres de la société, au-delà d'un certain seuil annuel cumulé." },
      { terme: "Non bis in idem", definition: "Principe interdisant qu'une même personne soit poursuivie et sanctionnée deux fois pour les mêmes faits, à l'origine, en France, du mécanisme d'aiguillage entre poursuite pénale et poursuite administrative en matière d'abus de marché depuis 2016." },
      { terme: "Parquet national financier (PNF)", definition: "Juridiction spécialisée du ministère public compétente notamment pour les délits boursiers et financiers d'une certaine complexité." },
    ],
    approfondissement: `**Pourquoi deux voies de répression (pénale et administrative) ?** Historiquement, le délit d'initié était réprimé à la fois par le juge pénal et par l'AMF (manquement administratif), ce qui pouvait conduire à un cumul de sanctions pour les mêmes faits. Le Conseil constitutionnel, dans une décision de mars 2015 rendue à l'occasion de l'affaire EADS (question prioritaire de constitutionnalité), a jugé ce cumul contraire au principe de nécessité des peines lorsque les deux répressions protègent le même intérêt social. La loi du 21 juin 2016 a donc instauré un mécanisme d'aiguillage : dès l'ouverture d'une enquête, le Procureur de la République financier et le président de l'AMF se concertent pour déterminer laquelle des deux voies engagera les poursuites, l'autre s'effaçant alors pour les mêmes faits.

**La liste d'initiés, un outil de traçabilité, pas seulement de prévention.** Chaque émetteur doit identifier, documenter et tenir à jour la liste de toute personne ayant accès à une information privilégiée en cours d'élaboration (avant-projet de fusion-acquisition, résultats non encore publiés, etc.), avec horodatage précis de l'accès et de la perte d'accès à l'information. Cette liste, transmise à l'AMF sur demande en cas d'enquête, permet de circonscrire rapidement le périmètre des personnes potentiellement en mesure d'avoir exploité l'information.

**Les fenêtres négatives (black-out periods).** Les dirigeants et personnes exerçant des responsabilités dirigeantes au sein d'un émetteur coté doivent s'abstenir de toute opération sur les titres de la société pendant une période encadrée (généralement 30 jours calendaires) précédant l'annonce de résultats financiers intermédiaires ou annuels, période durant laquelle ils sont statistiquement les plus susceptibles de détenir une information privilégiée non encore publique sur la performance de l'entreprise.

**STOR : une obligation qui pèse sur le professionnel, pas seulement sur le régulateur.** Tout prestataire de services d'investissement et toute plateforme de négociation doit se doter de dispositifs de détection et déclarer sans délai à l'AMF tout ordre ou toute transaction dont il a des raisons de suspecter qu'il pourrait constituer une opération d'initié ou une manipulation de marché — y compris des tentatives non exécutées. Ce mécanisme de surveillance décentralisée démultiplie la capacité de détection de l'AMF, qui ne peut à elle seule surveiller l'intégralité des flux de marché.

**Articulation avec la LCB-FT.** Si les abus de marché protègent l'intégrité et l'égalité d'information entre investisseurs, la LCB-FT (déclaration de soupçon à Tracfin, vigilance client) protège le système financier contre son utilisation à des fins criminelles. Un même professionnel peut ainsi être confronté, sur une même opération suspecte, à une obligation de déclaration STOR à l'AMF (soupçon d'abus de marché) et à une obligation de déclaration de soupçon à Tracfin (soupçon de blanchiment), les deux dispositifs étant cumulatifs et non exclusifs l'un de l'autre.`,
    historique: `- **1970** : la loi française introduit pour la première fois le délit d'initié dans le droit pénal.
- **1989** : directive européenne sur les opérations d'initiés, première harmonisation communautaire.
- **2003** : directive sur les abus de marché (MAD1), qui étend la répression à la manipulation de marché et à la diffusion de fausses informations.
- **2015** : décision du Conseil constitutionnel dans l'affaire EADS, censurant le cumul de sanctions pénale et administrative pour les mêmes faits.
- **2016** : entrée en application du règlement MAR (remplaçant MAD1) et loi française du 21 juin 2016 instaurant le mécanisme d'aiguillage entre PNF et AMF.`,
    evolutionsJuridiques: [
      { date: "1970", evenement: "Introduction du délit d'initié en droit français", texte: "Première incrimination pénale de l'utilisation d'une information privilégiée pour réaliser des opérations boursières." },
      { date: "2003", evenement: "Directive MAD1", texte: "Étend la répression européenne des abus de marché à la manipulation de cours et à la diffusion de fausses informations." },
      { date: "2015", evenement: "Décision QPC affaire EADS", texte: "Le Conseil constitutionnel censure le cumul des poursuites pénale et administrative pour les mêmes faits d'abus de marché." },
      { date: "2016", evenement: "Règlement MAR et loi du 21 juin 2016", texte: "Nouveau cadre européen des abus de marché et mécanisme français d'aiguillage entre Parquet national financier et AMF." },
    ],
    citations: [],
    sourcesReference: [
      "Règlement (UE) n°596/2014 (MAR)",
      "Code monétaire et financier, art. L465-1 et suivants (délits boursiers)",
      "Loi n°2016-819 du 21 juin 2016 (réforme de la répression des abus de marché)",
      "AMF — guide pédagogique abus de marché",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "amf5-fc-01", recto: "Quelles sont les 3 catégories d'abus de marché définies par le règlement MAR ?", verso: "Opération d'initié, manipulation de cours, diffusion de fausse information.", difficulte: "fondamental" },
    { id: "amf5-fc-02", recto: "Qu'est-ce qu'une information privilégiée ?", verso: "Une information précise, non publique, susceptible d'avoir une influence sensible sur le cours si elle était rendue publique.", difficulte: "fondamental" },
    { id: "amf5-fc-03", recto: "Quelle est la différence entre délit d'initié et manquement d'initié ?", verso: "Le délit est poursuivi par la voie pénale (PNF, tribunal correctionnel), le manquement par la voie administrative (AMF, Commission des sanctions).", difficulte: "intermediaire" },
    { id: "amf5-fc-04", recto: "Qu'est-ce que le principe non bis in idem, appliqué aux abus de marché ?", verso: "L'interdiction d'être poursuivi et sanctionné deux fois pour les mêmes faits, à l'origine du mécanisme d'aiguillage PNF/AMF depuis 2016.", difficulte: "avance" },
    { id: "amf5-fc-05", recto: "Quelle affaire a conduit à la censure du cumul de sanctions en 2015 ?", verso: "L'affaire EADS (décision QPC du Conseil constitutionnel).", difficulte: "avance" },
    { id: "amf5-fc-06", recto: "Qu'est-ce qu'une liste d'initiés ?", verso: "Le registre que doit tenir un émetteur recensant les personnes ayant accès à une information privilégiée, avec horodatage.", difficulte: "intermediaire" },
    { id: "amf5-fc-07", recto: "Qu'est-ce qu'une fenêtre négative (black-out period) ?", verso: "La période avant l'annonce de résultats pendant laquelle les dirigeants doivent s'abstenir de toute opération sur les titres de leur société.", difficulte: "intermediaire" },
    { id: "amf5-fc-08", recto: "Que signifie STOR ?", verso: "Suspicious Transaction and Order Report, déclaration obligatoire à l'AMF d'un ordre ou d'une transaction suspecté d'abus de marché.", difficulte: "intermediaire" },
    { id: "amf5-fc-09", recto: "Qui est tenu de faire une déclaration STOR ?", verso: "Tout prestataire de services d'investissement et toute plateforme de négociation.", difficulte: "intermediaire" },
    { id: "amf5-fc-10", recto: "Une tentative non exécutée d'ordre suspect doit-elle être déclarée en STOR ?", verso: "Oui, la déclaration porte aussi sur les tentatives, pas seulement les transactions exécutées.", difficulte: "avance" },
    { id: "amf5-fc-11", recto: "Qu'est-ce qu'une manipulation de cours ?", verso: "Le fait de passer des ordres ou d'effectuer des transactions donnant des indications fausses ou trompeuses sur l'offre, la demande ou le cours d'un instrument.", difficulte: "fondamental" },
    { id: "amf5-fc-12", recto: "La diffusion de rumeurs peut-elle constituer un abus de marché ?", verso: "Oui, si l'auteur savait ou aurait dû savoir que les informations diffusées étaient fausses ou trompeuses.", difficulte: "intermediaire" },
    { id: "amf5-fc-13", recto: "En quelle année le délit d'initié a-t-il été introduit en droit français ?", verso: "1970.", difficulte: "avance" },
    { id: "amf5-fc-14", recto: "Qu'est-ce que le Parquet national financier (PNF) ?", verso: "La juridiction spécialisée du ministère public compétente pour les délits boursiers et financiers complexes.", difficulte: "intermediaire" },
    { id: "amf5-fc-15", recto: "Que doivent déclarer à l'AMF les dirigeants d'un émetteur coté (PDMR dealings) ?", verso: "Leurs opérations sur les titres de la société, au-delà d'un seuil annuel cumulé.", difficulte: "intermediaire" },
    { id: "amf5-fc-16", recto: "Le règlement MAR remplace quelle directive antérieure ?", verso: "La directive MAD1 de 2003.", difficulte: "avance" },
    { id: "amf5-fc-17", recto: "La LCB-FT et les règles d'abus de marché protègent-elles le même intérêt ?", verso: "Non : la LCB-FT protège contre l'utilisation criminelle du système financier, les règles d'abus de marché protègent l'intégrité et l'égalité d'information entre investisseurs.", difficulte: "avance" },
    { id: "amf5-fc-18", recto: "Les obligations STOR (AMF) et de déclaration de soupçon (Tracfin) sont-elles exclusives l'une de l'autre ?", verso: "Non, elles sont cumulatives et peuvent s'appliquer à la même opération suspecte pour des raisons différentes.", difficulte: "avance" },
    { id: "amf5-fc-19", recto: "Qui décide, lors de l'ouverture d'une enquête pour abus de marché, quelle voie (pénale ou administrative) sera engagée ?", verso: "Le Procureur de la République financier et le président de l'AMF, par concertation.", difficulte: "avance" },
    { id: "amf5-fc-20", recto: "La durée typique d'une fenêtre négative avant l'annonce de résultats est de :", verso: "30 jours calendaires (durée usuelle de référence).", difficulte: "avance" },
  ],
  quiz: [
    { id: "amf5-qz-01", question: "Une information privilégiée doit être :", choix: ["Publique et générale", "Précise, non publique, susceptible d'influencer sensiblement le cours", "Uniquement financière", "Connue de tous les salariés de l'entreprise"], bonneReponse: 1, explication: "Les trois critères cumulatifs (précision, caractère non public, influence sensible potentielle sur le cours) définissent l'information privilégiée.", difficulte: "fondamental" },
    { id: "amf5-qz-02", question: "Le délit d'initié est poursuivi par :", choix: ["L'AMF uniquement", "Le Parquet national financier, devant le tribunal correctionnel", "La CNIL", "L'ACPR"], bonneReponse: 1, explication: "Le délit (voie pénale) relève du PNF, tandis que le manquement (voie administrative) relève de l'AMF.", difficulte: "fondamental" },
    { id: "amf5-qz-03", question: "Le mécanisme d'aiguillage entre PNF et AMF a été instauré en réaction à :", choix: [
      "La crise de 2008",
      "Une décision du Conseil constitutionnel dans l'affaire EADS",
      "La création de l'euro",
      "La directive DDA",
    ], bonneReponse: 1, explication: "La censure du cumul de sanctions en 2015 (affaire EADS) a conduit à la loi du 21 juin 2016 instaurant l'aiguillage.", difficulte: "avance" },
    { id: "amf5-qz-04", question: "La liste d'initiés recense :", choix: [
      "Tous les actionnaires d'un émetteur",
      "Les personnes ayant accès à une information privilégiée, avec horodatage",
      "Les seuls dirigeants de la société",
      "Les clients de la société de gestion",
    ], bonneReponse: 1, explication: "La liste vise spécifiquement les personnes ayant eu accès à une information privilégiée précise, à un moment donné.", difficulte: "intermediaire" },
    { id: "amf5-qz-05", question: "Une fenêtre négative (black-out period) impose aux dirigeants :", choix: [
      "De vendre systématiquement leurs titres avant les résultats",
      "De s'abstenir de toute opération sur les titres avant l'annonce de résultats",
      "De déclarer leurs impôts en avance",
      "De démissionner temporairement",
    ], bonneReponse: 1, explication: "La fenêtre négative interdit toute opération sur titres pendant la période sensible précédant l'annonce de résultats.", difficulte: "intermediaire" },
    { id: "amf5-qz-06", question: "Une déclaration STOR est adressée :", choix: ["À Tracfin", "À l'AMF", "À la CNIL", "Au Parquet national financier directement"], bonneReponse: 1, explication: "Le STOR (Suspicious Transaction and Order Report) est un dispositif propre à l'AMF, distinct de la déclaration de soupçon LCB-FT à Tracfin.", difficulte: "intermediaire" },
    { id: "amf5-qz-07", question: "Une déclaration STOR peut-elle porter sur un ordre non exécuté ?", choix: ["Non, uniquement les transactions exécutées", "Oui, y compris les tentatives et ordres non exécutés", "Uniquement si le montant dépasse 1 million d'euros", "Uniquement pour les émetteurs du CAC 40"], bonneReponse: 1, explication: "L'obligation vise aussi les tentatives suspectes, exécutées ou non.", difficulte: "avance" },
    { id: "amf5-qz-08", question: "La manipulation de cours consiste notamment à :", choix: [
      "Vendre légitimement des titres après une bonne nouvelle",
      "Passer des ordres donnant des indications fausses ou trompeuses sur l'offre, la demande ou le cours",
      "Diversifier un portefeuille",
      "Déclarer un conflit d'intérêts au client",
    ], bonneReponse: 1, explication: "C'est la définition même de la manipulation de cours au sens du règlement MAR.", difficulte: "fondamental" },
    { id: "amf5-qz-09", question: "Le règlement MAR est entré en application en :", choix: ["2003", "2010", "2016", "2020"], bonneReponse: 2, explication: "Le règlement MAR (UE 596/2014) est entré en application en 2016, remplaçant la directive MAD1 de 2003.", difficulte: "intermediaire" },
    { id: "amf5-qz-10", question: "Les obligations LCB-FT (Tracfin) et STOR (AMF) sur une même opération suspecte sont :", choix: [
      "Mutuellement exclusives",
      "Cumulatives, selon la nature du soupçon (blanchiment et/ou abus de marché)",
      "Réservées aux seules banques",
      "Supprimées depuis MIF2",
    ], bonneReponse: 1, explication: "Une même opération peut justifier les deux types de déclaration si elle éveille les deux types de soupçon.", difficulte: "avance" },
    { id: "amf5-qz-11", question: "Diffuser une rumeur boursière que l'on sait fausse constitue :", choix: [
      "Une opinion protégée par la liberté d'expression sans limite",
      "Potentiellement un abus de marché par diffusion de fausse information",
      "Un simple manquement contractuel",
      "Une pratique encouragée par l'AMF",
    ], bonneReponse: 1, explication: "La diffusion de fausses informations dont l'auteur connaît le caractère erroné est explicitement visée par le règlement MAR.", difficulte: "intermediaire" },
    { id: "amf5-qz-12", question: "Le délit d'initié a été introduit en droit français en :", choix: ["1945", "1970", "2003", "2016"], bonneReponse: 1, explication: "La France a été pionnière avec l'introduction du délit d'initié dès 1970.", difficulte: "avance" },
    { id: "amf5-qz-13", question: "Les obligations de déclaration des opérations des dirigeants (« PDMR dealings ») s'appliquent :", choix: [
      "À tous les salariés sans exception",
      "Aux dirigeants et cadres dirigeants d'un émetteur coté et à leurs proches, au-delà d'un seuil",
      "Uniquement aux actionnaires majoritaires",
      "Uniquement aux sociétés non cotées",
    ], bonneReponse: 1, explication: "Le règlement MAR impose cette transparence renforcée pour les personnes exerçant des responsabilités dirigeantes et leurs proches.", difficulte: "avance" },
    { id: "amf5-qz-14", question: "Qui, en France, décide de la voie de poursuite (pénale ou administrative) en matière d'abus de marché depuis 2016 ?", choix: [
      "Le seul président de l'AMF",
      "Une concertation entre le Procureur de la République financier et le président de l'AMF",
      "Le ministre de l'Économie",
      "La Cour de cassation"
    ], bonneReponse: 1, explication: "Le mécanisme d'aiguillage repose sur une concertation entre ces deux autorités dès l'ouverture de l'enquête.", difficulte: "avance" },
    { id: "amf5-qz-15", question: "Un manquement d'initié (par opposition au délit) est sanctionné par :", choix: ["Le tribunal correctionnel", "La Commission des sanctions de l'AMF", "Le Conseil d'État", "Le Parquet national financier"], bonneReponse: 1, explication: "Le manquement, de nature administrative, relève de la Commission des sanctions de l'AMF.", difficulte: "fondamental" },
  ],
  exercices: [
    {
      id: "amf5-ex-01",
      titre: "Qualifier une situation d'abus de marché",
      enonce:
        "Le directeur financier d'une société cotée, informé en amont d'une acquisition majeure non encore annoncée, vend une partie importante de ses actions personnelles trois jours avant l'annonce officielle, réalisant une plus-value substantielle car le cours chute après l'annonce (l'acquisition étant jugée coûteuse par le marché). Qualifiez juridiquement ce comportement et identifiez les voies de poursuite possibles.",
      corrige:
        "Il s'agit potentiellement d'une opération d'initié : le directeur financier détenait une information privilégiée (l'acquisition à venir, précise et non publique, susceptible d'influencer sensiblement le cours) et a réalisé une transaction sur les titres de la société avant que cette information ne soit rendue publique — peu importe que le cours ait finalement baissé après l'annonce, ce qui compte est l'utilisation de l'information privilégiée pour éviter une perte ou réaliser un gain avant que le marché n'intègre cette information. Deux voies de poursuite sont envisageables : la voie pénale (délit d'initié, PNF, tribunal correctionnel) ou la voie administrative (manquement d'initié, AMF, Commission des sanctions) — le mécanisme d'aiguillage instauré en 2016 déterminera laquelle des deux sera effectivement engagée, à l'exclusion de l'autre pour les mêmes faits.",
      difficulte: "avance",
    },
    {
      id: "amf5-ex-02",
      titre: "Obligations d'un prestataire face à un ordre suspect",
      enonce:
        "Un chargé de clientèle reçoit d'un client un ordre de vente massif et inhabituel sur une valeur peu liquide, juste avant la publication d'un profit warning (annonce négative de résultats) dont le client ne devrait normalement pas avoir connaissance. Quelles obligations pèsent sur le prestataire ?",
      corrige:
        "Le prestataire doit d'abord évaluer, au regard du profil habituel du client et du caractère atypique de l'ordre, si des éléments objectifs permettent de suspecter que le client aurait pu avoir accès à une information privilégiée sur le profit warning à venir. Si un doute raisonnable existe, le prestataire est tenu d'effectuer une déclaration STOR à l'AMF, sans en informer le client (règle de confidentialité comparable à celle de la déclaration de soupçon LCB-FT). Si, par ailleurs, des éléments laissent également suspecter un lien avec des fonds d'origine illicite, une déclaration de soupçon complémentaire à Tracfin peut être nécessaire au titre de la LCB-FT — les deux obligations étant cumulatives et indépendantes l'une de l'autre.",
      difficulte: "avance",
    },
    {
      id: "amf5-ex-03",
      titre: "Calculer une fenêtre négative",
      enonce:
        "Une société cotée doit publier ses résultats annuels le 15 mars. En appliquant la durée usuelle de référence de 30 jours calendaires pour la fenêtre négative, à partir de quelle date les dirigeants doivent-ils s'abstenir de toute opération sur les titres de la société ?",
      corrige:
        "En comptant 30 jours calendaires en arrière à partir du 15 mars, la fenêtre négative débute le 14 février : à partir de cette date et jusqu'à la publication des résultats le 15 mars, les dirigeants et personnes exerçant des responsabilités dirigeantes doivent s'abstenir de toute opération sur les titres de la société, période durant laquelle ils sont statistiquement les plus susceptibles de détenir une information privilégiée non encore publique sur la performance de l'entreprise.",
      difficulte: "intermediaire",
    },
  ],
};
