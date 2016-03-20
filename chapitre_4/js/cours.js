var p1 = document.querySelector("p");
p1.style.color = "red";
p1.style.margin = "50px";
p1.style.fontFamily = "Arial";
p1.style.backgroundColor = "black";

var paragraphes = document.getElementsByTagName("p");
console.log(paragraphes[0].style.color); // Affiche "red"
console.log(paragraphes[1].style.color); // Affiche "green"
console.log(paragraphes[2].style.color); // N'affiche rien

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB