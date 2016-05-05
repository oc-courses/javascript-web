var identite = new FormData();
identite.append("login", "Bob");
identite.append("password", "azerty");
ajaxPost("http://localhost/javascript-web-srv/post_form.php", identite);

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data);
});

var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film, true);