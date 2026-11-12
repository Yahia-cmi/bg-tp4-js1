"use strict"; // Activer le mode strict : évite variables implicites, meilleure portée — slide 52

// déclaration de constantes (types primitifs number/string) — slides 38 (types), 51-52 (let/const)
const nom = "John";
const prenom = "Doe";
const age = 30;     // number — slide 38
const note = 15;    
const pi = 3.14;    

// Fonctions de base en JS — slide 45 (définition de fonctions)
function f1() {
  console.log(nom); // Affichage dans la console — slide 34
}
function f2() {
  console.log(prenom); 
}
function f3() {
  // Concaténation de chaînes — syntaxe/affectations — slide 37
  console.log(nom + "-" + prenom); 
}
function f4() {
  console.log(age); 
}
function f5() {
  console.log(note); 
}
function f6() {
  console.log(pi); 
}
