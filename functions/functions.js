function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

myFather.name = function() {
    return this.firstName + " " + this.lastName;

    };

    document.getElementById("display1").innerHTML =
    "My father is " + myFather.name(); 
