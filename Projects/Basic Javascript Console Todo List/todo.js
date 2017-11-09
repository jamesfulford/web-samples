
//
// Define commands
//
var handle = {
	// add item
	"new": askAndAddItem,
	"add": askAndAddItem,

	// list current items
	"list": listTodos,
	"enumerate": listTodos,
	"todos": listTodos,

	// get rid of item
	"delete": askAndRemoveItem,
	"remove": askAndRemoveItem,

	// exit (remembers list)
	"quit": quitApp,
	"exit": quitApp,

	// do nothing
	"": function() {},
	"ignore this message": function() {},

	// clear todo list
	"clear": function(todos) {
		console.log(todos);
		todos.length = 0;
	},
}

function quitApp(todos) {
	throw new Exception("Quitting");
}

function listTodos(todos) {
	todos.forEach(function(item, i) {
		console.log(i + ": " + item)
	})
	console.log("Listed " + todos.length + " todo item(s).");
	alert("Listed " + todos.length + " todo item(s).");
}

function askAndAddItem(todos) {
	var item = prompt("Add todo item");
	if(!item) {
		// either user pushed cancel
		// or did not enter anything
		// quits dialogue
	} else {
		// otherwise, add item to list
		console.log("Added " + item)
		todos.push(item);
	}
}

function askAndRemoveItem(todos) {
	var index = prompt("Which todo would you like to remove? (enter index)");
	if(index === null) {
		// user pushed cancel - exit removal dialogue
	} else if(index === "0") {
		if(index >= 0 && index < todos.length) {
			// index is in bounds
			console.log("Removed " + todos.pop(index));
		} else {
			alert("Item #" + index + " is out of bounds [0, " + todos.length + ")")
			askAndRemoveItem(todos);
		}
	} else if(index === null){

	} else {
		alert(index + " is not an index.");
		askAndRemoveItem(todos);
	}
}


//
// Main Application
//

function askForCommand() {
	var response = prompt("What would you like to do?").toLowerCase();
	// if user pushes cancel, .toLowerCase will be called on null
	// we catch that exception in main.
	if(Object.keys(handle).indexOf(response) === -1) {
		// We can't handle that command (yet). Ask again.
		alert("\"" + response + "\" is not a valid command.");
		return askForCommand();
	}
	return response;
}

var todos = []  // accessible across runnings of main

function main() {
	try {
		while(true) {
			// escape infinite loop by throwing Exception
			var response = askForCommand();
			console.log(response);  // Build a log in the console.
			handle[response](todos);
		}
	} catch(Exception) {  
		// treats as quit command
	} finally {
		console.log("Quitting...")
		console.log(todos);
		console.log("Quit successfully.");
		alert("Thank you for using Todo List.");
	}
}
