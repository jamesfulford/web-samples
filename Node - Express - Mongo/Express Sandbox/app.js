var express = require("express");
var app = express();


var speaking = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof"
};

function speak(req, res) {
    var message = speaking[req.params.animal];
    console.log(message);
    res.send(message);
}

function echo(req, res) {
    var message = [];
    for(var i = 0; i < Number(req.params.times); i++) {
        message.push(req.params.say);
    }
    message = message.join(" ");
    console.log(message);
    res.send(message);
}

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.get("/speak/:animal", speak);

app.get("/repeat/:say/:times", echo);

app.get("/repeat/:say/:times", echo);

app.get("*", function(req, res) {
    res.send("Page not found!");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Starts");
});
