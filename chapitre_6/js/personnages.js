function getPersos(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return ["Choisissez un personnage"];
    }
}

function creerElementOption(texte) {
    var optionElt = document.createElement("option");
    optionElt.textContent = texte;
    return optionElt;
}

var persosElt = document.getElementById("perso");
document.getElementById("maison").addEventListener("change", function (e) {
    persosElt.innerHTML = "";
    var persos = getPersos(e.target.value);
    persos.forEach(function (perso) {
        persosElt.appendChild(creerElementOption(perso));
    });
});