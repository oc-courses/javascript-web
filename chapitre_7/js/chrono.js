var bouton = document.querySelector("button");
var compteurElt = document.getElementById("compteur");
var timerId = null;
var demarre = false;

function augmenterCompteur() {
    compteurElt.textContent = Number(compteurElt.textContent) + 1;
}

bouton.addEventListener("click", function () {
    if (!demarre) {
        timerId = setInterval(augmenterCompteur, 1000);
        bouton.textContent = "Arrêter";
    } else {
        clearInterval(timerId);
        bouton.textContent = "Démarrer";
    }
    demarre = !demarre;
});