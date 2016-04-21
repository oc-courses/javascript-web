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

var cadre = document.getElementById("cadre");
var bloc = document.getElementById("bloc");
var diametreBloc = parseFloat(getComputedStyle(bloc).width);
var xMin = 0;
var vitesse = 7;

function deplacerBloc() {
    var idRequest = requestAnimationFrame(deplacerBloc);

    var xBloc = parseFloat(getComputedStyle(bloc).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + diametreBloc <= xMax) {
        bloc.style.left = (xBloc + vitesse) + "px";
    } else {
        cancelAnimationFrame(idRequest);
    }
}
deplacerBloc();