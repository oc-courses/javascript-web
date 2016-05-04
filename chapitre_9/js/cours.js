var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.title;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.content;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});

var premMinElt = document.getElementById("premMin");
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});

// API key d'Emily Reese
ajaxGet("http://api.wunderground.com/api/6ae045e189524fd2/conditions/q/France/Lyon.json", function (reponse) {
    //console.log(reponse);
});