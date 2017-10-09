function inValue(){
	var inValue=document.getElementById("inpuVal").value;
	return inValue;
};
function myFunc_abs(){
		var inVal=inValue();

		var absValue= Math.abs(inVal);
		document.getElementById("display_1").innerHTML =absValue;

		var rndValue=Math.round(inVal);
		var math_ceil=Math.ceil(inVal);
		var math_floor=Math.floor(inVal);

document.getElementById("display_1").innerHTML =absValue+"<br>"+"<br>"+rndValue+"<br>"+"<br>"+math_ceil+"<br>"+"<br>"+math_floor;
};


function randy(){
 var in1=document.getElementById("x").value;
 console.log(in1);
 var in2=document.getElementById("y").value;
 console.log(in2);

  in1 = Math.ceil(in1);
  in2 = Math.floor(in2);
  var z= Math.floor(Math.random() * (in2 - in1)) + in1; 
  document.getElementById("display_2").innerHTML=z;
  //The maximum is exclusive and the minimum is inclusive
}
 		

};