import type { ModuleFormation } from "@/content/types";

export const a4: ModuleFormation = {
  id: "a4",
  domaine: "assurance",
  ordre: 4,
  titre: "L'assurance IARD (dommages)",
  description:
    "Automobile, multirisque habitation, responsabilité civile : les grandes assurances de dommages du quotidien.",
  cours: {
    fondamentaux: `**IARD** signifie Incendie, Accidents et Risques Divers : c'est la famille des assurances de dommages destinées à protéger les biens et à couvrir la responsabilité civile de l'assuré. Les trois piliers du quotidien sont :

- **l'assurance automobile**, dont la garantie **responsabilité civile** est **obligatoire** en France pour tout véhicule terrestre à moteur (loi du 27 février 1958), afin de garantir l'indemnisation des tiers victimes d'un accident causé par l'assuré ;
- **l'assurance multirisque habitation (MRH)**, obligatoire pour les locataires (justificatif exigé chaque année par le bailleur), fortement recommandée mais non obligatoire pour les propriétaires occupants (sauf copropriété, où l'assurance responsabilité civile est obligatoire pour tout copropriétaire depuis la loi ALUR de 2014) ;
- **l'assurance de responsabilité civile (RC) générale**, qui couvre les dommages causés à autrui dans la vie privée, souvent incluse dans la MRH pour l'ensemble du foyer.

L'assurance auto distingue classiquement trois niveaux de garantie : **au tiers** (RC obligatoire seule), **tiers étendu** (RC + quelques garanties comme le bris de glace, le vol, l'incendie) et **tous risques** (couverture la plus large, incluant les dommages au véhicule de l'assuré lui-même, y compris responsable).

En cas d'accident impliquant plusieurs véhicules assurés, les assureurs appliquent entre eux une convention professionnelle, la **convention IRSA**, qui accélère l'indemnisation des victimes sans attendre la détermination judiciaire des responsabilités.

Un quatrième pilier, moins connu du grand public mais essentiel pour tout professionnel du secteur, est l'**assurance construction** : elle protège les intervenants et les propriétaires d'un ouvrage contre les désordres pouvant l'affecter après réception des travaux, via deux garanties obligatoires (loi Spinetta, 1978) qui fonctionnent en miroir — la **garantie décennale** du constructeur et l'**assurance dommages-ouvrage** du maître d'ouvrage.`,
    definitionsCles: [
      { terme: "IARD", definition: "Incendie, Accidents et Risques Divers : famille des assurances de dommages aux biens et de responsabilité civile." },
      { terme: "Responsabilité civile (auto)", definition: "Garantie obligatoire pour tout véhicule terrestre à moteur, couvrant les dommages causés aux tiers (corporels et matériels) par l'assuré responsable d'un accident." },
      { terme: "Loi Badinter (1985)", definition: "Loi du 5 juillet 1985 qui facilite et accélère l'indemnisation des victimes d'accidents de la circulation, notamment des piétons et cyclistes, en limitant les causes d'exonération du conducteur." },
      { terme: "Constat amiable", definition: "Document standardisé rempli conjointement par les conducteurs impliqués dans un accident, décrivant les circonstances et facilitant la détermination des responsabilités entre assureurs." },
      { terme: "Bonus-malus (coefficient de réduction-majoration)", definition: "Système qui module la prime auto selon la sinistralité responsable de l'assuré (réduction de 5 % par an sans sinistre responsable, majoration en cas de sinistre responsable), encadré réglementairement." },
      { terme: "Multirisque habitation (MRH)", definition: "Contrat combinant plusieurs garanties (incendie, dégât des eaux, vol, responsabilité civile, catastrophes naturelles) pour protéger le logement et ses occupants." },
      { terme: "Garantie catastrophes naturelles", definition: "Garantie obligatoirement incluse dans les contrats de dommages aux biens, activée par arrêté interministériel constatant l'état de catastrophe naturelle, avec une franchise légale fixée par l'État." },
      { terme: "Convention IRSA", definition: "Convention d'indemnisation directe de l'assuré et de recours entre sociétés d'assurance automobile, qui accélère l'indemnisation en simplifiant les recours entre assureurs." },
      { terme: "Loi ALUR", definition: "Loi du 24 mars 2014 qui rend obligatoire l'assurance responsabilité civile pour tout copropriétaire et facilite la justification annuelle de l'assurance habitation par le locataire." },
      { terme: "Vétusté", definition: "Dépréciation d'un bien liée à son ancienneté ou à son usure, déduite de l'indemnisation sauf contrat prévoyant une garantie « valeur à neuf »." },
      { terme: "Garantie décennale", definition: "Garantie obligatoire (loi Spinetta, 1978) souscrite par tout constructeur, qui couvre pendant 10 ans à compter de la réception des travaux les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination." },
      { terme: "Assurance dommages-ouvrage", definition: "Assurance obligatoire souscrite par le maître d'ouvrage (le propriétaire qui fait construire), qui préfinance rapidement les réparations des désordres relevant de la garantie décennale, sans attendre la recherche de responsabilité entre constructeurs." },
      { terme: "Garantie de parfait achèvement", definition: "Garantie d'un an après réception des travaux, à la charge de l'entrepreneur, couvrant tous les désordres signalés par le maître d'ouvrage, quelle que soit leur gravité." },
      { terme: "Garantie biennale (de bon fonctionnement)", definition: "Garantie de deux ans après réception, couvrant les désordres affectant les éléments d'équipement dissociables du bâtiment (volets, chauffe-eau, robinetterie...)." },
      { terme: "Loi Spinetta", definition: "Loi du 4 janvier 1978 qui institue le double système obligatoire garantie décennale / assurance dommages-ouvrage, pour accélérer l'indemnisation des désordres de construction sans attendre un jugement sur les responsabilités." },
    ],
    approfondissement: `**La loi Badinter** a profondément modifié le régime de responsabilité en matière d'accidents de la circulation : elle instaure un régime quasi objectif d'indemnisation des victimes non conductrices (piétons, cyclistes, passagers), en excluant la plupart des causes d'exonération classiques du droit commun (sauf faute inexcusable de la victime, cause exclusive de l'accident, dans des cas très limités). Elle impose aussi aux assureurs un calendrier strict de présentation d'offre d'indemnisation aux victimes de dommages corporels.

**Le bonus-malus** est un mécanisme réglementé (et non une simple pratique commerciale) : le coefficient de référence est de 1, diminue de 5 % chaque année sans sinistre responsable (plancher réglementaire à 0,50, soit -50 %) et augmente de 25 % par sinistre responsable, avec un plafond à 3,50. Ce coefficient s'attache au conducteur (et non au véhicule) et le suit d'un assureur à l'autre via le relevé d'information.

**Le régime catastrophes naturelles**, institué par une loi de 1982, repose sur un partage public-privé original : la garantie est intégrée d'office dans tout contrat de dommages aux biens ; son déclenchement dépend d'un arrêté interministériel constatant l'intensité anormale de l'agent naturel ; une franchise légale, fixée par décret, reste à la charge de l'assuré ; et le système est réassuré par la **Caisse centrale de réassurance (CCR)**, avec la garantie de l'État en dernier ressort.

**L'assurance construction, un système à deux étages pensé pour la rapidité d'indemnisation.** L'intérêt majeur du dispositif Spinetta est de découpler l'indemnisation de la recherche de responsabilité : en cas de désordre relevant de la garantie décennale (par exemple une fissure compromettant la solidité d'un mur porteur), le propriétaire n'a pas à attendre qu'un expert ou un juge détermine lequel des constructeurs (maçon, charpentier, architecte...) est responsable — il actionne directement son assurance dommages-ouvrage, qui préfinance les réparations, charge ensuite à l'assureur dommages-ouvrage de se retourner (par subrogation) contre l'assureur décennale du responsable identifié. Trois garanties successives protègent ainsi le maître d'ouvrage selon la gravité et le délai : la garantie de parfait achèvement (1 an, tous désordres signalés), la garantie biennale (2 ans, équipements dissociables), et la garantie décennale (10 ans, solidité de l'ouvrage et impropriété à destination).`,
    historique: `- **1930** : loi fondatrice du contrat d'assurance.
- **1958** : loi du 27 février 1958, qui rend obligatoire l'assurance responsabilité civile automobile en France.
- **1968-1974** : mise en place progressive de conventions entre assureurs pour accélérer l'indemnisation des accidents automobiles (ancêtres de l'IRSA).
- **1982** : loi du 13 juillet 1982, création du régime légal d'indemnisation des catastrophes naturelles.
- **1985** : loi Badinter du 5 juillet 1985, réforme majeure de l'indemnisation des victimes d'accidents de la circulation.
- **1978** : loi Spinetta, création du système obligatoire garantie décennale / assurance dommages-ouvrage.
- **2014** : loi ALUR, qui étend l'obligation d'assurance responsabilité civile aux copropriétaires.`,
    evolutionsJuridiques: [
      { date: "1958", evenement: "Loi du 27 février 1958", texte: "Rend obligatoire l'assurance responsabilité civile pour tout véhicule terrestre à moteur." },
      { date: "1978", evenement: "Loi Spinetta", texte: "Institue le système obligatoire garantie décennale / assurance dommages-ouvrage pour accélérer l'indemnisation des désordres de construction." },
      { date: "1982", evenement: "Loi du 13 juillet 1982", texte: "Crée le régime légal d'indemnisation des catastrophes naturelles, garanti en dernier ressort par l'État." },
      { date: "1985", evenement: "Loi Badinter", texte: "Réforme l'indemnisation des victimes d'accidents de la circulation en limitant les causes d'exonération, notamment pour les victimes non conductrices." },
      { date: "2014", evenement: "Loi ALUR", texte: "Rend obligatoire l'assurance responsabilité civile pour tout copropriétaire." },
    ],
    citations: [
      {
        texte:
          "Les victimes, hormis les conducteurs, sont indemnisées des dommages résultant des atteintes à leur personne qu'elles ont subis, sans que puisse leur être opposée leur propre faute.",
        auteur: "Loi Badinter du 5 juillet 1985",
        contexte: "Principe résumant la protection quasi automatique des victimes non conductrices.",
      },
    ],
    sourcesReference: [
      "Code des assurances, articles L211-1 et suivants (assurance automobile obligatoire), L125-1 et suivants (catastrophes naturelles)",
      "Loi n°85-677 du 5 juillet 1985 (loi Badinter)",
      "France Assureurs — statistiques et fiches pratiques IARD",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "a4-fc-01", recto: "Que signifie IARD ?", verso: "Incendie, Accidents et Risques Divers.", difficulte: "fondamental" },
    { id: "a4-fc-02", recto: "L'assurance auto responsabilité civile est-elle obligatoire ?", verso: "Oui, pour tout véhicule terrestre à moteur, depuis la loi du 27 février 1958.", difficulte: "fondamental" },
    { id: "a4-fc-03", recto: "Quels sont les 3 niveaux classiques de garantie auto ?", verso: "Au tiers, tiers étendu, tous risques.", difficulte: "fondamental" },
    { id: "a4-fc-04", recto: "Que protège la loi Badinter (1985) ?", verso: "Les victimes d'accidents de la circulation, notamment non conductrices (piétons, cyclistes), en limitant les causes d'exonération du conducteur.", difficulte: "intermediaire" },
    { id: "a4-fc-05", recto: "Comment évolue le bonus-malus sans sinistre responsable ?", verso: "Le coefficient diminue de 5 % par an, jusqu'à un plancher réglementaire de 0,50.", difficulte: "intermediaire" },
    { id: "a4-fc-06", recto: "Qui déclenche la garantie catastrophes naturelles ?", verso: "Un arrêté interministériel constatant l'état de catastrophe naturelle.", difficulte: "avance" },
    { id: "a4-fc-07", recto: "Quel organisme réassure le régime catastrophes naturelles en France ?", verso: "La Caisse centrale de réassurance (CCR), avec la garantie de l'État en dernier ressort.", difficulte: "avance" },
    { id: "a4-fc-08", recto: "Depuis quelle loi l'assurance RC est-elle obligatoire pour tout copropriétaire ?", verso: "La loi ALUR (2014).", difficulte: "intermediaire" },
    { id: "a4-fc-09", recto: "Quelle loi a institué la garantie décennale et l'assurance dommages-ouvrage ?", verso: "La loi Spinetta du 4 janvier 1978.", difficulte: "intermediaire" },
    { id: "a4-fc-10", recto: "Que couvre la garantie décennale, et pendant combien de temps ?", verso: "Les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination, pendant 10 ans à compter de la réception des travaux.", difficulte: "fondamental" },
    { id: "a4-fc-11", recto: "À quoi sert l'assurance dommages-ouvrage ?", verso: "À préfinancer rapidement les réparations relevant de la garantie décennale, sans attendre la recherche de responsabilité entre constructeurs.", difficulte: "intermediaire" },
    { id: "a4-fc-12", recto: "Quelle est la durée de la garantie de parfait achèvement ?", verso: "1 an après réception des travaux, tous désordres signalés.", difficulte: "intermediaire" },
    { id: "a4-fc-13", recto: "Quelle est la durée de la garantie biennale, et que couvre-t-elle ?", verso: "2 ans, les éléments d'équipement dissociables du bâtiment (volets, chauffe-eau, robinetterie...).", difficulte: "intermediaire" },
    { id: "a4-fc-14", recto: "Qui souscrit l'assurance dommages-ouvrage ?", verso: "Le maître d'ouvrage, c'est-à-dire le propriétaire qui fait construire.", difficulte: "avance" },
    { id: "a4-fc-15", recto: "Après avoir indemnisé, l'assureur dommages-ouvrage peut-il se retourner contre le constructeur responsable ?", verso: "Oui, par subrogation, contre l'assureur décennale du constructeur identifié comme responsable.", difficulte: "avance" },
    { id: "a4-fc-16", recto: "Qu'est-ce que la vétusté ?", verso: "La dépréciation d'un bien liée à son ancienneté, déduite de l'indemnisation sauf garantie 'valeur à neuf'.", difficulte: "intermediaire" },
    { id: "a4-fc-17", recto: "Qu'est-ce que le constat amiable ?", verso: "Un document standardisé rempli conjointement par les conducteurs impliqués dans un accident, facilitant la détermination des responsabilités.", difficulte: "fondamental" },
  ],
  quiz: [
    {
      id: "a4-qz-01",
      question: "L'assurance MRH est légalement obligatoire pour :",
      choix: ["Tout propriétaire", "Tout locataire", "Tout copropriétaire pour la garantie RC uniquement", "Personne, elle est toujours facultative"],
      bonneReponse: 1,
      explication: "Le locataire doit justifier chaque année d'une assurance habitation à son bailleur ; le copropriétaire doit a minima une RC (loi ALUR) ; le propriétaire occupant seul n'a pas d'obligation légale générale.",
      difficulte: "intermediaire",
    },
    {
      id: "a4-qz-02",
      question: "La loi Badinter s'applique principalement à :",
      choix: [
        "L'assurance habitation",
        "L'indemnisation des victimes d'accidents de la circulation",
        "Les catastrophes naturelles",
        "L'assurance emprunteur",
      ],
      bonneReponse: 1,
      explication: "La loi du 5 juillet 1985 réforme spécifiquement l'indemnisation des victimes d'accidents impliquant un véhicule terrestre à moteur.",
      difficulte: "fondamental",
    },
    {
      id: "a4-qz-03",
      question: "Le coefficient de bonus-malus augmente de :",
      choix: ["10 % par sinistre responsable", "25 % par sinistre responsable", "50 % par sinistre responsable", "Il n'augmente jamais"],
      bonneReponse: 1,
      explication: "Le coefficient de référence (1) est majoré de 25 % par sinistre responsable, dans la limite d'un plafond de 3,50.",
      difficulte: "avance",
    },
    {
      id: "a4-qz-04",
      question: "La garantie décennale couvre les dommages compromettant la solidité de l'ouvrage pendant :",
      choix: ["1 an", "2 ans", "5 ans", "10 ans"],
      bonneReponse: 3,
      explication: "10 ans à compter de la réception des travaux, d'où son nom.",
      difficulte: "fondamental",
    },
    {
      id: "a4-qz-05",
      question: "L'assurance dommages-ouvrage est souscrite par :",
      choix: ["Le constructeur", "Le maître d'ouvrage (le propriétaire qui fait construire)", "L'architecte uniquement", "L'assureur décennale"],
      bonneReponse: 1,
      explication: "C'est le propriétaire qui souscrit cette assurance, distincte de la garantie décennale du constructeur.",
      difficulte: "intermediaire",
    },
    {
      id: "a4-qz-06",
      question: "L'intérêt principal du système dommages-ouvrage / garantie décennale est de :",
      choix: [
        "Éviter tout recours entre assureurs",
        "Préfinancer rapidement les réparations sans attendre la recherche de responsabilité",
        "Supprimer la garantie décennale",
        "Réduire la durée de la garantie à 2 ans"
      ],
      bonneReponse: 1,
      explication: "L'indemnisation est découplée de la recherche de responsabilité, accélérant la réparation du désordre pour le propriétaire.",
      difficulte: "avance",
    },
    {
      id: "a4-qz-07",
      question: "La garantie de parfait achèvement dure :",
      choix: ["1 an", "2 ans", "10 ans", "Illimitée"],
      bonneReponse: 0,
      explication: "1 an après réception, couvrant tous les désordres signalés par le maître d'ouvrage.",
      difficulte: "intermediaire",
    },
    { id: "a4-qz-08", question: "La garantie biennale couvre :", choix: ["La solidité de l'ouvrage", "Les éléments d'équipement dissociables", "Le terrain", "Les seuls dommages électriques"], bonneReponse: 1, explication: "Volets, chauffe-eau, robinetterie... relèvent de la garantie biennale de bon fonctionnement.", difficulte: "intermediaire" },
    { id: "a4-qz-09", question: "La convention IRSA sert à :", choix: ["Fixer les primes auto", "Accélérer l'indemnisation entre assureurs sans attendre le jugement des responsabilités", "Remplacer le constat amiable", "Supprimer le bonus-malus"], bonneReponse: 1, explication: "C'est une convention professionnelle de gestion des recours entre assureurs automobiles.", difficulte: "avance" },
    { id: "a4-qz-10", question: "Le coefficient de bonus-malus minimal réglementaire (plancher) est de :", choix: ["0", "0,50", "1", "3,50"], bonneReponse: 1, explication: "Le plancher réglementaire est de 0,50, soit -50 % par rapport au coefficient de référence.", difficulte: "avance" },
  ],
  exercices: [
    {
      id: "a4-ex-01",
      titre: "Choisir le bon niveau de garantie auto",
      enonce:
        "Un client possède un véhicule ancien de faible valeur, roule peu, et souhaite minimiser sa prime tout en restant dans la légalité. Que lui recommandez-vous, et pourquoi ?",
      corrige:
        "La garantie « au tiers » (responsabilité civile seule, garantie légale minimale obligatoire) est en principe adaptée : au vu de la faible valeur du véhicule, les garanties dommages tous risques auraient un coût disproportionné par rapport à l'indemnisation potentielle en cas de sinistre sur le véhicule lui-même. Le conseiller peut néanmoins évoquer une garantie « tiers étendu » (vol, incendie, bris de glace) si le client souhaite une protection minimale contre ces risques spécifiques, tout en respectant son objectif de maîtrise du budget.",
      difficulte: "fondamental",
    },
    {
      id: "a4-ex-02",
      titre: "Calculer l'évolution d'un coefficient bonus-malus",
      enonce:
        "Un conducteur part d'un coefficient de référence de 1. La première année, il n'a aucun sinistre responsable. La deuxième année, il n'a de nouveau aucun sinistre responsable. La troisième année, il cause un accident responsable. Calculez son coefficient à l'issue de chacune des trois années (arrondi à 4 décimales), sachant que le coefficient diminue de 5 % par an sans sinistre et augmente de 25 % par sinistre responsable.",
      corrige:
        "Année 1 (aucun sinistre) : 1 × 0,95 = 0,95. Année 2 (aucun sinistre) : 0,95 × 0,95 = 0,9025. Année 3 (1 sinistre responsable) : 0,9025 × 1,25 = 1,128125, arrondi à 1,1281. Malgré deux années sans sinistre qui avaient fait baisser son coefficient sous 1 (donc sa prime sous le tarif de référence), un seul sinistre responsable en troisième année suffit à repasser au-dessus de 1 : la majoration de 25 % s'applique au coefficient déjà acquis, pas au coefficient de référence de départ, ce qui illustre pourquoi un sinistre responsable coûte proportionnellement plus cher à un conducteur déjà bien bonifié qu'à un conducteur neutre.",
      difficulte: "avance",
    },
    {
      id: "a4-ex-03",
      titre: "Calculer une indemnisation après franchise catastrophe naturelle",
      enonce:
        "Une habitation subit 18 000 € de dommages lors d'un épisode reconnu en état de catastrophe naturelle par arrêté interministériel. La franchise légale applicable à ce type de sinistre pour l'habitation est, à titre d'exemple illustratif, de 380 €. Calculez le montant que l'assureur versera effectivement à l'assuré.",
      corrige:
        "Indemnisation nette = dommages constatés − franchise légale = 18 000 € − 380 € = 17 620 €. Contrairement à une franchise contractuelle librement fixée dans d'autres garanties, la franchise catastrophes naturelles est un montant légal fixé par décret (le montant utilisé ici est illustratif et doit être vérifié dans sa valeur réellement en vigueur), qui s'impose à tous les contrats sans que l'assureur puisse la moduler à la baisse.",
      difficulte: "intermediaire",
    },
  ],
};
