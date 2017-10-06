
function arthematicOpsAdd(){
	var numeric1=document.getElementById("val1").value;
	var numeric2= document.getElementById("val2").value;
	numeric1=parseInt(numeric1);
		numeric2=parseInt(numeric2);
	var resultValue=numeric1+numeric2;
 document.getElementById("results").innerHTML= resultValue;

};
function arthematicOpsSub(){
	var numeric1=document.getElementById("val1").value;
	var numeric2= document.getElementById("val2").value;
	numeric1=parseInt(numeric1);
		numeric2=parseInt(numeric2);
	var resultValue=numeric1-numeric2;
document.getElementById("results").innerHTML= resultValue;
};
function arthematicOpsMul(){
	var numeric1=document.getElementById("val1").value;
	var numeric2= document.getElementById("val2").value;
	numeric1=parseInt(numeric1);
		numeric2=parseInt(numeric2);
	var resultValue=numeric1*numeric2;
document.getElementById("results").innerHTML= resultValue;
};
function arthematicOpsDiv(){
	var numeric1=document.getElementById("val1").value;
	var numeric2= document.getElementById("val2").value;
	numeric1=parseInt(numeric1);
		numeric2=parseInt(numeric2);
	var resultValue=numeric1/numeric2;
document.getElementById("results").innerHTML= resultValue;
};
function arthematicOpsMod(){
	var numeric1=document.getElementById("val1").value;
	var numeric2= document.getElementById("val2").value;
	numeric1=parseInt(numeric1);
		numeric2=parseInt(numeric2);
	var resultValue=numeric1%numeric2;

document.getElementById("results").innerHTML= resultValue;
};
