document.getElementById("display1").innerHTML = "Hello Boss"

var pTag=document.getElementsByTagName("p");
document.getElementById("display2").innerHTML= "Hello Sir";

var x= document.getElementsByClassName("intro");
document.getElementById("display3").innerHTML= x[0].innerHTML;

document.getElementById("display2").style.color = "blue";
document.getElementById("display3").style.fontFamily = "Arial";


// event listner
function mybtn(){
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("display4").innerHTML = Date();
}
}