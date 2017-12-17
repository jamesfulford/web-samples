var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    PLM = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/secretpage", { useMongoClient: true });
var User = require("./models/user");


var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "AristotleIsBestCatEvah",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//
// Routes
//

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.post("/register", function(req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secret");
            });
        }
    });
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        console.log("Logged in");
        return next();
    }
    console.log("Not logged in");
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Started Server!");
});
