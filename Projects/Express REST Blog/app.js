var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

mongoose.connect("mongodb://localhost/restful_blog");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);


// Blog.create({
//    title: "Sample Blog 1",
//     image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjL2-Ga9snXAhUBMyYKHXneAwwQjRwIBw&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACabin_Camp_3_PRWI.JPG&psig=AOvVaw1DHFpoiRNxGDVY-CrNNwBg&ust=1511156320506927",
//     body: "Welcome to my blog"
// });

app.get("/", function(req, res) {
    res.redirect("/blogs");
})

//
// Blogs
//
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});
app.get("/blogs/new", function(req, res) {
    res.render("new");
});
app.post("/blogs", function(req, res) {
    Blog.create(req.body.blog, function(err, blog) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect("/blogs/" + blog._id);
        }
    });
});
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        if(err) {
            res.redirect("/blogs")
        } else {
            res.render("show", { blog: blog });
        }
    });
});
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", blog);
        }

    });
    res.render("edit");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Blog is up!");
});
