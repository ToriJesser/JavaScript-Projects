function Pet_Function() {
    var Pet_Output;
    var Pets = document.getElementById("Pet_Input").value;
    var Pet_String = " is a great pet!";
    switch(Pets) {
        case "Dog":
            Pet_Output = "Dog" + Pet_String;
        break;
        case "Cat":
            Pet_Output = "Cat" + Pet_String;
        break;
        case "Turtle":
            Pet_Output = "Turtle" + Pet_String;
        break;
        case "Bearded Dragon":
            Pet_Output = "Bearded Dragon" + Pet_String;
        break;
        case "Parrot":
            Pet_Output = "Parrot" + Pet_String;
        break;
        case "Gerbil":
            Pet_Output = "Gerbil" + Pet_String;
        break;
        default:
            Pet_Output = "Please enter a pet exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Pet_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "This text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

var d = document.getElementById("myCanvas_1");
var dtx = d.getContext("2d");
// Create gradient
var grdt = dtx.createLinearGradient(0,0,200,0);
grdt.addColorStop(0,"black");
grdt.addColorStop(1,"white");
// Fill with gradient
dtx.fillStyle = grdt;
dtx.fillRect(10,10,150,80);