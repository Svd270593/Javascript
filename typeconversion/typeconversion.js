function toStrng(){
    var strgVal= document.getElementById("strngInValue").value;
    
    document.getElementById("tostrngs").innerHTML= String(strgVal)+" "+ Date().toString();
    
    var y="2311";
    var x=2323;
    x+=y;
    

    document.getElementById("display2").innerHTML= x;
   
    document.getElementById("display2").innerHTML =
    "Number : " + Number(x) + "<br>" +
    "String : " + String(x) + "<br>" +
    "Boolean: " + Boolean(x);

    var obj={};
    document.getElementById("display1").innerHTML =
    "Number : " + Number(obj) + "<br>" +
    "String : " + String(obj) + "<br>" +
    "Boolean: " + Boolean(obj);

    
    
    var para = document.createElement("p");
    var node = document.createTextNode("This is a new paragraph.");

    para.appendChild(node);

        var element = document.getElementById("div1");
        element.appendChild(para);


}