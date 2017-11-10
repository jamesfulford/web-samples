

// Constants
var squares = document.querySelectorAll(".square");


// Functions

function rand255() {  // helper
	return Math.floor(Math.random() * 255)
}
function randRGB() {  // helper
	var col = "rgb(";
	col += rand255() + ", ";
	col += rand255() + ", ";
	col += rand255() + ")";
	return col
}
function makeColors(number) {
	var colors = []
	for(var i = 0; i < number; i++) {
		colors.push(randRGB());
	}
	return colors;
}

function pickGoal(colors) {
	var randNum = Math.floor(Math.random() * colors.length)
	return colors[randNum];
}

// IO Functions
function displayMessage(message) {
	document.querySelector("#message").textContent = message;
}
function win(goalColor) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = goalColor;
	}
	document.querySelector("h1").style.backgroundColor = goalColor;
}





function main() {

	// Color Choices
	var colors = makeColors(6);

	// Set Goal
	var goalColor = pickGoal(colors);
	document.querySelector("h1 span").textContent = goalColor;


	// Set Color Choice Squares
	
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		// add click listeners

		squares[i].addEventListener("click", function() {

			// Win condition
			if(this.style.backgroundColor === goalColor) {
				displayMessage("Correct!");
				win(goalColor);
			} else {
				this.style.backgroundColor = "#232323"
				displayMessage("Try Again")
			}
		})
	}

	// What happens when win
	

	
}

main();
