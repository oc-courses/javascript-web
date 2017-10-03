document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var temoignage = {
    pseudo: e.target.elements.pseudo.value,
    evaluation: e.target.elements.evaluation.value,
    message: e.target.elements.message.value
  };
  ajaxPost(
    "https://oc-jswebsrv.herokuapp.com/api/temoignage",
    temoignage,
    function(reponse) {
      var messageElt = document.createElement("p");
      messageElt.textContent = "Témoignage ajouté.";
      document.getElementById("resultat").appendChild(messageElt);
    },
    true
  );
});
