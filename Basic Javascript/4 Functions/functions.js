
function isEven(val) {
	return val % 2 === 0;
}

function factorial(val) {
	if(val === 0) {
		return 1;
	}
	return val * factorial(val - 1);
}

function kebabToSnake(text) {
	return text.split("").map(function(s) {
		if(s === "-") {
			return "_";
		}
		return s;
	}).join("")
}

console.log("isEven(42) => " + isEven(42));
console.log("isEven(41) => " + isEven(41));

console.log("factorial(0) => " + factorial(0));
console.log("factorial(4) => " + factorial(4));

console.log("kebabToSnake(\"hi\") => " + kebabToSnake("hi"))
console.log("kebabToSnake(\"hi-there-partner\") => " + kebabToSnake("hi-there-partner"))
