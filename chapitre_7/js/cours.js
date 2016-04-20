var compteurElt = document.getElementById("compteur");

function diminuerCompteur() {
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval(timer);
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
        setTimeout(function () {
            titre.textContent = "Tout est cassé :(";
        }, 2000);
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes
var timer = setInterval(diminuerCompteur, 1000);

var balle = document.getElementById("balle");
var diametreBalle = parseFloat(getComputedStyle(balle).width);
var direction = 1;
var vitesse = 8;

function animerBalle() {
    var left = parseFloat(getComputedStyle(balle).left);
    if ((left > window.innerWidth - diametreBalle - vitesse) || (left < 0)) {
        direction *= -1;
    }
    balle.style.left = (left + vitesse * direction) + "px";

    requestAnimationFrame(animerBalle);
}
//animerBalle();