function clic() {
    console.log("Clic !");
}

var bouton = document.getElementById("boutonClic");
bouton.addEventListener("click", clic);
//bouton.removeEventListener("click", clic);

bouton.addEventListener("click", function (e) {
    console.log("Evènement : " + e.type + ", cible : " + e.target);
});

document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}

document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0:
        bouton = "gauche";
        break;
    case 1:
        bouton = "milieu";
        break;
    case 2:
        bouton = "droit";
        break;
    }
    return bouton;
}

function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

document.addEventListener("click", infosSouris);

document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

window.addEventListener("load", function () {
    console.log("Document entièrement chargé");
});
/*window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message;
    return message;
});*/

document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
document.getElementById("boutonPropa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation();
});

document.getElementById("lienInterdit").addEventListener("click", function (e) {
    console.log("Vous avez sûrement mieux à faire !");
    e.preventDefault();
})