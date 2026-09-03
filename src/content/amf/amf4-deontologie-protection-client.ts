import type { ModuleFormation } from "@/content/types";

export const amf4: ModuleFormation = {
  id: "amf4",
  domaine: "amf",
  ordre: 4,
  titre: "AMF 4 — Déontologie, règles de bonne conduite et protection du client",
  description:
    "Le cœur de l'examen certifié : primauté de l'intérêt du client, classification MIF2, tests d'adéquation, meilleure exécution, conflits d'intérêts.",
  cours: {
    fondamentaux: `Le principe cardinal de toute la réglementation professionnelle des marchés financiers tient en une phrase du Règlement général de l'AMF : les prestataires doivent **agir d'une manière honnête, loyale et professionnelle, servant au mieux les intérêts des clients**. C'est la **primauté de l'intérêt du client**, dont découlent toutes les obligations concrètes détaillées dans ce module — c'est aussi, très largement, le thème le plus représenté dans l'examen certifié AMF.

La directive **MIF2** impose une **classification des clients** en trois catégories, avec un niveau de protection décroissant :

1. **client non professionnel** : protection maximale (particuliers, la plupart des PME) ;
2. **client professionnel** : protection allégée, présumé disposer de l'expérience et des connaissances nécessaires (grandes entreprises, certains investisseurs institutionnels, ou client non professionnel ayant demandé et obtenu un classement en professionnel sous conditions) ;
3. **contrepartie éligible** : niveau de protection le plus faible, réservé aux relations entre professionnels des marchés eux-mêmes (banques, entreprises d'investissement, États, banques centrales).

Avant toute prestation, le professionnel doit déterminer le niveau de service rendu et réaliser le test correspondant : le **test d'adéquation** pour le conseil en investissement et la gestion de portefeuille (évaluation des connaissances, de l'expérience, de la situation financière et des objectifs du client), ou le **test de caractère approprié**, moins exigeant, pour l'exécution simple ou la réception-transmission d'ordres sur des instruments complexes sans conseil. Pour les instruments financiers non complexes exécutés à la seule initiative du client (« execution only »), aucun test n'est requis.

Le prestataire doit par ailleurs garantir la **meilleure exécution** des ordres de ses clients, gérer les **conflits d'intérêts** de façon à éviter qu'ils ne nuisent au client, et l'informer de façon claire, exacte et non trompeuse, notamment sur les frais et coûts, avant et après la prestation.`,
    definitionsCles: [
      { terme: "Primauté de l'intérêt du client", definition: "Principe cardinal du RGAMF (art. 314-3) imposant au prestataire d'agir de manière honnête, loyale et professionnelle, en servant au mieux les intérêts de ses clients." },
      { terme: "Client non professionnel", definition: "Catégorie de client bénéficiant du niveau de protection le plus élevé sous MIF2 : la plupart des particuliers et petites entreprises." },
      { terme: "Client professionnel", definition: "Catégorie de client présumée disposer de l'expérience, des connaissances et de la compétence nécessaires pour prendre ses décisions d'investissement, bénéficiant d'une protection allégée." },
      { terme: "Contrepartie éligible", definition: "Catégorie de client au niveau de protection le plus faible, réservée aux relations entre professionnels des marchés (banques, entreprises d'investissement, États, banques centrales)." },
      { terme: "Test d'adéquation", definition: "Évaluation obligatoire, avant tout conseil en investissement ou gestion de portefeuille, portant sur les connaissances, l'expérience, la situation financière et les objectifs d'investissement du client." },
      { terme: "Test de caractère approprié", definition: "Évaluation moins exigeante que le test d'adéquation, requise pour la réception-transmission d'ordres ou l'exécution simple sur instruments complexes sans conseil, portant sur les seules connaissances et l'expérience du client." },
      { terme: "Execution only", definition: "Service d'exécution simple d'ordres sur instruments financiers non complexes, à la seule initiative du client, dispensé de test préalable sous conditions strictes." },
      { terme: "Meilleure exécution (best execution)", definition: "Obligation pour le prestataire de prendre toutes les mesures suffisantes pour obtenir le meilleur résultat possible pour le client lors de l'exécution d'un ordre, en tenant compte du prix, du coût, de la rapidité, de la probabilité d'exécution et du règlement." },
      { terme: "Conflit d'intérêts", definition: "Situation dans laquelle l'intérêt du prestataire (ou d'une personne liée) est susceptible d'entrer en concurrence avec celui du client, imposant une identification, une gestion et, si nécessaire, une information du client." },
      { terme: "Murailles de Chine (Chinese walls)", definition: "Dispositifs organisationnels (séparation des équipes, des systèmes d'information) visant à empêcher la circulation d'informations sensibles entre différents métiers d'un même établissement, pour prévenir les conflits d'intérêts et les abus de marché." },
      { terme: "Avantages et rémunérations (inducements)", definition: "Commissions, rétrocessions ou avantages non monétaires perçus ou versés en lien avec un service d'investissement, encadrés par MIF2 : interdits sauf s'ils améliorent la qualité du service rendu au client et ne nuisent pas à son intérêt." },
      { terme: "Lanceur d'alerte", definition: "Personne signalant de bonne foi un manquement à la réglementation financière, protégée contre les représailles par un dispositif de protection légale (loi Sapin 2, 2016) et un canal de signalement dédié à l'AMF." },
      { terme: "Information sur les coûts et frais (ex-ante / ex-post)", definition: "Obligation MIF2 d'informer le client du coût total agrégé du service et de l'instrument financier, avant la prestation (ex-ante) et a posteriori de façon récapitulative (ex-post)." },
      { terme: "Enregistrement des communications", definition: "Obligation d'enregistrer les conversations téléphoniques et communications électroniques susceptibles de conduire à des transactions, pour assurer la traçabilité et la preuve du conseil ou de l'ordre donné." },
    ],
    approfondissement: `**Reclassement d'un client non professionnel en professionnel : une option encadrée, pas un droit automatique.** Un client non professionnel peut demander à être traité comme professionnel (dit « opt-up »), mais le prestataire doit vérifier qu'il remplit au moins deux des trois critères suivants : un volume significatif de transactions sur les marchés au cours des quatre trimestres précédents, un portefeuille d'instruments financiers dépassant un seuil déterminé, ou une expérience professionnelle dans le secteur financier d'au moins un an. Ce reclassement suit une procédure formelle écrite et n'est jamais présumé.

**La meilleure exécution ne se réduit pas au meilleur prix.** Le RGAMF impose de tenir compte d'un faisceau de critères — prix, coûts, rapidité, probabilité d'exécution et de règlement, taille et nature de l'ordre — pondérés selon les caractéristiques du client (notamment non professionnel vs professionnel) et de l'ordre. Pour un client non professionnel, le résultat global (prix net de tous les coûts liés à l'exécution) est en principe le critère prépondérant, sauf instruction contraire expresse.

**La gestion des conflits d'intérêts suit une hiérarchie à trois niveaux.** D'abord, **prévenir** structurellement (murailles de Chine, séparation des fonctions, politiques de cadeaux et avantages, politique de gestion des conflits écrite et à disposition du client) ; ensuite, si le conflit ne peut être évité, **gérer** de façon à préserver l'intérêt du client ; enfin, en dernier recours seulement, **informer** le client de la nature et de l'origine du conflit avant d'agir pour son compte — l'information du client sur un conflit n'est jamais un blanc-seing pour ne rien faire d'autre.

**Les avantages et rémunérations (inducements) sous MIF2** répondent à un principe simple mais strict : un prestataire ne peut percevoir ou verser une commission de tiers en lien avec un service fourni à un client que si elle est conçue pour améliorer la qualité du service rendu à ce client et ne nuit pas au respect de l'obligation d'agir au mieux de son intérêt — et cette rémunération doit être communiquée au client de façon claire, complète et exacte avant la fourniture du service. C'est ce cadre qui a structuré le débat sur le conseil « indépendant » (rémunéré exclusivement par honoraires, sans rétrocessions) versus le conseil « non indépendant » (qui peut percevoir des rétrocessions sous ces conditions strictes).

**Le devoir de vigilance vis-à-vis des abus de marché** (traité en détail dans le module suivant) rejoint ici la déontologie : tout collaborateur ayant connaissance d'une opération suspecte doit alerter sa hiérarchie ou le RCCI/RCSI (responsable de la conformité), qui apprécie l'opportunité d'une déclaration à l'AMF — un devoir distinct mais complémentaire de celui du lanceur d'alerte, qui protège quiconque signale de bonne foi un manquement, y compris en externe si les canaux internes n'ont pas permis un traitement adéquat.`,
    historique: `- **2007** : entrée en application de MIF1, première classification formalisée des clients au niveau européen.
- **2013-2014** : premiers débats européens sur l'encadrement des rétrocessions (inducements), en réaction aux pratiques de vente non transparentes révélées après la crise de 2008.
- **2016** : loi Sapin 2, création d'un cadre légal de protection des lanceurs d'alerte en France, applicable notamment aux manquements financiers.
- **2018** : entrée en application de MIF2, qui durcit fortement l'encadrement des tests client, de la meilleure exécution, des inducements et de l'information sur les coûts.`,
    evolutionsJuridiques: [
      { date: "2007", evenement: "MIF1", texte: "Première classification harmonisée des clients (non professionnel / professionnel / contrepartie éligible) au niveau européen." },
      { date: "2016", evenement: "Loi Sapin 2", texte: "Instaure un cadre légal de protection des lanceurs d'alerte, applicable notamment aux manquements financiers signalés à l'AMF." },
      { date: "2018", evenement: "MIF2", texte: "Renforce les tests d'adéquation et de caractère approprié, encadre strictement les inducements et impose une information détaillée sur les coûts (ex-ante / ex-post)." },
    ],
    citations: [
      {
        texte:
          "Les prestataires de services d'investissement agissent d'une manière honnête, loyale et professionnelle qui sert au mieux les intérêts des clients.",
        auteur: "Règlement général de l'AMF",
        contexte: "Article 314-3, principe fondateur de la déontologie professionnelle testée à l'examen.",
      },
    ],
    sourcesReference: [
      "Règlement général de l'AMF, Livre III (prestataires)",
      "Directive 2014/65/UE (MIF2) et son règlement délégué (UE) 2017/565",
      "Loi n°2016-1691 du 9 décembre 2016 (loi Sapin 2)",
      "AMF — guide pédagogique déontologie et protection de la clientèle",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "amf4-fc-01", recto: "Quel est le principe cardinal de la déontologie professionnelle AMF ?", verso: "Agir d'une manière honnête, loyale et professionnelle, servant au mieux les intérêts des clients (primauté de l'intérêt du client).", difficulte: "fondamental" },
    { id: "amf4-fc-02", recto: "Quelles sont les 3 catégories de clients sous MIF2 ?", verso: "Client non professionnel, client professionnel, contrepartie éligible.", difficulte: "fondamental" },
    { id: "amf4-fc-03", recto: "Quelle catégorie bénéficie de la protection maximale ?", verso: "Le client non professionnel.", difficulte: "fondamental" },
    { id: "amf4-fc-04", recto: "Quand doit-on réaliser un test d'adéquation ?", verso: "Avant tout conseil en investissement ou toute gestion de portefeuille.", difficulte: "fondamental" },
    { id: "amf4-fc-05", recto: "Quand un test de caractère approprié suffit-il ?", verso: "Pour la réception-transmission d'ordres ou l'exécution simple sur instruments complexes, sans conseil.", difficulte: "intermediaire" },
    { id: "amf4-fc-06", recto: "Dans quel cas aucun test n'est-il requis ?", verso: "Pour l'exécution simple (execution only) d'instruments non complexes, à la seule initiative du client.", difficulte: "intermediaire" },
    { id: "amf4-fc-07", recto: "Combien de critères, sur 3, un client non professionnel doit-il remplir pour être reclassé professionnel ?", verso: "Au moins deux sur trois (volume de transactions, taille du portefeuille, expérience professionnelle).", difficulte: "avance" },
    { id: "amf4-fc-08", recto: "La meilleure exécution se limite-t-elle au meilleur prix ?", verso: "Non : elle intègre aussi les coûts, la rapidité, la probabilité d'exécution et de règlement, la taille et la nature de l'ordre.", difficulte: "intermediaire" },
    { id: "amf4-fc-09", recto: "Pour un client non professionnel, quel critère de meilleure exécution est en principe prépondérant ?", verso: "Le résultat global (prix net de tous les coûts liés à l'exécution).", difficulte: "avance" },
    { id: "amf4-fc-10", recto: "Quelle est la hiérarchie à 3 niveaux de la gestion des conflits d'intérêts ?", verso: "Prévenir, gérer, et informer le client en dernier recours.", difficulte: "avance" },
    { id: "amf4-fc-11", recto: "Qu'est-ce qu'une muraille de Chine ?", verso: "Un dispositif organisationnel (séparation d'équipes, de systèmes) empêchant la circulation d'informations sensibles entre métiers, pour prévenir conflits d'intérêts et abus de marché.", difficulte: "intermediaire" },
    { id: "amf4-fc-12", recto: "À quelle condition un inducement (rétrocession) est-il autorisé sous MIF2 ?", verso: "S'il est conçu pour améliorer la qualité du service rendu au client et ne nuit pas à l'obligation d'agir au mieux de son intérêt, avec information préalable claire.", difficulte: "avance" },
    { id: "amf4-fc-13", recto: "Quelle différence entre conseil indépendant et non indépendant sous MIF2 ?", verso: "Le conseil indépendant exclut toute rétrocession (rémunération exclusive par honoraires) ; le conseil non indépendant peut percevoir des rétrocessions sous conditions strictes.", difficulte: "avance" },
    { id: "amf4-fc-14", recto: "Qu'impose l'information ex-ante sur les coûts et frais ?", verso: "Informer le client du coût total agrégé du service et de l'instrument avant la prestation.", difficulte: "intermediaire" },
    { id: "amf4-fc-15", recto: "Qu'impose l'information ex-post sur les coûts et frais ?", verso: "Fournir un récapitulatif a posteriori des coûts effectivement supportés.", difficulte: "intermediaire" },
    { id: "amf4-fc-16", recto: "Pourquoi enregistre-t-on les conversations téléphoniques susceptibles de mener à une transaction ?", verso: "Pour assurer la traçabilité et la preuve du conseil donné ou de l'ordre passé.", difficulte: "intermediaire" },
    { id: "amf4-fc-17", recto: "Qu'est-ce qu'un lanceur d'alerte, et quelle loi le protège en France ?", verso: "Une personne signalant de bonne foi un manquement à la réglementation ; protégée par la loi Sapin 2 (2016).", difficulte: "intermediaire" },
    { id: "amf4-fc-18", recto: "Le reclassement d'un client non professionnel en professionnel est-il automatique sur simple demande ?", verso: "Non, il suit une procédure formelle écrite avec vérification des critères, jamais présumé.", difficulte: "avance" },
    { id: "amf4-fc-19", recto: "Une contrepartie éligible bénéficie-t-elle du même niveau de protection qu'un particulier ?", verso: "Non, elle bénéficie du niveau de protection le plus faible, réservé aux relations entre professionnels des marchés.", difficulte: "fondamental" },
    { id: "amf4-fc-20", recto: "Qui, en interne, un collaborateur doit-il alerter en cas de soupçon d'abus de marché ?", verso: "Sa hiérarchie ou le RCCI/RCSI (responsable de la conformité), qui apprécie l'opportunité d'une déclaration à l'AMF.", difficulte: "avance" },
    { id: "amf4-fc-21", recto: "Informer le client d'un conflit d'intérêts suffit-il à s'exonérer de toute autre obligation ?", verso: "Non : l'information est le dernier recours, après prévention et gestion, et n'exonère pas d'agir au mieux de l'intérêt du client.", difficulte: "avance" },
    { id: "amf4-fc-22", recto: "Le test d'adéquation porte sur quels 4 éléments du client ?", verso: "Connaissances, expérience, situation financière, objectifs d'investissement.", difficulte: "fondamental" },
    { id: "amf4-fc-23", recto: "Quel article du RGAMF pose le principe de primauté de l'intérêt du client ?", verso: "L'article 314-3.", difficulte: "avance" },
    { id: "amf4-fc-24", recto: "MIF2 a-t-elle renforcé ou allégé les obligations de test et d'information par rapport à MIF1 ?", verso: "Renforcé, sur presque tous les aspects (tests, meilleure exécution, inducements, information sur les coûts).", difficulte: "intermediaire" },
  ],
  quiz: [
    { id: "amf4-qz-01", question: "Le principe de primauté de l'intérêt du client figure :", choix: ["Dans le Code civil uniquement", "À l'article 314-3 du RGAMF", "Dans la seule directive DDA", "Dans le Code du travail"], bonneReponse: 1, explication: "L'article 314-3 du Règlement général de l'AMF pose ce principe cardinal.", difficulte: "fondamental" },
    { id: "amf4-qz-02", question: "Un client professionnel bénéficie, par rapport à un client non professionnel, d'une protection :", choix: ["Identique", "Plus élevée", "Allégée", "Inexistante"], bonneReponse: 2, explication: "Le client professionnel est présumé disposer de l'expérience nécessaire, d'où une protection allégée par rapport au non professionnel.", difficulte: "fondamental" },
    { id: "amf4-qz-03", question: "Pour du conseil en investissement, le prestataire doit réaliser :", choix: ["Un test de caractère approprié uniquement", "Un test d'adéquation", "Aucun test si le client est non professionnel", "Un test uniquement si le montant dépasse 100 000 €"], bonneReponse: 1, explication: "Le conseil en investissement et la gestion de portefeuille exigent systématiquement un test d'adéquation.", difficulte: "fondamental" },
    { id: "amf4-qz-04", question: "L'« execution only » est possible :", choix: [
      "Pour tout instrument financier sans exception",
      "Uniquement pour des instruments non complexes, à l'initiative du client",
      "Uniquement pour les clients professionnels",
      "Uniquement en assurance-vie",
    ], bonneReponse: 1, explication: "L'exécution simple sans test n'est autorisée que pour des instruments non complexes, à la seule initiative du client.", difficulte: "intermediaire" },
    { id: "amf4-qz-05", question: "Le reclassement d'un client non professionnel en professionnel (opt-up) nécessite :", choix: [
      "Une simple déclaration orale du client",
      "De remplir au moins deux critères sur trois, selon une procédure écrite formelle",
      "L'accord préalable de l'AMF",
      "Un minimum de 18 ans révolus uniquement",
    ], bonneReponse: 1, explication: "Le reclassement suit une procédure encadrée avec vérification d'au moins deux critères parmi les trois prévus.", difficulte: "avance" },
    { id: "amf4-qz-06", question: "La meilleure exécution intègre :", choix: [
      "Le seul critère de prix",
      "Un faisceau de critères : prix, coûts, rapidité, probabilité d'exécution et de règlement",
      "Uniquement la rapidité",
      "Uniquement les frais de courtage",
    ], bonneReponse: 1, explication: "Le RGAMF impose une appréciation multicritère, pondérée selon le client et l'ordre.", difficulte: "intermediaire" },
    { id: "amf4-qz-07", question: "La hiérarchie de gestion des conflits d'intérêts est :", choix: ["Informer, gérer, prévenir", "Prévenir, gérer, informer", "Gérer uniquement", "Informer uniquement"], bonneReponse: 1, explication: "Prévenir en priorité, gérer si le conflit persiste, informer le client en tout dernier recours.", difficulte: "avance" },
    { id: "amf4-qz-08", question: "Une muraille de Chine vise à :", choix: [
      "Faciliter la circulation d'informations entre métiers",
      "Empêcher la circulation d'informations sensibles entre différents métiers d'un même établissement",
      "Remplacer le test d'adéquation",
      "Garantir la meilleure exécution",
    ], bonneReponse: 1, explication: "C'est un dispositif organisationnel de prévention des conflits d'intérêts et des abus de marché.", difficulte: "intermediaire" },
    { id: "amf4-qz-09", question: "Un inducement (rétrocession) est autorisé sous MIF2 si :", choix: [
      "Il est systématiquement interdit, sans exception",
      "Il améliore la qualité du service rendu au client et est communiqué de façon transparente",
      "Il est versé en espèces uniquement",
      "Le client ne le sait jamais",
    ], bonneReponse: 1, explication: "L'amélioration de la qualité du service et la transparence de l'information sont les deux conditions cumulatives.", difficulte: "avance" },
    { id: "amf4-qz-10", question: "Un conseiller en gestion de patrimoine rémunéré exclusivement par honoraires, sans aucune rétrocession, exerce un conseil dit :", choix: ["Non indépendant", "Indépendant", "Illégal", "Réservé aux contreparties éligibles"], bonneReponse: 1, explication: "L'absence de toute rétrocession caractérise le conseil « indépendant » au sens de MIF2.", difficulte: "intermediaire" },
    { id: "amf4-qz-11", question: "L'information ex-ante sur les coûts et frais doit être communiquée :", choix: ["Après la prestation uniquement", "Avant la fourniture du service", "Uniquement sur demande expresse du client", "Uniquement pour les clients professionnels"], bonneReponse: 1, explication: "L'ex-ante précède la prestation ; l'ex-post la récapitule a posteriori.", difficulte: "intermediaire" },
    { id: "amf4-qz-12", question: "L'enregistrement des conversations téléphoniques susceptibles de mener à une transaction sert principalement à :", choix: [
      "Surveiller la vie privée des salariés",
      "Assurer la traçabilité et la preuve du conseil donné ou de l'ordre passé",
      "Remplacer le test d'adéquation",
      "Calculer les commissions dues",
    ], bonneReponse: 1, explication: "C'est un outil de preuve et de contrôle a posteriori du respect des obligations professionnelles.", difficulte: "intermediaire" },
    { id: "amf4-qz-13", question: "La loi Sapin 2 (2016) a notamment :", choix: [
      "Créé l'AMF",
      "Instauré un cadre légal de protection des lanceurs d'alerte",
      "Créé le PFU",
      "Créé le PER",
    ], bonneReponse: 1, explication: "La loi Sapin 2 protège les lanceurs d'alerte, y compris pour les manquements financiers signalés à l'AMF.", difficulte: "intermediaire" },
    { id: "amf4-qz-14", question: "Une contrepartie éligible est typiquement :", choix: ["Un particulier retraité", "Une banque ou un État agissant pour son compte propre", "Une PME de 5 salariés", "Un étudiant investisseur"], bonneReponse: 1, explication: "La catégorie contrepartie éligible est réservée aux relations entre professionnels des marchés eux-mêmes.", difficulte: "fondamental" },
    { id: "amf4-qz-15", question: "Le test d'adéquation porte sur :", choix: [
      "Le seul patrimoine du client",
      "Les connaissances, l'expérience, la situation financière et les objectifs du client",
      "Uniquement l'âge du client",
      "Uniquement la nationalité du client",
    ], bonneReponse: 1, explication: "Ces quatre dimensions permettent de vérifier l'adéquation du produit recommandé au profil réel du client.", difficulte: "fondamental" },
    { id: "amf4-qz-16", question: "Informer un client d'un conflit d'intérêts identifié :", choix: [
      "Exonère totalement le prestataire de toute autre obligation",
      "N'exonère pas le prestataire de son obligation d'agir au mieux de l'intérêt du client",
      "N'est jamais nécessaire si le conflit est mineur",
      "Remplace le test d'adéquation",
    ], bonneReponse: 1, explication: "L'information est le dernier recours d'une hiérarchie qui commence par la prévention, pas un blanc-seing.", difficulte: "avance" },
    { id: "amf4-qz-17", question: "Pour un client non professionnel, le critère prépondérant de meilleure exécution est en principe :", choix: [
      "La rapidité seule",
      "Le résultat global, c'est-à-dire le prix net de tous les coûts liés à l'exécution",
      "La probabilité d'exécution seule",
      "Le lieu d'exécution géographique",
    ], bonneReponse: 1, explication: "Sauf instruction contraire expresse, le coût total net est le critère prépondérant pour un client non professionnel.", difficulte: "avance" },
    { id: "amf4-qz-18", question: "MIF2, par rapport à MIF1, a globalement :", choix: ["Allégé les obligations de protection du client", "Renforcé les obligations de protection du client", "Supprimé la classification des clients", "Fusionné AMF et ACPR"], bonneReponse: 1, explication: "MIF2 durcit les tests, la meilleure exécution, les inducements et l'information sur les coûts.", difficulte: "intermediaire" },
    { id: "amf4-qz-19", question: "Un collaborateur soupçonnant un abus de marché doit en priorité :", choix: [
      "Alerter directement les médias",
      "Alerter sa hiérarchie ou le RCCI/RCSI",
      "Ne rien faire, ce n'est pas son rôle",
      "Alerter directement la Commission des sanctions",
    ], bonneReponse: 1, explication: "Le canal interne (hiérarchie, conformité) est la première étape avant toute déclaration externe.", difficulte: "intermediaire" },
    { id: "amf4-qz-20", question: "Un client classé professionnel peut-il redemander une protection renforcée de non professionnel ?", choix: [
      "Non, jamais",
      "Oui, en principe, sur demande et selon les modalités prévues par le prestataire",
      "Uniquement s'il change de nationalité",
      "Uniquement après une décision de l'AMF",
    ], bonneReponse: 1, explication: "La classification n'est pas figée : un client professionnel peut demander à bénéficier d'une protection renforcée.", difficulte: "avance" },
  ],
  exercices: [
    {
      id: "amf4-ex-01",
      titre: "Identifier le bon test à réaliser",
      enonce:
        "Trois situations : (1) un client demande un conseil personnalisé pour constituer un portefeuille diversifié ; (2) un client passe seul, en ligne, un ordre d'achat d'actions du CAC 40 sans solliciter aucun conseil ; (3) un client demande à son intermédiaire de transmettre un ordre sur un produit dérivé complexe, sans conseil. Quel test (ou absence de test) s'applique à chaque situation ?",
      corrige:
        "(1) Conseil personnalisé → test d'adéquation obligatoire (connaissances, expérience, situation financière, objectifs). (2) Actions du CAC 40 : instrument non complexe, exécution à la seule initiative du client → aucun test requis (execution only). (3) Produit dérivé complexe, réception-transmission d'ordre sans conseil → test de caractère approprié obligatoire (connaissances et expérience du client sur ce type d'instrument), car la complexité du produit exclut le régime d'exécution simple sans test.",
      difficulte: "intermediaire",
    },
    {
      id: "amf4-ex-02",
      titre: "Gérer un conflit d'intérêts",
      enonce:
        "Un gérant de portefeuille au sein d'un établissement doit arbitrer entre deux fonds pour un même profil de client : un fonds maison, qui génère une rémunération plus élevée pour l'établissement, et un fonds concurrent, historiquement plus performant net de frais sur la période pertinente. Appliquez la hiérarchie de gestion des conflits d'intérêts à cette situation.",
      corrige:
        "1) Prévenir : l'établissement devrait disposer d'une politique de sélection des fonds fondée sur des critères objectifs de performance et de risque, indépendante de la rémunération perçue, pour éviter que ce type de conflit ne se pose systématiquement. 2) Gérer : à défaut de prévention suffisante, le gérant doit choisir le fonds qui sert au mieux l'intérêt du client — ici, selon les données données, le fonds concurrent plus performant net de frais — indépendamment de la rémunération de l'établissement. 3) Informer : si un doute raisonnable subsiste sur le caractère suffisant de la gestion du conflit, le client doit être informé de l'existence du conflit et de la façon dont il a été traité, avant toute décision d'investissement en son nom. À aucun stade le seul fait d'informer le client ne dispense de rechercher son intérêt réel.",
      difficulte: "avance",
    },
    {
      id: "amf4-ex-03",
      titre: "Reclassement d'un client en professionnel",
      enonce:
        "Une cliente demande à être reclassée « professionnelle » pour accéder à des produits normalement réservés à cette catégorie. Elle indique avoir travaillé 8 mois comme assistante dans une société de gestion il y a 3 ans, détenir un portefeuille de titres de 400 000 €, mais n'avoir réalisé aucune transaction significative sur les quatre derniers trimestres. Le reclassement est-il possible ?",
      corrige:
        "Non, en l'état des informations données : sur les trois critères (volume significatif de transactions sur les 4 derniers trimestres, portefeuille dépassant le seuil requis, expérience professionnelle d'au moins un an dans le secteur financier), seul le critère de la taille du portefeuille semble rempli avec certitude ; l'expérience professionnelle de 8 mois n'atteint pas le seuil d'un an généralement requis, et l'absence de transactions récentes exclut le premier critère. Le prestataire ne peut valider le reclassement que si la cliente remplit au moins deux des trois critères ; ici, un seul est acquis avec certitude, ce qui ne suffit pas.",
      difficulte: "avance",
    },
  ],
};
