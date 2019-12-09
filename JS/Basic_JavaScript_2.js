function myFirstFunction() {
    var str = "Look at this!";
    var result = str.fontcolor("red");
    document.getElementById("red_text").innerHTML = result;
}

function myFunction() {
    var sentance = "I am learning";
    sentance += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentance;
}