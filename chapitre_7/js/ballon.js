var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var diametreBallon = parseFloat(getComputedStyle(ballon).width);
var xMin = 0;
var vitesse = 7;
var direction = 1;
var requestId = null;

function animerBallon() {
    requestId = requestAnimationFrame(animerBallon);

    var xBallon = parseFloat(getComputedStyle(ballon).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if ((xBallon + diametreBallon > xMax) || (xBallon < xMin)) {
        direction *= -1;
    }
    ballon.style.left = (xBallon + vitesse * direction) + "px";
}

var demarrerBtn = document.getElementById("demarrer");
var arreterBtn = document.getElementById("arreter");

demarrerBtn.addEventListener("click", function () {
    demarrerBtn.disabled = true;
    arreterBtn.disabled = false;
    animerBallon();
});

arreterBtn.addEventListener("click", function () {
    demarrerBtn.disabled = false;
    arreterBtn.disabled = true;
    cancelAnimationFrame(requestId);
});