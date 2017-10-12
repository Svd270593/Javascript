function myFunc_cars(name, model, price, engine,millage){
		
		this.carName=name;
		this.year=model;
		this.price=price;
		this.power=engine;  		// prototype using 
		this.fueleff=millage;
		
		this.changePrice = function (price) {
        this.price = price;
    }
		/*//this.details= function(){
			fordMustang.name+""+dodgeChallenger+""+chevyCamaro;
		//}*/
	}
	myFunc_cars.prototype.carModel = "Sports";
				
	var fordMustang=new myFunc_cars("Mustang","2017", "25185","300 to 435 hp","Up to 21 city / 30 highway");
		
	var dodgeChallenger =new myFunc_cars("Challenger","2017","$26,995","305 to 707 hp","Up to 19 city / 30 highway");	
	 
	 var chevyCamaro= new myFunc_cars("camaro","2017","$25,905","275 to 650 hp","Up to 22 city / 31 highway");
	 
	 dodgeChallenger.changePrice("27,9095");
	 
	 document.getElementById("display_1").innerHTML=dodgeChallenger.year+" "+chevyCamaro.price+" "+ dodgeChallenger.price ;//+ fordMustang.details();
		document.getElementById("display_2").innerHTML=fordMustang.carModel;
			document.getElementById("display_2").innerHTML=fordMustang.carModel +" "+ fordMustang.year + " "+fordMustang.price + " "+fordMustang.power ;
		
function obj_For() {
var txt = "";
person = {fname:"John", lname:"Doe", age:25, weight:156}; 
var x;
for (x in person) {
    txt += person[x] + " ";
	var y=person;
	
	
}
document.getElementById("display_1").innerHTML = txt+" "+y.age ;
};


	
// doubt in this function
		/*function entr_obj(){
		var property_val=document.getElementById("propertyVal").value;
		var property_Name=document.getElementById("propertyNam").value;
		console.log(property_val);
		person.property_Name=property_val;
		console.log(person.property_Name);
		
	}

*/