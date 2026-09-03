import type { ModuleFormation } from "@/content/types";

export const p1: ModuleFormation = {
  id: "p1",
  domaine: "patrimoine",
  ordre: 1,
  titre: "Fiscalité approfondie de l'épargne et des placements financiers",
  description:
    "PFU vs barème progressif, fiscalité du compte-titres, du PEA, de l'assurance-vie et du PER : comment se calcule vraiment l'impôt sur un placement.",
  cours: {
    fondamentaux: `Depuis 2018, les revenus et gains de la plupart des placements financiers (intérêts, dividendes, plus-values de cession de valeurs mobilières) sont soumis par défaut au **prélèvement forfaitaire unique (PFU)**, aussi appelé **flat tax** : un taux global de **30 %**, décomposé en **12,8 %** d'impôt sur le revenu et **17,2 %** de prélèvements sociaux (CSG, CRDS, prélèvement de solidarité). Le contribuable garde toujours la possibilité d'opter, de façon expresse et globale (pour l'ensemble de ses revenus mobiliers de l'année), pour l'imposition au **barème progressif** de l'impôt sur le revenu si celle-ci lui est plus favorable — ce qui est fréquent pour les foyers faiblement imposés.

Chaque enveloppe de placement a son propre régime :

- le **compte-titres ordinaire (CTO)** relève du droit commun du PFU (ou du barème sur option) ;
- le **PEA** (Plan d'épargne en actions) offre, après **5 ans** de détention, une exonération d'impôt sur le revenu sur les gains (les prélèvements sociaux restant dus), en contrepartie d'un plafond de versements et d'une composition limitée à des titres européens ;
- l'**assurance-vie** bénéficie d'une fiscalité dégressive avec l'ancienneté du contrat (voir approfondissement) ;
- le **PER** (plan d'épargne retraite) permet en phase d'épargne de déduire les versements volontaires du revenu imposable, en contrepartie d'une fiscalité à la sortie qui restitue cet avantage.

La règle à retenir pour tout conseil : la fiscalité ne doit jamais être le seul critère de choix d'un placement, mais elle conditionne largement le rendement net réellement perçu par l'épargnant — d'où l'importance de toujours raisonner **net de fiscalité et de prélèvements sociaux**, jamais en taux brut seul.`,
    definitionsCles: [
      { terme: "PFU (flat tax)", definition: "Prélèvement forfaitaire unique de 30 % (12,8 % d'impôt sur le revenu + 17,2 % de prélèvements sociaux) applicable par défaut aux revenus et plus-values de capitaux mobiliers depuis 2018." },
      { terme: "Option pour le barème progressif", definition: "Choix, exprimé chaque année sur la déclaration de revenus et applicable à l'ensemble des revenus mobiliers du foyer, de soumettre ses revenus de capitaux mobiliers au barème de l'impôt sur le revenu plutôt qu'au PFU." },
      { terme: "Prélèvements sociaux", definition: "Ensemble de contributions (CSG, CRDS, prélèvement de solidarité) au taux global de 17,2 %, dues sur les revenus du capital que l'on opte pour le PFU ou le barème progressif." },
      { terme: "PEA", definition: "Plan d'épargne en actions : enveloppe permettant d'investir dans des actions européennes, exonérée d'impôt sur le revenu (hors prélèvements sociaux) sur les gains après 5 ans de détention, sous plafond de versement." },
      { terme: "Antériorité fiscale (assurance-vie)", definition: "Ancienneté du contrat d'assurance-vie, décomptée depuis sa date d'ouverture (et non depuis chaque versement), qui détermine le régime fiscal applicable aux rachats." },
      { terme: "Abattement annuel sur les rachats (assurance-vie)", definition: "Après 8 ans de détention, abattement annuel sur les produits (intérêts et plus-values) retirés lors d'un rachat, avant application de l'impôt : 4 600 € pour une personne seule, 9 200 € pour un couple soumis à imposition commune (montants à vérifier chaque année)." },
      { terme: "Déductibilité des versements PER", definition: "Faculté de déduire les versements volontaires sur un PER individuel du revenu net global imposable, dans la limite d'un plafond annuel, en contrepartie d'une imposition à la sortie." },
      { terme: "Plus-value de cession de valeurs mobilières", definition: "Gain réalisé lors de la vente de titres financiers (actions, parts d'OPC) à un prix supérieur à leur prix d'acquisition, imposable au PFU ou sur option au barème progressif." },
      { terme: "Moins-value", definition: "Perte réalisée lors de la cession de titres, imputable sur les plus-values de même nature réalisées la même année ou les dix années suivantes." },
      { terme: "PEA-PME", definition: "Variante du PEA dédiée aux titres de PME et ETI européennes, avec un plafond de versement distinct, cumulable avec un PEA classique, aux mêmes règles de fiscalité après 5 ans." },
      { terme: "Acompte du PFU", definition: "Prélèvement à la source opéré par l'établissement payeur (banque, société de gestion) au moment du versement de revenus de capitaux mobiliers, imputable ensuite sur l'impôt finalement dû après déclaration." },
      { terme: "Dispense d'acompte du PFU", definition: "Faculté pour les foyers dont le revenu fiscal de référence ne dépasse pas un seuil de demander à ne pas subir le prélèvement à la source de l'acompte, pour éviter une avance de trésorerie inutile." },
      { terme: "IFU (imprimé fiscal unique)", definition: "Document récapitulatif annuel transmis par les établissements financiers à leurs clients et à l'administration fiscale, détaillant l'ensemble des revenus et gains mobiliers de l'année, base du pré-remplissage de la déclaration de revenus." },
    ],
    approfondissement: `**La fiscalité de l'assurance-vie en détail.** Sur un rachat, seule la part d'intérêts et de plus-values comprise dans le retrait est imposable (le capital versé ne l'est jamais). Le taux applicable à cette part dépend de l'ancienneté du contrat au jour du rachat :
- **avant 4 ans** : PFU à 30 % (ou barème sur option), sans abattement ;
- **entre 4 et 8 ans** : le même taux de PFU, sans abattement non plus ;
- **après 8 ans** : un taux réduit d'imposition sur le revenu (7,5 % sous condition de montant global de primes versées inférieur à 150 000 €, 12,8 % au-delà) s'applique après un **abattement annuel** de 4 600 € (personne seule) ou 9 200 € (couple), auquel s'ajoutent systématiquement les prélèvements sociaux de 17,2 %.

Cette progressivité explique la recommandation classique de ne jamais clôturer un ancien contrat au profit d'un nouveau sans y réfléchir à deux fois : c'est l'**antériorité fiscale**, et non le montant investi, qui commande l'avantage after 8 ans.

**Le PEA, un pari sur la durée.** Avant 5 ans, tout retrait entraîne en principe la clôture du plan et l'imposition des gains au PFU (sauf cas particuliers de retrait anticipé autorisé sans clôture, comme un motif de licenciement). Après 5 ans, les retraits sont possibles sans clôturer le plan (les versements ultérieurs deviennent alors impossibles) et les gains ne supportent que les prélèvements sociaux — un avantage fiscal significatif pour un investissement actions de long terme, en contrepartie d'un risque de perte en capital assumé par l'épargnant.

**Le PER, un avantage fiscal à double tranchant.** La déduction des versements à l'entrée réduit l'impôt l'année du versement, mais la fiscalité à la sortie restitue cet avantage : en cas de sortie en capital, la part correspondant aux versements déduits est imposée au barème progressif (sans abattement), tandis que la part de plus-value suit le régime du PFU. À l'inverse, si le souscripteur n'a pas déduit ses versements à l'entrée (option possible, notamment pour les foyers peu ou pas imposés), la sortie correspondante est exonérée d'impôt sur le revenu (seuls les prélèvements sociaux sur la plus-value restent dus). Le choix de déduire ou non à l'entrée doit donc s'apprécier au regard de la tranche marginale d'imposition prévisible du souscripteur, à l'entrée comme à la sortie (souvent plus faible à la retraite).`,
    historique: `- **1992** : création du PEA.
- **2003** : loi Fillon, qui pose les bases de l'épargne retraite individuelle moderne (PERP, Madelin).
- **2013** : durcissement de la fiscalité de l'épargne, alignement progressif de nombreux revenus du capital sur le barème progressif (avant la réforme de 2018).
- **2018** : instauration du prélèvement forfaitaire unique (PFU), qui simplifie et allège la fiscalité par défaut de l'épargne financière, avec option pour le barème progressif conservée.
- **2019** : loi PACTE, création du PER et harmonisation de sa fiscalité de sortie.`,
    evolutionsJuridiques: [
      { date: "1992", evenement: "Création du PEA", texte: "Loi du 16 juillet 1992, instaurant une enveloppe actions à fiscalité avantageuse après 5 ans." },
      { date: "2018", evenement: "Instauration du PFU", texte: "Loi de finances pour 2018 : taux forfaitaire de 30 % par défaut sur les revenus du capital, avec option pour le barème progressif." },
      { date: "2019", evenement: "Loi PACTE", texte: "Création du PER et de sa fiscalité de sortie articulée avec la déductibilité des versements à l'entrée." },
    ],
    citations: [],
    sourcesReference: [
      "Code général des impôts, notamment art. 200 A (PFU) et art. 125-0 A (assurance-vie)",
      "Bulletin officiel des finances publiques (BOFiP) — fiscalité de l'épargne",
      "Service-public.fr — fiches PEA, assurance-vie, PER",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "p1-fc-01", recto: "Quel est le taux global du PFU ?", verso: "30 % (12,8 % d'impôt sur le revenu + 17,2 % de prélèvements sociaux).", difficulte: "fondamental" },
    { id: "p1-fc-02", recto: "Peut-on éviter le PFU ?", verso: "Oui, sur option expresse et globale pour le barème progressif de l'impôt sur le revenu, pour l'ensemble des revenus mobiliers du foyer.", difficulte: "fondamental" },
    { id: "p1-fc-03", recto: "Après combien d'années un PEA devient-il exonéré d'impôt sur le revenu ?", verso: "5 ans (les prélèvements sociaux de 17,2 % restent dus).", difficulte: "fondamental" },
    { id: "p1-fc-04", recto: "Sur un rachat d'assurance-vie, qu'est-ce qui est imposable ?", verso: "Uniquement la part d'intérêts et de plus-values comprise dans le retrait, jamais le capital versé.", difficulte: "intermediaire" },
    { id: "p1-fc-05", recto: "Quel est l'abattement annuel sur les rachats d'assurance-vie après 8 ans, pour une personne seule ?", verso: "4 600 € (9 200 € pour un couple soumis à imposition commune).", difficulte: "avance" },
    { id: "p1-fc-06", recto: "Quel taux réduit s'applique après 8 ans et abattement sur l'assurance-vie (primes < 150 000 €) ?", verso: "7,5 % d'impôt sur le revenu (+ 17,2 % de prélèvements sociaux).", difficulte: "avance" },
    { id: "p1-fc-07", recto: "Que déduit-on avec un versement volontaire sur un PER (option par défaut) ?", verso: "Le revenu net global imposable, dans la limite d'un plafond annuel.", difficulte: "intermediaire" },
    { id: "p1-fc-08", recto: "Comment est imposée la part de versements déduits lors d'une sortie en capital du PER ?", verso: "Au barème progressif de l'impôt sur le revenu, sans abattement.", difficulte: "avance" },
    { id: "p1-fc-09", recto: "Une moins-value sur cession de titres peut-elle être reportée ?", verso: "Oui, imputable sur les plus-values de même nature des 10 années suivantes.", difficulte: "intermediaire" },
    { id: "p1-fc-10", recto: "Qu'est-ce que le PEA-PME ?", verso: "Une variante du PEA dédiée aux titres de PME/ETI européennes, cumulable avec un PEA classique.", difficulte: "intermediaire" },
    { id: "p1-fc-11", recto: "Qu'est-ce que l'acompte du PFU ?", verso: "Un prélèvement à la source opéré par l'établissement payeur, imputable ensuite sur l'impôt réellement dû.", difficulte: "avance" },
    { id: "p1-fc-12", recto: "Qui peut demander une dispense d'acompte du PFU ?", verso: "Les foyers dont le revenu fiscal de référence ne dépasse pas un certain seuil.", difficulte: "avance" },
    { id: "p1-fc-13", recto: "Qu'est-ce que l'IFU ?", verso: "L'imprimé fiscal unique, document récapitulatif annuel des revenus et gains mobiliers transmis par l'établissement financier à l'administration et au client.", difficulte: "intermediaire" },
    { id: "p1-fc-14", recto: "Le taux réduit de 7,5 % sur l'assurance-vie après 8 ans s'applique-t-il à toutes les primes sans limite ?", verso: "Non, uniquement à la part correspondant à des primes versées inférieures à 150 000 € ; au-delà, le taux est de 12,8 %.", difficulte: "avance" },
    { id: "p1-fc-15", recto: "Le PEA impose-t-il une composition en titres purement français ?", verso: "Non, il autorise des titres européens (Union européenne et quelques pays assimilés), pas seulement français.", difficulte: "intermediaire" },
  ],
  quiz: [
    {
      id: "p1-qz-01",
      question: "Le taux du PFU se décompose en :",
      choix: ["12,8 % + 17,2 %", "15 % + 15 %", "30 % d'impôt seul, sans prélèvements sociaux", "17,2 % + 17,2 %"],
      bonneReponse: 0,
      explication: "12,8 % d'impôt sur le revenu et 17,2 % de prélèvements sociaux, soit 30 % au total.",
      difficulte: "fondamental",
    },
    {
      id: "p1-qz-02",
      question: "Un PEA détenu depuis 6 ans : les gains retirés sont soumis à :",
      choix: ["Rien du tout", "Aux seuls prélèvements sociaux", "Au PFU complet", "Au barème progressif obligatoirement"],
      bonneReponse: 1,
      explication: "Après 5 ans, l'exonération d'impôt sur le revenu s'applique mais les prélèvements sociaux de 17,2 % restent dus.",
      difficulte: "intermediaire",
    },
    {
      id: "p1-qz-03",
      question: "Pour un contribuable non imposable, le versement PER le plus adapté est en général :",
      choix: [
        "Toujours déduit à l'entrée",
        "Non déduit à l'entrée, pour bénéficier d'une sortie en capital exonérée d'impôt sur le revenu",
        "Impossible à réaliser",
        "Soumis obligatoirement au barème",
      ],
      bonneReponse: 1,
      explication: "Sans impôt à réduire à l'entrée, il est souvent plus avantageux de renoncer à la déduction pour bénéficier d'une sortie exonérée d'impôt sur le revenu (hors prélèvements sociaux sur la plus-value).",
      difficulte: "avance",
    },
    {
      id: "p1-qz-04",
      question: "L'acompte du PFU prélevé à la source est :",
      choix: ["Un impôt définitif et supplémentaire", "Une avance imputable sur l'impôt finalement dû", "Réservé aux seuls non-résidents", "Applicable uniquement au PEA"],
      bonneReponse: 1,
      explication: "L'acompte n'est qu'un prélèvement anticipé, régularisé lors du calcul définitif de l'impôt.",
      difficulte: "avance",
    },
    {
      id: "p1-qz-05",
      question: "Le PEA-PME est :",
      choix: ["Incompatible avec un PEA classique", "Cumulable avec un PEA classique, avec un plafond distinct", "Réservé aux entreprises elles-mêmes", "Un compte à terme"],
      bonneReponse: 1,
      explication: "Un même épargnant peut détenir simultanément un PEA classique et un PEA-PME.",
      difficulte: "intermediaire",
    },
    {
      id: "p1-qz-06",
      question: "L'IFU est transmis par :",
      choix: ["Le client à sa banque", "L'établissement financier à son client et à l'administration fiscale", "L'AMF au client", "L'URSSAF"],
      bonneReponse: 1,
      explication: "L'IFU récapitule les revenus et gains mobiliers de l'année et sert de base au pré-remplissage fiscal.",
      difficulte: "intermediaire",
    },
    { id: "p1-qz-07", question: "Une moins-value de cession de titres peut être reportée sur :", choix: ["Les 3 années suivantes", "Les 10 années suivantes", "Aucune année suivante", "Les revenus fonciers"], bonneReponse: 1, explication: "Le report s'effectue sur les plus-values de même nature des 10 années suivantes.", difficulte: "intermediaire" },
    { id: "p1-qz-08", question: "Le PER individuel, si les versements ne sont pas déduits à l'entrée, offre en sortie en capital :", choix: ["Une exonération d'impôt sur le revenu sur la part correspondante", "Une taxation systématique au barème", "Une interdiction de sortie en capital", "Le paiement de l'IFI"], bonneReponse: 0, explication: "Ne pas déduire à l'entrée ouvre droit à une sortie exonérée d'impôt sur le revenu sur cette part.", difficulte: "avance" },
  ],
  exercices: [
    {
      id: "p1-ex-01",
      titre: "Choisir entre PFU et barème progressif",
      enonce:
        "Un client non imposable (tranche à 0 %) a perçu 2 000 € de dividendes cette année. Quel régime lui conseillez-vous, et pourquoi ?",
      corrige:
        "L'option pour le barème progressif est préférable : à la tranche à 0 %, l'impôt sur le revenu dû sur les dividendes serait nul (et les dividendes d'actions ouvrent droit à un abattement de 40 % sur option barème), contre 12,8 % automatiquement prélevés avec le PFU. Le client économiserait donc l'intégralité de la part impôt sur le revenu du PFU en optant pour le barème ; les prélèvements sociaux de 17,2 % restent en revanche dus dans les deux cas.",
      difficulte: "intermediaire",
    },
    {
      id: "p1-ex-02",
      titre: "Calculer une plus-value nette après imputation d'une moins-value",
      enonce:
        "Un investisseur a réalisé cette année une plus-value de 5 000 € sur la vente d'actions A, et une moins-value de 1 800 € sur la vente d'actions B. L'an dernier, il avait déjà une moins-value reportable de 700 € non utilisée. Calculez la plus-value nette imposable de l'année, puis l'impôt dû au PFU.",
      corrige:
        "Plus-value nette = plus-value de l'année − moins-value de l'année − moins-value reportée = 5 000 € − 1 800 € − 700 € = 2 500 €. Cette plus-value nette de 2 500 € est la seule base imposable : impôt au PFU = 2 500 € × 30 % = 750 € (dont 320 € d'impôt sur le revenu à 12,8 % et 430 € de prélèvements sociaux à 17,2 %). Sans l'imputation des moins-values, l'impôt aurait été calculé sur 5 000 € et se serait élevé à 1 500 €, soit un écart de 750 € : l'imputation des moins-values, souvent oubliée, est donc loin d'être négligeable.",
      difficulte: "avance",
    },
    {
      id: "p1-ex-03",
      titre: "Décider d'une dispense d'acompte",
      enonce:
        "Un couple sait qu'il percevra 3 000 € d'intérêts cette année sur un compte à terme. L'acompte du PFU serait prélevé à la source par la banque à hauteur de 12,8 % du montant brut. Ce couple, dont le revenu fiscal de référence est très élevé, envisage de demander une dispense d'acompte pour éviter cette avance de trésorerie. Est-ce une bonne stratégie fiscale, ou seulement une stratégie de trésorerie ?",
      corrige:
        "C'est uniquement une stratégie de trésorerie, jamais une économie d'impôt : l'acompte n'est qu'un prélèvement anticipé, imputable sur l'impôt réellement dû lors de la déclaration l'année suivante — demander la dispense ne change rien au montant final d'impôt payé, cela ne fait que reporter le paiement effectif. De plus, la dispense d'acompte est réservée aux foyers dont le revenu fiscal de référence ne dépasse pas un seuil réglementaire : un couple à revenu fiscal de référence très élevé, comme dans cet énoncé, n'y est en principe pas éligible et devra subir le prélèvement à la source, quelle que soit sa préférence de trésorerie.",
      difficulte: "avance",
    },
  ],
};
