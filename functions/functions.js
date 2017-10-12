function Person(first, last, age, eye)
 {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var name1 = new Person("John", "Doe", 50, "blue");
var name2 = new Person("Sally", "Rally", 48, "green");

name1.name = function() {
    return this.firstName + " " + this.lastName;

    };
    document.getElementById("display2").innerHTML = name1.name(); 

	//hoisting
	
  myFunc(5);      // on load displays 25.. onclick Displays NaN

function myFunc(y) {
    alert(y * y);
}
// 

// self invoking function
(function () {
	 a=10 ,b=21;
		a*=b;
		var a,b;
    document.getElementById("display1").innerHTML = "Hello! "+ a;
})();

//
function windowFunc(a, b) {
    return a/b;
}
document.getElementById("display3").innerHTML = window.windowFunc(54,44); 



function callFunction(){
	
	var callValue= {name:"dheeraj", age:24, detail: function(){
		return this.name+""+this.age;
	}
	}
	var newDetails ={name:"venkat", age:25 }
}
var result=callValue.detail.call(newDetails);
console.log(x);