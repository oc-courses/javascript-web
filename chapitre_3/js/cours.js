// Affiche du contenu HTML de la liste
console.log(document.getElementById("langages").innerHTML);

// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

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
python.id = "python"; // Définition de son identifiant
python.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(python); // Ajout du nouvel élément à la liste

var ruby = document.createElement("li"); // Création d'un élément li
ruby.id = "ruby"; // Définition de son identifiant
ruby.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(ruby); // Ajout du nouvel élément à la liste

var perl = document.createElement("li"); // Création d'un élément li
perl.id = "perl"; // Définition de son identifiant
perl.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perl, document.getElementById("php"));

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');

var bash = document.createElement("li"); // Création d'un élément li
bash.id = "bash"; // Définition de son identifiant
bash.textContent = "bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bash, document.getElementById("perl"));

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));