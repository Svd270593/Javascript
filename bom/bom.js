function bom(){

    window.alert("this is one bom feature");
    bom1();
    function bom1(){
    var txt;
    var person = prompt("Name please");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
        confrm();
    } else {
        txt = person + "! How are you today?";
    }
    document.getElementById("display1").innerHTML = txt;


}}

function confrm() {
    var txt;
    if (confirm("Press  ok if you wish to enter your name") == true) {
        bom1();
       
        
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("display1").innerHTML = txt;
}

function imgfunc() {
    var imgs =document.getElementById("imgSrc").src;
    document.getElementById("display2").innerHTML= imgs;
    alert("ferrari");
}