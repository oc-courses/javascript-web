console.log(document.body.childNodes[5].childNodes[1]);

var titresH2 = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresH2[0]); // Affiche le premier titre h2
console.log(titresH2.length); // Affiche 3

// Accès à tous les éléments ayant la classe "merveilles"
var listes = document.getElementsByClassName("merveilles");
for (var i = 0; i < listes.length; i++) {
    console.log(listes[i]);
}

// Accès à l'élément portant l'identifiant "nouvelles"
var listeNouvelles = document.getElementById("nouvelles");
console.log(listeNouvelles);

// Accès aux éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
var merveillesAntiquesExistantes = document.getElementById("antiques").getElementsByClassName("existe");
console.log(merveillesAntiquesExistantes.length);

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe")); // Affiche 1

// Le premier paragraphe
console.log(document.querySelector("p"));

console.log(document.querySelector("#contenu").innerHTML);

console.log(document.querySelector("#contenu").textContent);

console.log(document.querySelector("a").getAttribute("href"));

if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

var classes = document.getElementById("antiques").classList;
console.log(classes.length);
console.log(classes[0]);

if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}