var Borderlands = {
    Publisher: "2K Games",
    Developer: "Gearbox Software",
    Release_Date: "October 2009",
    Rating: "Best Game Ever",
}

function myFunction() {
    delete Borderlands.Release_Date;
    document.getElementById("dictionary").innerHTML = "Borderlands was released on " + Borderlands.Release_Date;
}