"""Génère le manuel de préparation à la certification AMF (PDF) à partir des
sources balisées du dossier `chapitres/`.

Syntaxe des sources (une ligne = un bloc, blocs séparés par une ligne vide) :
  # Titre de chapitre        ## Section        ### Sous-section
  - puce                     | a | b | (tableau, 1re ligne = en-tête)
  > À retenir                !> Piège d'examen          i> Exemple chiffré
  ?? Question (QCM)  puis  a) b) c) d)  puis  =b Explication
  **gras**, *italique* en ligne.

Usage : python3 build.py  →  Manuel-Certification-AMF.pdf
"""

import hashlib
import random
import re
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, KeepTogether, NextPageTemplate, PageBreak,
    PageTemplate, Paragraph, Spacer, Table, TableStyle,
)
from reportlab.platypus.tableofcontents import TableOfContents

ICI = Path(__file__).parent
FONTS = Path("/usr/share/fonts/truetype/liberation")
pdfmetrics.registerFont(TTFont("Sans", FONTS / "LiberationSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Sans-Bold", FONTS / "LiberationSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Sans-Italic", FONTS / "LiberationSans-Italic.ttf"))
pdfmetrics.registerFont(TTFont("Sans-BoldItalic", FONTS / "LiberationSans-BoldItalic.ttf"))
pdfmetrics.registerFont(TTFont("Serif", FONTS / "LiberationSerif-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Serif-Bold", FONTS / "LiberationSerif-Bold.ttf"))
from reportlab.lib.fonts import addMapping  # noqa: E402

addMapping("Sans", 0, 0, "Sans")
addMapping("Sans", 1, 0, "Sans-Bold")
addMapping("Sans", 0, 1, "Sans-Italic")
addMapping("Sans", 1, 1, "Sans-BoldItalic")

BLEU = colors.HexColor("#1F3A5F")
BLEU_CLAIR = colors.HexColor("#E8EEF6")
VERT = colors.HexColor("#1E7A5A")
VERT_CLAIR = colors.HexColor("#E6F4EE")
ORANGE = colors.HexColor("#B4541A")
ORANGE_CLAIR = colors.HexColor("#FBEDE3")
GRIS = colors.HexColor("#5B6573")
GRIS_CLAIR = colors.HexColor("#F3F5F8")

S = {
    "corps": ParagraphStyle("corps", fontName="Sans", fontSize=9.6, leading=14.2,
                            alignment=TA_JUSTIFY, spaceAfter=5),
    "puce": ParagraphStyle("puce", fontName="Sans", fontSize=9.6, leading=13.6,
                           leftIndent=12, bulletIndent=2, spaceAfter=2),
    "h1": ParagraphStyle("h1", fontName="Serif-Bold", fontSize=21, leading=26,
                         textColor=BLEU, spaceAfter=14),
    "h2": ParagraphStyle("h2", fontName="Sans-Bold", fontSize=13, leading=17,
                         textColor=BLEU, spaceBefore=12, spaceAfter=6, keepWithNext=1),
    "h3": ParagraphStyle("h3", fontName="Sans-Bold", fontSize=10.6, leading=14,
                         textColor=colors.black, spaceBefore=8, spaceAfter=4, keepWithNext=1),
    "cell": ParagraphStyle("cell", fontName="Sans", fontSize=8.4, leading=11),
    "cellh": ParagraphStyle("cellh", fontName="Sans-Bold", fontSize=8.4, leading=11,
                            textColor=colors.white),
    "box": ParagraphStyle("box", fontName="Sans", fontSize=9.2, leading=13.2),
    "q": ParagraphStyle("q", fontName="Sans-Bold", fontSize=9.4, leading=13, spaceAfter=2),
    "rep": ParagraphStyle("rep", fontName="Sans", fontSize=9.2, leading=12.6, leftIndent=10),
    "corr": ParagraphStyle("corr", fontName="Sans", fontSize=8.8, leading=12.2,
                           leftIndent=10, textColor=GRIS, spaceAfter=8),
    "toc1": ParagraphStyle("toc1", fontName="Sans-Bold", fontSize=10.5, leading=17, leftIndent=0),
    "toc2": ParagraphStyle("toc2", fontName="Sans", fontSize=9, leading=13, leftIndent=16,
                           textColor=GRIS),
}


def inline(texte: str) -> str:
    texte = texte.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    for indice, lettre in zip("₀₁₂₃ₐₘₙ", "0123amn"):
        texte = texte.replace(indice, f"<sub>{lettre}</sub>")
    texte = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", texte)
    texte = re.sub(r"(?<!\*)\*(?!\s)(.+?)(?<!\s)\*(?!\*)", r"<i>\1</i>", texte)
    return texte


def encadre(titre, couleur, fond, lignes):
    contenu = [Paragraph(f"<b>{titre}</b>", ParagraphStyle(
        "bt", parent=S["box"], textColor=couleur, spaceAfter=3))]
    for ligne in lignes:
        if ligne.startswith("- "):
            contenu.append(Paragraph(inline(ligne[2:]), S["box"], bulletText="•"))
        else:
            contenu.append(Paragraph(inline(ligne), S["box"]))
    t = Table([[contenu]], colWidths=[170 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), fond),
        ("LINEBEFORE", (0, 0), (0, -1), 3, couleur),
        ("LEFTPADDING", (0, 0), (-1, -1), 9), ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return [Spacer(1, 3), t, Spacer(1, 7)]


def tableau(lignes):
    rangs = [[c.strip() for c in l.strip().strip("|").split("|")] for l in lignes
             if not re.match(r"^\|?\s*:?-{2,}", l.strip())]
    n = len(rangs[0])
    data = [[Paragraph(inline(c), S["cellh"] if i == 0 else S["cell"]) for c in r]
            for i, r in enumerate(rangs)]
    poids = [min(max(len(r[i]) for r in rangs), 70) + 6 for i in range(n)]
    total = sum(poids)
    t = Table(data, colWidths=[170 * mm * p / total for p in poids], repeatRows=1)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLEU),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, GRIS_CLAIR]),
        ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#C9D1DC")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return [Spacer(1, 3), t, Spacer(1, 8)]


class Compteur:
    qcm = 0
    examen = []  # (numéro, lettre, explication) des questions d'examen blanc


def melanger(question, reps, lettre):
    """Mélange déterministe des propositions (graine = texte de la question) pour
    répartir les bonnes réponses entre a, b, c et d. Retourne (propositions, lettre)."""
    textes = [re.sub(r"^[a-d]\)\s*", "", r) for r in reps]
    bonne = textes["abcd".index(lettre)]
    graine = int(hashlib.sha256(question.encode()).hexdigest(), 16)
    random.Random(graine).shuffle(textes)
    return [f"{'abcd'[i]}) {t}" for i, t in enumerate(textes)], "abcd"[textes.index(bonne)]


def qcm(lignes, examen=False):
    Compteur.qcm += 1
    question = lignes[0][2:].strip()
    reps = [l for l in lignes[1:] if re.match(r"^[a-d]\)", l)]
    corr = next((l for l in lignes if l.startswith("=")), None)
    lettre, _, expl = corr[1:].partition(" ")
    reps, lettre = melanger(question, reps, lettre.strip())
    blocs = [Paragraph(f"Q{Compteur.qcm}. {inline(question)}", S["q"])]
    blocs += [Paragraph(inline(r), S["rep"]) for r in reps]
    if examen:
        Compteur.examen.append((Compteur.qcm, lettre, reps["abcd".index(lettre)][3:] + ". " + expl))
    else:
        blocs.append(Paragraph(f"<b>Réponse {lettre}.</b> {inline(expl)}", S["corr"]))
    return [KeepTogether(blocs)]


def corrige_examen():
    flux = []
    for n, lettre, expl in Compteur.examen:
        flux.append(Paragraph(f"<b>Q{n} — {lettre})</b> {inline(expl)}", S["corr"]))
    grille = [[f"Q{n} : {l}" for n, l, _ in Compteur.examen[i:i + 8]]
              for i in range(0, len(Compteur.examen), 8)]
    if grille:
        grille[-1] += [""] * (8 - len(grille[-1]))
        t = Table(grille, colWidths=[170 * mm / 8] * 8)
        t.setStyle(TableStyle([
            ("FONTNAME", (0, 0), (-1, -1), "Sans"), ("FONTSIZE", (0, 0), (-1, -1), 8.5),
            ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#C9D1DC")),
            ("ROWBACKGROUNDS", (0, 0), (-1, -1), [colors.white, GRIS_CLAIR]),
        ]))
        flux = [Paragraph("Grille de réponses", S["h3"]), t, Spacer(1, 10),
                Paragraph("Explications", S["h3"])] + flux
    Compteur.examen = []
    return flux


def parser(texte):
    flux = []
    for bloc in re.split(r"\n\s*\n", texte.strip()):
        lignes = [l.rstrip() for l in bloc.strip().split("\n")]
        tete = lignes[0]
        if tete.startswith("# "):
            Compteur.qcm = 0
            titre = tete[2:].strip()
            p = Paragraph(inline(titre), S["h1"])
            p._toc = (0, titre)
            flux += [p]
        elif tete.startswith("## "):
            titre = tete[3:].strip()
            p = Paragraph(inline(titre), S["h2"])
            p._toc = (1, titre)
            flux.append(p)
        elif tete.startswith("### "):
            flux.append(Paragraph(inline(tete[4:]), S["h3"]))
        elif tete.startswith("|"):
            flux += tableau(lignes)
        elif tete.startswith("!>"):
            flux += encadre("Piège d'examen", ORANGE, ORANGE_CLAIR,
                            [l.lstrip("!>").lstrip(">").strip() for l in lignes])
        elif tete.startswith("i>"):
            flux += encadre("Exemple", VERT, VERT_CLAIR,
                            [l[2:].strip() if l.startswith("i>") else l.lstrip("> ").strip()
                             for l in lignes])
        elif tete.startswith(">"):
            flux += encadre("À retenir", BLEU, BLEU_CLAIR, [l.lstrip(">").strip() for l in lignes])
        elif tete.startswith("??"):
            flux += qcm(lignes)
        elif tete.startswith("?!"):
            flux += qcm(lignes, examen=True)
        elif tete.strip() == "[[CORRIGE]]":
            flux += corrige_examen()
        elif tete.strip() == "[[SAUT]]":
            flux.append(PageBreak())
        elif all(l.startswith("- ") for l in lignes):
            flux += [Paragraph(inline(l[2:]), S["puce"], bulletText="•") for l in lignes]
            flux.append(Spacer(1, 4))
        else:
            flux.append(Paragraph(inline(" ".join(lignes)), S["corps"]))
    return flux


class Doc(BaseDocTemplate):
    def __init__(self, fichier, **kw):
        super().__init__(fichier, pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm,
                         topMargin=20 * mm, bottomMargin=18 * mm,
                         title="Manuel de préparation à la certification AMF",
                         author="Formation Banque-Assurance", **kw)
        cadre = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="f")
        self.addPageTemplates([
            PageTemplate("couverture", [cadre], onPage=self.couverture),
            PageTemplate("normal", [cadre], onPage=self.entete),
        ])
        self.chapitre = ""

    def afterFlowable(self, f):
        if hasattr(f, "_toc"):
            niveau, titre = f._toc
            if niveau == 0:
                self.chapitre = titre
            cle = f"t{id(f)}"
            self.canv.bookmarkPage(cle)
            self.canv.addOutlineEntry(titre, cle, level=niveau, closed=niveau == 0)
            self.notify("TOCEntry", (niveau, titre, self.page, cle))

    def entete(self, c, doc):
        c.saveState()
        c.setFont("Sans", 7.5)
        c.setFillColor(GRIS)
        c.drawString(20 * mm, A4[1] - 12 * mm, "Manuel de préparation à la certification AMF")
        c.drawRightString(A4[0] - 20 * mm, A4[1] - 12 * mm, self.chapitre[:80])
        c.setStrokeColor(colors.HexColor("#D5DBE3"))
        c.line(20 * mm, A4[1] - 14 * mm, A4[0] - 20 * mm, A4[1] - 14 * mm)
        c.drawCentredString(A4[0] / 2, 10 * mm, str(doc.page))
        c.restoreState()

    def couverture(self, c, doc):
        c.saveState()
        c.setFillColor(BLEU)
        c.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
        c.setFillColor(colors.HexColor("#2E5A8C"))
        c.rect(0, A4[1] * 0.38, A4[0], 4, fill=1, stroke=0)
        c.setFillColor(colors.white)
        c.setFont("Sans", 11)
        c.drawString(25 * mm, A4[1] - 40 * mm, "FORMATION BANQUE-ASSURANCE")
        c.setFont("Serif-Bold", 34)
        c.drawString(25 * mm, A4[1] - 95 * mm, "Certification AMF")
        c.setFont("Serif", 17)
        c.drawString(25 * mm, A4[1] - 108 * mm, "Manuel complet de préparation à l'examen")
        c.setFont("Sans", 10.5)
        lignes = [
            "Les 12 thèmes du programme fixé par l'AMF",
            "Cours, tableaux de synthèse, pièges d'examen",
            f"{nombre_qcm()} QCM d'entraînement corrigés et un examen blanc de 120 questions",
        ]
        for i, l in enumerate(lignes):
            c.drawString(25 * mm, A4[1] - 130 * mm - i * 7 * mm, "— " + l)
        c.setFont("Sans", 9)
        c.drawString(25 * mm, 25 * mm, "Édition d'octobre 2026 — à jour des textes connus à cette date")
        c.restoreState()


def nombre_qcm():
    return sum(l.startswith("?? ") for f in (ICI / "chapitres").glob("*.txt")
               for l in f.read_text(encoding="utf-8").splitlines())


def couverture_flux():
    return [Spacer(1, 1), NextPageTemplate("normal"), PageBreak()]


def construire(sortie):
    toc = TableOfContents()
    toc.levelStyles = [S["toc1"], S["toc2"]]
    flux = couverture_flux()
    flux += [Paragraph("Sommaire", S["h1"]), toc, PageBreak()]
    for fichier in sorted((ICI / "chapitres").glob("*.txt")):
        flux += parser(fichier.read_text(encoding="utf-8"))
        flux.append(PageBreak())
    doc = Doc(str(sortie))
    doc.multiBuild(flux)
    return doc


if __name__ == "__main__":
    sortie = ICI / (sys.argv[1] if len(sys.argv) > 1 else "Manuel-Certification-AMF.pdf")
    construire(sortie)
    print(f"OK : {sortie}")
