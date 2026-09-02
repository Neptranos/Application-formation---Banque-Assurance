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

En cas d'accident impliquant plusieurs véhicules assurés, les assureurs appliquent entre eux une convention professionnelle, la **convention IRSA**, qui accélère l'indemnisation des victimes sans attendre la détermination judiciaire des responsabilités.`,
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
    ],
    approfondissement: `**La loi Badinter** a profondément modifié le régime de responsabilité en matière d'accidents de la circulation : elle instaure un régime quasi objectif d'indemnisation des victimes non conductrices (piétons, cyclistes, passagers), en excluant la plupart des causes d'exonération classiques du droit commun (sauf faute inexcusable de la victime, cause exclusive de l'accident, dans des cas très limités). Elle impose aussi aux assureurs un calendrier strict de présentation d'offre d'indemnisation aux victimes de dommages corporels.

**Le bonus-malus** est un mécanisme réglementé (et non une simple pratique commerciale) : le coefficient de référence est de 1, diminue de 5 % chaque année sans sinistre responsable (plancher réglementaire à 0,50, soit -50 %) et augmente de 25 % par sinistre responsable, avec un plafond à 3,50. Ce coefficient s'attache au conducteur (et non au véhicule) et le suit d'un assureur à l'autre via le relevé d'information.

**Le régime catastrophes naturelles**, institué par une loi de 1982, repose sur un partage public-privé original : la garantie est intégrée d'office dans tout contrat de dommages aux biens ; son déclenchement dépend d'un arrêté interministériel constatant l'intensité anormale de l'agent naturel ; une franchise légale, fixée par décret, reste à la charge de l'assuré ; et le système est réassuré par la **Caisse centrale de réassurance (CCR)**, avec la garantie de l'État en dernier ressort.`,
    historique: `- **1930** : loi fondatrice du contrat d'assurance.
- **1958** : loi du 27 février 1958, qui rend obligatoire l'assurance responsabilité civile automobile en France.
- **1968-1974** : mise en place progressive de conventions entre assureurs pour accélérer l'indemnisation des accidents automobiles (ancêtres de l'IRSA).
- **1982** : loi du 13 juillet 1982, création du régime légal d'indemnisation des catastrophes naturelles.
- **1985** : loi Badinter du 5 juillet 1985, réforme majeure de l'indemnisation des victimes d'accidents de la circulation.
- **2014** : loi ALUR, qui étend l'obligation d'assurance responsabilité civile aux copropriétaires.`,
    evolutionsJuridiques: [
      { date: "1958", evenement: "Loi du 27 février 1958", texte: "Rend obligatoire l'assurance responsabilité civile pour tout véhicule terrestre à moteur." },
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
  ],
};
