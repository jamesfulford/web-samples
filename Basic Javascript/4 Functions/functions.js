
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

function printReverse(list) {
	for(var i = list.length; i >= 0; i--) {
		console.log(list[i]);
	}
}

function isUniform(list) {
	for(var i = 1; i < list.length; i++) {
		if(list[0] !== list[i]) {
			return false;
		}
	}
	return true;
}


function sumArray(numbers) {
	return numbers.reduce((a, b) => a + b)
}

function max(numbers) {
	if(numbers.length) {  // returns undefined otherwise
		return numbers.reduce(function(a, b) {
			if(a > b) {
				return a;
			}
			return b;
		});
	}	
}


function forEach(fn, list) {
	for(var i = 0; i < list.length; i++) {
		fn(list[i], i, list);
	}
}



tests = [

	isEven(42) === true,
	isEven(41) === false,
	factorial(0) === 1,
	factorial(4) === 24,
	kebabToSnake("hi") === "hi",
	kebabToSnake("hi-there-partner") === "hi_there_partner",
	isUniform(["a", "a", "a"]) === true,
	isUniform(["a", 1, "a"]) === false,
	isUniform(["1", 1]) === false,
	sumArray([1, 2, 3]) === 6,
	sumArray([1, 2, -3]) === 0,
	sumArray([10, 11, 12]) === 33,
	max([1, 3, 6]) === 6,
	max([1, 3, -6]) === 3,
	max([1]) === 1,
	max([]) === undefined,

]

tests.forEach(function(result, i) {
	if(!result) {
		console.log("Test " + i + " failed");
	}
})

console.log("Tests passed: " + tests.reduce((p, q) => p && q))
