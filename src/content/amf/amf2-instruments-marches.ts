import type { ModuleFormation } from "@/content/types";

export const amf2: ModuleFormation = {
  id: "amf2",
  domaine: "amf",
  ordre: 2,
  titre: "AMF 2 — Instruments financiers et fonctionnement des marchés",
  description:
    "Actions, obligations, OPC, produits dérivés et structurés, organisation des marchés réglementés : le socle technique de l'examen.",
  cours: {
    fondamentaux: `Un **instrument financier** est un titre ou un contrat négociable représentant soit une part de capital (**titre de capital**), soit une créance (**titre de créance**), soit un droit conditionnel lié à un actif sous-jacent (**instrument dérivé**).

L'**action** est un titre de capital : elle confère à son détenteur la qualité d'associé, avec trois droits fondamentaux — le **droit de vote** en assemblée générale, le **droit au dividende** (part du bénéfice distribué, non garanti, décidé chaque année) et le **droit au boni de liquidation**. L'actionnaire supporte un risque en capital illimité à la baisse (jusqu'à la perte totale de sa mise) mais un potentiel de gain théoriquement illimité.

L'**obligation** est un titre de créance : l'obligataire prête une somme (le **nominal**) à l'émetteur (État, entreprise) en échange d'intérêts périodiques (le **coupon**) et du remboursement du nominal à l'échéance. Contrairement à l'actionnaire, l'obligataire n'est pas associé : il est créancier, prioritaire sur les actionnaires en cas de liquidation, mais son gain est plafonné par les termes du contrat obligataire (sauf risque de défaut de l'émetteur).

Les **organismes de placement collectif (OPC)** — **OPCVM** (relevant de la directive européenne UCITS) et **FIA** (fonds d'investissement alternatifs, directive AIFM) — permettent de mutualiser l'épargne de nombreux investisseurs dans un portefeuille géré par un professionnel, sous forme de **SICAV** (société) ou de **FCP** (copropriété de valeurs mobilières, sans personnalité morale).

Les **instruments dérivés** (options, futures, warrants) tirent leur valeur d'un actif **sous-jacent** (action, indice, taux, devise, matière première) et permettent soit de se couvrir contre un risque (hedging), soit de spéculer avec un effet de levier, soit d'arbitrer entre marchés.`,
    definitionsCles: [
      { terme: "Action", definition: "Titre de capital conférant la qualité d'associé : droit de vote, droit au dividende, droit au boni de liquidation, avec un risque de perte en capital total." },
      { terme: "Obligation", definition: "Titre de créance représentant un prêt consenti à l'émetteur, donnant droit à des coupons périodiques et au remboursement du nominal à l'échéance, sous réserve du risque de défaut de l'émetteur." },
      { terme: "Coupon", definition: "Intérêt périodique versé au porteur d'une obligation, exprimé en pourcentage du nominal (taux facial), à taux fixe ou variable selon les termes de l'émission." },
      { terme: "Taux de rendement actuariel (TRA)", definition: "Taux qui égalise la valeur actuelle des flux futurs d'une obligation (coupons + remboursement) à son prix d'achat, mesure plus complète que le seul taux facial du coupon." },
      { terme: "Sensibilité obligataire", definition: "Mesure de la variation du prix d'une obligation pour une variation de 1 point des taux d'intérêt ; règle clé : le prix d'une obligation varie en sens inverse des taux d'intérêt." },
      { terme: "OPCVM", definition: "Organisme de placement collectif en valeurs mobilières relevant de la directive européenne UCITS, bénéficiant d'un passeport européen de commercialisation, soumis à des règles strictes de diversification et de liquidité." },
      { terme: "FIA", definition: "Fonds d'investissement alternatif (private equity, fonds immobiliers, hedge funds...), relevant de la directive AIFM (2011), aux règles généralement moins standardisées que les OPCVM." },
      { terme: "SICAV", definition: "Société d'investissement à capital variable : l'investisseur qui souscrit devient actionnaire de la SICAV elle-même, dotée de la personnalité morale." },
      { terme: "FCP", definition: "Fonds commun de placement : copropriété de valeurs mobilières sans personnalité morale ; le porteur détient des parts, pas des actions d'une société." },
      { terme: "Valeur liquidative (VL)", definition: "Valeur d'une part ou action d'OPC, égale à l'actif net du fonds divisé par le nombre de parts en circulation, servant de base aux souscriptions et rachats." },
      { terme: "Option (call / put)", definition: "Contrat donnant à son acheteur le droit, mais non l'obligation, d'acheter (call) ou de vendre (put) un actif sous-jacent à un prix fixé (prix d'exercice) avant ou à une date donnée, moyennant le paiement d'une prime." },
      { terme: "Warrant", definition: "Produit dérivé coté, émis par un établissement financier, donnant un droit d'achat (call warrant) ou de vente (put warrant) sur un sous-jacent, avec effet de levier." },
      { terme: "Produit structuré", definition: "Instrument combinant généralement une obligation et un ou plusieurs produits dérivés, offrant un profil de gain/risque spécifique (ex. capital garanti ou protégé sous condition, formule de performance liée à un indice)." },
      { terme: "Marché réglementé", definition: "Plateforme de négociation soumise à un agrément et à des règles strictes (ex. Euronext Paris), par opposition aux systèmes multilatéraux de négociation (SMN/MTF) moins régulés." },
      { terme: "Ordre à cours limité", definition: "Ordre de bourse exécuté uniquement au prix indiqué par l'investisseur ou à un prix plus favorable, par opposition à l'ordre « au marché », exécuté immédiatement au meilleur prix disponible." },
      { terme: "Chambre de compensation (CCP)", definition: "Contrepartie centrale s'interposant entre acheteur et vendeur après la négociation, pour garantir la bonne fin des transactions et réduire le risque de contrepartie." },
    ],
    approfondissement: `**Le mécanisme des options, au-delà de la définition.** L'acheteur d'un call espère une hausse du sous-jacent : son gain potentiel est théoriquement illimité, sa perte maximale est limitée à la prime payée. L'acheteur d'un put espère une baisse : mêmes caractéristiques de risque limité côté acheteur. À l'inverse, le **vendeur** d'une option encaisse la prime mais s'expose à un risque potentiellement illimité (vendeur de call) ou très élevé (vendeur de put) si le marché évolue contre lui — une asymétrie fondamentale à bien maîtriser pour l'examen.

**La sensibilité obligataire en pratique.** Une obligation de maturité longue est plus sensible aux variations de taux qu'une obligation courte : si les taux de marché montent, le prix des obligations déjà émises (à coupon fixe, donc désormais moins rémunérateur que le marché) baisse mécaniquement, et inversement. C'est la relation **prix/taux inverse**, l'un des points les plus fréquemment testés de la matière « instruments financiers ».

**OPCVM vs FIA : deux logiques réglementaires.** Les OPCVM, harmonisés au niveau européen par la directive UCITS, bénéficient d'un passeport de commercialisation dans toute l'UE en contrepartie de règles strictes (limites de concentration par émetteur, encadrement de l'effet de levier, liquidité des actifs). Les FIA, réglementés par la directive AIFM, couvrent des stratégies plus diverses (private equity, fonds immobiliers, hedge funds) avec des règles de commercialisation plus restrictives, souvent réservées à une clientèle professionnelle ou avertie.

**Organisation d'Euronext Paris.** La négociation se déroule principalement en **continu** pendant les heures d'ouverture (chaque ordre entrant peut s'exécuter immédiatement contre le carnet d'ordres existant), avec des phases de **fixing** (ouverture et clôture) où les ordres accumulés sont confrontés à un instant précis pour déterminer un cours unique d'équilibre, réduisant la volatilité sur ces moments sensibles. Après la négociation, la **chambre de compensation** (CCP, en France LCH SA notamment) s'interpose entre acheteur et vendeur pour garantir le règlement-livraison, même en cas de défaillance de l'une des parties.

**Le risque des produits structurés à capital « garanti » ou « protégé ».** Il faut distinguer : un produit à capital **garanti** promet le remboursement intégral du capital à l'échéance quelles que soient les conditions de marché (le risque résiduel est alors le risque de défaut de l'émetteur/garant) ; un produit à capital **protégé sous condition** (ou « avec barrière ») peut entraîner une perte en capital si un seuil défini est franchi en cours de vie ou à l'échéance — une nuance essentielle du devoir d'information envers le client.`,
    historique: `- **2000** : fusion des bourses de Paris, Amsterdam et Bruxelles au sein d'Euronext.
- **2001** : directive UCITS III, élargissement des actifs éligibles pour les OPCVM.
- **2007** : entrée en application de la directive MIF1, qui met fin au monopole des marchés réglementés et ouvre la concurrence via les systèmes multilatéraux de négociation (SMN).
- **2011** : directive AIFM, premier cadre européen harmonisé pour les gestionnaires de fonds alternatifs.
- **2014** : rachat d'Euronext par elle-même via introduction en bourse, indépendance retrouvée vis-à-vis d'IntercontinentalExchange (ICE).
- **2018** : entrée en application du règlement PRIIPs, imposant un document d'information clé (KID) standardisé pour les produits d'investissement packagés de détail.`,
    evolutionsJuridiques: [
      { date: "2001", evenement: "Directive UCITS III", texte: "Élargit la gamme d'actifs éligibles pour les OPCVM et pose les bases du cadre européen moderne de la gestion collective." },
      { date: "2007", evenement: "Directive MIF1", texte: "Ouvre la concurrence entre lieux d'exécution des ordres, fin du monopole des marchés réglementés historiques." },
      { date: "2011", evenement: "Directive AIFM", texte: "Premier cadre européen harmonisé pour les gestionnaires de fonds d'investissement alternatifs (FIA)." },
      { date: "2018", evenement: "Règlement PRIIPs", texte: "Impose un document d'information clé (KID) standardisé pour les produits d'investissement packagés destinés aux particuliers." },
    ],
    citations: [],
    sourcesReference: [
      "Code monétaire et financier, Livre II (instruments financiers)",
      "Directive 2009/65/CE (UCITS) et directive 2011/61/UE (AIFM)",
      "Règlement (UE) 1286/2014 (PRIIPs)",
      "AMF — guide pédagogique des instruments financiers",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "amf2-fc-01", recto: "Quels sont les 3 droits fondamentaux attachés à une action ?", verso: "Droit de vote, droit au dividende, droit au boni de liquidation.", difficulte: "fondamental" },
    { id: "amf2-fc-02", recto: "Qu'est-ce que le nominal d'une obligation ?", verso: "Le montant du prêt consenti par l'obligataire, remboursé à l'échéance (sauf défaut).", difficulte: "fondamental" },
    { id: "amf2-fc-03", recto: "Comment varie le prix d'une obligation quand les taux de marché montent ?", verso: "Il baisse (relation prix/taux inverse).", difficulte: "intermediaire" },
    { id: "amf2-fc-04", recto: "Quelle est la différence entre SICAV et FCP ?", verso: "La SICAV est une société (l'investisseur devient actionnaire) ; le FCP est une copropriété sans personnalité morale (l'investisseur détient des parts).", difficulte: "intermediaire" },
    { id: "amf2-fc-05", recto: "Comment calcule-t-on la valeur liquidative d'un OPC ?", verso: "Actif net du fonds divisé par le nombre de parts/actions en circulation.", difficulte: "intermediaire" },
    { id: "amf2-fc-06", recto: "Que donne le droit un call ?", verso: "Le droit d'acheter le sous-jacent à un prix fixé (prix d'exercice), moyennant le paiement d'une prime.", difficulte: "fondamental" },
    { id: "amf2-fc-07", recto: "Que donne un put ?", verso: "Le droit de vendre le sous-jacent à un prix fixé, moyennant le paiement d'une prime.", difficulte: "fondamental" },
    { id: "amf2-fc-08", recto: "Quelle est la perte maximale de l'acheteur d'une option ?", verso: "La prime payée.", difficulte: "intermediaire" },
    { id: "amf2-fc-09", recto: "Quel est le risque du vendeur d'un call non couvert ?", verso: "Un risque théoriquement illimité si le sous-jacent monte fortement.", difficulte: "avance" },
    { id: "amf2-fc-10", recto: "Que signifie OPCVM et de quelle directive relève-t-il ?", verso: "Organisme de placement collectif en valeurs mobilières, relevant de la directive UCITS.", difficulte: "fondamental" },
    { id: "amf2-fc-11", recto: "Que signifie FIA et de quelle directive relève-t-il ?", verso: "Fonds d'investissement alternatif, relevant de la directive AIFM (2011).", difficulte: "intermediaire" },
    { id: "amf2-fc-12", recto: "Quel rôle joue une chambre de compensation (CCP) ?", verso: "Elle s'interpose entre acheteur et vendeur après la négociation pour garantir la bonne fin de la transaction et réduire le risque de contrepartie.", difficulte: "intermediaire" },
    { id: "amf2-fc-13", recto: "Quelle est la différence entre capital garanti et capital protégé sous condition ?", verso: "Le capital garanti est remboursé intégralement quelles que soient les conditions de marché ; le capital protégé sous condition peut subir une perte si un seuil (barrière) est franchi.", difficulte: "avance" },
    { id: "amf2-fc-14", recto: "Qu'est-ce qu'un ordre à cours limité ?", verso: "Un ordre exécuté seulement au prix indiqué ou à un prix plus favorable, par opposition à l'ordre au marché.", difficulte: "fondamental" },
    { id: "amf2-fc-15", recto: "Qu'est-ce qu'une phase de fixing sur Euronext ?", verso: "Un moment où les ordres accumulés sont confrontés à un instant précis (ouverture/clôture) pour déterminer un cours unique d'équilibre.", difficulte: "avance" },
    { id: "amf2-fc-16", recto: "Le règlement PRIIPs impose quel document pour les produits packagés de détail ?", verso: "Le document d'information clé (KID).", difficulte: "intermediaire" },
    { id: "amf2-fc-17", recto: "Qu'est-ce qu'un warrant ?", verso: "Un produit dérivé coté, émis par un établissement financier, donnant un droit d'achat ou de vente avec effet de levier.", difficulte: "intermediaire" },
    { id: "amf2-fc-18", recto: "L'obligataire est-il associé de la société émettrice ?", verso: "Non, il est créancier, pas associé.", difficulte: "fondamental" },
    { id: "amf2-fc-19", recto: "En cas de liquidation, qui est prioritaire : l'obligataire ou l'actionnaire ?", verso: "L'obligataire (créancier), prioritaire sur les actionnaires.", difficulte: "intermediaire" },
    { id: "amf2-fc-20", recto: "En quelle année Euronext a-t-il été créé ?", verso: "2000, par fusion des bourses de Paris, Amsterdam et Bruxelles.", difficulte: "avance" },
    { id: "amf2-fc-21", recto: "Un FIA est-il en général accessible à tout type de client ?", verso: "Non, souvent réservé à une clientèle professionnelle ou avertie, avec des règles de commercialisation plus restrictives que les OPCVM.", difficulte: "avance" },
    { id: "amf2-fc-22", recto: "Le taux de rendement actuariel diffère-t-il toujours du taux facial du coupon ?", verso: "Oui en général, sauf cas particulier où le prix d'achat égale exactement le nominal ; il intègre le prix d'achat réel et le remboursement.", difficulte: "avance" },
    { id: "amf2-fc-23", recto: "Qu'est-ce qu'un SMN (ou MTF) ?", verso: "Un système multilatéral de négociation, alternative moins régulée aux marchés réglementés, ouverte par la directive MIF1.", difficulte: "intermediaire" },
    { id: "amf2-fc-24", recto: "Une obligation à taux variable est-elle plus ou moins sensible aux variations de taux qu'une obligation à taux fixe de même maturité ?", verso: "Moins sensible : son coupon s'ajuste périodiquement au marché, limitant l'impact des variations de taux sur son prix.", difficulte: "avance" },
  ],
  quiz: [
    { id: "amf2-qz-01", question: "Le dividende versé à un actionnaire est :", choix: ["Garanti contractuellement", "Décidé chaque année, non garanti", "Fixé pour toute la durée de détention", "Identique au coupon obligataire"], bonneReponse: 1, explication: "Contrairement au coupon obligataire, le dividende dépend d'une décision annuelle de l'assemblée générale et n'est jamais garanti.", difficulte: "fondamental" },
    { id: "amf2-qz-02", question: "Si les taux de marché baissent, le prix d'une obligation existante à taux fixe :", choix: ["Baisse", "Monte", "Reste inchangé", "Devient nul"], bonneReponse: 1, explication: "Relation prix/taux inverse : une baisse des taux de marché rend le coupon fixe existant relativement plus attractif, ce qui fait monter le prix de l'obligation.", difficulte: "intermediaire" },
    { id: "amf2-qz-03", question: "L'acheteur d'un put anticipe :", choix: ["Une hausse du sous-jacent", "Une baisse du sous-jacent", "Une stagnation totale", "Aucune anticipation n'est nécessaire"], bonneReponse: 1, explication: "Le put donne le droit de vendre à un prix fixé : il est utile si le sous-jacent baisse en dessous de ce prix.", difficulte: "fondamental" },
    { id: "amf2-qz-04", question: "Le vendeur d'un call non couvert (« nu ») s'expose à :", choix: ["Une perte plafonnée à la prime reçue", "Un risque de perte théoriquement illimité", "Aucun risque", "Un risque uniquement en cas de baisse du sous-jacent"], bonneReponse: 1, explication: "Si le sous-jacent monte fortement, le vendeur du call doit livrer à un prix inférieur au marché, sans limite théorique de perte.", difficulte: "avance" },
    { id: "amf2-qz-05", question: "Une SICAV se distingue d'un FCP car :", choix: ["Elle n'a pas de personnalité morale", "L'investisseur y devient actionnaire d'une société", "Elle ne peut détenir que des obligations", "Elle est réservée aux investisseurs professionnels"], bonneReponse: 1, explication: "La SICAV est une société à part entière, contrairement au FCP qui est une copropriété de valeurs mobilières.", difficulte: "intermediaire" },
    { id: "amf2-qz-06", question: "La valeur liquidative d'un OPC se calcule :", choix: ["En divisant l'actif net par le nombre de parts", "En multipliant le nominal par le taux de coupon", "En sommant tous les dividendes versés", "Par le cours de bourse de la société de gestion"], bonneReponse: 0, explication: "VL = actif net du fonds / nombre de parts ou actions en circulation.", difficulte: "fondamental" },
    { id: "amf2-qz-07", question: "Les OPCVM relèvent de la directive :", choix: ["AIFM", "MIF2", "UCITS", "Solvabilité II"], bonneReponse: 2, explication: "UCITS est le nom européen de la directive encadrant les OPCVM et leur passeport de commercialisation.", difficulte: "fondamental" },
    { id: "amf2-qz-08", question: "Les FIA relèvent de la directive :", choix: ["AIFM", "DDA", "PRIIPs", "MIF1"], bonneReponse: 0, explication: "AIFM (Alternative Investment Fund Managers) encadre les gestionnaires de fonds alternatifs depuis 2011.", difficulte: "intermediaire" },
    { id: "amf2-qz-09", question: "Le rôle premier d'une chambre de compensation est de :", choix: ["Fixer les cours de bourse", "Réduire le risque de contrepartie en s'interposant entre acheteur et vendeur", "Collecter l'impôt sur les plus-values", "Remplacer le rôle de l'AMF"], bonneReponse: 1, explication: "La CCP garantit la bonne fin des transactions même en cas de défaillance d'une des parties.", difficulte: "intermediaire" },
    { id: "amf2-qz-10", question: "Un produit structuré à capital garanti expose principalement à :", choix: ["Aucun risque, y compris de contrepartie", "Un risque de défaut de l'émetteur/garant", "Un risque de change uniquement", "Un risque de liquidité seulement"], bonneReponse: 1, explication: "La garantie de capital dépend de la solidité de l'émetteur ou du garant : ce n'est jamais un risque strictement nul.", difficulte: "avance" },
    { id: "amf2-qz-11", question: "Un ordre « au marché » est exécuté :", choix: ["Uniquement à un prix choisi par l'investisseur", "Immédiatement, au(x) meilleur(s) prix disponible(s)", "Uniquement lors du fixing d'ouverture", "Jamais avant la clôture"], bonneReponse: 1, explication: "L'ordre au marché privilégie la certitude d'exécution sur la maîtrise du prix.", difficulte: "fondamental" },
    { id: "amf2-qz-12", question: "Le document d'information clé (KID) imposé par PRIIPs vise à :", choix: [
      "Remplacer le prospectus complet dans tous les cas",
      "Fournir une information standardisée et comparable aux investisseurs particuliers",
      "Servir uniquement en interne aux sociétés de gestion",
      "Remplacer le devoir de conseil",
    ], bonneReponse: 1, explication: "Le KID standardise la présentation des risques, coûts et performances pour faciliter la comparaison entre produits packagés.", difficulte: "intermediaire" },
    { id: "amf2-qz-13", question: "En cas de liquidation d'une société, l'ordre de priorité est généralement :", choix: ["Actionnaires puis obligataires", "Obligataires (créanciers) puis actionnaires", "Simultané, à parts égales", "Aucune priorité n'existe"], bonneReponse: 1, explication: "Les créanciers, dont les obligataires, sont désintéressés avant les actionnaires, qui perçoivent le boni de liquidation résiduel.", difficulte: "intermediaire" },
    { id: "amf2-qz-14", question: "La directive MIF1 (2007) a notamment eu pour effet :", choix: [
      "De renforcer le monopole des marchés réglementés historiques",
      "D'ouvrir la concurrence via les systèmes multilatéraux de négociation (SMN)",
      "De créer l'AMF",
      "D'imposer le PFU sur les plus-values",
    ], bonneReponse: 1, explication: "MIF1 met fin au monopole des bourses historiques et ouvre la concurrence entre lieux d'exécution.", difficulte: "avance" },
    { id: "amf2-qz-15", question: "Une obligation à taux variable est, toutes choses égales par ailleurs :", choix: ["Plus sensible aux taux qu'une obligation à taux fixe", "Moins sensible aux taux qu'une obligation à taux fixe", "Non concernée par le risque de taux", "Toujours plus risquée en capital qu'une action"], bonneReponse: 1, explication: "L'ajustement périodique du coupon limite l'impact des variations de taux sur le prix, contrairement au taux fixe.", difficulte: "avance" },
    { id: "amf2-qz-16", question: "Le boni de liquidation revient :", choix: ["Aux créanciers obligataires en priorité absolue", "Aux actionnaires, après désintéressement de tous les créanciers", "À l'État systématiquement", "Aux dirigeants uniquement"], bonneReponse: 1, explication: "Le boni de liquidation est le reliquat distribué aux actionnaires une fois tous les créanciers (dont les obligataires) désintéressés.", difficulte: "intermediaire" },
    { id: "amf2-qz-17", question: "Un warrant se caractérise notamment par :", choix: ["L'absence totale de risque", "Un effet de levier", "Une garantie systématique du capital investi", "Une durée de vie illimitée"], bonneReponse: 1, explication: "Le warrant, comme les options, offre un effet de levier qui amplifie les gains et les pertes potentielles.", difficulte: "intermediaire" },
    { id: "amf2-qz-18", question: "La négociation en continu sur Euronext signifie que :", choix: [
      "Les ordres ne s'exécutent qu'une fois par jour",
      "Chaque ordre entrant peut s'exécuter immédiatement contre le carnet d'ordres existant",
      "Seuls les investisseurs professionnels peuvent négocier",
      "Les prix sont fixés par l'AMF",
    ], bonneReponse: 1, explication: "Pendant les heures d'ouverture, le marché fonctionne en continu, par opposition aux phases de fixing (ouverture/clôture).", difficulte: "intermediaire" },
    { id: "amf2-qz-19", question: "Un FCP :", choix: ["A la personnalité morale", "N'a pas la personnalité morale", "Est nécessairement coté en bourse", "Ne peut détenir que des liquidités"], bonneReponse: 1, explication: "Le FCP est une copropriété de valeurs mobilières, sans personnalité morale, à la différence de la SICAV.", difficulte: "intermediaire" },
    { id: "amf2-qz-20", question: "Un investisseur achète une obligation à un prix inférieur à son nominal. Son taux de rendement actuariel sera, toutes choses égales par ailleurs :", choix: ["Inférieur au taux facial du coupon", "Supérieur au taux facial du coupon", "Strictement égal au taux facial", "Impossible à calculer"], bonneReponse: 1, explication: "Acheter en dessous du pair augmente le rendement réel par rapport au seul taux facial, puisque le remboursement au nominal génère une plus-value supplémentaire.", difficulte: "avance" },
  ],
  exercices: [
    {
      id: "amf2-ex-01",
      titre: "Calculer un taux de rendement simplifié",
      enonce:
        "Une obligation de nominal 1 000 €, coupon annuel 4 %, est achetée 950 € un an avant son remboursement au pair. Calculez, de façon simplifiée (sans actualisation), le rendement total de cet investissement sur l'année, en euros puis en pourcentage du prix d'achat.",
      corrige:
        "Le porteur perçoit : le coupon de 4 % × 1 000 € = 40 €, plus la plus-value de remboursement de 1 000 € − 950 € = 50 €. Gain total = 40 € + 50 € = 90 €. Rapporté au prix d'achat de 950 €, le rendement simplifié est de 90 / 950 ≈ 9,47 %, sensiblement supérieur au seul taux facial de 4 %, précisément parce que l'obligation a été achetée en dessous du pair.",
      difficulte: "intermediaire",
    },
    {
      id: "amf2-ex-02",
      titre: "Payoff d'une option call à l'échéance",
      enonce:
        "Un investisseur achète un call sur une action, prix d'exercice 50 €, prime payée 3 €. À l'échéance, le cours de l'action est de 58 €. Calculez le résultat net de l'opération pour l'acheteur. Que se serait-il passé si le cours avait clôturé à 47 € ?",
      corrige:
        "À 58 €, l'option est exercée : l'acheteur achète à 50 € un titre qui en vaut 58 €, gain brut de 8 €, dont il faut retrancher la prime de 3 € payée à l'achat : résultat net = +5 €. Si le cours avait clôturé à 47 €, l'option n'aurait aucun intérêt à être exercée (acheter à 50 € un titre qui vaut 47 € sur le marché serait absurde) : l'acheteur abandonne l'option, sa perte est limitée à la prime payée, soit −3 €.",
      difficulte: "avance",
    },
    {
      id: "amf2-ex-03",
      titre: "Choisir le bon type d'ordre",
      enonce:
        "Un client souhaite absolument vendre ses titres avant la clôture du marché, quel que soit le prix obtenu, car il a besoin des liquidités dans l'heure. Un autre client souhaite acheter un titre uniquement si son prix descend sous un seuil précis, sans surveiller le marché en continu. Quel type d'ordre recommandez-vous à chacun ?",
      corrige:
        "Le premier client, qui privilégie la certitude d'exécution sur la maîtrise du prix, doit utiliser un ordre « au marché » (exécution immédiate au(x) meilleur(s) prix disponible(s)). Le second client, qui vise un prix précis sans surveillance continue, doit utiliser un ordre « à cours limité » fixé à son seuil d'achat souhaité : l'ordre ne s'exécutera que si le marché atteint ce prix ou un prix plus favorable, sans garantie de délai d'exécution.",
      difficulte: "fondamental",
    },
  ],
};
