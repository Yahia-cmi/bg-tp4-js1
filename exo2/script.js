"use strict"; // Mode strict — slide 51

// Tableau (type complexe) — slide 38
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet littéral (type complexe: Object) — slide 39
const etudiant = { nom: "John", prenom: "DOE", age: 30 };

// Tableau d'objets — slide 40
const etudiantsObj = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 },
];

// F1: parcourir un tableau (boucle for...of) — slide 44 (boucles)
function f1() {
  for (const e of etudiants) {      // itération — slide 44
    console.log(e);                 // sortie console — slide 33
  }
}

// F2: afficher un objet directement — slide 39 (objets) + slide 33 (console)
function f2() {
  console.log(etudiant);
}

// F3: parcourir un tableau d'objets et formater une chaîne — slides 40 (tableau d'objets), 44 (boucles)
function f3() {
  for (const s of etudiantsObj) {
    console.log(`${s.nom}-${s.prenom}-${s.age}`); // Template string (syntaxe) — slide 36
  }
}
