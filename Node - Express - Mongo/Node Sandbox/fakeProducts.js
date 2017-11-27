var faker = require("faker");
faker.locale = "en_BORK"

for(var i = 10; i > 0; i--) {
    console.log(faker.fake("{{commerce.productName}}: ${{commerce.price}}"))
}
