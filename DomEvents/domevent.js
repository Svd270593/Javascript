
function mousOver(obj) {
    obj.innerHTML = "Thank You"
}

function mousOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function myUpper() {
    var x = document.getElementById("infname").innerHTML;
	console.log(x);
    x= x.toUpperCase();
	document.getElementById("infname").innerHTML=x;
}
// event Listner

var x= document.getElementById("evnt_handler").addEventListener("mouseover", displayDate);
console.log(x);
function displayDate() {
    document.getElementById("evnt_handler").innerHTML = Date();
}

var multi = document.getElementById("mulEvnt");
multi.addEventListener("click", myFunction);
multi.addEventListener("click", secondFunction);

function myFunction() {
    var x = document.getElementById("mulEvnt").innerHTML;
	console.log(x);
    x= x.toUpperCase();
	document.getElementById("mulEvnt").innerHTML=x;
}

function secondFunction() {
    alert ("This function was also executed!");
}



document.getElementById("addrem").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("addRemove").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("addrem").removeEventListener("mousemove", myFunction);
}