$(document).ready(function(){
$("#double").click(function(){
    $("#gameSpace").fadeOut(1000);
    $("#vsGame").fadeIn(1000);
    
});

document.onkeypress =  zx;
function zx(e){
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode
    console.log(charCode);
}

});