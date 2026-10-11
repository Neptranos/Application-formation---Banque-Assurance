# Manuel de préparation à la certification AMF

- `Manuel-Certification-AMF.pdf` : le manuel (12 thèmes du programme officiel, QCM corrigés, examen blanc de 120 questions, annexes).
- `chapitres/*.txt` : sources du manuel, dans un balisage léger décrit en tête de `build.py`.
- Régénérer le PDF : `pip install reportlab` puis `python3 manuel-amf/build.py`.

Les propositions des QCM sont mélangées de façon déterministe à la génération, pour répartir les bonnes réponses entre a, b, c et d.
