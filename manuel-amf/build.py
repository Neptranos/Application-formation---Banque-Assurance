"""Génère le manuel de préparation à la certification AMF (PDF) à partir des
sources balisées du dossier `chapitres/`.

Syntaxe des sources (blocs séparés par une ligne vide) :
  # Titre de chapitre        ## Section        ### Sous-section
  - puce                     1. liste numérotée
  | a | b |                  tableau (1re ligne = en-tête)
  > À retenir                !> Piège d'examen          i> Exemple
  o> Objectifs               c> Comprendre (le pourquoi)  m> Mémo (moyen mnémotechnique)
  d> Définition              [[FIG:nom]] schéma          [[SAUT]] saut de page
  ?? [A] Question  puis  a) b) c)  puis  =b Explication      (QCM d'entraînement)
  ?! [C] Question  ...                                         (QCM d'examen blanc)
  [[CORRIGE]]  grille et explications des questions ?! qui précèdent
  **gras**, *italique* en ligne.

Les propositions des QCM sont mélangées de façon déterministe (graine = texte de
la question) pour répartir les bonnes réponses. Le script vérifie la cohérence
des QCM et affiche des statistiques par chapitre.

Usage : python3 build.py  →  Manuel-Certification-AMF.pdf
"""

import hashlib
import random
import re
import sys
from collections import Counter
from pathlib import Path

from reportlab.graphics.shapes import Drawing, Line, PolyLine, Polygon, Rect, String
from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.fonts import addMapping
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, CondPageBreak, Frame, KeepTogether, NextPageTemplate, PageBreak,
    PageTemplate, Paragraph, Spacer, Table, TableStyle,
)
from reportlab.platypus.tableofcontents import TableOfContents

ICI = Path(__file__).parent
FONTS = Path("/usr/share/fonts/truetype/liberation")
for nom, fichier in [("Sans", "Regular"), ("Sans-Bold", "Bold"), ("Sans-Italic", "Italic"),
                     ("Sans-BoldItalic", "BoldItalic")]:
    pdfmetrics.registerFont(TTFont(nom, FONTS / f"LiberationSans-{fichier}.ttf"))
pdfmetrics.registerFont(TTFont("Serif", FONTS / "LiberationSerif-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Serif-Bold", FONTS / "LiberationSerif-Bold.ttf"))
addMapping("Sans", 0, 0, "Sans")
addMapping("Sans", 1, 0, "Sans-Bold")
addMapping("Sans", 0, 1, "Sans-Italic")
addMapping("Sans", 1, 1, "Sans-BoldItalic")

BLEU = colors.HexColor("#1F3A5F")
BLEU_MOYEN = colors.HexColor("#3D6A9E")
BLEU_CLAIR = colors.HexColor("#E8EEF6")
VERT = colors.HexColor("#1E7A5A")
VERT_CLAIR = colors.HexColor("#E6F4EE")
ORANGE = colors.HexColor("#B4541A")
ORANGE_CLAIR = colors.HexColor("#FBEDE3")
VIOLET = colors.HexColor("#5B3E96")
VIOLET_CLAIR = colors.HexColor("#F0EBF8")
SARCELLE = colors.HexColor("#17707A")
SARCELLE_CLAIR = colors.HexColor("#E4F3F4")
GRIS = colors.HexColor("#5B6573")
GRIS_CLAIR = colors.HexColor("#F3F5F8")
GRIS_TRAIT = colors.HexColor("#C9D1DC")
LARGEUR = 170 * mm

S = {
    "corps": ParagraphStyle("corps", fontName="Sans", fontSize=9.6, leading=14.2,
                            alignment=TA_JUSTIFY, spaceAfter=5),
    "puce": ParagraphStyle("puce", fontName="Sans", fontSize=9.6, leading=13.6,
                           leftIndent=12, bulletIndent=2, spaceAfter=2),
    "num": ParagraphStyle("num", fontName="Sans", fontSize=9.6, leading=13.6,
                          leftIndent=16, bulletIndent=2, spaceAfter=2),
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
    "legende": ParagraphStyle("legende", fontName="Sans-Italic", fontSize=8.2, leading=11,
                              textColor=GRIS, spaceAfter=8),
    "toc1": ParagraphStyle("toc1", fontName="Sans-Bold", fontSize=10.5, leading=17),
    "toc2": ParagraphStyle("toc2", fontName="Sans", fontSize=9, leading=13, leftIndent=16,
                           textColor=GRIS),
}

ENCADRES = {
    # préfixe : (titre, couleur, fond)
    "!>": ("Piège d'examen", ORANGE, ORANGE_CLAIR),
    "i>": ("Exemple", VERT, VERT_CLAIR),
    "o>": ("Objectifs du chapitre", GRIS, GRIS_CLAIR),
    "c>": ("Comprendre", SARCELLE, SARCELLE_CLAIR),
    "m>": ("Mémo", VIOLET, VIOLET_CLAIR),
    "d>": ("Définition", BLEU_MOYEN, BLEU_CLAIR),
    ">": ("À retenir", BLEU, BLEU_CLAIR),
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
    t = Table([[contenu]], colWidths=[LARGEUR])
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
    for r in rangs:
        if len(r) != n:
            raise ValueError(f"Tableau mal formé : {r}")
    data = [[Paragraph(inline(c), S["cellh"] if i == 0 else S["cell"]) for c in r]
            for i, r in enumerate(rangs)]
    poids = [min(max(len(r[i]) for r in rangs), 70) + 6 for i in range(n)]
    total = sum(poids)
    t = Table(data, colWidths=[LARGEUR * p / total for p in poids], repeatRows=1)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLEU),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, GRIS_CLAIR]),
        ("GRID", (0, 0), (-1, -1), 0.4, GRIS_TRAIT),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return [Spacer(1, 3), t, Spacer(1, 8)]


# ---------------------------------------------------------------- schémas

def _texte_centre(d, x, y, texte, taille=7.6, police="Sans", couleur=colors.black):
    lignes = texte.split("\n")
    for i, l in enumerate(lignes):
        d.add(String(x, y + (len(lignes) / 2 - i - 0.75) * (taille + 1.6), l,
                     fontName=police, fontSize=taille, fillColor=couleur, textAnchor="middle"))


def _fleche(d, x1, y1, x2, y2, couleur=GRIS):
    d.add(Line(x1, y1, x2, y2, strokeColor=couleur, strokeWidth=1.2))
    import math
    a = math.atan2(y2 - y1, x2 - x1)
    p = [x2, y2, x2 - 6 * math.cos(a - 0.4), y2 - 6 * math.sin(a - 0.4),
         x2 - 6 * math.cos(a + 0.4), y2 - 6 * math.sin(a + 0.4)]
    d.add(Polygon(p, fillColor=couleur, strokeColor=couleur, strokeWidth=0.5))


def schema_flux(etapes, hauteur=62, couleur=BLEU):
    """Chaîne horizontale de boîtes reliées par des flèches. etapes = [(titre, détail)]."""
    n = len(etapes)
    w = LARGEUR
    d = Drawing(w, hauteur)
    ecart = 14
    bw = (w - ecart * (n - 1)) / n
    for i, (titre, detail) in enumerate(etapes):
        x = i * (bw + ecart)
        d.add(Rect(x, 2, bw, hauteur - 4, rx=4, ry=4, fillColor=BLEU_CLAIR,
                   strokeColor=couleur, strokeWidth=0.8))
        d.add(Rect(x, hauteur - 20, bw, 18, rx=4, ry=4, fillColor=couleur, strokeColor=couleur))
        _texte_centre(d, x + bw / 2, hauteur - 11, titre, 7.8, "Sans-Bold", colors.white)
        _texte_centre(d, x + bw / 2, (hauteur - 22) / 2 + 2, detail, 7)
        if i < n - 1:
            _fleche(d, x + bw + 1, hauteur / 2 - 8, x + bw + ecart - 1, hauteur / 2 - 8)
    return d


def schema_niveaux(niveaux, largeur_col=None):
    """Bandeaux superposés : niveaux = [(titre, [boîtes])], du haut vers le bas."""
    w = LARGEUR
    hb = 34
    d = Drawing(w, len(niveaux) * (hb + 10))
    for j, (titre, boites) in enumerate(niveaux):
        y = (len(niveaux) - 1 - j) * (hb + 10) + 4
        d.add(Rect(0, y, 70, hb, rx=3, ry=3, fillColor=BLEU, strokeColor=BLEU))
        _texte_centre(d, 35, y + hb / 2, titre, 8, "Sans-Bold", colors.white)
        n = len(boites)
        bw = (w - 78 - 6 * (n - 1)) / n
        for i, b in enumerate(boites):
            x = 78 + i * (bw + 6)
            d.add(Rect(x, y, bw, hb, rx=3, ry=3, fillColor=BLEU_CLAIR, strokeColor=BLEU_MOYEN,
                       strokeWidth=0.6))
            _texte_centre(d, x + bw / 2, y + hb / 2, b, 6.8)
    return d


def _repere(d, x0, y0, w, h, titre):
    d.add(Rect(x0, y0, w, h, fillColor=colors.white, strokeColor=GRIS_TRAIT, strokeWidth=0.5))
    d.add(Line(x0 + 6, y0 + h / 2, x0 + w - 6, y0 + h / 2, strokeColor=GRIS, strokeWidth=0.6))
    d.add(Line(x0 + w / 2, y0 + 6, x0 + w / 2, y0 + h - 16, strokeColor=GRIS_TRAIT,
               strokeWidth=0.4, strokeDashArray=[2, 2]))
    _texte_centre(d, x0 + w / 2, y0 + h - 8, titre, 7.6, "Sans-Bold", BLEU)


def schema_options():
    """Profils de gain à l'échéance des quatre positions élémentaires sur options."""
    w = LARGEUR
    h = 110
    d = Drawing(w, h)
    cw = (w - 18) / 4
    profils = [
        ("Achat de call", [(-1, -0.25), (0, -0.25), (1, 0.75)], VERT),
        ("Vente de call", [(-1, 0.25), (0, 0.25), (1, -0.75)], ORANGE),
        ("Achat de put", [(-1, 0.75), (0, -0.25), (1, -0.25)], VERT),
        ("Vente de put", [(-1, -0.75), (0, 0.25), (1, 0.25)], ORANGE),
    ]
    for i, (titre, pts, coul) in enumerate(profils):
        x0 = i * (cw + 6)
        _repere(d, x0, 0, cw, h, titre)
        cx, cy, ex, ey = x0 + cw / 2, h / 2, cw / 2 - 10, h / 2 - 24
        d.add(PolyLine([v for p in pts for v in (cx + p[0] * ex, cy + p[1] * ey)],
                       strokeColor=coul, strokeWidth=1.8))
        d.add(String(cx + 2, 8, "K", fontName="Sans", fontSize=7, fillColor=GRIS))
        d.add(String(x0 + cw - 30, cy + 3, "cours", fontName="Sans", fontSize=6.5, fillColor=GRIS))
    return d


def schema_prix_taux():
    w, h = LARGEUR, 120
    d = Drawing(w, h)
    x0, y0, lw, lh = 60, 14, 260, 92
    d.add(Line(x0, y0, x0 + lw, y0, strokeColor=GRIS))
    d.add(Line(x0, y0, x0, y0 + lh, strokeColor=GRIS))
    pts = []
    for k in range(41):
        t = 0.005 + k * 0.002  # taux de 0,5 % à 8,5 %
        prix = sum(4 / (1 + t) ** i for i in range(1, 11)) + 100 / (1 + t) ** 10
        pts += [x0 + (t - 0.005) / 0.08 * lw, y0 + (prix - 70) / 65 * lh]
    d.add(PolyLine(pts, strokeColor=BLEU, strokeWidth=1.8))
    d.add(String(x0 + lw - 40, y0 - 10, "taux du marché", fontName="Sans", fontSize=7,
                 fillColor=GRIS))
    d.add(String(x0 - 4, y0 + lh - 4, "prix", fontName="Sans", fontSize=7, fillColor=GRIS,
                 textAnchor="end"))
    texte = ["Obligation 10 ans, coupon 4 % :", "à 4 %, elle cote 100 (au pair) ;",
             "si les taux montent, le prix baisse,", "et la courbe est convexe :",
             "la hausse de prix quand les taux", "baissent dépasse la baisse de prix", "quand ils montent d'autant."]
    for i, t in enumerate(texte):
        d.add(String(345, h - 22 - i * 12, t, fontName="Sans", fontSize=7.6, fillColor=colors.black))
    return d


def schema_seance():
    w, h = LARGEUR, 58
    d = Drawing(w, h)
    phases = [("7 h 15", "9 h 00", "Pré-ouverture\n(accumulation)", GRIS_CLAIR),
              ("9 h 00", "17 h 30", "Cotation en continu", BLEU_CLAIR),
              ("17 h 30", "17 h 35", "Pré-\nclôture", GRIS_CLAIR),
              ("17 h 35", "17 h 40", "Trading\nat last", VERT_CLAIR)]
    largeurs = [0.22, 0.5, 0.14, 0.14]
    x = 0
    for (deb, fin, titre, fond), part in zip(phases, largeurs):
        bw = w * part
        d.add(Rect(x, 16, bw, 34, fillColor=fond, strokeColor=BLEU_MOYEN, strokeWidth=0.6))
        _texte_centre(d, x + bw / 2, 33, titre, 7.2)
        d.add(String(x + 1, 5, deb, fontName="Sans-Bold", fontSize=7, fillColor=BLEU))
        x += bw
    d.add(String(w - 1, 5, "17 h 40", fontName="Sans-Bold", fontSize=7, fillColor=BLEU,
                 textAnchor="end"))
    for xf, lib in [(w * 0.22, "fixing d'ouverture"), (w * 0.86, "fixing de clôture")]:
        d.add(Line(xf, 14, xf, 52, strokeColor=ORANGE, strokeWidth=1.6))
        d.add(String(xf + 2, 53, lib, fontName="Sans-Bold", fontSize=6.6, fillColor=ORANGE))
    return d


def schema_echelle_sri():
    w, h = LARGEUR, 46
    d = Drawing(w, h)
    bw = (w - 12) / 7
    teintes = ["#D9EBDD", "#C7E3CC", "#E9EFC8", "#F6EAC0", "#F6D6B0", "#F1BFA0", "#E8A08A"]
    for i in range(7):
        x = i * (bw + 2)
        d.add(Rect(x, 14, bw, 24, fillColor=colors.HexColor(teintes[i]), strokeColor=GRIS_TRAIT))
        _texte_centre(d, x + bw / 2, 26, str(i + 1), 11, "Sans-Bold", BLEU)
    d.add(String(0, 3, "risque le plus faible, rendement potentiellement plus faible", fontName="Sans",
                 fontSize=7, fillColor=GRIS))
    d.add(String(w, 3, "risque le plus élevé, rendement potentiellement plus élevé", fontName="Sans",
                 fontSize=7, fillColor=GRIS, textAnchor="end"))
    return d


def schema_bilan_fr():
    w, h = LARGEUR, 132
    d = Drawing(w, h)
    x0, larg = 0, 125
    # actif
    blocs_actif = [("Actif immobilisé", 60, BLEU_CLAIR), ("Actif circulant\nd'exploitation\n(stocks, clients)", 40, VERT_CLAIR),
                   ("Trésorerie active", 18, GRIS_CLAIR)]
    blocs_passif = [("Capitaux propres", 45, BLEU_CLAIR), ("Dettes à long terme", 30, BLEU_CLAIR),
                    ("Dettes d'exploitation\n(fournisseurs)", 28, VERT_CLAIR), ("Trésorerie passive", 15, GRIS_CLAIR)]
    for col, blocs, titre in [(x0, blocs_actif, "ACTIF"), (x0 + larg + 4, blocs_passif, "PASSIF")]:
        y = h - 14
        d.add(String(col + larg / 2, h - 10, titre, fontName="Sans-Bold", fontSize=8,
                     fillColor=BLEU, textAnchor="middle"))
        for nom, haut, fond in blocs:
            y -= haut
            d.add(Rect(col, y, larg, haut, fillColor=fond, strokeColor=BLEU_MOYEN, strokeWidth=0.6))
            _texte_centre(d, col + larg / 2, y + haut / 2, nom, 7)
    # le FR est la part des capitaux permanents qui dépasse l'actif immobilisé
    xa = x0 + 2 * larg + 10
    d.add(Line(xa, h - 14 - 75, xa, h - 14 - 60, strokeColor=ORANGE, strokeWidth=2.5))
    textes = [("FR (trait orange) = capitaux permanents", ORANGE, "Sans-Bold"),
              ("− actif immobilisé", ORANGE, "Sans-Bold"),
              ("BFR = actif circulant d'exploitation", VERT, "Sans"),
              ("− dettes d'exploitation", VERT, "Sans"),
              ("Trésorerie nette = FR − BFR", BLEU, "Sans-Bold"),
              ("= trésorerie active − trésorerie passive", BLEU, "Sans")]
    for i, (t, coul, police) in enumerate(textes):
        d.add(String(xa + 10, h - 30 - i * 14 - (i // 2) * 6, t, fontName=police, fontSize=7.6,
                     fillColor=coul))
    return d


FIGURES = {
    "architecture": (lambda: schema_niveaux([
        ("Mondial", ["G20 / Conseil de\nstabilité financière", "Comité de Bâle\n(banques)",
                     "OICV-IOSCO\n(marchés)", "AICA-IAIS\n(assurance)", "GAFI\n(blanchiment)"]),
        ("Union\neuropéenne", ["Commission, Parlement,\nConseil (textes)", "ESMA · EBA · EIOPA\n(AES)",
                               "CERS\n(risque systémique)", "BCE-MSU · CRU\n(union bancaire)",
                               "AMLA\n(blanchiment)"]),
        ("France", ["Parlement ·\nministre (DG Trésor)", "AMF\n(marchés)", "ACPR\n(banques, assurances)",
                    "Banque de France\n· HCSF", "Tracfin · AFA\n· CNIL"]),
    ]), "Architecture de la régulation financière : qui fait quoi, du niveau mondial au niveau national."),
    "blanchiment": (lambda: schema_flux([
        ("1. Placement", "introduire les espèces\ndans le circuit financier\n(dépôts fractionnés…)"),
        ("2. Empilement", "multiplier les opérations\npour brouiller la piste\n(virements, sociétés écrans)"),
        ("3. Intégration", "réinjecter les fonds\ndans l'économie légale\n(immobilier, entreprises)"),
    ], 66), "Les trois étapes classiques du blanchiment."),
    "conflits": (lambda: schema_flux([
        ("Identifier", "cartographie des\nsituations de conflit"),
        ("Prévenir", "organisation,\nmurailles, politiques"),
        ("Gérer", "procédures, contrôle,\nregistre des conflits"),
        ("Informer", "en dernier recours,\nsur support durable"),
    ], 56), "La démarche de traitement des conflits d'intérêts."),
    "controle": (lambda: schema_niveaux([
        ("3e niveau", ["Contrôle périodique : audit / inspection générale, indépendant, par missions"]),
        ("2e niveau", ["Contrôle permanent : conformité (RCSI / RCCI), risques, contrôle permanent"]),
        ("1er niveau", ["Opérationnels et hiérarchie : autocontrôle, double regard, habilitations"]),
    ]), "Les trois niveaux du contrôle interne."),
    "postmarche": (lambda: schema_flux([
        ("Négociation", "exécution de l'ordre\nsur une plateforme"),
        ("Compensation", "CCP : novation,\nnetting, marges"),
        ("Règlement-livraison", "CSD + T2S :\nlivraison contre\npaiement (DvP)"),
        ("Conservation", "teneur de compte-\nconservateur :\ngarde, OST"),
    ], 62), "La chaîne de traitement d'une opération sur titres."),
    "options": (schema_options, "Profils de gain à l'échéance (prime incluse) : l'acheteur a une perte limitée à la "
                "prime, le vendeur un gain limité à la prime. K = prix d'exercice."),
    "prix_taux": (schema_prix_taux, "Relation prix-taux d'une obligation à taux fixe."),
    "seance": (schema_seance, "Déroulement d'une séance sur Euronext Paris (valeurs cotées en continu)."),
    "sri": (schema_echelle_sri, "L'indicateur synthétique de risque (SRI) du document d'informations clés."),
    "bilan": (schema_bilan_fr, "Lecture fonctionnelle du bilan : fonds de roulement, BFR et trésorerie."),
    "classification": (lambda: schema_flux([
        ("Non professionnel", "protection maximale :\ntoutes les règles\nde bonne conduite"),
        ("Professionnel", "présumé compétent :\nprotection allégée"),
        ("Contrepartie éligible", "protection minimale\n(services d'exécution,\nRTO, négociation)"),
    ], 58), "Les trois catégories de clients MIF 2 : plus la catégorie est « haute », moins la protection est forte."),
    "lcbft": (lambda: schema_flux([
        ("Identifier", "client, bénéficiaire\neffectif, mandataire"),
        ("Connaître", "objet de la relation,\norigine des fonds,\nprofil de risque"),
        ("Surveiller", "vigilance constante,\nopérations atypiques"),
        ("Déclarer", "soupçon → Tracfin\n(sans prévenir\nle client)"),
        ("Conserver", "documents : 5 ans"),
    ], 60), "Les obligations de vigilance en matière de LCB-FT, de l'entrée en relation à la déclaration."),
    "primaire": (lambda: schema_flux([
        ("Émetteur", "a besoin de\nfinancement"),
        ("Banques (syndicat)", "structurent, placent,\ngarantissent"),
        ("Investisseurs", "souscrivent les\ntitres nouveaux"),
        ("Marché secondaire", "les titres s'échangent\nensuite entre\ninvestisseurs"),
    ], 58), "Du marché primaire au marché secondaire."),
}


def figure(nom):
    fabrique, legende = FIGURES[nom]
    return [Spacer(1, 4), KeepTogether([fabrique(), Spacer(1, 3), Paragraph(legende, S["legende"])])]


# ---------------------------------------------------------------- QCM

class Compteur:
    qcm = 0
    examen = []  # (numéro, lettre, catégorie, explication) des questions d'examen blanc
    stats = Counter()
    vus = set()
    erreurs = []


def melanger(question, textes, lettre):
    """Mélange déterministe des propositions (graine = texte de la question)."""
    lettres = "abcd"[:len(textes)]
    bonne = textes[lettres.index(lettre)]
    graine = int(hashlib.sha256(question.encode()).hexdigest(), 16)
    textes = list(textes)
    random.Random(graine).shuffle(textes)
    return textes, lettres[textes.index(bonne)]


def qcm(lignes, contexte, examen=False):
    Compteur.qcm += 1
    question = lignes[0][2:].strip()
    m = re.match(r"^\[([AC])\]\s*", question)
    categorie = m.group(1) if m else ""
    question = question[m.end():] if m else question
    reps = [re.sub(r"^[a-d]\)\s*", "", l) for l in lignes[1:] if re.match(r"^[a-d]\)", l)]
    corr = next((l for l in lignes if l.startswith("=")), None)
    probleme = None
    if sum(l.startswith("=") for l in lignes) > 1:
        probleme = "plusieurs lignes de corrigé"
    elif corr is None or len(reps) not in (3, 4):
        probleme = "propositions ou corrigé manquants"
    elif corr[1:2] not in "abcd"[:len(reps)]:
        probleme = "lettre de réponse invalide"
    elif len(set(reps)) != len(reps):
        probleme = "propositions en double"
    if probleme:
        Compteur.erreurs.append(f"{contexte} — {probleme} : {question[:70]}")
        return []
    cle = re.sub(r"\W+", " ", question.lower()).strip()
    if cle in Compteur.vus:
        Compteur.erreurs.append(f"{contexte} — question en double : {question[:70]}")
    Compteur.vus.add(cle)
    lettre, _, expl = corr[1:].partition(" ")
    reps, lettre = melanger(question, reps, lettre.strip())
    Compteur.stats[(contexte, "examen" if examen else "qcm", categorie or "?")] += 1
    badge = (f'<font color="#FFFFFF" backColor="{"#B4541A" if categorie == "A" else "#3D6A9E"}">'
             f'&nbsp;{categorie}&nbsp;</font> ') if categorie else ""
    blocs = [Paragraph(f"{badge}Q{Compteur.qcm}. {inline(question)}", S["q"])]
    blocs += [Paragraph(f"{'abcd'[i]}) {inline(r)}", S["rep"]) for i, r in enumerate(reps)]
    if examen:
        Compteur.examen.append((Compteur.qcm, lettre, categorie,
                                reps["abcd".index(lettre)] + ". " + expl))
    else:
        blocs.append(Paragraph(f"<b>Réponse {lettre}.</b> {inline(expl)}", S["corr"]))
    return [KeepTogether(blocs)]


def corrige_examen():
    flux = []
    for n, lettre, cat, expl in Compteur.examen:
        flux.append(Paragraph(f"<b>Q{n} — {lettre})</b> {('[' + cat + '] ') if cat else ''}"
                              f"{inline(expl)}", S["corr"]))
    grille = [[f"Q{n} : {l}" + (f" ({c})" if c else "") for n, l, c, _ in Compteur.examen[i:i + 6]]
              for i in range(0, len(Compteur.examen), 6)]
    if grille:
        grille[-1] += [""] * (6 - len(grille[-1]))
        t = Table(grille, colWidths=[LARGEUR / 6] * 6)
        t.setStyle(TableStyle([
            ("FONTNAME", (0, 0), (-1, -1), "Sans"), ("FONTSIZE", (0, 0), (-1, -1), 8.5),
            ("GRID", (0, 0), (-1, -1), 0.4, GRIS_TRAIT),
            ("ROWBACKGROUNDS", (0, 0), (-1, -1), [colors.white, GRIS_CLAIR]),
        ]))
        na = sum(1 for e in Compteur.examen if e[2] == "A")
        nc = sum(1 for e in Compteur.examen if e[2] == "C")
        seuils = ""
        if na and nc:
            import math
            seuils = (f"Questions A : {na} — seuil de réussite {math.ceil(na * 0.8)} bonnes réponses. "
                      f"Questions C : {nc} — seuil {math.ceil(nc * 0.8)} bonnes réponses.")
        flux = [Paragraph("Grille de réponses", S["h3"]), Paragraph(seuils, S["corps"]), t,
                Spacer(1, 10), Paragraph("Explications", S["h3"])] + flux
    Compteur.examen = []
    return flux


# ---------------------------------------------------------------- analyse des sources

def parser(texte, contexte):
    flux = []
    for bloc in re.split(r"\n\s*\n", texte.strip()):
        lignes = [l.rstrip() for l in bloc.strip().split("\n")]
        tete = lignes[0]
        prefixe = next((p for p in ENCADRES if tete.startswith(p)), None)
        if tete.startswith("# "):
            Compteur.qcm = 0
            titre = tete[2:].strip()
            p = Paragraph(inline(titre), S["h1"])
            p._toc = (0, titre)
            flux.append(p)
        elif tete.startswith("## "):
            titre = tete[3:].strip()
            p = Paragraph(inline(titre), S["h2"])
            p._toc = (1, titre)
            flux += [CondPageBreak(40 * mm), p]
        elif tete.startswith("### "):
            flux += [CondPageBreak(25 * mm), Paragraph(inline(tete[4:]), S["h3"])]
        elif tete.startswith("|"):
            flux += tableau(lignes)
        elif tete.startswith("??"):
            flux += qcm(lignes, contexte)
        elif tete.startswith("?!"):
            flux += qcm(lignes, contexte, examen=True)
        elif prefixe:
            titre, couleur, fond = ENCADRES[prefixe]
            flux += encadre(titre, couleur, fond,
                            [l[len(prefixe):].strip() if l.startswith(prefixe) else l.strip()
                             for l in lignes])
        elif tete.strip() == "[[CORRIGE]]":
            flux += corrige_examen()
        elif tete.strip() == "[[SAUT]]":
            flux.append(PageBreak())
        elif tete.startswith("[[FIG:"):
            flux += figure(tete.strip()[6:-2])
        elif all(l.startswith("- ") for l in lignes):
            flux += [Paragraph(inline(l[2:]), S["puce"], bulletText="•") for l in lignes]
            flux.append(Spacer(1, 4))
        elif all(re.match(r"^\d+\. ", l) for l in lignes):
            for l in lignes:
                num, _, reste = l.partition(" ")
                flux.append(Paragraph(inline(reste), S["num"], bulletText=num))
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
        n_qcm, n_examens = compter()
        lignes = [
            "Les 12 thèmes du programme fixé par l'AMF, expliqués pas à pas",
            "Cours, schémas, tableaux de synthèse, pièges d'examen, mémos",
            f"{n_qcm} QCM d'entraînement corrigés et commentés",
            f"{n_examens} examens blancs de 120 questions au format de l'examen",
        ]
        for i, l in enumerate(lignes):
            c.drawString(25 * mm, A4[1] - 130 * mm - i * 7 * mm, "— " + l)
        c.setFont("Sans", 9)
        c.drawString(25 * mm, 25 * mm, "Édition d'octobre 2026 — à jour des textes connus à cette date")
        c.restoreState()


def compter():
    lignes = [l for f in (ICI / "chapitres").glob("*.txt")
              for l in f.read_text(encoding="utf-8").splitlines()]
    return (sum(l.startswith("?? ") for l in lignes),
            sum(l.strip() == "[[CORRIGE]]" for l in lignes))


def construire(sortie):
    toc = TableOfContents()
    toc.levelStyles = [S["toc1"], S["toc2"]]
    flux = [Spacer(1, 1), NextPageTemplate("normal"), PageBreak()]
    flux += [Paragraph("Sommaire", S["h1"]), toc, PageBreak()]
    for fichier in sorted((ICI / "chapitres").glob("*.txt")):
        flux += parser(fichier.read_text(encoding="utf-8"), fichier.stem)
        flux.append(PageBreak())
    if Compteur.erreurs:
        print("\n".join(Compteur.erreurs))
        raise SystemExit(f"{len(Compteur.erreurs)} problème(s) dans les QCM : PDF non généré.")
    doc = Doc(str(sortie))
    doc.multiBuild(flux)
    return doc


def afficher_stats():
    chapitres = sorted({c for c, _, _ in Compteur.stats})
    for ch in chapitres:
        parts = [f"{t}:{cat}={n}" for (c, t, cat), n in sorted(Compteur.stats.items()) if c == ch]
        print(f"  {ch:45s} {'  '.join(parts)}")


if __name__ == "__main__":
    sortie = ICI / (sys.argv[1] if len(sys.argv) > 1 else "Manuel-Certification-AMF.pdf")
    construire(sortie)
    afficher_stats()
    print(f"OK : {sortie}")
