/*
Exercice : compter les clics
*/

function clic() {
    compteurClics++;
    document.getElementById("compteurClics").textContent = compteurClics;
}

var compteurClics = 0;

document.getElementById("boutonClic").addEventListener("click", clic);

document.getElementById("boutonDesactiver").addEventListener("click", function () {
    document.getElementById("boutonClic").removeEventListener("click", clic);
});