/*
 Exercice : compter les éléments
*/

// Compte les éléments à partir d'un sélecteur
function compterElements(selecteur) {
    return document.querySelectorAll(selecteur).length;
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2