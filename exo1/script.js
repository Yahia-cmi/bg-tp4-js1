"use strict"; // Activer le mode strict : évite variables implicites, meilleure portée — slide 51

// Déclaration de constantes (types primitifs number/string) — slides 37 (types), 50-51 (let/const)
const nom = "John";
const prenom = "Doe";
const age = 30;     // number — slide 37
const note = 15;    // number — slide 37
const pi = 3.14;    // number — slide 37

// Fonctions de base en JS — slide 45 (définition de fonctions)
function f1() {
  console.log(nom); // Affichage dans la console — slide 33
}
function f2() {
  console.log(prenom); // sortie uniquement via console.log — slide 33
}
function f3() {
  // Concaténation de chaînes — syntaxe/affectations — slide 36
  console.log(nom + "-" + prenom); // "John-Doe" — slide 33
}
function f4() {
  console.log(age); // 30 — slide 33
}
function f5() {
  console.log(note); // 15 — slide 33
}
function f6() {
  console.log(pi); // 3.14 — slide 33
}
