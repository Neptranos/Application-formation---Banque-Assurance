import type { ModuleFormation } from "@/content/types";

export const p2: ModuleFormation = {
  id: "p2",
  domaine: "patrimoine",
  ordre: 2,
  titre: "Fiscalité et transmission du patrimoine",
  description:
    "IFI, droits de succession et de donation, démembrement de propriété, revenus fonciers et transmission de l'assurance-vie.",
  cours: {
    fondamentaux: `Trois grands blocs structurent la fiscalité patrimoniale au-delà de l'épargne financière :

1. **La détention** : l'**IFI (impôt sur la fortune immobilière)**, qui a remplacé l'ISF en 2018, taxe le seul patrimoine immobilier net (hors actifs financiers) des foyers dont ce patrimoine dépasse un seuil (1,3 million d'euros), après application d'un barème progressif.
2. **Les revenus tirés du patrimoine** : les **revenus fonciers** (location nue), imposables soit au régime **micro-foncier** (abattement forfaitaire de 30 %, sous plafond de recettes) soit au **régime réel** (déduction des charges réelles, obligatoire au-delà du plafond ou avantageux si les charges dépassent 30 % des recettes).
3. **La transmission** : les **droits de mutation à titre gratuit** (donations et successions), calculés après abattements (qui dépendent du lien de parenté et se renouvellent tous les 15 ans) selon un barème progressif par tranches.

Le **démembrement de propriété** (séparation de l'**usufruit**, droit d'user du bien et d'en percevoir les fruits, et de la **nue-propriété**, droit de disposer du bien) est l'outil central de l'optimisation successorale : il permet de transmettre la nue-propriété d'un bien de son vivant, en n'étant taxé que sur sa valeur (inférieure à la pleine propriété selon un barème fiscal fonction de l'âge de l'usufruitier), l'usufruit s'éteignant sans taxation au décès de celui-ci (recomposition automatique de la pleine propriété entre les mains du nu-propriétaire).`,
    definitionsCles: [
      { terme: "IFI", definition: "Impôt sur la fortune immobilière, dû par les foyers dont le patrimoine immobilier net dépasse 1,3 million d'euros, calculé selon un barème progressif par tranches, avec une décote applicable au seuil d'entrée." },
      { terme: "Micro-foncier", definition: "Régime simplifié d'imposition des revenus fonciers, applicable sous un plafond annuel de recettes, offrant un abattement forfaitaire de 30 % représentatif des charges." },
      { terme: "Régime réel (revenus fonciers)", definition: "Régime d'imposition des revenus fonciers permettant de déduire les charges réellement supportées (travaux, intérêts d'emprunt, taxe foncière, gestion), pouvant générer un déficit foncier imputable sur le revenu global sous conditions." },
      { terme: "Droits de mutation à titre gratuit (DMTG)", definition: "Impôt dû lors d'une transmission sans contrepartie (donation ou succession), calculé après abattement selon le lien de parenté puis application d'un barème progressif par tranches." },
      { terme: "Abattement en ligne directe", definition: "Abattement applicable aux donations et successions entre parents et enfants, renouvelable tous les 15 ans, réduisant l'assiette taxable avant application du barème des droits de mutation." },
      { terme: "Démembrement de propriété", definition: "Division du droit de propriété entre l'usufruit (jouissance et perception des fruits) et la nue-propriété (droit de disposer), utilisée en gestion de patrimoine pour optimiser la transmission." },
      { terme: "Barème fiscal de l'usufruit (art. 669 CGI)", definition: "Grille fixant la valeur fiscale respective de l'usufruit et de la nue-propriété en fonction de l'âge de l'usufruitier au jour du démembrement, utilisée pour le calcul des droits de mutation." },
      { terme: "Réunion de l'usufruit à la nue-propriété", definition: "Recomposition automatique de la pleine propriété entre les mains du nu-propriétaire au décès de l'usufruitier, sans droits de mutation supplémentaires à acquitter." },
      { terme: "Article 990 I du CGI", definition: "Régime fiscal spécifique applicable aux capitaux décès d'assurance-vie issus de primes versées avant les 70 ans de l'assuré : abattement de 152 500 € par bénéficiaire, puis prélèvement forfaitaire de 20 % puis 31,25 % au-delà d'un second seuil." },
      { terme: "Article 757 B du CGI", definition: "Régime fiscal applicable aux capitaux décès d'assurance-vie issus de primes versées après les 70 ans de l'assuré : réintégration dans la succession au-delà d'un abattement global de 30 500 € (tous bénéficiaires confondus), les intérêts capitalisés restant exonérés." },
      { terme: "Barème progressif des DMTG en ligne directe", definition: "Barème par tranches appliqué à l'assiette taxable après abattement, dont les taux vont classiquement de 5 % (première tranche) à 45 % (au-delà d'environ 1,8 million d'euros), les seuils exacts des tranches étant réévalués périodiquement." },
      { terme: "Exonération entre époux et partenaires de PACS", definition: "Exonération totale de droits de succession entre époux et partenaires liés par un PACS depuis la loi TEPA de 2007, quel que soit le montant transmis (règle qui ne s'applique pas aux donations entre vifs, seulement aux successions)." },
      { terme: "SCI (société civile immobilière)", definition: "Structure sociétaire permettant de détenir un bien immobilier à plusieurs, facilitant la transmission progressive de parts sociales (via donation de parts démembrées, par exemple) plutôt que du bien lui-même." },
      { terme: "LMNP (loueur en meublé non professionnel)", definition: "Statut fiscal de la location meublée non professionnelle, relevant des bénéfices industriels et commerciaux (BIC) et non des revenus fonciers, avec un régime d'amortissement comptable propre distinct du foncier nu." },
      { terme: "Exonération de la résidence principale (plus-value immobilière)", definition: "Exonération totale de plus-value lors de la vente de la résidence principale du cédant, quelle que soit la durée de détention — la seule exonération de plus-value immobilière sans condition de durée." },
    ],
    approfondissement: `**Le barème de l'usufruit économique (art. 669 CGI)**, utilisé pour valoriser fiscalement un démembrement, attribue une part décroissante à l'usufruitier avec l'âge : par exemple, avant 21 ans révolus l'usufruit représente 90 % de la pleine propriété, tandis qu'après 91 ans révolus, il n'en représente plus que 10 %. Concrètement, plus le donateur-usufruitier est âgé au moment de la donation de la nue-propriété, plus la valeur taxable transmise (la nue-propriété) se rapproche de la valeur pleine du bien — d'où l'intérêt de démembrer tôt.

**La combinaison démembrement + abattements renouvelables** est la technique centrale de la transmission progressive de patrimoine en France : un parent peut donner la nue-propriété d'un bien à son enfant en ne payant des droits que sur la valeur (réduite) de cette nue-propriété, imputée sur l'abattement en ligne directe disponible ; ce même abattement se reconstitue entièrement tous les 15 ans, permettant en théorie de transmettre un patrimoine important sur plusieurs décennies sans droits de succession significatifs, tout en conservant l'usufruit (donc les revenus ou l'usage du bien) jusqu'au décès.

**Assurance-vie et succession : une articulation à ne pas confondre avec le droit commun.** Les capitaux décès d'un contrat d'assurance-vie ne font en principe pas partie de la succession civile (ils échappent aux règles de réserve héréditaire et de rapport, sauf primes manifestement exagérées appréciées par le juge au regard de l'âge et du patrimoine du souscripteur) : ils suivent le régime fiscal spécifique de l'article 990 I ou 757 B selon la date de versement des primes, distinct des droits de succession classiques. C'est ce qui explique que l'assurance-vie reste, pour la plupart des situations patrimoniales, l'outil de transmission hors succession le plus utilisé en France.

**Le déficit foncier**, mécanisme souvent recherché par les propriétaires bailleurs au régime réel : lorsque les charges déductibles (notamment les travaux) excèdent les revenus fonciers de l'année, le déficit est imputable sur le revenu global dans la limite de 10 700 € par an, le surplus étant reportable sur les revenus fonciers des 10 années suivantes.

**Le conjoint survivant, grand oublié... du bon côté.** Depuis la loi TEPA de 2007, l'époux et le partenaire de PACS survivant sont totalement exonérés de droits de succession, quel que soit le montant hérité — une différence majeure avec les donations entre époux, qui restent soumises à un abattement plafonné et au barème progressif, ce qui explique pourquoi la planification patrimoniale distingue toujours nettement stratégie de succession et stratégie de donation entre conjoints.

**SCI et location meublée, deux outils complémentaires du démembrement.** La SCI permet de démembrer plus finement un patrimoine immobilier en transmettant des parts sociales (elles-mêmes démembrables) plutôt que des quotes-parts indivises du bien, simplifiant la gestion à plusieurs héritiers. Le statut LMNP, quant à lui, permet d'amortir comptablement le bien loué meublé (contrairement à la location nue), réduisant significativement la base imposable des loyers perçus — un des rares dispositifs qui rapproche la fiscalité immobilière locative de la fiscalité d'entreprise.`,
    historique: `- **1901** : loi fondatrice sur les droits de mutation à titre gratuit (successions et donations).
- **1982** : création de l'impôt sur les grandes fortunes (IGF), ancêtre de l'ISF.
- **1989** : transformation de l'IGF en impôt de solidarité sur la fortune (ISF).
- **2007** : loi TEPA, relèvement significatif des abattements en ligne directe pour les successions et donations.
- **2018** : suppression de l'ISF et création de l'IFI, recentré sur le seul patrimoine immobilier.`,
    evolutionsJuridiques: [
      { date: "2007", evenement: "Loi TEPA", texte: "Relève fortement les abattements applicables aux successions et donations en ligne directe, réduisant la fiscalité de la transmission familiale courante." },
      { date: "2011", evenement: "Réforme de la fiscalité du patrimoine", texte: "Ajustement du barème et des abattements de l'ISF et des droits de mutation." },
      { date: "2018", evenement: "Suppression de l'ISF, création de l'IFI", texte: "Recentrage de l'impôt sur la fortune sur le seul patrimoine immobilier net, à compter de l'imposition 2018." },
    ],
    citations: [],
    sourcesReference: [
      "Code général des impôts, art. 750 ter et suivants (DMTG), art. 669 (barème usufruit), art. 990 I et 757 B (assurance-vie)",
      "Code général des impôts, art. 964 et suivants (IFI)",
      "Bulletin officiel des finances publiques (BOFiP) — patrimoine, successions et donations",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "p2-fc-01", recto: "Qu'est-ce que l'IFI ?", verso: "L'impôt sur la fortune immobilière, qui taxe le seul patrimoine immobilier net au-delà de 1,3 million d'euros.", difficulte: "fondamental" },
    { id: "p2-fc-02", recto: "Quel abattement offre le régime micro-foncier ?", verso: "30 % forfaitaire, sous plafond de recettes.", difficulte: "fondamental" },
    { id: "p2-fc-03", recto: "Qu'est-ce que le démembrement de propriété ?", verso: "La séparation entre usufruit (jouissance, fruits) et nue-propriété (droit de disposer) d'un même bien.", difficulte: "fondamental" },
    { id: "p2-fc-04", recto: "Que se passe-t-il fiscalement à l'extinction de l'usufruit ?", verso: "La pleine propriété se reconstitue automatiquement chez le nu-propriétaire, sans droits de mutation supplémentaires.", difficulte: "intermediaire" },
    { id: "p2-fc-05", recto: "Tous les combien d'années l'abattement en ligne directe se renouvelle-t-il ?", verso: "Tous les 15 ans.", difficulte: "intermediaire" },
    { id: "p2-fc-06", recto: "Article 990 I du CGI : quel abattement par bénéficiaire ?", verso: "152 500 €, pour les primes versées avant les 70 ans de l'assuré.", difficulte: "avance" },
    { id: "p2-fc-07", recto: "Article 757 B du CGI : quel abattement, et pour quelles primes ?", verso: "30 500 € au total tous bénéficiaires confondus, pour les primes versées après les 70 ans de l'assuré ; les intérêts capitalisés restent exonérés.", difficulte: "avance" },
    { id: "p2-fc-08", recto: "Qu'est-ce qu'un déficit foncier et quelle est sa limite d'imputation sur le revenu global ?", verso: "L'excédent de charges déductibles sur les revenus fonciers, imputable sur le revenu global dans la limite de 10 700 € par an.", difficulte: "avance" },
    { id: "p2-fc-09", recto: "L'assurance-vie fait-elle en principe partie de la succession civile ?", verso: "Non, sauf primes manifestement exagérées ; elle suit un régime fiscal spécifique distinct des droits de succession classiques.", difficulte: "intermediaire" },
    { id: "p2-fc-10", recto: "Le conjoint survivant paie-t-il des droits de succession ?", verso: "Non, il en est totalement exonéré depuis la loi TEPA de 2007, quel que soit le montant hérité.", difficulte: "intermediaire" },
    { id: "p2-fc-11", recto: "Cette exonération s'applique-t-elle aussi aux donations entre époux ?", verso: "Non, seules les successions sont totalement exonérées ; les donations entre époux restent soumises à un abattement plafonné et au barème.", difficulte: "avance" },
    { id: "p2-fc-12", recto: "Qu'est-ce que la LMNP ?", verso: "Le statut de loueur en meublé non professionnel, relevant des BIC avec amortissement comptable du bien, contrairement à la location nue.", difficulte: "avance" },
    { id: "p2-fc-13", recto: "La vente de la résidence principale est-elle taxée sur la plus-value ?", verso: "Non, elle est totalement exonérée, quelle que soit la durée de détention.", difficulte: "fondamental" },
    { id: "p2-fc-14", recto: "Pourquoi utiliser une SCI pour transmettre un bien immobilier ?", verso: "Pour transmettre des parts sociales démembrables plutôt que des quotes-parts indivises, simplifiant la gestion entre plusieurs héritiers.", difficulte: "avance" },
    { id: "p2-fc-15", recto: "Le barème progressif des DMTG en ligne directe va de quel taux à quel taux ?", verso: "De 5 % (première tranche) à 45 % (au-delà d'environ 1,8 million d'euros).", difficulte: "avance" },
  ],
  quiz: [
    {
      id: "p2-qz-01",
      question: "L'IFI taxe :",
      choix: ["Tout le patrimoine, financier et immobilier", "Le seul patrimoine immobilier net au-delà d'un seuil", "Uniquement les résidences secondaires", "Les seuls revenus fonciers"],
      bonneReponse: 1,
      explication: "L'IFI, contrairement à l'ancien ISF, ne porte que sur le patrimoine immobilier net dépassant 1,3 million d'euros.",
      difficulte: "fondamental",
    },
    {
      id: "p2-qz-02",
      question: "Donner la nue-propriété d'un bien de son vivant permet de :",
      choix: [
        "Payer des droits sur la pleine valeur du bien",
        "Payer des droits sur une valeur réduite selon l'âge de l'usufruitier, la pleine propriété se reconstituant sans taxation au décès",
        "Échapper à tout impôt dans tous les cas",
        "Transformer automatiquement le bien en résidence principale",
      ],
      bonneReponse: 1,
      explication: "Le barème de l'article 669 du CGI réduit la valeur taxable de la nue-propriété transmise, avec réunion à la pleine propriété sans nouvelle taxation au décès de l'usufruitier.",
      difficulte: "avance",
    },
    {
      id: "p2-qz-03",
      question: "Les capitaux décès d'assurance-vie issus de primes versées après 70 ans relèvent :",
      choix: ["De l'article 990 I", "De l'article 757 B", "Du barème de l'IFI", "D'une exonération totale systématique"],
      bonneReponse: 1,
      explication: "L'article 757 B s'applique aux primes versées après 70 ans, avec un abattement global de 30 500 € tous bénéficiaires confondus.",
      difficulte: "avance",
    },
    {
      id: "p2-qz-04",
      question: "Depuis la loi TEPA (2007), le conjoint survivant :",
      choix: [
        "Paie des droits de succession réduits de moitié",
        "Est totalement exonéré de droits de succession",
        "Ne peut plus hériter",
        "Paie les mêmes droits qu'un enfant"
      ],
      bonneReponse: 1,
      explication: "L'exonération totale entre époux et partenaires de PACS est l'un des apports majeurs de la loi TEPA.",
      difficulte: "intermediaire",
    },
    {
      id: "p2-qz-05",
      question: "Cette exonération totale s'applique-t-elle aux donations entre époux du vivant des deux conjoints ?",
      choix: ["Oui, à l'identique", "Non, les donations restent soumises à un abattement plafonné et au barème", "Oui, mais seulement après 20 ans de mariage", "Non, les donations entre époux sont interdites"],
      bonneReponse: 1,
      explication: "Seules les successions bénéficient de l'exonération totale ; les donations entre époux suivent un régime distinct.",
      difficulte: "avance",
    },
    {
      id: "p2-qz-06",
      question: "La vente de la résidence principale est-elle soumise à l'impôt sur la plus-value ?",
      choix: ["Oui, systématiquement", "Non, exonération totale sans condition de durée", "Oui, mais seulement après 30 ans de détention", "Non, uniquement si le vendeur a plus de 65 ans"],
      bonneReponse: 1,
      explication: "C'est la seule exonération de plus-value immobilière ne dépendant d'aucune durée de détention.",
      difficulte: "fondamental",
    },
    {
      id: "p2-qz-07",
      question: "Le statut LMNP relève fiscalement :",
      choix: ["Des revenus fonciers", "Des bénéfices industriels et commerciaux (BIC)", "Des traitements et salaires", "De l'IFI uniquement"],
      bonneReponse: 1,
      explication: "La location meublée relève des BIC, avec un régime d'amortissement propre, contrairement à la location nue (revenus fonciers).",
      difficulte: "avance",
    },
    { id: "p2-qz-08", question: "Le régime réel des revenus fonciers permet de déduire :", choix: ["Un abattement forfaitaire de 30 % uniquement", "Les charges réellement supportées (travaux, intérêts, taxe foncière...)", "Aucune charge", "Uniquement les frais de notaire"], bonneReponse: 1, explication: "C'est l'inverse du micro-foncier, qui applique un abattement forfaitaire sans détail des charges réelles.", difficulte: "intermediaire" },
    { id: "p2-qz-09", question: "Le déficit foncier est imputable sur le revenu global dans la limite de :", choix: ["1 070 € par an", "10 700 € par an", "Sans limite", "5 ans maximum seulement"], bonneReponse: 1, explication: "Au-delà, le surplus est reportable sur les revenus fonciers des 10 années suivantes.", difficulte: "avance" },
  ],
  exercices: [
    {
      id: "p2-ex-01",
      titre: "Comparer 990 I et 757 B",
      enonce:
        "Un assuré de 65 ans verse 200 000 € sur son contrat d'assurance-vie, puis, à 75 ans, y ajoute 50 000 € supplémentaires. À son décès, quels régimes fiscaux s'appliqueront respectivement à ces deux versements pour ses bénéficiaires ?",
      corrige:
        "Le versement de 200 000 € effectué à 65 ans (avant 70 ans) relève de l'article 990 I : chaque bénéficiaire profite d'un abattement de 152 500 € sur la part lui revenant, puis un prélèvement de 20 % puis 31,25 % s'applique au-delà. Le versement de 50 000 € effectué à 75 ans (après 70 ans) relève de l'article 757 B : il est réintégré dans l'assiette successorale au-delà d'un abattement global de 30 500 € partagé entre tous les bénéficiaires de tous les contrats de l'assuré, les intérêts générés par ce versement restant en revanche exonérés.",
      difficulte: "avance",
    },
    {
      id: "p2-ex-02",
      titre: "Calculer des droits de donation par tranches",
      enonce:
        "Un père donne 200 000 € en pleine propriété à son fils unique. L'abattement en ligne directe disponible est de 100 000 €. En appliquant, à titre illustratif, le barème par tranches suivant sur la part taxable (5 % jusqu'à 8 072 €, 10 % de 8 072 à 12 109 €, 15 % de 12 109 à 15 932 €, 20 % de 15 932 à 552 324 €), calculez les droits de donation dus.",
      corrige:
        "Part taxable après abattement = 200 000 € − 100 000 € = 100 000 €. Application du barème par tranches successives : tranche à 5 % sur 8 072 € = 403,60 € ; tranche à 10 % sur (12 109 − 8 072) = 4 037 € → 403,70 € ; tranche à 15 % sur (15 932 − 12 109) = 3 823 € → 573,45 € ; tranche à 20 % sur le reliquat (100 000 − 15 932) = 84 068 € → 16 813,60 €. Total des droits = 403,60 + 403,70 + 573,45 + 16 813,60 ≈ 18 194,35 €. Point méthodologique essentiel : le barème est progressif par tranches, comme le barème de l'impôt sur le revenu — on ne applique jamais le taux de la dernière tranche (ici 20 %) à la totalité de la base taxable, ce qui serait une erreur de calcul classique et donnerait un résultat très surestimé (20 000 € au lieu de 18 194 €).",
      difficulte: "avance",
    },
    {
      id: "p2-ex-03",
      titre: "Comparer succession et donation entre époux",
      enonce:
        "Un couple marié s'interroge : faut-il donner de son vivant une partie du patrimoine au conjoint, ou attendre la succession ? Expliquez la différence de traitement fiscal entre ces deux options pour un couple marié.",
      corrige:
        "En cas de succession (décès de l'un des époux), le conjoint survivant est totalement exonéré de droits de succession depuis la loi TEPA de 2007, quel que soit le montant hérité : attendre la succession est donc fiscalement neutre pour la transmission entre époux. En revanche, une donation entre époux du vivant des deux conjoints ne bénéficie pas de cette exonération totale : elle reste soumise à un abattement spécifique (distinct de l'abattement en ligne directe parent-enfant) puis au barème progressif des droits de donation au-delà. Pour la seule transmission entre époux, il n'y a donc généralement pas d'intérêt fiscal à donner de son vivant plutôt qu'à laisser jouer les règles de succession — contrairement à la transmission aux enfants, où le démembrement et les donations anticipées permettent au contraire d'optimiser fortement la fiscalité en exploitant le renouvellement de l'abattement tous les 15 ans.",
      difficulte: "avance",
    },
  ],
};
