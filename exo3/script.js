"use strict"; // Mode strict pour éviter les variables implicites/globales (portée/let/const : slides 50–51)

/* ---------- Données ---------- */
// Tableau d’objets (types complexes : tableaux/objets : slides 41)
const Students = [
  { id: 1000, first: "JOHN",   last: "DOE",     n1: 14, n2: 5  },
  { id: 2000, first: "BOB",    last: "CARLTON", n1: 7,  n2: 1  },
  { id: 3000, first: "RAYANE", last: "SMITH",   n1: 13, n2: 3  },
];

/* ---------- Fonction B ---------- */
/**
 * B(avg: float) -> boolean
 * - Paramètre unique de type nombre (types primitifs number/boolean : slide 37)
 * - Retourne true s'il est admis, false sinon (condition if/else : slide 42)
 */
function B(avg) {                     // Déclaration de fonction (noyau/fonctions : slides 45–46)
  const m = Number(avg);              // Conversion sûre en nombre (opérateurs/valeurs : slide 41)
  return m >= 10.0;                   // Comparaison (opérateurs relationnels : slide 41) 
}

/* ---------- Fonction A ---------- */
/**
 * A() : calcule la moyenne pour chaque étudiant puis appelle B
 * - (opérateurs arithmétiques : slide 41)
 * - Affichage  via console.log() (console : slide 33)
 * - Parcours du tableau (boucles  slide 45)
 */
function A() {                        // Fonction "A" (slides 46–47)
  for (const s of Students) {         // Boucle for...of (boucles : slide 45)
    const moyenne = ((s.n1 + s.n2) / 2) + 5; // Calcul arithmétique (slide 42)
    const admis = B(moyenne);         // Appel de B (fonctions/appel : slide 46)
    // Affichage console UNIQUEMENT (sorties/console.log : slide 33)
    console.log(`${s.id}: ${admis ? "ADMIS" : "AJOURNÉ"}`); // Condition ternaire (if condensé : slide 42)
  }
}

/* ---------- Événement ---------- */
// Rattacher l’événement "click" au bouton (événements DOM : slides 15–22, methode 3 : 28)
// Ici on passe la fonction A en callback sans créer de nouvelle fonction (callbacks : slide 48)
document.getElementById("delib").addEventListener("click", A);
