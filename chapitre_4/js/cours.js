var p1 = document.querySelector("p");
p1.style.color = "red";
p1.style.margin = "50px";
p1.style.fontFamily = "Arial";
p1.style.backgroundColor = "black";

var paragraphes = document.getElementsByTagName("p");
for (var i = 0; i < paragraphes.length; i++) {
    console.log(paragraphes[i].style.color);
}

var style = getComputedStyle(document.getElementById("para"));
console.log(style.color);
console.log(style.fontStyle);