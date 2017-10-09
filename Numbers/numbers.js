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


