
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
var goalDisplay = document.querySelector("#rgb-display");
var topBanner = document.querySelector("h1");

var stripeButtons = document.querySelectorAll("div#stripe button");

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
	// PREPARE FOR NEW GAME
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
function selectDifficulty(button) {
	for(var i = 1; i < stripeButtons.length; i++) {
		stripeButtons[i].classList.remove("selected");
	}
	button.classList.add("selected");
}



//
// CONTROLLER
//
// Set initial event listeners
function init() {
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
	// Change Difficulty Listeners
	for(var i = 1; i < stripeButtons.length; i++) {
		stripeButtons[i].addEventListener("click", function() {
			selectDifficulty(this);
			colors = makeColors(Number(this.getAttribute("data-choices")));
			newGame();
		});
	}
}
// Start new game
function newGame() {
	// Set Model
	colors = makeColors(colors.length);  // preserve # choices
	goalColor = pickGoal(colors);

	// Set View
	setView();
}

init();
newGame();
