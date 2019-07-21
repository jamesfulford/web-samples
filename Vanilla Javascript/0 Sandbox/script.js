// alert("script.js")

function askAge(){
	var age = prompt("How old are you?");
	if (age < 0) {
		console.log("No non-negative values");
		return askAge();
	} else if (age == 21) {
		console.log("Happy 21st!");
	}

	if(age % 2 == 1) {
		console.log("Your age is odd!");
	}

	if(age % Math.sqrt(age) == 0) {
		console.log("Your age is a perfect square!")
	}

	return age;
}

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = askAge()

console.log("Your full name is " + firstName + " " + lastName);
console.log("You are " + age + " years old");
console.log("You have been alive for ~" + age * 365.25 + " days");


