/*
Exercice : construire un dictionnaire
*/

// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

var dl = document.createElement("dl"); // Création de la liste

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dd> avec sa définition
mots.forEach(function (mot) {
    var dt = document.createElement("dt");
    var strong = document.createElement("strong");
    strong.textContent = mot.terme;
    var dd = document.createElement("dd");
    dd.textContent = mot.definition;

    dt.appendChild(strong);
    dl.appendChild(dt);
    dl.appendChild(dd);
});

document.getElementById("contenu").appendChild(dl); // Ajout de la liste à la page