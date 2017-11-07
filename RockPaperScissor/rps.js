function rGame(){
 
    startFunction();    
var x=rpsGame();

switch(x){
    case 1:
            document.getElementById("display_result").innerHTML="Match Draw"+"<br>"+ "computer Choose :Rock";
            break;
    case 2:
            document.getElementById("display_result").innerHTML="You Lose"+"<br>"+ "computer Choose :paper";
            break;
    case 3:
            document.getElementById("display_result").innerHTML="You Won"+"<br>"+ "computer Choose :scissor";
            break;

}

}       
function pGame(){

    startFunction();  
var x=rpsGame();
switch(x){
    case 1:
            document.getElementById("display_result").innerHTML="You Won"+"<br>"+ "computer Choose Rock";
            break;
    case 2:
            document.getElementById("display_result").innerHTML="Match Draw"+"<br>"+ "computer Choose Paper";
            break;
    case 3:
            document.getElementById("display_result").innerHTML="You Lose"+"<br>"+ "computer Choose Scissor";
            break;
          

    
}
}
function sGame(){
            
var x=rpsGame();
startFunction(); 
switch(x){
    case 1:
            document.getElementById("display_result").innerHTML="You Lose"+"<br>"+ "computer Choose :Rock";
            break;
    case 2:
            document.getElementById("display_result").innerHTML="You Won"+"<br>"+ "computer Choose :Paper";
            break;
    case 3:
            document.getElementById("display_result").innerHTML="Match Draw"+"<br>"+ "computer Choose :Scissor";
            break;


          
}                

};

function rpsGame(){
return Math.floor(Math.random() * (3 - 1 + 1) ) + 1;

};

function startFunction() {
    document.getElementById("startBtn").innerHTML= "hello";
};

    function player1(){}

//jquery function used for slide and hide functions;
$(document).ready(function(){

    $("#startButton").click(function(){
        $("#gameOpt").slideDown("slow");

    });
    $("#single").click(function(){
        $("#gameSpace").fadeOut(1000);

        $("#btnGrp").fadeIn(2000);
        console.log("hi");

      /*  var x = document.getElementById("btnGrp");
        if (x.style.display === "none") {
            x.style.display = "block";
             console.log("HI");
        } else {
            x.style.display = "none";
        }
    */



});

$("#double").click(function(){
    $("#gameSpace").fadeOut(1000);
    $("#vsGame").fadeIn(1000);
    
});
});


