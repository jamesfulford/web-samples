var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ] // embedded one-to-many association
});

var User = mongoose.model("User", userSchema);

module.exports = User;
