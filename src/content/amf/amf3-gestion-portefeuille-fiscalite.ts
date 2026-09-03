import type { ModuleFormation } from "@/content/types";

export const amf3: ModuleFormation = {
  id: "amf3",
  domaine: "amf",
  ordre: 3,
  titre: "AMF 3 — Gestion de portefeuille, analyse financière et fiscalité des instruments financiers",
  description:
    "Couple rendement/risque, diversification, gestion active vs passive, bases de l'analyse financière et fiscalité des placements financiers.",
  cours: {
    fondamentaux: `Toute décision d'investissement s'analyse à travers le couple **rendement/risque** : un rendement espéré plus élevé s'accompagne, en théorie financière, d'un risque plus élevé (mesuré le plus souvent par la **volatilité**, c'est-à-dire l'écart-type des rendements). La **diversification** — combiner des actifs dont les évolutions ne sont pas parfaitement corrélées entre elles — permet de réduire le risque global d'un portefeuille sans nécessairement sacrifier le rendement espéré : c'est l'un des rares principes financiers qui se rapproche d'un « repas gratuit », théorisé par **Harry Markowitz** dans les années 1950 (théorie moderne du portefeuille).

Deux grandes philosophies de gestion collective s'opposent :

- la **gestion active**, où le gérant cherche à surperformer un indice de référence (**benchmark**) par ses choix de titres et de timing, moyennant des frais de gestion plus élevés ;
- la **gestion passive** (ou indicielle), où le fonds réplique la composition d'un indice (via un **ETF/tracker**), avec des frais très réduits, sur l'hypothèse que la majorité des gérants actifs ne battent pas durablement leur indice net de frais.

L'**analyse financière** d'une entreprise s'appuie sur ses états comptables — le **bilan** (photographie du patrimoine à un instant donné : actif et passif) et le **compte de résultat** (flux de l'exercice : produits et charges) — et sur des ratios usuels comme le **PER** (price earning ratio, à ne pas confondre avec le Plan d'épargne retraite qui partage le même sigle en français) ou le **ROE** (rentabilité des capitaux propres), qui aident à situer la valorisation ou la performance d'une entreprise.

Enfin, la **fiscalité des instruments financiers** conditionne le rendement net réellement perçu : en France, les plus-values de cession de valeurs mobilières et les revenus de capitaux mobiliers relèvent par défaut du **PFU** de 30 %, avec possibilité d'option pour le barème progressif (voir le module dédié « Fiscalité de l'épargne » pour le détail des mécanismes).`,
    definitionsCles: [
      { terme: "Volatilité", definition: "Mesure statistique (écart-type) de la dispersion des rendements d'un actif autour de sa moyenne, indicateur usuel du risque d'un placement financier." },
      { terme: "Diversification", definition: "Stratégie consistant à combiner des actifs peu ou pas corrélés entre eux pour réduire le risque global d'un portefeuille sans sacrifier proportionnellement le rendement espéré." },
      { terme: "Corrélation", definition: "Mesure statistique (comprise entre -1 et +1) du degré de dépendance entre les variations de deux actifs ; plus elle est faible ou négative, plus la diversification est efficace." },
      { terme: "Gestion active", definition: "Style de gestion où le gérant vise à surperformer un indice de référence par ses choix de titres, de secteurs ou de timing de marché, moyennant des frais généralement plus élevés." },
      { terme: "Gestion passive (indicielle)", definition: "Style de gestion consistant à répliquer la composition d'un indice de référence, généralement via un ETF, avec des frais de gestion très réduits." },
      { terme: "ETF (tracker)", definition: "Exchange Traded Fund : fonds indiciel coté en bourse, négociable en continu comme une action, répliquant la performance d'un indice sous-jacent." },
      { terme: "Benchmark", definition: "Indice de référence auquel la performance d'un portefeuille ou d'un OPC est comparée pour en apprécier la gestion." },
      { terme: "Bêta", definition: "Mesure de la sensibilité d'un actif aux mouvements de son marché de référence : un bêta de 1,2 signifie qu'une hausse de 10 % du marché s'accompagne en moyenne d'une hausse de 12 % de l'actif." },
      { terme: "Bilan comptable", definition: "État financier présentant, à une date donnée, l'actif (ce que possède l'entreprise) et le passif (comment elle est financée : capitaux propres et dettes) d'une entreprise." },
      { terme: "Compte de résultat", definition: "État financier récapitulant les produits et les charges d'un exercice, dont le solde détermine le résultat net (bénéfice ou perte) de la période." },
      { terme: "PER (price earning ratio)", definition: "Ratio de valorisation boursière égal au cours de l'action divisé par le bénéfice net par action, indiquant combien d'années de bénéfices actuels sont nécessaires pour « rembourser » le prix payé." },
      { terme: "ROE (return on equity)", definition: "Rentabilité des capitaux propres : résultat net rapporté aux capitaux propres, mesure de l'efficacité avec laquelle l'entreprise rémunère ses actionnaires." },
      { terme: "Capitalisation boursière", definition: "Valeur totale d'une société cotée, égale au cours de bourse multiplié par le nombre total d'actions en circulation." },
      { terme: "Style « value »", definition: "Style de gestion recherchant des titres jugés sous-valorisés par le marché par rapport à leurs fondamentaux (souvent PER bas, dividende élevé)." },
      { terme: "Style « growth »", definition: "Style de gestion privilégiant des sociétés à forte croissance attendue de leurs bénéfices, souvent valorisées à des multiples plus élevés." },
      { terme: "PFU (rappel)", definition: "Prélèvement forfaitaire unique de 30 %, régime par défaut d'imposition des plus-values de cession de valeurs mobilières et des revenus de capitaux mobiliers depuis 2018." },
    ],
    approfondissement: `**La théorie moderne du portefeuille (Markowitz, 1952)** formalise mathématiquement l'intuition de la diversification : pour un niveau de risque donné, il existe une combinaison d'actifs qui maximise le rendement espéré (et réciproquement) — l'ensemble de ces combinaisons optimales forme la **frontière efficiente**. Un portefeuille composé de deux actifs parfaitement corrélés (corrélation = +1) n'offre aucun bénéfice de diversification ; à l'inverse, deux actifs décorrélés, voire négativement corrélés, permettent de réduire le risque du portefeuille en dessous de la moyenne pondérée des risques individuels.

**Gestion active vs passive : un débat structurant de la profession.** De nombreuses études académiques et professionnelles montrent qu'une majorité de gérants actifs ne parviennent pas à battre durablement leur indice de référence net de frais sur longue période, ce qui explique le développement massif des ETF depuis les années 2000. Cela ne signifie pas que la gestion active soit sans valeur (elle peut offrir une gestion du risque plus fine, un accès à des marchés moins efficients comme les petites capitalisations ou certains marchés émergents), mais impose au conseiller un devoir de transparence sur les frais et leur impact réel sur la performance nette remise au client.

**Lire un bilan et un compte de résultat, l'essentiel pour l'examen.** Au bilan, l'actif se lit du moins liquide (immobilisations) au plus liquide (trésorerie) ; le passif du plus stable (capitaux propres) au plus exigible (dettes court terme). Le compte de résultat distingue traditionnellement le résultat d'exploitation (activité courante), le résultat financier (charges et produits financiers, dont les intérêts d'emprunt) et le résultat exceptionnel, dont la somme algébrique (après impôt sur les sociétés) donne le résultat net.

**La fiscalité comme critère de sélection d'enveloppe, pas seulement de produit.** Pour l'examen comme pour la pratique professionnelle, il faut retenir qu'à stratégie d'investissement identique (par exemple un portefeuille d'actions européennes), le choix de l'enveloppe (compte-titres, PEA, assurance-vie, PER) a un impact déterminant sur le rendement net final, via des règles de fiscalité et de disponibilité très différentes — voir le module « Fiscalité approfondie de l'épargne et des placements financiers » pour le détail des taux et abattements applicables à chaque enveloppe.`,
    historique: `- **1952** : publication par Harry Markowitz de « Portfolio Selection », fondation de la théorie moderne du portefeuille (prix Nobel d'économie 1990).
- **1976** : création aux États-Unis du premier fonds indiciel grand public par John Bogle (Vanguard), popularisant la gestion passive.
- **1993** : lancement du premier ETF coté (SPDR S&P 500, aux États-Unis).
- **2001** : cotation des premiers trackers sur Euronext Paris.
- **2018** : entrée en application de MIF2, qui impose notamment la dissociation des frais de recherche et des frais d'exécution (« unbundling »), renforçant la transparence sur les coûts de gestion.`,
    evolutionsJuridiques: [
      { date: "2016", evenement: "Règlement Benchmark (BMR)", texte: "Encadre l'élaboration et l'utilisation des indices de référence financiers, en réponse aux scandales de manipulation d'indices (LIBOR notamment)." },
      { date: "2018", evenement: "MIF2 — dissociation recherche/exécution", texte: "Impose une facturation séparée de la recherche financière et de l'exécution des ordres, pour limiter les conflits d'intérêts implicites." },
    ],
    citations: [
      {
        texte: "Ne mettez pas tous vos œufs dans le même panier.",
        auteur: "Adage financier",
        contexte: "Formulation populaire du principe de diversification théorisé par Markowitz.",
      },
    ],
    sourcesReference: [
      "Harry Markowitz, « Portfolio Selection », Journal of Finance, 1952",
      "AMF — guide pédagogique gestion collective et analyse financière",
      "Règlement (UE) 2016/1011 (règlement Benchmark)",
      "Directive 2014/65/UE (MIF2)",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "amf3-fc-01", recto: "Que mesure la volatilité ?", verso: "La dispersion (écart-type) des rendements d'un actif autour de sa moyenne, indicateur usuel du risque.", difficulte: "fondamental" },
    { id: "amf3-fc-02", recto: "Qu'apporte la diversification à un portefeuille ?", verso: "Une réduction du risque global sans sacrifier proportionnellement le rendement espéré, à condition que les actifs ne soient pas parfaitement corrélés.", difficulte: "fondamental" },
    { id: "amf3-fc-03", recto: "Qui a théorisé la diversification moderne, et en quelle année ?", verso: "Harry Markowitz, en 1952 (théorie moderne du portefeuille).", difficulte: "intermediaire" },
    { id: "amf3-fc-04", recto: "Qu'est-ce que la frontière efficiente ?", verso: "L'ensemble des portefeuilles qui maximisent le rendement espéré pour chaque niveau de risque donné.", difficulte: "avance" },
    { id: "amf3-fc-05", recto: "Différence entre gestion active et gestion passive ?", verso: "La gestion active cherche à battre un indice ; la gestion passive réplique un indice, avec des frais très réduits.", difficulte: "fondamental" },
    { id: "amf3-fc-06", recto: "Qu'est-ce qu'un ETF ?", verso: "Un fonds indiciel coté en bourse (tracker), négociable en continu, répliquant la performance d'un indice.", difficulte: "fondamental" },
    { id: "amf3-fc-07", recto: "Qu'est-ce que le bêta d'un actif ?", verso: "La mesure de sa sensibilité aux mouvements de son marché de référence.", difficulte: "intermediaire" },
    { id: "amf3-fc-08", recto: "Que présente le bilan comptable ?", verso: "L'actif et le passif d'une entreprise à une date donnée (photographie du patrimoine).", difficulte: "fondamental" },
    { id: "amf3-fc-09", recto: "Que présente le compte de résultat ?", verso: "Les produits et charges d'un exercice, dont le solde donne le résultat net.", difficulte: "fondamental" },
    { id: "amf3-fc-10", recto: "Comment calcule-t-on le PER (price earning ratio) ?", verso: "Cours de l'action divisé par le bénéfice net par action.", difficulte: "intermediaire" },
    { id: "amf3-fc-11", recto: "Que mesure le ROE ?", verso: "La rentabilité des capitaux propres : résultat net rapporté aux capitaux propres.", difficulte: "intermediaire" },
    { id: "amf3-fc-12", recto: "Comment calcule-t-on la capitalisation boursière ?", verso: "Cours de bourse × nombre total d'actions en circulation.", difficulte: "fondamental" },
    { id: "amf3-fc-13", recto: "Qu'est-ce que le style de gestion « value » ?", verso: "Un style recherchant des titres jugés sous-valorisés par rapport à leurs fondamentaux (PER bas, dividende élevé).", difficulte: "intermediaire" },
    { id: "amf3-fc-14", recto: "Qu'est-ce que le style de gestion « growth » ?", verso: "Un style privilégiant des sociétés à forte croissance attendue des bénéfices, souvent valorisées plus cher.", difficulte: "intermediaire" },
    { id: "amf3-fc-15", recto: "Qu'a imposé MIF2 concernant la recherche financière ?", verso: "Sa dissociation (« unbundling ») des frais d'exécution des ordres, pour plus de transparence sur les coûts.", difficulte: "avance" },
    { id: "amf3-fc-16", recto: "Que régule le règlement Benchmark (BMR, 2016) ?", verso: "L'élaboration et l'utilisation des indices de référence financiers, après les scandales de manipulation d'indices comme le LIBOR.", difficulte: "avance" },
    { id: "amf3-fc-17", recto: "Quel régime fiscal s'applique par défaut aux plus-values de cession de valeurs mobilières ?", verso: "Le PFU (prélèvement forfaitaire unique) de 30 %.", difficulte: "fondamental" },
    { id: "amf3-fc-18", recto: "Deux actifs parfaitement corrélés (+1) offrent-ils un bénéfice de diversification ?", verso: "Non, aucun.", difficulte: "avance" },
    { id: "amf3-fc-19", recto: "Qui a lancé le premier fonds indiciel grand public, et en quelle décennie ?", verso: "John Bogle (Vanguard), dans les années 1970 (1976).", difficulte: "avance" },
    { id: "amf3-fc-20", recto: "Le choix de l'enveloppe (CTO, PEA, assurance-vie, PER) a-t-il un impact sur le rendement net à stratégie identique ?", verso: "Oui, un impact déterminant via des règles de fiscalité et de disponibilité très différentes.", difficulte: "intermediaire" },
  ],
  quiz: [
    { id: "amf3-qz-01", question: "La diversification est efficace pour réduire le risque lorsque les actifs combinés sont :", choix: ["Parfaitement corrélés", "Peu ou négativement corrélés", "Tous du même secteur", "Tous à taux fixe"], bonneReponse: 1, explication: "Moins les actifs évoluent de la même façon, plus la diversification réduit le risque global du portefeuille.", difficulte: "fondamental" },
    { id: "amf3-qz-02", question: "Un ETF réplique en général :", choix: ["La stratégie discrétionnaire d'un gérant vedette", "La composition d'un indice de référence", "Uniquement des obligations d'État", "Le cours d'une seule action"], bonneReponse: 1, explication: "L'ETF (tracker) est un instrument de gestion passive qui réplique un indice.", difficulte: "fondamental" },
    { id: "amf3-qz-03", question: "Un bêta de 1,5 signifie qu'en moyenne :", choix: [
      "L'actif est 1,5 fois moins volatil que le marché",
      "Une hausse de 10 % du marché s'accompagne d'une hausse de 15 % de l'actif",
      "L'actif ne bouge jamais",
      "L'actif est totalement décorrélé du marché",
    ], bonneReponse: 1, explication: "Le bêta amplifie (>1) ou atténue (<1) les mouvements du marché de référence.", difficulte: "avance" },
    { id: "amf3-qz-04", question: "Le PER (price earning ratio) rapporte :", choix: ["Le résultat net aux capitaux propres", "Le cours de l'action au bénéfice net par action", "L'actif au passif", "Le dividende au cours de l'action"], bonneReponse: 1, explication: "PER = cours / bénéfice net par action, ratio de valorisation le plus utilisé en analyse boursière.", difficulte: "intermediaire" },
    { id: "amf3-qz-05", question: "Le ROE mesure :", choix: ["La rentabilité des capitaux propres", "Le risque de taux", "La liquidité d'un titre", "La corrélation entre deux actifs"], bonneReponse: 0, explication: "ROE = résultat net / capitaux propres.", difficulte: "intermediaire" },
    { id: "amf3-qz-06", question: "Un style de gestion « growth » privilégie :", choix: [
      "Des sociétés jugées sous-valorisées avec un PER bas",
      "Des sociétés à forte croissance attendue des bénéfices",
      "Uniquement des obligations d'État",
      "Uniquement des actifs immobiliers",
    ], bonneReponse: 1, explication: "Le style growth recherche la croissance future des bénéfices, quitte à payer un multiple de valorisation plus élevé.", difficulte: "intermediaire" },
    { id: "amf3-qz-07", question: "La théorie moderne du portefeuille a été formalisée par :", choix: ["John Bogle", "Harry Markowitz", "Milton Friedman", "L'AMF"], bonneReponse: 1, explication: "Harry Markowitz publie « Portfolio Selection » en 1952, fondation théorique de la diversification moderne.", difficulte: "fondamental" },
    { id: "amf3-qz-08", question: "L'unbundling imposé par MIF2 concerne :", choix: [
      "La séparation des frais de recherche et d'exécution des ordres",
      "La séparation entre AMF et ACPR",
      "La séparation entre PEA et assurance-vie",
      "La séparation entre gestion active et gestion passive",
    ], bonneReponse: 0, explication: "MIF2 impose de facturer séparément la recherche financière et l'exécution des ordres, pour éviter les conflits d'intérêts implicites.", difficulte: "avance" },
    { id: "amf3-qz-09", question: "Au bilan comptable, les capitaux propres figurent :", choix: ["À l'actif", "Au passif", "Ni à l'actif ni au passif", "Uniquement au compte de résultat"], bonneReponse: 1, explication: "Les capitaux propres, comme les dettes, figurent au passif (financement de l'entreprise) ; l'actif recense ce que l'entreprise possède.", difficulte: "intermediaire" },
    { id: "amf3-qz-10", question: "Historiquement, une majorité de gérants actifs :", choix: [
      "Battent systématiquement leur indice net de frais",
      "Ne parviennent pas à battre durablement leur indice net de frais",
      "N'existent plus depuis MIF2",
      "Sont interdits en France",
    ], bonneReponse: 1, explication: "De nombreuses études montrent la difficulté persistante de la gestion active à surperformer durablement net de frais, ce qui explique l'essor de la gestion passive.", difficulte: "avance" },
    { id: "amf3-qz-11", question: "Le règlement Benchmark de 2016 a été adopté en réaction notamment :", choix: ["À la crise de 2008", "Aux scandales de manipulation d'indices comme le LIBOR", "À la création de l'euro", "À la loi PACTE"], bonneReponse: 1, explication: "Les manipulations avérées d'indices de référence (LIBOR) ont motivé un encadrement européen strict de leur élaboration.", difficulte: "avance" },
    { id: "amf3-qz-12", question: "La capitalisation boursière d'une société se calcule :", choix: [
      "Cours de bourse × nombre d'actions en circulation",
      "Résultat net × PER",
      "Actif total − passif total",
      "Dividende × nombre d'actionnaires",
    ], bonneReponse: 0, explication: "C'est la définition standard de la capitalisation boursière.", difficulte: "fondamental" },
    { id: "amf3-qz-13", question: "Le compte de résultat permet notamment de distinguer :", choix: [
      "Le résultat d'exploitation, financier et exceptionnel",
      "L'actif circulant et l'actif immobilisé uniquement",
      "Le PEA et le compte-titres",
      "Le Collège et la Commission des sanctions",
    ], bonneReponse: 0, explication: "Ces trois composantes du résultat permettent d'analyser l'origine de la performance d'une entreprise.", difficulte: "intermediaire" },
    { id: "amf3-qz-14", question: "Le premier ETF coté au monde a été lancé :", choix: ["En 1976", "En 1993, aux États-Unis", "En 2001, en France", "En 2018"], bonneReponse: 1, explication: "Le SPDR S&P 500, premier ETF largement reconnu, est lancé en 1993 aux États-Unis.", difficulte: "avance" },
    { id: "amf3-qz-15", question: "Un portefeuille composé à 100 % d'un seul secteur d'activité présente en général :", choix: [
      "Un risque de concentration élevé",
      "Une diversification optimale",
      "Aucun risque, car un seul secteur est plus simple à suivre",
      "Une fiscalité automatiquement plus favorable",
    ], bonneReponse: 0, explication: "L'absence de diversification sectorielle expose le portefeuille à un risque de concentration important.", difficulte: "fondamental" },
  ],
  exercices: [
    {
      id: "amf3-ex-01",
      titre: "Calculer un PER et interpréter",
      enonce:
        "Une société cote 45 € en bourse et a réalisé un bénéfice net par action de 3 € sur le dernier exercice. Calculez son PER, et comparez-le à celui d'une société concurrente coté à 20 € pour un bénéfice net par action de 2,50 €. Laquelle des deux est, sur ce seul critère, la mieux valorisée en termes relatifs ?",
      corrige:
        "Première société : PER = 45 / 3 = 15. Deuxième société : PER = 20 / 2,50 = 8. Sur ce seul critère, la deuxième société est valorisée moins cher relativement à ses bénéfices actuels (8 années de bénéfices pour « rembourser » le prix payé, contre 15 pour la première). Cela ne signifie pas nécessairement qu'elle est un meilleur investissement : un PER plus faible peut aussi refléter des perspectives de croissance jugées plus faibles, ou un risque perçu plus élevé par le marché — le PER seul ne suffit jamais à trancher.",
      difficulte: "intermediaire",
    },
    {
      id: "amf3-ex-02",
      titre: "Choisir entre gestion active et gestion passive",
      enonce:
        "Un client souhaite investir sur les grandes capitalisations européennes, marché jugé globalement efficient, avec un objectif de minimiser les frais sur le long terme. Un autre souhaite investir sur les petites capitalisations de pays émergents peu couvertes par les analystes. Quelle orientation de gestion recommandez-vous à chacun, et pourquoi ?",
      corrige:
        "Pour le premier client, une gestion passive (ETF répliquant un indice de grandes capitalisations européennes) est cohérente avec son objectif : sur un marché efficient et très suivi, il est statistiquement difficile pour une gestion active de surperformer durablement net de frais, et les frais réduits de l'ETF maximisent le rendement net à long terme. Pour le second client, une gestion active peut se justifier : sur un segment moins efficient et moins couvert par les analystes (petites capitalisations émergentes), un gérant disposant d'une expertise spécifique peut identifier des opportunités que la gestion indicielle, par construction, ne peut pas cibler.",
      difficulte: "avance",
    },
    {
      id: "amf3-ex-03",
      titre: "Calculer un rendement net de fiscalité",
      enonce:
        "Un investisseur réalise une plus-value de 4 000 € sur la vente d'actions détenues sur un compte-titres ordinaire. Il est soumis au PFU de 30 %. Calculez le montant net qu'il perçoit après impôt. Comparez ce montant à ce qu'il aurait perçu sur un PEA de plus de 5 ans (seuls les prélèvements sociaux de 17,2 % s'appliquant alors).",
      corrige:
        "Sur compte-titres au PFU : impôt = 4 000 € × 30 % = 1 200 €, net perçu = 4 000 − 1 200 = 2 800 €. Sur un PEA de plus de 5 ans : seuls les prélèvements sociaux de 17,2 % s'appliquent : 4 000 € × 17,2 % = 688 €, net perçu = 4 000 − 688 = 3 312 €. L'écart de 512 € sur cette seule opération illustre concrètement l'avantage fiscal du PEA après 5 ans pour un même gain, à stratégie d'investissement identique.",
      difficulte: "avance",
    },
  ],
};
