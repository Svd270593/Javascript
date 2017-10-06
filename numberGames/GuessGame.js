function matchTheNum(){
 var num = Math.ceil(Math.random() * 10);
 var gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   document.getElementById("gameMatch").innerHTML="Yeah the number matches"+ ""+num;
  else
   document.getElementById("gameMatch").innerHTML="sorry the number not matched"+ num;
 
   }