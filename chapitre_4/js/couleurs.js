/*
Exercice : modifier les couleurs
*/

var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");

var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    divs[i].style.color = couleurTexte;
    divs[i].style.backgroundColor = couleurFond;
}