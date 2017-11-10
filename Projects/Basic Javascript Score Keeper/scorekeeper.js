

var play1 = document.querySelector("#p1");
var play1Score = 0;
var p1ScoreBox = document.querySelector("#p1Score");

var play2 = document.querySelector("#p2");
var play2Score = 0;
var p2ScoreBox = document.querySelector("#p2Score");

var resetButton = document.querySelector("#reset");
var gameOver = false;

var winningScoreInput = document.querySelector("input");
var winningScoreBox = document.querySelector("#winning-score");
var winningScore = 5;

play1.addEventListener("click", function() {
	if(!gameOver){
		play1Score++;
		p1ScoreBox.textContent = play1Score;
		if(play1Score >= winningScore) {
			p1ScoreBox.classList.add("won");
			gameOver = true;
		}
	}
})

play2.addEventListener("click", function() {
	if(!gameOver){
		play2Score++;
		p2ScoreBox.textContent = play2Score;
		if(play2Score >= winningScore) {
			p2ScoreBox.classList.add("won");
			gameOver = true;
		}
	}
})

function reset() {
	gameOver = false;
	play1Score = play2Score = 0;

	p1ScoreBox.classList.remove("won");
	p1ScoreBox.textContent = 0;
	p2ScoreBox.classList.remove("won");
	p2ScoreBox.textContent = 0;

}


resetButton.addEventListener("click", reset)

winningScoreInput.addEventListener("change", function() {
	winningScore = Number(this.value);
	winningScoreBox.textContent = winningScore;
	reset();
})
