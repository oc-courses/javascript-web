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

function postJson(url, data) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.addEventListener("load", function () {
        if (req.status >= 400) {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(data));
}

getAsync("http://localhost/javascript-web-srv/web/api/articles", function (texteReponse) {
    var articles = JSON.parse(texteReponse);
    articles.forEach(function (article) {
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.title;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.content;
        document.body.appendChild(titreElt);
        document.body.appendChild(contenuElt);
    });
});

var nouvelArticle = {
    title: "JavaScript c'est top !",
    content: "Cet article a été créé en JavaScript."
};
/*var request = new XMLHttpRequest();
request.open('POST', 'http://localhost/javascript-web-srv/web/api/article', true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify(nouvelArticle));*/
postJson("http://localhost/javascript-web-srv/web/api/article", nouvelArticle);

getAsync("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (texteReponse) {
    var reponse = JSON.parse(texteReponse);
    console.log(reponse.description);
    console.log(reponse.logo);
});

// API key d'Emily Reese
getAsync("http://api.wunderground.com/api/6ae045e189524fd2/conditions/q/France/Lyon.json", function (texteReponse) {
    //console.log(texteReponse);
});

getAsync("https://api.github.com/users/bpesquet", function (texteReponse) {
    //console.log(texteReponse);
});