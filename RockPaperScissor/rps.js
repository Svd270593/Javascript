

function rGame(){
 
    
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
}


function rpsGame(){
return Math.floor(Math.random() * (3 - 1 + 1) ) + 1;

};


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


});

function aboutGame() {
        window.open(href="https://www.google.com/imgres?imgurl=https://www.wikihow.com/images/thumb/3/33/Play-Rock%252C-Paper%252C-Scissors-Step-5-Version-3.jpg/aid42597-v4-728px-Play-Rock%252C-Paper%252C-Scissors-Step-5-Version-3.jpg&imgrefurl=https://www.wikihow.com/Play-Rock,-Paper,-Scissors&h=546&w=728&tbnid=7fP2T1Syf7sxtM:&tbnh=158&tbnw=211&usg=__CzmpP1o9YemUZ8xpJ6E3XY7RcaQ=&vet=10ahUKEwjNr66bsrfXAhXnzIMKHevsCesQ9QEILDAA..i&docid=c2lKvHJsRi8MlM&sa=X&ved=0ahUKEwjNr66bsrfXAhXnzIMKHevsCesQ9QEILDAA"
        , "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    }

