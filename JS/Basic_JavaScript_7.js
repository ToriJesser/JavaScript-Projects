function Number_1() {
    var x = 10
    console.log(2 * x);
}

function Number_2() {
    console.log(x * 25);
}
Number_1();
Number_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function myFunction() {
    if (10 > 2);
    document.getElementById("number").innerHTML = "Did you know 10 is greater than 2?";
}

function animal_function() {
    var animal, catordog;
    animal = document.getElementById("animal").value;
    if (animal == "dog") {
        catordog = "Dogs are very loyal. Good choice!";
    }
    else {
        catordog = "Cats are great to lounge with. Good choice!";
    }
    document.getElementById("cat_dog").innerHTML = catordog;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}