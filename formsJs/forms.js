function myForm() {
    var inpValue = document.getElementById("fornValue");
    if (inpValue.checkValidity() == true) {
             document.getElementById("display_2").innerHTML = "Input matches the requirement";
    }
    else { 
    document.getElementById("display_2").innerHTML = inpValue.validationMessage;
}
}

function myMin_Max() {
    var txt = "";
    if (document.getElementById("formIn").validity.rangeOverflow ||document.getElementById("formIn").validity.rangeUnderflow) {
        txt = "Enter Valid  value ";
    } else {
        txt = "Input OK";
    } 
    document.getElementById("demo").innerHTML = txt;
}