var bodyParser = require("body-parser");
var request = require("request");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.render("home");
});

app.get("/results", function(req, res) {
    var url = "http://omdbapi.com/?"
    url += "s=" + req.query.search;
    url += "&apikey=thewdb";
    request(url, function(error, apiRes, body) {
        if(!error && apiRes.statusCode == 200) {
            res.render("results", { results: JSON.parse(body).Search })
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie app has started.");
});
