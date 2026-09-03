# Cahier des charges du contenu pédagogique

Ce document fixe le niveau d'exigence auquel doit répondre **chaque module** de
l'application, pour que l'objectif affiché — amener l'utilisateur à un niveau
lui permettant d'exercer le métier et de réussir les diplômes/certifications de
référence, pas seulement d'avoir une culture générale du secteur — soit
réellement tenu. Sert de grille d'audit pour le contenu existant et de norme
pour tout contenu ajouté par la suite.

## 1. Objectif pédagogique

Le contenu doit couvrir, pour chaque thématique, trois strates cumulatives :

1. **Fondamentaux** — vocabulaire métier, mécanismes de base, ce qu'un stagiaire
   doit savoir dès le premier jour.
2. **Niveau opérationnel** — ce qu'un conseiller applique réellement au
   quotidien face à un client : calculs courants, procédures, arbitrages
   pratiques entre produits.
3. **Niveau avancé** — nuances juridiques, articulation entre plusieurs textes,
   cas limites, ce qui distingue un professionnel expérimenté d'un débutant.

Un module qui ne couvre que la strate 1 n'est pas conforme, même si le texte
est juste : il donne une culture générale, pas une compétence professionnelle.

## 2. Volumes minimaux par module

Ces seuils garantissent une répétition espacée réellement utile (assez
d'éléments pour que l'algorithme SM-2 ait matière à espacer, pas juste un tour
de mémorisation ponctuel) :

| Élément | Minimum |
|---|---|
| Flashcards | 25 |
| Questions de quiz | 20 |
| Exercices | 5, **dont au moins 2 exercices chiffrés** (voir §3) |
| Définitions clés | 10 |

## 3. Exercices chiffrés obligatoires

Un module qui ne fait jamais calculer l'apprenant ne prépare pas au métier :
la banque et l'assurance sont des métiers de calcul. Chaque module technique
doit inclure des exercices avec de vrais chiffres et un corrigé qui détaille
le calcul étape par étape, pas seulement la conclusion. Exemples attendus par
thématique :

- **Système bancaire / conformité** : calcul d'un ratio simplifié, application
  d'un seuil réglementaire à un cas concret.
- **Comptes et paiements** : calcul de frais d'incidents, délai réglementaire.
- **Épargne** : calcul d'intérêts (règle de la quinzaine), comparaison
  brut/net entre supports.
- **Crédit** : calcul de TAEG simplifié, taux d'endettement et reste à vivre,
  comparaison à un taux d'usure donné.
- **Assurance dommages** : calcul de prime avec bonus-malus, application
  d'une franchise, règle proportionnelle de prime (art. L113-9).
- **Assurance de personnes / fiscalité** : calcul d'un capital décès net
  d'abattement (990 I / 757 B), calcul d'un rachat d'assurance-vie net de
  prélèvements sociaux et d'impôt selon l'ancienneté.
- **Patrimoine** : calcul de droits de mutation après abattement et barème par
  tranches, valorisation d'un démembrement selon le barème de l'usufruit.

Les chiffres utilisés dans ces exercices sont **illustratifs**, clairement
présentés comme tels ; les taux et plafonds réellement en vigueur doivent
toujours être vérifiés par l'utilisateur, comme rappelé en pied de page de
l'application.

## 4. Clarté et vulgarisation

Aucun terme technique n'est utilisé sans avoir été défini, soit dans les
« définitions clés » du module, soit en ligne au moment de son introduction.
Chaque notion complexe est d'abord posée simplement (situation concrète,
analogie si utile) avant d'être développée techniquement — la technicité
s'ajoute à la clarté, elle ne la remplace jamais.

## 5. Exactitude et actualité

- Toute règle citée s'appuie sur un texte identifiable (code, article, loi,
  directive) figurant dans les sources de référence du module.
- Les valeurs volatiles (taux, plafonds, seuils révisés périodiquement) sont
  either évitées, soit clairement signalées comme à vérifier — jamais
  présentées comme des faits figés sans réserve.
- Chaque module porte une date de dernière mise à jour.

## 6. Couverture des référentiels professionnels reconnus

Le contenu doit rester traçable par rapport aux référentiels qu'il prépare :
Code monétaire et financier et manuels CFPB côté banque, Code des assurances
et cursus ENASS/IFPASS côté assurance, référentiel de l'examen certifié AMF
côté marchés financiers. En cas de doute sur la couverture d'un thème
attendu par ces référentiels, il vaut mieux l'ajouter en excès que le
supprimer par prudence.

## 7. Cohérence structurelle

Chaque module conserve la même architecture : fondamentaux → définitions
clés → approfondissement → historique → évolutions juridiques → citations →
exercices → flashcards → quiz → sources de référence. C'est ce qui rend le
contenu prévisible à consulter et cohérent à parcourir d'un module à l'autre.

## Statut d'audit (dernière revue : 2026-09)

Les modules AMF (`amf1`–`amf5`) respectent ce cahier des charges dès leur
création. Les modules `b1`–`b6`, `a1`–`a6`, `p1`–`p2` étaient initialement
en-deçà des volumes minimaux et dépourvus d'exercices chiffrés : mise à
niveau en cours, module par module, en conservant le contenu déjà exact et
en le complétant plutôt qu'en le remplaçant.
