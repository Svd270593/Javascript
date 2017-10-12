function myFunc(){

var inValue1=parseInt(document.getElementById("inValue1").value,10);

var inValue2=parseInt(document.getElementById("inValue2").value,10);
var x="";
if (inValue1>inValue2){
	document.getElementById("display_2").innerHTML= inValue1 + "is greater";
}
else {
	document.getElementById("display_2").innerHTML= inValue2  + "is greater";
}

while(inValue1<inValue2)
	{
	
	var numberArr=[];
	numberArr.push(inValue1);
	inValue1++;
	x+="<td>"+inValue1+"</td></br>";
	document.getElementById("display_1").innerHTML=x;
	
	console.log(inValue1);
}};

