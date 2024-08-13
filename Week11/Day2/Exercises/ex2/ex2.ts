interface Vehicle {
    make: string;
    model: string;
    start(): string;
}

interface Car extends Vehicle {
    numberOfDoors: number;
}

class Sedan implements Car {
    make: string;
    model: string;
    numberOfDoors: number;

    constructor(make: string, model: string, numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }

    start(): string {
        return `The ${this.make} ${this.model} is starting.`;
    }
}


const myCar = new Sedan('Toyota', 'Camry', 4);
console.log(myCar.start());         
console.log(myCar.numberOfDoors);   
