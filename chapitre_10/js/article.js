var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var article = new FormData(form);
    console.log(article);
    ajaxPost("http://oc-jswebsrv.herokuapp.com/article", article);
});