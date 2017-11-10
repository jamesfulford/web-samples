
// Constant
var DEFAULT_BACKGROUND = "#232323";
var DEFAULT_BANNER = "steelblue";

//
// MODEL
//
// Color generation and choice
function rand255() {
	return Math.floor(Math.random() * 255)
}
function randRGB() {
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
function pickGoal() {
	var randNum = Math.floor(Math.random() * colors.length)
	return colors[randNum];
}
// Global Game Constants
var colors = makeColors(6);
var goalColor = pickGoal(colors);



//
// VIEW
//
// Selections
var squares = document.querySelectorAll(".square");
var newGameButton = document.querySelectorAll("#stripe button")[0];
var goalDisplay = document.querySelector("h1 span");
var topBanner = document.querySelector("h1");
var easyButton = document.querySelectorAll("#stripe button")[1]
var hardButton = document.querySelectorAll("#stripe button")[2]

// IO Functions
function win() {
	// Set all boxes to winning color
	for(var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = goalColor;
	}
	// Set top banner's color to winning color
	topBanner.style.backgroundColor = goalColor;

	// Ask to play again
	newGameButton.textContent = "Play Again?"
}
function setView() {
	//
	// UNDO WIN EFFECTS
	//
	// Reset Goal and Top Banner
	goalDisplay.textContent = goalColor;
	topBanner.style.backgroundColor = DEFAULT_BANNER;

	// Clear Message
	displayMessage("");

	// Set Play Again Button to "New Colors"
	newGameButton.textContent = "New Colors";

	//
	// START NEW GAME
	//
	// Show/hide colors and set colors
	for(var i = 0; i < squares.length; i++) {
		if(i < colors.length){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			// If not enough colors
			squares[i].style.display = "none";
		}
		
	}
}
function displayMessage(message) {
	document.querySelector("#message").textContent = message;
}
function showEasyDifficulty() {
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
}
function showHardDifficulty() {
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
}



//
// CONTROLLER
//
// Choice event listeners
for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		// Win condition
		if(this.style.backgroundColor === goalColor) {
			displayMessage("Correct!");
			win();
		} else {
			this.style.backgroundColor = DEFAULT_BACKGROUND;
			displayMessage("Try Again")
		}
	});
}
// Game Reset
newGameButton.addEventListener("click", newGame);
// Change Difficulty Easy
easyButton.addEventListener("click", function() {
	showEasyDifficulty();
	colors = makeColors(3);
	newGame();
});
// Change Difficulty Hard
hardButton.addEventListener("click", function() {
	showHardDifficulty();
	colors = makeColors(6);
	newGame();
});

// Start new game
function newGame() {
	// Set Model
	colors = makeColors(colors.length);  // preserve # choices
	goalColor = pickGoal(colors);

	// Set View
	setView();
}

newGame();
