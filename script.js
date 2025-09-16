
/*Variables, types de données et opérateurs */
let nombre1 = 10;
let nombre2 = 5;
let somme = nombre1 + nombre2;
console.log("La somme est : " + somme);

/*Fonctions simples */
function addition(a, b) {
    return a + b;
  }
  
  let somme = addition(8, 5);
  console.log("La somme est : " + somme);
 
 
  /*Conditions et logique booléenne */
  let age = 20;

if (age < 18) {
  console.log("Vous êtes mineur.");
} else if (age === 18) {
  console.log("Vous venez d’atteindre la majorité !");
} else {
  console.log("Vous êtes majeur.");
}

/*Boucles */
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // sauter le 5
    console.log("Nombre : " + i);
  }