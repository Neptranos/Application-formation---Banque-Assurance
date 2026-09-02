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
  ],
};
