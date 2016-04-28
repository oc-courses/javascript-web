var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/langages.txt", false);
req.send(null);
var langages = req.responseText.split(";");

var listeElt = document.getElementById("langages");
langages.forEach(function (langage) {
    console.log(langage);
    var langageElt = document.createElement("li");
    langageElt.textContent = langage;
    listeElt.appendChild(langageElt);
});