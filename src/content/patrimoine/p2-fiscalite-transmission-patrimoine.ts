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
    ],
    approfondissement: `**Le barème de l'usufruit économique (art. 669 CGI)**, utilisé pour valoriser fiscalement un démembrement, attribue une part décroissante à l'usufruitier avec l'âge : par exemple, avant 21 ans révolus l'usufruit représente 90 % de la pleine propriété, tandis qu'après 91 ans révolus, il n'en représente plus que 10 %. Concrètement, plus le donateur-usufruitier est âgé au moment de la donation de la nue-propriété, plus la valeur taxable transmise (la nue-propriété) se rapproche de la valeur pleine du bien — d'où l'intérêt de démembrer tôt.

**La combinaison démembrement + abattements renouvelables** est la technique centrale de la transmission progressive de patrimoine en France : un parent peut donner la nue-propriété d'un bien à son enfant en ne payant des droits que sur la valeur (réduite) de cette nue-propriété, imputée sur l'abattement en ligne directe disponible ; ce même abattement se reconstitue entièrement tous les 15 ans, permettant en théorie de transmettre un patrimoine important sur plusieurs décennies sans droits de succession significatifs, tout en conservant l'usufruit (donc les revenus ou l'usage du bien) jusqu'au décès.

**Assurance-vie et succession : une articulation à ne pas confondre avec le droit commun.** Les capitaux décès d'un contrat d'assurance-vie ne font en principe pas partie de la succession civile (ils échappent aux règles de réserve héréditaire et de rapport, sauf primes manifestement exagérées appréciées par le juge au regard de l'âge et du patrimoine du souscripteur) : ils suivent le régime fiscal spécifique de l'article 990 I ou 757 B selon la date de versement des primes, distinct des droits de succession classiques. C'est ce qui explique que l'assurance-vie reste, pour la plupart des situations patrimoniales, l'outil de transmission hors succession le plus utilisé en France.

**Le déficit foncier**, mécanisme souvent recherché par les propriétaires bailleurs au régime réel : lorsque les charges déductibles (notamment les travaux) excèdent les revenus fonciers de l'année, le déficit est imputable sur le revenu global dans la limite de 10 700 € par an, le surplus étant reportable sur les revenus fonciers des 10 années suivantes.`,
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
  ],
};
