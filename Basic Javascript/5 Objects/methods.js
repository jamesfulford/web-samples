

var james = {
	name: "James",
	"favorite_color": "Red",
	height: 73,  // inches, by the way
	surname: "Fulford"
}

james.getName = function() {
	// This keyword works similar to 'this' in Java
	// and 'self' in Python (except Python explicitly passes it in
	// and curries the function's first arg)
	return this.name + " " + this.surname;
}

console.log("Getting my name:")
console.log(james.getName())
