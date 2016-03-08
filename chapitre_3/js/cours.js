// Affiche du contenu HTML de la liste
console.log(document.getElementById("langages").innerHTML);

// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += "<li>Ruby</li>";

// Suppression du contenu HTML de la liste
//document.getElementById("langages").innerHTML = "";

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Modification de la cible du premier lien
document.querySelector("a").href = "https://fr.wikipedia.org/wiki/Langage_informatique";

var titre = document.querySelector("h1"); // Accès au premier titre h1
titre.classList.add("titre"); // Ajout de la classe "titre"
titre.classList.remove("debut"); // Suppression de la classe "titre"
console.log(titre);

// Création d'un noeud textuel
var complement = document.createTextNode(" à découvrir");
// Ajout de ce noeud à la fin du premier titre
document.querySelector("h1").appendChild(complement);

var python = document.createElement("li"); // Création d'un élément li
python.textContent = "Python"; // Définition de son contenu textuel
python.id = "python"; // Définition de son identifiant
document.getElementById("langages").appendChild(python); // Ajout du nouvel élément à la liste

//python.appendChild(document.createTextNode("Python")); // Définition de son contenu textuel

var php = document.getElementById("php");
php.parentNode.insertBefore(python, php);