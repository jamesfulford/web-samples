
//
// Dropdown entry box
//
$("#container h1 i.fa").on("click", function() {
	$("#container input[type=\"text\"]").fadeToggle(200);
});

//
// Mark done
//
$("#container ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

//
// Remove todo
//
$("#container ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//
// Add todo
//
// defining some decorators
function sandwich(pre, post = "") {
	return function(fn) {
		return function() {  // functions all the way down...
			return pre + fn(...arguments) + post;
		}
	}
}
function inA(tag) {
	return sandwich("<" + tag + ">", "</" + tag + ">");
}
var inAn = inA; // for the grammar police

// Craft todo html
// @inA("li")
// @sandwich("<span>X</span> ", "")
makeTodo = text => text;
makeTodo = sandwich("<span><i class=\"fa fa-times\"></i></span> ")(makeTodo);
makeTodo = inA("li")(makeTodo);

function add(text) {
	$("#container ul").append(makeTodo(text));
}

$("#container input[type=\"text\"]").keypress(function(event) {
	if(event.which === 13) {
		add($(this).val());  // issue with html input?
		$(this).val("");  // clear
	}
});

