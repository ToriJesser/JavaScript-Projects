function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["lastname"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
}

