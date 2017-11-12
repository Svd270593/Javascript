function array_range() 
     {
      var start=document.getElementById("start").value;
      var len=document.getElementById("len").value;
    	var newArr = new Array(len);
    	console.log("outside loop"+len);
		for (var i = 0; i < len; i++) 
        {
        	
			newArr[i] = start;
			start++
		
		}
      document.getElementById("arry_data").innerHTML= newArr;

};
   var contactArry=[""];
function arrayContacts()
{
  
  //var contact_push="";
  var contactName=document.getElementById("cntc_Name").value;
         
  var contactNum= document.getElementById("cntc_Num").value;
        
  contactName=contactName.toString();
       
  contactNum= contactNum.toString();

        
  var fullContact= contactName+":"+contactNum;
  

  contactArry.push(fullContact);
 
  document.getElementById("arry_contact").innerHTML+=contactArry;
  console.log(contactArry);
};
