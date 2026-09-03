import type { ModuleFormation } from "@/content/types";

export const b3: ModuleFormation = {
  id: "b3",
  domaine: "banque",
  ordre: 3,
  titre: "L'épargne bancaire",
  description:
    "Livrets réglementés, épargne logement et épargne longue : les grandes familles de produits d'épargne bancaire et leur fiscalité.",
  cours: {
    fondamentaux: `L'épargne bancaire se répartit en trois grandes familles :

1. **L'épargne réglementée**, dont les caractéristiques (plafond, taux, fiscalité) sont fixées par l'État et non par la banque : **Livret A**, **LDDS** (Livret de développement durable et solidaire), **LEP** (Livret d'épargne populaire, sous conditions de ressources), **Livret Jeune**. Ces produits sont liquides (disponibles à tout moment), garantis en capital, et leurs intérêts sont exonérés d'impôt sur le revenu et de prélèvements sociaux.
2. **L'épargne logement** : **PEL** (Plan épargne logement) et **CEL** (Compte épargne logement), qui associent une phase d'épargne à un droit ultérieur à un prêt immobilier à taux préférentiel.
3. **L'épargne bancaire "classique"** : livrets non réglementés (taux libre fixé par la banque, fiscalisés), comptes à terme.

Le principe commun aux livrets réglementés est le **plafond de dépôt** (le compteur cesse de produire un nouveau versement au-delà d'un certain montant, mais les intérêts continuent de courir) et la règle de la **quinzaine** pour le calcul des intérêts (les sommes commencent ou cessent de produire intérêt à des dates fixes du mois, et non au jour près).

Ces produits sont un outil de politique publique autant que d'épargne individuelle : une partie des dépôts collectés sur le Livret A et le LDDS est centralisée à la **Caisse des Dépôts et Consignations** pour financer le logement social et la politique de la ville.`,
    definitionsCles: [
      { terme: "Livret A", definition: "Livret d'épargne réglementée, plafonné, à taux fixé par les pouvoirs publics, dont les intérêts sont exonérés d'impôt et de prélèvements sociaux ; disponible dans toutes les banques depuis 2009." },
      { terme: "LDDS", definition: "Livret de développement durable et solidaire, produit d'épargne réglementée aux caractéristiques proches du Livret A, orienté vers le financement de l'économie sociale et solidaire et de la transition énergétique." },
      { terme: "LEP", definition: "Livret d'épargne populaire, réservé aux personnes dont le revenu fiscal ne dépasse pas un plafond, offrant généralement un taux plus avantageux que le Livret A." },
      { terme: "PEL", definition: "Plan épargne logement : épargne bloquée plusieurs années donnant droit, à l'issue de la phase d'épargne, à un prêt immobilier à taux garanti à l'ouverture, avec un régime fiscal qui dépend de la date d'ouverture du plan." },
      { terme: "CEL", definition: "Compte épargne logement : plus souple que le PEL (retraits possibles), donnant également droit sous conditions à un prêt épargne logement à taux préférentiel." },
      { terme: "Compte à terme", definition: "Dépôt bloqué pour une durée et un taux fixés à l'avance, généralement plus élevé qu'un livret classique en contrepartie de l'indisponibilité des fonds." },
      { terme: "Centralisation à la Caisse des Dépôts", definition: "Mécanisme par lequel une fraction des dépôts du Livret A et du LDDS collectés par les banques est reversée à la Caisse des Dépôts et Consignations pour financer le logement social." },
      { terme: "Règle de la quinzaine", definition: "Convention de calcul des intérêts des livrets réglementés selon laquelle les versements et retraits sont valorisés au 1er ou au 16 du mois suivant, et non au jour exact de l'opération." },
      { terme: "Livret Jeune", definition: "Livret réglementé réservé aux 12-25 ans résidant en France, plafonné à un montant plus faible que le Livret A, avec un taux au moins égal à celui du Livret A fixé librement par chaque banque au-delà de ce plancher." },
      { terme: "Plafond de versement", definition: "Montant maximal de versements cumulés autorisé sur un livret réglementé ; au-delà, les nouveaux versements sont refusés mais les intérêts déjà acquis continuent de courir et de s'ajouter au solde." },
      { terme: "Compte à terme (CAT/DAT)", definition: "Dépôt à terme dont les fonds sont bloqués pour une durée convenue à l'avance, en contrepartie d'un taux généralement plus élevé qu'un livret ; un retrait anticipé entraîne souvent une pénalité sur les intérêts." },
      { terme: "Taux de rendement net", definition: "Rendement effectif d'un placement après déduction de la fiscalité et des prélèvements sociaux, seule mesure pertinente pour comparer deux supports d'épargne aux régimes fiscaux différents." },
    ],
    approfondissement: `**La fixation du taux du Livret A** suit une formule officielle (liée à l'inflation et aux taux interbancaires courts), révisée en principe deux fois par an par le gouverneur de la Banque de France sur recommandation, avec un pouvoir d'ajustement du ministre de l'Économie. Le niveau exact du taux et des plafonds évolue dans le temps : il convient de toujours vérifier la valeur en vigueur auprès de la Banque de France ou du service public plutôt que de se fier à un chiffre mémorisé.

**Arbitrage épargne réglementée / épargne fiscalisée.** Un livret non réglementé peut afficher un taux brut plus élevé qu'un livret réglementé, mais ses intérêts supportent le **prélèvement forfaitaire unique (PFU)**, aussi appelé « flat tax » (impôt sur le revenu + prélèvements sociaux), sauf option pour le barème progressif si elle est plus favorable au contribuable. Comparer un taux net-net (Livret A) à un taux brut fiscalisé est une erreur classique à éviter en conseil client.

**Le PEL, un produit à deux visages.** Sa fiscalité et son taux garanti dépendent entièrement de la date d'ouverture : les plans ouverts à des dates différentes coexistent avec des règles distinctes (exonération ou non des intérêts, prélèvements sociaux dus chaque année ou à la clôture). Le conseiller doit donc systématiquement vérifier la génération exacte du plan avant tout conseil.`,
    historique: `- **1818** : création de la Caisse d'épargne et de la Caisse des Dépôts et Consignations, à l'origine du futur Livret A.
- **1965** : création du Plan épargne logement (PEL).
- **2008-2009** : loi de modernisation de l'économie, qui met fin au monopole de distribution du Livret A (Caisse d'épargne, Crédit Mutuel, La Banque Postale) et le généralise à toutes les banques.
- **2013** : fusion du Livret de développement durable en LDDS, élargissement du plafond du Livret A.
- **2017** : durcissement de la fiscalité des PEL ouverts à partir de cette date (prélèvements sociaux dus chaque année).`,
    evolutionsJuridiques: [
      { date: "2008", evenement: "Loi de modernisation de l'économie", texte: "Généralise la distribution du Livret A à l'ensemble des établissements bancaires à partir de 2009." },
      { date: "2013", evenement: "Réforme du LDD en LDDS", texte: "Élargissement du plafond et orientation renforcée vers le financement de l'économie sociale et solidaire." },
      { date: "2017-2018", evenement: "Réforme de la fiscalité de l'épargne", texte: "Instauration du prélèvement forfaitaire unique (flat tax) applicable par défaut aux revenus de l'épargne non réglementée." },
    ],
    citations: [],
    sourcesReference: [
      "Code monétaire et financier, articles relatifs à l'épargne réglementée",
      "Banque de France — fiches pratiques épargne réglementée",
      "Service-public.fr — fiches Livret A, LDDS, LEP, PEL, CEL",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "b3-fc-01", recto: "Les intérêts du Livret A sont-ils fiscalisés ?", verso: "Non : ils sont exonérés d'impôt sur le revenu et de prélèvements sociaux.", difficulte: "fondamental" },
    { id: "b3-fc-02", recto: "Qu'est-ce que le LEP ?", verso: "Le Livret d'épargne populaire, réservé aux personnes sous un plafond de revenu fiscal, avec un taux généralement plus avantageux que le Livret A.", difficulte: "fondamental" },
    { id: "b3-fc-03", recto: "Différence principale entre PEL et CEL ?", verso: "Le PEL est bloqué plusieurs années sans retraits partiels possibles, le CEL est plus souple avec des retraits possibles ; les deux ouvrent droit à un prêt épargne logement.", difficulte: "intermediaire" },
    { id: "b3-fc-04", recto: "Qu'est-ce que la centralisation à la Caisse des Dépôts ?", verso: "Le reversement d'une part des dépôts Livret A/LDDS collectés par les banques à la Caisse des Dépôts pour financer le logement social.", difficulte: "avance" },
    { id: "b3-fc-05", recto: "Qu'est-ce que la règle de la quinzaine ?", verso: "Convention selon laquelle les versements/retraits sur livret réglementé sont valorisés au 1er ou au 16 du mois, pas au jour exact.", difficulte: "avance" },
    { id: "b3-fc-06", recto: "Qu'est-ce que le PFU (flat tax) ?", verso: "Le prélèvement forfaitaire unique appliqué par défaut aux revenus de l'épargne non réglementée (impôt + prélèvements sociaux), avec option possible pour le barème progressif.", difficulte: "intermediaire" },
    { id: "b3-fc-07", recto: "Que se passe-t-il si un versement dépasse le plafond d'un livret réglementé ?", verso: "Le versement excédentaire est refusé, mais les intérêts déjà acquis continuent de courir et de s'ajouter au solde au-delà du plafond.", difficulte: "intermediaire" },
    { id: "b3-fc-08", recto: "À qui est réservé le Livret Jeune ?", verso: "Aux 12-25 ans résidant en France.", difficulte: "fondamental" },
    { id: "b3-fc-09", recto: "Qu'est-ce qu'un compte à terme (CAT) ?", verso: "Un dépôt bloqué pour une durée convenue à l'avance, à taux généralement plus élevé qu'un livret, avec pénalité en cas de retrait anticipé.", difficulte: "fondamental" },
    { id: "b3-fc-10", recto: "Qui fixe le taux du Livret A et selon quelle logique ?", verso: "Le gouverneur de la Banque de France sur recommandation, via une formule liée à l'inflation et aux taux interbancaires courts, avec pouvoir d'ajustement du ministre de l'Économie.", difficulte: "avance" },
    { id: "b3-fc-11", recto: "Pourquoi faut-il toujours vérifier la date d'ouverture d'un PEL avant de conseiller un client ?", verso: "Parce que le taux garanti et le régime fiscal du PEL dépendent entièrement de sa date d'ouverture, plusieurs générations de règles coexistant.", difficulte: "avance" },
    { id: "b3-fc-12", recto: "En quelle année la Caisse d'épargne et la Caisse des Dépôts ont-elles été créées ?", verso: "1818, à l'origine du futur Livret A.", difficulte: "avance" },
    { id: "b3-fc-13", recto: "Qu'est-ce que le taux de rendement net d'un placement ?", verso: "Le rendement effectif après déduction de la fiscalité et des prélèvements sociaux, seule base de comparaison pertinente entre produits.", difficulte: "intermediaire" },
    { id: "b3-fc-14", recto: "Le CEL permet-il des retraits partiels avant son terme ?", verso: "Oui, contrairement au PEL, ce qui en fait un produit plus souple.", difficulte: "intermediaire" },
    { id: "b3-fc-15", recto: "Un livret non réglementé à taux élevé est-il toujours plus rentable qu'un Livret A ?", verso: "Pas nécessairement : il faut comparer les taux nets de fiscalité, le Livret A étant totalement exonéré alors que le livret non réglementé subit le PFU.", difficulte: "avance" },
    { id: "b3-fc-16", recto: "Depuis quand toutes les banques peuvent-elles distribuer le Livret A ?", verso: "Depuis 2009, à la suite de la loi de modernisation de l'économie de 2008.", difficulte: "intermediaire" },
    { id: "b3-fc-17", recto: "Le LDDS finance-t-il un secteur particulier de l'économie ?", verso: "Oui, il est orienté vers le financement de l'économie sociale et solidaire et de la transition énergétique.", difficulte: "intermediaire" },
    { id: "b3-fc-18", recto: "Quelle institution centralise une partie des dépôts Livret A/LDDS pour financer le logement social ?", verso: "La Caisse des Dépôts et Consignations.", difficulte: "fondamental" },
    { id: "b3-fc-19", recto: "Un compte à terme convient-il pour une épargne de précaution disponible à tout moment ?", verso: "Non : les fonds sont bloqués pour la durée convenue, avec pénalité en cas de retrait anticipé ; il convient mieux à une épargne dont l'indisponibilité est planifiée.", difficulte: "intermediaire" },
    { id: "b3-fc-20", recto: "Le taux du LEP est-il historiquement supérieur ou inférieur à celui du Livret A ?", verso: "Généralement supérieur, en contrepartie de la condition de ressources qui le réserve aux foyers modestes.", difficulte: "fondamental" },
    { id: "b3-fc-21", recto: "Le plafond de versement empêche-t-il les intérêts de continuer à s'accumuler au-delà de ce plafond ?", verso: "Non : seuls les nouveaux versements sont bloqués, les intérêts déjà acquis continuent de s'ajouter au solde même au-delà du plafond.", difficulte: "avance" },
    { id: "b3-fc-22", recto: "Quel type de prêt le PEL ouvre-t-il droit à l'issue de la phase d'épargne ?", verso: "Un prêt immobilier à taux garanti, fixé dès l'ouverture du plan.", difficulte: "fondamental" },
  ],
  quiz: [
    {
      id: "b3-qz-01",
      question: "Depuis quand le Livret A est-il distribuable par toutes les banques françaises ?",
      choix: ["1818", "1965", "2009", "2013"],
      bonneReponse: 2,
      explication: "La loi de modernisation de l'économie de 2008 a mis fin au monopole historique, applicable à partir de 2009.",
      difficulte: "intermediaire",
    },
    {
      id: "b3-qz-02",
      question: "Le LEP est réservé :",
      choix: ["Aux moins de 25 ans", "Aux fonctionnaires", "Aux personnes sous un plafond de revenu fiscal", "Aux propriétaires immobiliers"],
      bonneReponse: 2,
      explication: "Le Livret d'épargne populaire est soumis à une condition de ressources (revenu fiscal de référence).",
      difficulte: "fondamental",
    },
    {
      id: "b3-qz-03",
      question: "Un conseiller compare un livret non réglementé à 3 % brut au Livret A. L'erreur à éviter est de :",
      choix: [
        "Recommander le Livret A par principe",
        "Comparer un taux brut fiscalisé à un taux net d'impôt sans le préciser au client",
        "Vérifier le plafond du Livret A",
        "Expliquer la centralisation à la Caisse des Dépôts",
      ],
      bonneReponse: 1,
      explication: "Le devoir de conseil impose de comparer des taux sur une base homogène (net-net) pour ne pas induire le client en erreur.",
      difficulte: "avance",
    },
    {
      id: "b3-qz-04",
      question: "Le Livret Jeune est réservé :",
      choix: ["Aux moins de 12 ans", "Aux 12-25 ans résidant en France", "Aux étudiants boursiers uniquement", "Aux plus de 25 ans"],
      bonneReponse: 1,
      explication: "C'est un livret réglementé spécifiquement dédié aux jeunes de 12 à 25 ans.",
      difficulte: "fondamental",
    },
    {
      id: "b3-qz-05",
      question: "Au-delà du plafond de versement d'un livret réglementé :",
      choix: [
        "Le livret est automatiquement clôturé",
        "Les nouveaux versements sont refusés mais les intérêts continuent de courir",
        "Le taux d'intérêt double",
        "Le compte devient payant"
      ],
      bonneReponse: 1,
      explication: "Seuls les versements sont bloqués au-delà du plafond ; les intérêts déjà acquis continuent de s'accumuler.",
      difficulte: "intermediaire",
    },
    {
      id: "b3-qz-06",
      question: "Un retrait anticipé sur un compte à terme entraîne généralement :",
      choix: ["Aucune conséquence", "Une pénalité sur les intérêts", "La clôture immédiate de toutes les autres épargnes", "Un bonus de taux"],
      bonneReponse: 1,
      explication: "Le compte à terme suppose une immobilisation des fonds ; un retrait anticipé est pénalisé.",
      difficulte: "fondamental",
    },
    {
      id: "b3-qz-07",
      question: "Pour comparer deux placements aux régimes fiscaux différents, il faut se baser sur :",
      choix: ["Le taux brut affiché", "Le taux de rendement net de fiscalité et de prélèvements sociaux", "Le nom commercial du produit", "La durée de la relation avec la banque"],
      bonneReponse: 1,
      explication: "Seul le rendement net permet une comparaison honnête entre produits fiscalisés différemment.",
      difficulte: "avance",
    },
    {
      id: "b3-qz-08",
      question: "La loi de modernisation de l'économie de 2008 a eu pour effet sur le Livret A :",
      choix: [
        "De le supprimer",
        "De mettre fin au monopole de distribution de certaines banques",
        "De le rendre payant",
        "De le réserver aux fonctionnaires"
      ],
      bonneReponse: 1,
      explication: "Cette loi généralise la distribution du Livret A à tous les établissements bancaires à partir de 2009.",
      difficulte: "intermediaire",
    },
    {
      id: "b3-qz-09",
      question: "Le PEL ouvre droit, à l'issue de la phase d'épargne, à :",
      choix: ["Un prêt immobilier à taux garanti fixé à l'ouverture", "Une exonération totale d'impôt sur le revenu quelle que soit la date d'ouverture", "Un droit de vote en assemblée générale", "Un capital garanti en unités de compte"],
      bonneReponse: 0,
      explication: "C'est la contrepartie de la phase d'épargne bloquée du PEL.",
      difficulte: "fondamental",
    },
    {
      id: "b3-qz-10",
      question: "Le CEL, comparé au PEL, se caractérise par :",
      choix: ["Une durée de blocage plus longue", "Une plus grande souplesse, avec retraits possibles", "L'absence de tout droit à prêt", "Un taux toujours nul"],
      bonneReponse: 1,
      explication: "Le CEL permet des retraits, contrairement au PEL bloqué jusqu'à son terme.",
      difficulte: "intermediaire",
    },
    {
      id: "b3-qz-11",
      question: "Le LDDS est orienté vers le financement :",
      choix: ["De l'immobilier de luxe", "De l'économie sociale et solidaire et de la transition énergétique", "Des marchés actions internationaux", "Du crédit à la consommation"],
      bonneReponse: 1,
      explication: "C'est la vocation affichée du Livret de développement durable et solidaire.",
      difficulte: "intermediaire",
    },
    {
      id: "b3-qz-12",
      question: "La Caisse des Dépôts et Consignations utilise les fonds centralisés du Livret A notamment pour :",
      choix: ["Financer le logement social", "Payer les dividendes des actionnaires bancaires", "Financer exclusivement l'État", "Racheter des actions bancaires"],
      bonneReponse: 0,
      explication: "C'est la finalité historique et actuelle de la centralisation partielle des dépôts Livret A/LDDS.",
      difficulte: "intermediaire",
    },
    {
      id: "b3-qz-13",
      question: "Historiquement, le taux du LEP est en général :",
      choix: ["Inférieur à celui du Livret A", "Supérieur à celui du Livret A", "Toujours égal à zéro", "Fixé librement par chaque banque"],
      bonneReponse: 1,
      explication: "En contrepartie de sa condition de ressources, le LEP offre généralement un taux plus avantageux.",
      difficulte: "fondamental",
    },
    {
      id: "b3-qz-14",
      question: "Un livret réglementé (Livret A, LDDS, LEP) garantit-il le capital investi ?",
      choix: ["Non, il peut y avoir des pertes", "Oui, le capital est garanti", "Seulement pour les montants inférieurs à 1 000 €", "Cela dépend de la banque"],
      bonneReponse: 1,
      explication: "Les livrets réglementés offrent une garantie totale du capital, contrairement aux supports financiers.",
      difficulte: "fondamental",
    },
    {
      id: "b3-qz-15",
      question: "Le taux du Livret A est révisé :",
      choix: ["Une fois tous les 10 ans", "En principe deux fois par an", "Chaque jour", "Jamais"],
      bonneReponse: 1,
      explication: "La révision suit en principe un rythme semestriel, selon la formule officielle liée à l'inflation et aux taux courts.",
      difficulte: "avance",
    },
    {
      id: "b3-qz-16",
      question: "Un client détient un PEL ouvert il y a plusieurs années et un autre ouvert récemment. Leur fiscalité est-elle identique ?",
      choix: ["Oui, toujours", "Pas nécessairement, car elle dépend de la génération/date d'ouverture du plan", "Seule la durée de détention compte", "Seul le montant investi compte"],
      bonneReponse: 1,
      explication: "Les règles fiscales et le taux garanti du PEL varient selon la date d'ouverture du plan.",
      difficulte: "avance",
    },
    { id: "b3-qz-17", question: "Un compte à terme offre en général un taux :", choix: ["Toujours inférieur à un livret classique", "Généralement plus élevé, en contrepartie du blocage des fonds", "Toujours nul", "Variable selon l'AMF"], bonneReponse: 1, explication: "Le blocage des fonds est rémunéré par un taux généralement supérieur à un livret disponible.", difficulte: "fondamental" },
    { id: "b3-qz-18", question: "Les intérêts d'un livret non réglementé sont-ils fiscalisés ?", choix: ["Non, jamais", "Oui, au PFU par défaut", "Uniquement au-delà de 100 000 €", "Uniquement pour les non-résidents"], bonneReponse: 1, explication: "Contrairement aux livrets réglementés, les livrets classiques sont fiscalisés au PFU par défaut.", difficulte: "intermediaire" },
  ],
  exercices: [
    {
      id: "b3-ex-01",
      titre: "Conseiller un client sur son épargne de précaution",
      enonce:
        "Un client dispose de 5 000 € de côté et souhaite un placement sûr, disponible à tout moment, sans risque de perte en capital. Quel produit recommandez-vous en priorité et pourquoi ?",
      corrige:
        "Le Livret A (ou le LDDS) répond exactement à ce besoin : capital garanti, disponibilité totale, absence de fiscalité, simplicité d'ouverture et de gestion. Le conseiller vérifiera d'abord que le client n'a pas déjà atteint le plafond de versement, et évaluera son éligibilité au LEP (plafond de ressources) qui offrirait un rendement supérieur pour la même sécurité et la même liquidité.",
      difficulte: "fondamental",
    },
    {
      id: "b3-ex-02",
      titre: "Appliquer la règle de la quinzaine",
      enonce:
        "Un client verse 3 000 € sur son Livret A le 10 mars, puis retire 1 000 € le 20 avril. En application de la règle de la quinzaine, à quelle date ces deux opérations commencent/cessent-elles respectivement de produire des intérêts ?",
      corrige:
        "La règle de la quinzaine fonctionne par quinzaine civile : un versement effectué entre le 1er et le 15 du mois commence à produire des intérêts à partir du 16 du même mois ; un versement effectué entre le 16 et la fin du mois ne produit des intérêts qu'à partir du 1er du mois suivant. Symétriquement, un retrait effectué entre le 1er et le 15 du mois cesse de produire des intérêts dès le 1er de ce même mois (perte de la quinzaine en cours) ; un retrait effectué entre le 16 et la fin du mois cesse de produire des intérêts dès le 16 de ce mois. Ici, le versement du 10 mars (entre le 1er et le 15) commence à produire des intérêts le 16 mars. Le retrait du 20 avril (entre le 16 et la fin du mois) cesse de produire des intérêts dès le 16 avril : le client perd donc les intérêts de la quinzaine du 16 au 30 avril sur les 1 000 € retirés, même si l'argent est resté sur le compte jusqu'au 20.",
      difficulte: "avance",
    },
    {
      id: "b3-ex-03",
      titre: "Comparer un rendement net entre deux supports",
      enonce:
        "Un client hésite entre un Livret A (taux illustratif de 3 %, exonéré de toute fiscalité) et un livret bancaire non réglementé (taux brut illustratif de 4 %, soumis au PFU de 30 %). Calculez le rendement net de chaque support pour un capital de 10 000 € sur un an, et indiquez lequel est le plus avantageux.",
      corrige:
        "Livret A : 10 000 € × 3 % = 300 € d'intérêts, intégralement nets car exonérés. Livret non réglementé : 10 000 € × 4 % = 400 € d'intérêts bruts, dont il faut retrancher le PFU de 30 % = 120 €, soit un gain net de 280 €. Malgré un taux brut affiché supérieur (4 % contre 3 %), le livret non réglementé est ici légèrement moins avantageux en net (280 € contre 300 €) : c'est l'illustration concrète de la règle « comparer net à net » énoncée dans le cours. Ces taux sont purement illustratifs et doivent être remplacés par les valeurs réellement en vigueur au moment du conseil.",
      difficulte: "avance",
    },
    {
      id: "b3-ex-04",
      titre: "Vérifier le respect d'un plafond de versement",
      enonce:
        "Un client détient déjà 22 800 € sur son Livret A (plafond illustratif de 22 950 €) et souhaite y verser 500 € supplémentaires. Que se passe-t-il, et quelle alternative pouvez-vous lui proposer pour le solde non versé ?",
      corrige:
        "Seuls 150 € (22 950 − 22 800) pourront être versés sur le Livret A avant d'atteindre le plafond ; les 350 € restants seront refusés par la banque si le client tente de les verser sur ce même livret. Le conseiller peut orienter ce solde vers un autre produit d'épargne réglementée non encore plafonné (LDDS, LEP si le client y est éligible), ou, à défaut de plafond disponible sur l'épargne réglementée, vers un livret non réglementé ou une assurance-vie selon l'horizon et les objectifs du client. Ce plafond n'empêche jamais les intérêts déjà acquis de continuer à courir sur le capital déjà présent, seul le flux de nouveaux versements est bloqué.",
      difficulte: "intermediaire",
    },
  ],
};
