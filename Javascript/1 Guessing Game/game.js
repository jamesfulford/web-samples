
function guess(hidden) {
	// Recursion
	var num = Number(prompt("Guess a number"));

	if (num === hidden) {
		return 1;
	} else {
		if(num > hidden) {
			alert(num + " is too high.");
			console.log(num + " is too high.");
		} else {
			alert(num + " is too low.");
			console.log(num + " is too low.");
		}
		return guess(hidden) + 1;
	}
}

alert("Guessed in " + guess(7) + " tries.");
