"use strict"; // Mode strict — slide 52

// Tableau (type complexe) — slide 39
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// (type complexe: Object) — slide 40
const etudiant = { nom: "John", prenom: "DOE", age: 30 };

// Tableau d'objets — slide 41
const etudiantsObj = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 },
];

// F1: parcourir un tableau (boucle for...of) — slide 45 (boucles)
function f1() {
  for (const e of etudiants) {      
    console.log(e);                 // sortie console — slide 34
  }
}

function f2() {
  console.log(etudiant);
}

function f3() {
  for (const s of etudiantsObj) {
    console.log(`${s.nom}-${s.prenom}-${s.age}`); 
  }
}
