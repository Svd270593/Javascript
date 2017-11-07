function errorShow() {
    var y, x;
    y = document.getElementById("displayy");
    y.innerHTML = "";
    x = document.getElementById("inValue").value;
    try { 
        if(x == "")  throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10)   throw "is too high";
        if(x < 5)    throw "is too low";
    }
    catch(err) {
        y.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("inValue").value = "";
    }
}  ; 

function errorShow1(){
    var num = 1;
    try {
        num.toUpperCase();
    }
    catch(err) {
        document.getElementById("d1").innerHTML = err.name;
    }


    document.getElementById('display').innerHTML = "Welcome to my world!";
}

    try 
    {
        wel_come();		
    }
    catch(error)
    {
        document.getElementById('d2').innerHTML =   error.message;	
    }
