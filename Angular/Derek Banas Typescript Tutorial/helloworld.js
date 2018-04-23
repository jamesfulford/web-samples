var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Optional Type declarations
var myName = "James";
var myAge = 2;
var isTall = true;
var isReallyTall = "Not NBA level";
var james = "Testing"; // it really is optional
document.getElementById("console").innerHTML = "My name is " + james;
// LET versus VAR
var abacus = 8;
if (abacus > 1) {
    var abacus_1 = 1; // changes only in this block
    // manipulating scope in fun ways!
    console.log(abacus_1); // logs 1
}
console.log(abacus); // actually logs 8
var varbicus = 8;
if (varbicus > 1) {
    var varbicus = 1; // changes everywhere
    console.log(varbicus); // logs 1
}
console.log(varbicus); // logs 1
var myFlight = {
    engines: 8,
    callsign: "ABCD"
};
document.write("Flight " + myFlight.callsign + " has " + myFlight.engines + " engines.");
// Again, this new functionality is optional
var otherFlight = {
    engines: 2,
    callsign: "helloworld8778"
};
document.write("Flight " + otherFlight.callsign + " has " + otherFlight.engines + " engines.");
var allFlights = [
    {
        engines: 4,
        callsign: "VV2"
    },
    {
        engines: 3,
        callsign: "doomsday"
    }
];
for (var i in allFlights) { // i is index
    // this can act weird sometimes, if typescript compiles a for...in loop into
    // a JS for...in loop, which I have seen happen.
    // https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea?rq=1
    console.log(i);
}
for (var _i = 0, allFlights_1 = allFlights; _i < allFlights_1.length; _i++) {
    var plane = allFlights_1[_i];
    // tried var plane: Airplane of allFlights: left side of for...of cannot
    // use type annotation. :(
    console.log(plane.callsign);
}
// allFlights.push(8)  // difference is optional type enforcement
function dot(arr1, arr2) {
    var temp = [];
    for (var i = 0; i < arr1.length; i++) { // when this was a for...in loop,
        // I saw it compile straight into a for...in loop, which has issues in
        // some forms of Javascript
        // https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea?rq=1
        temp[i] = arr1[i] * arr2[i];
    }
    return temp.reduce(function (a, c) { return a + c; });
}
console.log(dot([5, 2], [1, -2])); // 1
function maximum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (a, c) {
        if (a >= c) {
            return a;
        }
        return c;
    });
}
console.log(maximum(3, 3, 5, 21, 9));
var Rain = /** @class */ (function () {
    function Rain(count, color) {
        if (count > Rain.maxDrops) {
            throw new Error("Too many drops of rain");
        }
        this.intensity = count;
        this.color = color;
    }
    Object.defineProperty(Rain.prototype, "intensity", {
        get: function () {
            return this._intensity;
        },
        set: function (newVal) {
            if (newVal > Rain.maxDrops) {
                throw new Error("Too many drops of rain");
            }
            this._intensity = newVal;
        },
        enumerable: true,
        configurable: true
    });
    Rain.prototype.makeItRain = function () {
        this.intensity++; // does this trigger the setter?
    };
    Rain.maxDrops = 10000; // belongs to the class, not the instances
    return Rain;
}());
var prince = new Rain(10000, "purple");
console.log(prince.intensity);
// prince.makeItRain();  // yes, incrementation does trigger setter logic
console.log(prince.intensity);
var PurpleRain = /** @class */ (function (_super) {
    __extends(PurpleRain, _super);
    function PurpleRain(count) {
        return _super.call(this, count, "purple") || this;
    }
    return PurpleRain;
}(Rain));
var superbowl = new PurpleRain(42);
console.log(superbowl instanceof Rain); // yes
console.log(superbowl instanceof PurpleRain); // yes
console.log("intensity" in superbowl); // yes
console.log("color" in superbowl); // yes
function getType(val) {
    val.makeItRain();
    return val;
}
console.log(getType(superbowl));
var DualWielder = /** @class */ (function () {
    function DualWielder(onLeft, onRight) {
        this.onLeft = onLeft;
        this.onRight = onRight;
        this.left = onLeft;
        this.right = onRight;
    }
    DualWielder.prototype.shoot = function () {
        this.left.makeItRain();
        this.right.makeItRain();
    };
    return DualWielder;
}());
var ranger = new DualWielder(superbowl, prince);
// ranger.shoot()  // raises an error because prince has too many drops of rain
var values = { x: 2, y: 8, z: 19 };
var x = values.x, y = values.y, z = values.z; // unpacks values
console.log("Values" + x + y + z); // coerced to string because starts with string
// Format strings
console.log("Value of x is " + x);
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["South"] = 0] = "South";
    Directions[Directions["East"] = 0] = "East";
    Directions[Directions["West"] = 0] = "West";
})(Directions || (Directions = {}));
console.log(Directions.North);
