# Manuel de préparation à la certification AMF

- `Manuel-Certification-AMF.pdf` : le manuel (240 pages environ) — les 12 thèmes du programme officiel expliqués en profondeur, 436 QCM d'entraînement corrigés et commentés, 3 examens blancs de 120 questions au format réel (3 propositions, 56/64, 33 A / 87 C) avec corrigés, chiffres clés, confusions classiques, glossaire, sources.
- `chapitres/*.txt` : sources du manuel, dans un balisage léger décrit en tête de `build.py`.
- Régénérer le PDF : `pip install reportlab` puis `python3 manuel-amf/build.py`.

Le script contrôle la cohérence des QCM (3 propositions, une seule ligne de corrigé, pas de doublon) et refuse de générer le PDF en cas d'erreur. Les propositions sont mélangées de façon déterministe pour répartir les bonnes réponses.
