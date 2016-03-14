/*
Exercice : informations sur un élément
*/

var styleElement = getComputedStyle(document.getElementById("contenu"));
var liste = document.createElement("ul");
var longueur = document.createElement("li");
longueur.textContent = "Longueur : " + styleElement.width;
var hauteur = document.createElement("li");
hauteur.textContent = "Hauteur : " + styleElement.height;
liste.appendChild(hauteur);
liste.appendChild(longueur);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(liste);