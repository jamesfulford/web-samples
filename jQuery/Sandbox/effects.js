

$("button").on("click", function() {
	$(".banner").slideUp(1000, function() {
		$(this).slideDown(10000);
	});
})