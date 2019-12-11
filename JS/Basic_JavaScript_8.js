function myFunction() {
    var x = "I hope you have";
    var y = " a wonderful day and";
    var z = " a very relaxing evening.";
    var sentance = x.concat(y, z);
    document.getElementById("concat").innerHTML = sentance;
}

function slice_method() {
    var sentance = "I am so hungry I could eat a horse!"
    var section = sentance.slice(8, 14);
    document.getElementById("slice").innerHTML = section;
}

var str = "howdy!"
var res = str.toUpperCase();
document.writeln(res)

 function search_function() {
     var str = "Turtles are the best!";
     var n = str.search("Turtles");
     document.getElementById("search").innerHTML = n;
 }

 function string_Method() {
     var x = 666;
     document.getElementById("Numbers_to_String").innerHTML = x.toString();
 }

 function percision_Method() {
     var y = 42069.66613070176969152357;
     document.getElementById("Percision").innerHTML = y.toPrecision(13);
 }

 function fixed_Method() {
     var num = 7.24354867;
     var n = num.toFixed(3);
     document.getElementById("fixed").innerHTML = n;
 }

 function value_Method() {
     var t = "Hello Mars";
     var res = t.valueOf();
     document.getElementById("value").innerHTML = res;
 }