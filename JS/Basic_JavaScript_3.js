function mathFunction() {
    var addition = 4 + 7;
    document.getElementById("math").innerHTML  = "4 + 7 = " + addition;
}

function subtraction_mathFunction() {
    var Subtraction = 4 - 7;
    document.getElementById("subtract").innerHTML = "4 - 7 = " + Subtraction;
}

function multiply_mathFunction() {
    var multiply = 4 * 7;
    document.getElementById("multiply").innerHTML = "4 * 7 = " + multiply;
}

function divide_mathFunction() {
    var divide = 4 / 7;
    document.getElementById("divide").innerHTML = "4 / 7 = " + divide;
}

function crazy_mathFunction() {
    var crazy = (4 +7) * 4 / 7 - 4;
    document.getElementById("crazy_math").innerHTML = "4 plus 7, multiplied by 4, divided by 7 and then subtracted by 4 equals " + crazy;
}

function remainder_mathFunction() {
    var remainder = 30 % 8;
    document.getElementById("remainder").innerHTML = "When you divide 30 by 8 you have a reaminder of: " + remainder;
}

function negation_Operator() {
    var x = 7;
    document.getElementById("negation").innerHTML = -x;
}

var y = 7;
y++;
document.write(y);

var z = 7;
z--;
document.write(z);

window.alert(Math.random() * 100);

document.write(Math.PI);