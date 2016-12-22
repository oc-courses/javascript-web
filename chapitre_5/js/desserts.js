/*
Exercice : modifier une liste
*/

document.querySelector("button").addEventListener("click", function () {
    var nomDessert = prompt("Entrez le nom du nouveau dessert :");

    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;

    document.getElementById("desserts").appendChild(dessertElt);
});
