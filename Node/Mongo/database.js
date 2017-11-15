var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cats", { useMongoClient: true });

var catSchema = mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// Real cat
// Cat.create({
//     name: "Aristotle",
//     age: 1,
//     temperament: "(not so) Independent, Crazy Kitten"
// }, function(err, cat) {
//     console.log("Adding Cat");
//     if(err) {
//         console.log("Error: " + err);
//     } else {
//         console.log("Added: " + cat);
//     }
// });


Cat.find({}, function(err, cats) {
    console.log("Listing Cats");
    if(err) {
        console.log("Error: " + err);
    } else {
        cats.forEach(function(cat) {
            console.log(cat.name + " (" + cat.age + ") is " + cat.temperament);
        });
    }
    mongoose.disconnect();
});
