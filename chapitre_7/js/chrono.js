/*
Exercice : chronomètre
*/

var bouton = document.querySelector("button");
var compteurElt = document.getElementById("compteur");
var intervalId = null;
var demarre = false; // Etat du chronomètre : démarré (true) ou arrêté (false)

// Augmente le compteur de 1
function augmenterCompteur() {
    compteurElt.textContent = Number(compteurElt.textContent) + 1;
}

bouton.addEventListener("click", function () {
    if (!demarre) {
        // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
        intervalId = setInterval(augmenterCompteur, 1000);
        bouton.textContent = "Arrêter"; // Modifie le texte du bouton
    } else {
        clearInterval(intervalId); // Arrête le chronomètre
        bouton.textContent = "Démarrer"; // Modifie le texte du bouton
    }
    // Inverse la valeur de l'état du chronomètre
    demarre = !demarre;
});