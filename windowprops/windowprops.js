function hghtwidth(){
    

document.getElementById("display1").innerHTML = 
screen.width+ "* "+ screen.height+" screen depth "+ screen.pixelDepth;
}
function placeLocation(){
    alert("hi");

document.getElementById("display2").innerHTML = window.location.href+" "+ window.location.hostname;;

}
function newDoc() {
    window.location.assign("https://www.youtube.com")
}