/**
 * Répétition espacée façon SM-2 (SuperMemo 2).
 *
 * Idée : chaque réponse est notée de 0 à 5 ("qualité"). Une bonne réponse
 * repousse la prochaine révision plus loin dans le temps ; une mauvaise
 * réponse remet l'élément en circulation dès le lendemain. Les éléments
 * maîtrisés depuis longtemps ne disparaissent jamais : leur intervalle
 * grandit mais ils reviennent toujours, ce qui évite l'oubli.
 */

export type Qualite = 0 | 1 | 2 | 3 | 4 | 5;

export interface EtatSRS {
  facilite: number;
  intervalleJours: number;
  repetitions: number;
  serieReussite: number;
  serieEchec: number;
}

export const ETAT_INITIAL: EtatSRS = {
  facilite: 2.5,
  intervalleJours: 0,
  repetitions: 0,
  serieReussite: 0,
  serieEchec: 0,
};

const FACILITE_MIN = 1.3;

export function calculerProchainEtat(
  etat: EtatSRS,
  qualite: Qualite,
): EtatSRS & { dueDansJours: number } {
  const succes = qualite >= 3;

  let { facilite, repetitions } = etat;

  facilite =
    facilite + (0.1 - (5 - qualite) * (0.08 + (5 - qualite) * 0.02));
  facilite = Math.max(FACILITE_MIN, facilite);

  let intervalleJours: number;
  if (!succes) {
    repetitions = 0;
    intervalleJours = 1;
  } else {
    repetitions += 1;
    if (repetitions === 1) intervalleJours = 1;
    else if (repetitions === 2) intervalleJours = 6;
    else intervalleJours = Math.round(etat.intervalleJours * facilite);
  }

  return {
    facilite,
    intervalleJours,
    repetitions,
    serieReussite: succes ? etat.serieReussite + 1 : 0,
    serieEchec: succes ? 0 : etat.serieEchec + 1,
    dueDansJours: intervalleJours,
  };
}

/** Niveau de maîtrise affiché à l'utilisateur, dérivé de l'état SRS. */
export type NiveauMaitrise =
  | "nouveau"
  | "en_apprentissage"
  | "point_faible"
  | "maitrise";

export function niveauMaitrise(etat: EtatSRS): NiveauMaitrise {
  if (etat.repetitions === 0 && etat.serieEchec === 0) return "nouveau";
  if (etat.serieEchec >= 2 || (etat.facilite <= 1.8 && etat.repetitions > 0))
    return "point_faible";
  if (etat.repetitions >= 4 && etat.facilite >= 2.3) return "maitrise";
  return "en_apprentissage";
}

export function dateEcheance(dueDansJours: number, depuis = new Date()): Date {
  const d = new Date(depuis);
  d.setDate(d.getDate() + dueDansJours);
  return d;
}
