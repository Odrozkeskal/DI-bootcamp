var Sedan = /** @class */ (function () {
    function Sedan(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    Sedan.prototype.start = function () {
        return "The ".concat(this.make, " ").concat(this.model, " is starting.");
    };
    return Sedan;
}());
var myCar = new Sedan('Toyota', 'Camry', 4);
console.log(myCar.start());
console.log(myCar.numberOfDoors);
