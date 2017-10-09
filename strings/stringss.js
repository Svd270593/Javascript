function strOps(){
 var lower=document.getElementById("para1").innerHTML;
 var output= lower.toLowerCase();
 document.getElementById("para1").innerHTML=output;

};
function strOps1(){
 var upper=document.getElementById("para1").innerHTML;
 var output= upper.toUpperCase();
 document.getElementById("para1").innerHTML=output;
};

function strOps2(){
 var strngLine=document.getElementById("para1").innerHTML;
 var strngLine2=document.getElementById("para2").innerHTML;
 document.getElementById("para1").innerHTML=strngLine + strngLine2;

};
function indxOf(){
	var para=document.getElementById("para1").innerHTML;
	 var a=document.getElementById("lastIndx").value;
 var indxOf= para.lastIndexOf(a);
 var stringSrch=para.lastIndexOf(a);

 if (indxOf!=-1)
 document.getElementById("para3").innerHTML=indxOf;
 else
 document.getElementById("para3").innerHTML="the word is not present in the string";
	
};
function strngSrch(){
	var para=document.getElementById("para1").innerHTML;
	 var a=document.getElementById("lastIndx").value;
     var stringSrch=para.search(a);
  document.getElementById("para3").innerHTML=stringSrch;
  

};
function stringRplc(){
	var para=document.getElementById("para1").innerHTML;
	var srch_value=document.getElementById("strng_val").value;
	
    var replace_value=document.getElementById("strng_val1").value;
 	
 	var replaced_para=para.replace(srch_value, replace_value)
 
	document.getElementById("para1").innerHTML=replaced_para;
};

function srch_highlite(){
	var para=document.getElementById("para1").innerHTML;
	console.log(para);
	 var Srch_string=document.getElementById("lastIndx").value;


     var stringSrch=para.search(Srch_string);
     if (stringSrch!=-1){
     var strng_length= Srch_string.length;
   	 var Srch_select=para.substring(stringSrch, stringSrch+strng_length);
     //sting searched val

      	
     var result = Srch_select.fontcolor("red");
     document.getElementById("para3").innerHTML=result;
     
     //var replaced_para=para.replace(Srch_select, result)
 	//replaing function
 	 var replaced_para =
 	  para.replace(Srch_select, function myFunction(x){return x.toUpperCase();});
	document.getElementById("para1").innerHTML=replaced_para;
    }
    else{
    document.getElementById("para3").innerHTML= "Result Not found";
}
    
};