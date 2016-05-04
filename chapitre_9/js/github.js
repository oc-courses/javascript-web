/*
Exercice : profil GitHub
*/

var infosElt = document.getElementById("infos");

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var nomProfil = formElt.elements.profil.value;
    ajaxGet("https://api.github.com/users/" + nomProfil, function (reponse) {
        // Transformation de la réponse en un objet JSON
        var profil = JSON.parse(reponse);
        // Création des informations sur le profil
        var avatarElt = document.createElement("img");
        avatarElt.src = profil.avatar_url;
        avatarElt.style.height = "150px";
        avatarElt.style.width = "150px";
        var nomElt = document.createElement("div");
        nomElt.textContent = profil.name;
        nomElt.style.fontSize = "20px";
        var employeurElt = document.createElement("div");
        employeurElt.textContent = profil.company;
        var siteElt = document.createElement("a");
        siteElt.href = profil.blog;
        siteElt.textContent = siteElt.href;
        // Affichage des informations
        infosElt.innerHTML = ""; // Suppression des infos précédentes
        infosElt.appendChild(avatarElt);
        infosElt.appendChild(nomElt);
        infosElt.appendChild(employeurElt);
        infosElt.appendChild(siteElt);
    });
});