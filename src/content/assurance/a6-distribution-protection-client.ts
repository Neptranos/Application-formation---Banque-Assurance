import type { ModuleFormation } from "@/content/types";

export const a6: ModuleFormation = {
  id: "a6",
  domaine: "assurance",
  ordre: 6,
  titre: "La distribution d'assurance et la protection du client",
  description:
    "Directive DDA, devoir de conseil documenté, RGPD, LCB-FT et médiation : le cadre qui protège l'assuré au moment de la vente.",
  cours: {
    fondamentaux: `La **directive sur la distribution d'assurance (DDA)**, transposée en droit français en 2018, encadre tout professionnel qui distribue de l'assurance — assureur, agent général, courtier, mandataire, mais aussi bancassureur ou vendeur d'assurance affinitaire (extension de garantie, assurance voyage vendue avec un billet d'avion). Elle harmonise et renforce des obligations déjà connues du droit français :

- une **information précontractuelle standardisée**, avec la remise obligatoire d'un document d'information sur le produit d'assurance (**IPID** pour les produits non-vie) ;
- un **devoir de conseil documenté** : le distributeur doit recueillir les exigences et les besoins du client, et formuler par écrit les raisons qui motivent sa recommandation ;
- des règles de **gouvernance des produits** (POG — Product Oversight and Governance), analogues à celles de MIF2 en matière bancaire : chaque produit doit être conçu pour un marché cible identifié ;
- un encadrement renforcé de la **rémunération** des distributeurs, avec transparence sur les commissions perçues.

Comme en matière bancaire, la distribution d'assurance est soumise aux obligations de **lutte contre le blanchiment (LCB-FT)** — particulièrement en assurance-vie, produit d'épargne susceptible d'être utilisé à des fins de blanchiment — et au **RGPD** pour le traitement des données de santé, particulièrement sensibles, collectées notamment en assurance de personnes.

En cas de litige, l'assuré dispose, comme en matière bancaire, d'un droit de réclamation puis d'un recours gratuit à un **médiateur de l'assurance**, indépendant, dont l'avis, non contraignant, est rendu en principe sous 90 jours.`,
    definitionsCles: [
      { terme: "DDA", definition: "Directive (UE) 2016/97 sur la distribution d'assurance, transposée en droit français en 2018, qui harmonise les obligations d'information, de conseil et de gouvernance des produits pour tout distributeur d'assurance." },
      { terme: "IPID (Insurance Product Information Document)", definition: "Document d'information normalisé et standardisé au niveau européen sur les produits d'assurance non-vie, remis obligatoirement avant la souscription." },
      { terme: "Devoir de conseil documenté", definition: "Obligation, sous DDA, de recueillir par écrit les exigences et besoins du client et de motiver par écrit la cohérence de la recommandation proposée avec ces besoins." },
      { terme: "POG (Product Oversight and Governance)", definition: "Exigences de gouvernance des produits d'assurance imposant au concepteur de définir un marché cible et au distributeur de vérifier la cohérence de la vente avec ce marché cible." },
      { terme: "Assurance affinitaire", definition: "Assurance accessoire vendue en complément d'un bien ou service principal (extension de garantie électroménager, assurance voyage, assurance téléphone), souvent distribuée par des intermédiaires à titre accessoire." },
      { terme: "Médiateur de l'assurance", definition: "Tiers indépendant chargé de proposer une solution amiable aux litiges entre un assuré et son assureur ou intermédiaire, après épuisement des recours internes, saisi gratuitement." },
      { terme: "Données de santé", definition: "Catégorie de données personnelles dites « sensibles » au sens du RGPD, soumise à un régime de protection renforcé, particulièrement présente en assurance de personnes (santé, prévoyance)." },
      { terme: "Loi Evin", definition: "Loi du 31 décembre 1989 qui encadre notamment le maintien de la couverture santé et prévoyance collective pour les anciens salariés (retraités, chômeurs) et leurs ayants droit." },
      { terme: "Droit à l'oubli (Convention AERAS)", definition: "Mécanisme facilitant l'accès à l'assurance emprunteur pour les personnes ayant eu un problème de santé grave (notamment cancer), en levant l'obligation de déclaration au-delà d'un délai après la fin du protocole thérapeutique." },
      { terme: "Convention AERAS", definition: "Convention « s'Assurer et Emprunter avec un Risque Aggravé de Santé », entre l'État, les fédérations d'assureurs et de banques et les associations de malades, facilitant l'accès au crédit et à l'assurance emprunteur." },
    ],
    approfondissement: `**Les trois strates de l'information sous DDA.** (1) l'information générale sur le statut du distributeur (immatriculation ORIAS, lien capitalistique éventuel avec un assureur, mode de rémunération) ; (2) l'information standardisée sur le produit (IPID) ; (3) le conseil personnalisé, fondé sur le recueil écrit des exigences et besoins du client, avec transparence sur le caractère éventuellement limité de l'analyse de marché réalisée (un agent lié à une seule compagnie doit le préciser explicitement).

**La distinction entre conseil et simple vente sans conseil** existe aussi en assurance : la DDA autorise la vente sans recommandation personnalisée pour certains produits simples, à condition que le client en soit clairement informé et que le distributeur ait néanmoins vérifié la cohérence du produit avec le marché cible (POG).

**LCB-FT et assurance-vie**, un point de vigilance spécifique : les gros versements ou rachats rapides et atypiques, les changements de bénéficiaires inhabituels, ou les opérations impliquant des pays à risque, font l'objet d'une vigilance renforcée comparable à celle prévue en matière bancaire, avec les mêmes obligations de déclaration de soupçon à Tracfin.

**La convention AERAS et le droit à l'oubli** illustrent la tension entre sélection des risques et accès à l'assurance : le droit à l'oubli permet aujourd'hui à d'anciens malades du cancer (et d'autres pathologies listées), après un certain délai sans rechute suivant la fin du protocole thérapeutique, de ne plus avoir à déclarer leur ancienne pathologie lors d'une demande d'assurance emprunteur, facilitant ainsi leur accès au crédit immobilier.`,
    historique: `- **1989** : loi Evin, encadrement du maintien de couverture santé/prévoyance pour les anciens salariés.
- **2001** : première convention Bélorgey, ancêtre de la convention AERAS, pour faciliter l'accès à l'assurance des personnes présentant un risque aggravé de santé.
- **2007** : signature de la convention AERAS proprement dite.
- **2016** : introduction du droit à l'oubli dans la convention AERAS pour les anciens malades du cancer.
- **2016** : adoption de la directive DDA au niveau européen.
- **2018** : transposition de la DDA en droit français et entrée en application du RGPD.
- **2022** : loi Lemoine, qui étend et renforce le droit à l'oubli et la portée de la convention AERAS pour l'assurance emprunteur.`,
    evolutionsJuridiques: [
      { date: "1989", evenement: "Loi Evin", texte: "Encadre le maintien de la couverture santé et prévoyance collective pour les anciens salariés et leurs ayants droit." },
      { date: "2007", evenement: "Convention AERAS", texte: "Facilite l'accès à l'assurance emprunteur et au crédit pour les personnes présentant un risque aggravé de santé." },
      { date: "2016", evenement: "Directive DDA (2016/97)", texte: "Adoption du texte européen harmonisant la distribution d'assurance dans l'UE." },
      { date: "2018", evenement: "Transposition de la DDA en France", texte: "Renforce l'information précontractuelle, le devoir de conseil documenté et la gouvernance des produits d'assurance." },
      { date: "2022", evenement: "Loi Lemoine", texte: "Renforce le droit à l'oubli et facilite la résiliation et l'accès à l'assurance emprunteur." },
    ],
    citations: [
      {
        texte:
          "Avant la conclusion d'un contrat d'assurance, le distributeur précise, sur la base des informations obtenues auprès du souscripteur éventuel, les exigences et les besoins de ce dernier.",
        auteur: "Code des assurances",
        contexte: "Article L521-4, transposition du devoir de conseil documenté issu de la DDA.",
      },
    ],
    sourcesReference: [
      "Directive (UE) 2016/97 sur la distribution d'assurance (DDA)",
      "Code des assurances, articles L521-1 et suivants (obligations d'information et de conseil)",
      "Convention AERAS — texte et guides pratiques",
      "Règlement (UE) 2016/679 — RGPD",
    ],
    derniereMaj: "2026-09",
  },
  flashcards: [
    { id: "a6-fc-01", recto: "Que signifie DDA ?", verso: "Directive sur la distribution d'assurance (UE 2016/97), transposée en France en 2018.", difficulte: "fondamental" },
    { id: "a6-fc-02", recto: "Qu'est-ce que l'IPID ?", verso: "Le document d'information normalisé sur les produits d'assurance non-vie, remis obligatoirement avant souscription.", difficulte: "fondamental" },
    { id: "a6-fc-03", recto: "Qu'implique le devoir de conseil documenté sous DDA ?", verso: "Recueillir par écrit les besoins du client et motiver par écrit la cohérence de la recommandation avec ces besoins.", difficulte: "intermediaire" },
    { id: "a6-fc-04", recto: "Qu'est-ce que la gouvernance des produits (POG) en assurance ?", verso: "L'obligation pour le concepteur de définir un marché cible pour chaque produit, et pour le distributeur de vérifier la cohérence de la vente avec ce marché cible.", difficulte: "avance" },
    { id: "a6-fc-05", recto: "Qu'est-ce que le droit à l'oubli en assurance emprunteur ?", verso: "La possibilité, pour d'anciens malades (cancer notamment) après un certain délai, de ne plus déclarer leur ancienne pathologie lors d'une demande d'assurance.", difficulte: "avance" },
    { id: "a6-fc-06", recto: "Qu'est-ce que la convention AERAS ?", verso: "La convention facilitant l'accès à l'assurance emprunteur et au crédit pour les personnes présentant un risque aggravé de santé.", difficulte: "intermediaire" },
    { id: "a6-fc-07", recto: "Le médiateur de l'assurance est-il payant pour l'assuré ?", verso: "Non, la saisine est gratuite.", difficulte: "fondamental" },
    { id: "a6-fc-08", recto: "Pourquoi l'assurance-vie fait-elle l'objet d'une vigilance LCB-FT particulière ?", verso: "Parce qu'elle peut servir de support à des opérations de blanchiment via des versements ou rachats atypiques et des changements de bénéficiaires inhabituels.", difficulte: "avance" },
  ],
  quiz: [
    {
      id: "a6-qz-01",
      question: "L'IPID doit être remis :",
      choix: [
        "Uniquement sur demande du client",
        "Obligatoirement avant la souscription d'un produit d'assurance non-vie",
        "Uniquement pour l'assurance-vie",
        "Uniquement en cas de sinistre",
      ],
      bonneReponse: 1,
      explication: "L'IPID est un document précontractuel obligatoire pour les produits d'assurance non-vie sous le régime DDA.",
      difficulte: "fondamental",
    },
    {
      id: "a6-qz-02",
      question: "La gouvernance des produits (POG) en assurance vise à :",
      choix: [
        "Réduire les délais d'indemnisation",
        "Éviter que des produits soient vendus à une clientèle pour laquelle ils ne sont pas adaptés",
        "Standardiser tous les tarifs d'assurance",
        "Remplacer le devoir de conseil",
      ],
      bonneReponse: 1,
      explication: "La POG impose un marché cible par produit et sa vérification par le distributeur, en complément (non en remplacement) du devoir de conseil individualisé.",
      difficulte: "avance",
    },
    {
      id: "a6-qz-03",
      question: "Le droit à l'oubli, renforcé par la loi Lemoine de 2022, concerne principalement :",
      choix: [
        "L'assurance auto",
        "L'assurance emprunteur pour les anciens malades",
        "L'assurance habitation",
        "La complémentaire santé collective",
      ],
      bonneReponse: 1,
      explication: "Le droit à l'oubli permet, sous conditions de délai, de ne plus déclarer certaines pathologies passées lors d'une demande d'assurance emprunteur.",
      difficulte: "intermediaire",
    },
  ],
  exercices: [
    {
      id: "a6-ex-01",
      titre: "Appliquer le devoir de conseil documenté",
      enonce:
        "Un courtier propose à un client une assurance emprunteur alternative à celle de sa banque, moins chère à garanties équivalentes. Quelles étapes doit-il respecter, sous le régime DDA, pour sécuriser sa recommandation ?",
      corrige:
        "Le courtier doit : (1) recueillir par écrit les besoins et la situation du client (montant emprunté, durée, quotité, état de santé déclaré) ; (2) comparer objectivement les garanties du contrat alternatif avec celles exigées par la banque prêteuse (garanties équivalentes, condition légale de la délégation d'assurance) ; (3) remettre les documents d'information précontractuelle (IPID) ; (4) formaliser par écrit les raisons qui motivent sa recommandation, démontrant la cohérence entre le produit proposé et les besoins exprimés par le client ; (5) informer le client de son statut (courtier indépendant ou lié) et du mode de rémunération perçu sur ce contrat.",
      difficulte: "avance",
    },
  ],
};
