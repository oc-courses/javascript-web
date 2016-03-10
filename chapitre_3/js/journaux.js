/*
Exercice : construire une liste de journaux
*/

// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

for (var i = 0; i < journaux.length; i++) {
    var lien = document.createElement("a");
    lien.textContent = journaux[i];
    lien.href = journaux[i];
    // Ajoute un lien
    document.getElementById("contenu").appendChild(lien);
    // Ajoute une balise <br>
    document.getElementById("contenu").appendChild(document.createElement("br"));
}