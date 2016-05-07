var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var article = new FormData(form);
    ajaxPost("http://oc-jswebsrv.herokuapp.com/article", article, function (reponse) {
        var messageElt = document.createElement("p");
        messageElt.textContent = "L'article a bien été ajouté.";
        document.body.appendChild(messageElt);
    });
});