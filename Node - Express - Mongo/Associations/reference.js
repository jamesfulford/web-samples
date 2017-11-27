var mongoose = require("mongoose");
var Post = require("./models/post.js");
var User = require("./models/user.js");
mongoose.connect("mongodb://localhost/blog_demo_references", { useMongoClient: true });


// Adding new user
// var newUser = new User({
//     email: "charlie@gmail.com",
//     name: "Charlie Brown",
//     // no posts
// });
// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// Adding new post
// Post.create({
//     title: "No, that wasn't worth a dime either",
//     content: "Not even a little close."
// }, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         User.findOne({ email: "charlie@gmail.com" }, function(err, user) {
//             if(err) {
//                 console.log(err);
//             } else {
//                 user.posts.push(post._id);
//                 user.save(function(err, user) {
//                     if(err) {
//                         console.log(err);
//                     } else {
//                         console.log(user);
//                     }
//                 });
//             }
//         });
//     }
// });

// Modifying a User
// User.findOne({ name: "Charlie Brown" }, function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         // callback hell
//         user.posts.push({
//             title: "Seriously...",
//             content: "The Red Baron? Really?"
//         });
//         user.save(function(err, user) {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//         });
//     }
// });

// Find user, find all posts for that user (put in place)
User.findOne({ name: "Charlie Brown" }).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
