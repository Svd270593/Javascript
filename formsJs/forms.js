function validateForm(){
	alert("hello");
	
	//myMin_Max();
	//myFunction();
	//alert("hello")
	
}

function myMin_Max() {
	
    var txt = "";
    if (document.getElementById("formIn").validity.rangeOverflow ||document.getElementById("formIn").validity.rangeUnderflow) {
        txt = "Enter Valid  value ";
    } else {
        txt = "Input OK";
    } 
    document.getElementById("display_3").innerHTML = txt;
}

function myFunction() {
    var date_in, text;
alert(date_in);
 
    date_in= document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(date_in) || x < 01011970 ) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("display_1").innerHTML = text;
};


/*function validatebox() {   //doubt on filling the value
    var x = document.forms["form_name1"]["zip_code"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}*/


// display problem

function checkscript(){
    var x=5;
    document.getElementById("display_2").innerHTML;
    

}
