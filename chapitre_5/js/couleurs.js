/*
Exercice : changer la couleur des divs
*/

document.addEventListener("keypress", function (e) {
    var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
    touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
    var couleur = "";
    switch (touche) {
    case "B":
        couleur = "white";
        break;
    case "J":
        couleur = "yellow";
        break;
    case "V":
        couleur = "green";
        break;
    case "R":
        couleur = "red";
        break;
    default:
        console.log("Touche " + touche + " non gérée");
    }
    // Changement de couleur de fond pour toutes les divs
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = couleur;
    }
});