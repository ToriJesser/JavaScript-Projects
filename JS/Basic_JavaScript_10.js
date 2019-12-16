function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {
    var str = "Be Extraordinary";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Flute", "Bagpipes", "Whistle", "Xylophone", "Vibraphone", "Saxophone"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

var games = ["Borderlands", "Diablo 3", "Smash Bros", "Crawl", "Moonhunters", "Code Vein",];
function random_function() {
    document.getElementById("random").innerHTML = games[Math.floor(Math.random() * games.length)]; // calls on random variable from array
}

function constant_function() {
    const video_game = {type:"dungeon drawler", title:"Diablo 3", developer:"Blizzard Entertainment"};
    video_game.type = "hack and slash";
    video_game.release = "May 15, 2012";
    document.getElementById("Constant").innerHTML = "One of my favorite game is " + video_game.title + ", which is a "
    + video_game.type + " and was produced by " + video_game.developer + "." + "The game was released on " + video_game.release + ".";
}

var x = "hi";
document.writeln(x);
{
    let x = "hello";
    document.writeln(x);
}
document.writeln(x)

function return_function() {
    return Math.PI;
}
document.writeln(return_function())

let game = {
    type: "dungeon crawler",
    title: "Diablo 3",
    developer: "Blizzard Entertainment",
    release_date: "May 15, 2012",
    description : function() {
        return this.title + " is a " + this.type + " that was release on " + this.release_date
        + " by the developer " + this.developer + ".";
    }
};
document.getElementById("game_object").innerHTML = game.description();

