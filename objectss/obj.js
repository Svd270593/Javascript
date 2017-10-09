function myFunc_obj(){
	
/*	var cars { {
		
		name:"Mustang",
		model:"2017",
		price:"25185",
		engine:"300 to 435 hp"
		millage:"Up to 21 city / 30 highway"
	};
		{
		
		name:"Challenger",
		model:"2017",
		price:"$26,995",
		engine:305 to 707 hp
		millage:"Up to 19 city / 30 highway"
	};
	{
		
		name:"Charger",
		model:"2017",
		price:"$27,995",
		engine:"292 to 707 hp",
		millage:"Up to 19 city / 30 highway",
	};
	{
		
		name:"camaro",
		model:"2017",
		price:"$25,905",
		engine:"275 to 650 hp",
		millage:"Up to 22 city / 31 highway"
	};
};
*/

var users = {
    jon : {username: 'Jon', genrePref: 'rock'},
    lucy : {username: 'Lucy', genrePref: 'pop'},
    mike : {username: 'Mike', genrePref: 'rock'},
    luke : {username: 'Luke', genrePref: 'house'},
    james : {username: 'James', genrePref: 'house'},
    dave : {username: 'Dave', genrePref: 'bass'},
    sarah : {username: 'Sarah', genrePref: 'country'},
    natalie : {username: 'Natalie', genrePref: 'bass'}
}
console.log(users);
// Users array
var allUsers = [];

allUsers.push( jon, lucy, mike, luke, james, dave, sarah, natalie);
console.log(allUsers);
};