var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"];

var paysElt = document.querySelector("input");
var suggestionsElt = document.getElementById("suggestions");

paysElt.addEventListener("input", function () {
    suggestionsElt.innerHTML = "";
    listePays.forEach(function (pays) {
        if (pays.indexOf(paysElt.value) === 0) {
            var suggestionElt = document.createElement("div");
            suggestionElt.classList.add("suggestion");
            suggestionElt.textContent = pays;
            suggestionElt.addEventListener("click", function (e) {
                paysElt.value = e.target.textContent;
                suggestionsElt.innerHTML = "";
            });
            suggestionsElt.appendChild(suggestionElt);
        }
    });
});