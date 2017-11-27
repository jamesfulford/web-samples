var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useMongoClient: true });


var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // embedded one-to-many association
});

var User = mongoose.model("User", userSchema);
var Post = mongoose.model("Post", postSchema);


// Building embedded data
// var newUser = new User({
//     email: "charlie@gmail.com",
//     name: "Charlie Brown",
// });
// newUser.posts.push({
//     title: "Good Grief...",
//     content: "Pumpkins?"
// });
// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })

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
