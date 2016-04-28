function ajouterLangages(texteLangages) {
    var langages = texteLangages.split(";");
    var listeElt = document.getElementById("langages");
    langages.forEach(function (langage) {
        var langageElt = document.createElement("li");
        langageElt.textContent = langage;
        listeElt.appendChild(langageElt);
    });
}

/*var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/langages.txt", false);
req.send(null);
ajouterLangages(req.responseText);*/

/*var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/langages.txt", true);
req.addEventListener("load", function () {
    if (req.status < 400) {
        ajouterLangages(req.responseText);
    } else {
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    console.error("Erreur réseau");
});
req.send(null);*/

function getAsync(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function () {
        if (req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

getAsync("http://localhost/javascript-web-srv/data/langages.txt", ajouterLangages);

function ajouterFilms(texteFilms) {
    var films = JSON.parse(texteFilms);
    var tableauElt = document.getElementById("films");
    films.forEach(function (film) {
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + film.titre + "</td>" + "<td>" + film.annee + "</td>" +
            "<td>" + film.realisateur + "</td>";
        tableauElt.appendChild(ligneElt);
    });
}

getAsync("http://localhost/javascript-web-srv/data/films.json", ajouterFilms);