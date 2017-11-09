
var movies = [
	{
		"title": "Inception",
		"rating": 5,
		"hasWatched": true
	},
	{
		"title": "Love Comes Softly",
		"rating": 3.5,
		"hasWatched": true
	},
	{
		"title": "Mad Max",
		"rating": 2.5,
		"hasWatched": false
	},
]


console.log("Getting movie statuses:")
movies.forEach(function(movie) {
	if(movie.hasWatched) {
		var watched = "seen";
	} else {
		var watched = "not seen";
	}
	console.log("You have " + watched + " \"" + movie.title + "\" - " + movie.rating + " stars")
});
