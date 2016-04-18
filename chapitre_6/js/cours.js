var pseudoElt = document.getElementById("pseudo");
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
pseudoElt.addEventListener("blur", function (e) {
    //console.log("Votre pseudo est " + e.target.value);
    document.getElementById("aidePseudo").textContent = "";
});

pseudoElt.focus();

document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value;
    var complexiteMdp = "faible";
    if (mdp.length >= 8) {
        complexiteMdp = "forte";
    } else if (mdp.length >= 4) {
        complexiteMdp = "moyenne";
    }
    document.getElementById("aideMdp").textContent = "Complexité : " + complexiteMdp;
});

document.getElementById("courriel").addEventListener("blur", function (e) {
    var regexCourriel = /.+@.+\..+/; // /[a-zA-Z]+@[a-zA-Z]+\.(com|fr)/;
    var validiteCourriel = "";
    //if (e.target.value.indexOf("@") === -1) {
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
});

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault();
});