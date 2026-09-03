/**
 * Mélange des choix de QCM, pour éviter tout biais de position de la bonne réponse
 * (ex. « c'est toujours la 2e proposition »). Deux variantes :
 * - `melangerChoixAleatoire` : aléatoire à chaque appel (pour les quiz de révision,
 *   où la correction se fait dans la même requête que l'affichage) ;
 * - `melangerChoixDeterministe` : mélange stable pour une graine donnée (pour les
 *   examens blancs, où l'affichage et la correction ont lieu dans deux requêtes
 *   distinctes et doivent obtenir exactement le même mélange).
 */

export interface ChoixMelanges {
  choix: string[];
  bonneReponse: number;
}

function fisherYates<T>(items: T[], rng: () => number): T[] {
  const copie = [...items];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

function appliquerMelange(choix: string[], bonneReponse: number, rng: () => number): ChoixMelanges {
  const indices = fisherYates(
    choix.map((_, i) => i),
    rng,
  );
  return {
    choix: indices.map((i) => choix[i]),
    bonneReponse: indices.indexOf(bonneReponse),
  };
}

export function melangerChoixAleatoire(choix: string[], bonneReponse: number): ChoixMelanges {
  return appliquerMelange(choix, bonneReponse, Math.random);
}

function hashChaine(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0;
}

/** PRNG mulberry32, déterministe à partir d'une graine numérique. */
function creerRngDeterministe(graine: number): () => number {
  let etat = graine;
  return () => {
    etat |= 0;
    etat = (etat + 0x6d2b79f5) | 0;
    let t = Math.imul(etat ^ (etat >>> 15), 1 | etat);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function melangerChoixDeterministe(choix: string[], bonneReponse: number, graine: string): ChoixMelanges {
  return appliquerMelange(choix, bonneReponse, creerRngDeterministe(hashChaine(graine)));
}
