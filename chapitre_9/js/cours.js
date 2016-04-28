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

getAsync("http://localhost/javascript-web-srv/web/api/articles", function (texteReponse) {
    var reponse = JSON.parse(texteReponse);
    console.log(reponse);
});

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