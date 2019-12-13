var text = "";
var i;
for (i = 0; i < 13; i++) {
    if (i === 7) {continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;

var txt = "";
var x;
for (x = 0; x < 13; x++) {
    if (x === 7) {break; }
    txt += "The number is " + x + "<br>";
}
document.getElementById("break").innerHTML = txt;