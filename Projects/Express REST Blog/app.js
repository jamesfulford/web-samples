var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressSanitizer = require("express-sanitizer");
var methodOverride = require("method-override");
var express = require("express");
var app = express();

mongoose.connect("mongodb://localhost/restful_blog", { useMongoClient: true });
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer()); // after bodyParser

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
});

//
// Blogs
//
app.get("/blogs", function(req, res) {
    console.log("GET blogs");
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
    console.log("GET blogs/new");
    res.render("new");
});
app.post("/blogs", function(req, res) {
    console.log("POST blogs");
    req.body.blog.body = req.sanitize(req.body.blog.body);
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
    console.log("GET blogs/:id", req.params.id);
    Blog.findById(req.params.id, function(err, blog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", { blog: blog });
        }
    });
});
app.get("/blogs/:id/edit", function(req, res) {
    console.log("GET blogs/:id/edit", req.params.id);
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", { blog: foundBlog });
        }
    });
});
app.put("/blogs/:id", function(req, res) {
    console.log("PUT blogs/:id", req.params.id);
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});
app.delete("/blogs/:id", function(req, res) {
    console.log("DELETE /blogs/:id", req.params.id);
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            console.log(err);
        } else {
            // pass
        }
        res.redirect("/blogs");
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Blog is up!");
});
