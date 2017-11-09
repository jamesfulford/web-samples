

var goodAnswers = ["yes", "yeah"]
function hasGoodAnswer(response) {
	// return whether at least one good answer is in response
	return goodAnswers.map(ans => response.indexOf(ans) >= 0).reduce((p, q) => p || q)
}

var response = "A"
while(!hasGoodAnswer(response)) {
	response = prompt("Are we there yet?");
	response = response.toLowerCase();
}
alert("Finally!");