var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.render("home");
})


var friends = ["James", "Jojo", "Ecka"];
app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});

app.post("/addfriend", function(req, res) {
    friends.push(req.body.name);
    res.redirect("/friends")
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started.");
});
