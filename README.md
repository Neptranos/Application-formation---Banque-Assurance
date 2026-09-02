# Formation Banque-Assurance

Application de formation aux métiers de la banque et de l'assurance (niveau Licence/BTS), avec
répétition espacée (algorithme SM-2) : elle priorise vos points faibles sans jamais laisser filer ce
que vous maîtrisez déjà.

## Démarrer en local

```bash
npm install      # installe les dépendances et génère le client Prisma
cp .env.example .env
npm run db:push  # crée la base SQLite locale (prisma/dev.db) à partir du schéma
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Architecture

- **Contenu pédagogique** (`src/content/`) : versionné avec le code, en TypeScript typé. Chaque
  module (`src/content/banque/*.ts`, `src/content/assurance/*.ts`) regroupe un cours complet
  (fondamentaux, définitions clés, approfondissement, historique, évolutions juridiques, citations,
  sources), des flashcards, des questions de quiz et des exercices corrigés.
- **Progression utilisateur** (`prisma/schema.prisma`, SQLite local) : seule la progression
  (état de répétition espacée, historique des réponses) est stockée en base — pas le contenu, qui
  reste dans le code.
- **Répétition espacée** (`src/lib/srs.ts`) : implémentation de l'algorithme SM-2. Chaque réponse
  notée de 0 à 5 ajuste la facilité et l'intervalle avant la prochaine révision de l'élément.
  `src/lib/revision.ts` orchestre la construction des sessions (priorité aux éléments en retard,
  puis quelques nouveaux éléments) et l'enregistrement des réponses.
- **Pages** (`src/app/`) :
  - `/` — tableau de bord (progression globale, points faibles, accès rapide)
  - `/apprendre` puis `/apprendre/[domaine]/[moduleId]` — cours complet d'un module
  - `/reviser` — session de révision adaptative (flashcards + quiz), avec ciblage optionnel par
    domaine (`?domaine=banque`) ou par module (`?moduleId=b1`)
  - `/progres` — détail de la maîtrise par module

## Ajouter ou enrichir du contenu

1. Créer ou modifier un fichier dans `src/content/banque/` ou `src/content/assurance/`, en suivant
   la forme `ModuleFormation` définie dans `src/content/types.ts`.
2. L'enregistrer dans `src/content/index.ts` (tableau `MODULES`).
3. Donner des identifiants stables et uniques aux flashcards/questions (ils servent de clé de
   progression : ne jamais les changer une fois publiés, sous peine de perdre l'historique de
   révision des utilisateurs sur ces éléments).

Les valeurs chiffrées sensibles au temps (taux, plafonds réglementaires) sont volontairement peu
présentes dans le contenu initial : elles évoluent souvent et doivent être vérifiées auprès des
sources officielles (Banque de France, service-public.fr, Code monétaire et financier, Code des
assurances) avant toute utilisation professionnelle.

## Notes techniques

- Prisma 7 utilise un adaptateur pilote (`@prisma/adapter-better-sqlite3`) plutôt que le moteur de
  requêtes historique : voir `src/lib/prisma.ts`.
- `npm run build` exécute la vérification TypeScript et le build de production Next.js.
