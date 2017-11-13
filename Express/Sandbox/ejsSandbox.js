var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home.ejs");
    // res.snd("<h1>Welcome</h1>")
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {
        affection: thing,
    });
});

app.get("/posts", function(req, res) {
    res.render("posts.ejs", {
        posts: [
            {
                title: "What!?",
                author: "M. Kelly"
            },
            {
                title: "This post is fake news",
                author: "Knotty V. Enreal"
            }
        ],
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Started ejsSandbox.js:")
});
