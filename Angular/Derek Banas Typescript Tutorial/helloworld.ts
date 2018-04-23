// Optional Type declarations
var myName: string = "James";
var myAge: number = 2;
var isTall: boolean = true;
var isReallyTall: any = "Not NBA level";
var james = "Testing";  // it really is optional

document.getElementById("console").innerHTML = "My name is " + james;

// LET versus VAR
let abacus = 8;
if(abacus > 1) {
    let abacus = 1;  // changes only in this block
    // manipulating scope in fun ways!
    console.log(abacus);  // logs 1
}
console.log(abacus); // actually logs 8

var varbicus = 8;
if(varbicus > 1) {
    var varbicus = 1;  // changes everywhere
    console.log(varbicus);  // logs 1
}
console.log(varbicus); // logs 1


// INTERFACES
interface Airplane {
    engines: number;
    callsign: string;
}
var myFlight: Airplane = {
    engines: 8,
    callsign: "ABCD"
}
document.write("Flight " + myFlight.callsign + " has " + myFlight.engines + " engines.")

// Again, this new functionality is optional
var otherFlight = {
    engines: 2,
    callsign: "helloworld8778"
}
document.write("Flight " + otherFlight.callsign + " has " + otherFlight.engines + " engines.")


var allFlights: Airplane[] = [
    {
        engines: 4,
        callsign: "VV2"
    },
    {
        engines: 3,
        callsign: "doomsday"
    }
]


for(var i in allFlights) {  // i is index
    // this can act weird sometimes, if typescript compiles a for...in loop into
    // a JS for...in loop, which I have seen happen.
    // https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea?rq=1
    console.log(i);
}


for(var plane of allFlights) {  // iterate over elements
    // tried var plane: Airplane of allFlights: left side of for...of cannot
    // use type annotation. :(
    console.log(plane.callsign);
}

// allFlights.push(8)  // difference is optional type enforcement

function dot(arr1: number[], arr2: number[]): number {
    var temp: number[] = []
    for(var i = 0; i < arr1.length; i++){  // when this was a for...in loop,
        // I saw it compile straight into a for...in loop, which has issues in
        // some forms of Javascript
        // https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea?rq=1
        temp[i] = arr1[i] * arr2[i]
    }
    return temp.reduce((a, c) => a + c)
}

console.log(dot([5, 2], [1, -2]))  // 1


function maximum(...arr: number[]): number {
    return arr.reduce((a, c) => {
        if(a >= c){return a}
        return c
    })
}
console.log(maximum(3, 3, 5, 21, 9))

interface Rainer {
    makeItRain(): void;
}

class Rain implements Rainer {
    private _intensity: number;
    public color: string;
    static maxDrops: number = 10000;  // belongs to the class, not the instances

    constructor(count: number, color: string) {
        if(count > Rain.maxDrops) {
            throw new Error("Too many drops of rain")
        }
        this.intensity = count;
        this.color = color;
    }
    get intensity(): number {
        return this._intensity;
    }
    set intensity(newVal: number): number {
        if(newVal > Rain.maxDrops) {
            throw new Error("Too many drops of rain")
        }
        this._intensity = newVal;
    }
    makeItRain(): void {
        this.intensity++;  // does this trigger the setter?
    }
}

var prince: Rain = new Rain(10000, "purple");
console.log(prince.intensity);
// prince.makeItRain();  // yes, incrementation does trigger setter logic
console.log(prince.intensity);

class PurpleRain extends Rain {
    constructor(count: number) {
        super(count, "purple");
    }
}


var superbowl: Rain = new PurpleRain(42);
console.log(superbowl instanceof Rain);  // yes
console.log(superbowl instanceof PurpleRain);  // yes
console.log("intensity" in superbowl);  // yes
console.log("color" in superbowl);  // yes








function getType<T extends Rainer>(val: T): T {
    val.makeItRain()
    return val;
}
console.log(getType(superbowl));



class DualWielder<T extends Rainer> {
    public left: T;
    public right: T;

    constructor(public onLeft: T, public onRight: T) {
        this.left = onLeft;
        this.right = onRight;
    }

    public shoot() {
        this.left.makeItRain();
        this.right.makeItRain();
    }
}

var ranger: DualWielder<Rain> = new DualWielder<Rain>(superbowl, prince);
// ranger.shoot()  // raises an error because prince has too many drops of rain


var values = {x: 2, y: 8, z: 19};
var {x, y, z} = values;  // unpacks values
console.log("Values" + x + y + z); // coerced to string because starts with string

// Format strings
console.log(`Value of x is ${x}`)


enum Directions {
    North = 0,
    South = 0,
    East = 0,
    West = 0
}

console.log(Directions.North);
