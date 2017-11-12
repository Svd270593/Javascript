function leapYear(year){
    var result, year; 
    year = parseInt(document.getElementById("leapYear_value").value);
    result=((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    
    document.getElementById("display_result").innerHTML= result;
};

function dateToday(){
	
	var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.getElementById("display1").innerHTML= "Today is : " + daylist[day] + ".";
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  var x= prepand;
  console.log(x);
  hour = (hour >= 12)? hour - 12: hour;
    var y= prepand;
    console.log(y);
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
document.getElementById("display2").innerHTML="Current Time : "+hour + prepand + " : " + minute + " : " + second;
};