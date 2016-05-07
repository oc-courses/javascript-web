document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var article = {
        title: e.target.elements.titre.value,
        content: e.target.elements.contenu.value,
    };
    ajaxPost("http://oc-jswebsrv.herokuapp.com/api/article", article, true);
});