//EX1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person; // it's a destructuring assignment to extract values from the person object

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//Output will be "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)""
/**========================================================================================================================================= */
//EX2

// function displayStudentInfo(objUser){
//     const {first, last} = objUser
//     console.log(`Your full name is ${first} ${last}`);
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

/**========================================================================================================================================= */
//EX3

// const users = { user1: 18273, user2: 92833, user3: 90315 }

// // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// const entries = Object.entries(users);
// entries.forEach((entry,i)=>{
//     entries[i][1] = entry[1] * 2;
// })
// console.log(entries);
/**========================================================================================================================================= */
//EX4

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
  //It's a class with constructor method. const member - it's creating an instance of the Person class. Output will be "object"
  //because new Person('John') creates an instance of the Person class, which is an object 
/**========================================================================================================================================= */
//EX5

// Using the Dog class below:
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

//Analyze the options below. Which constructor will successfully extend the Dog class?

  // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };

//This option is incorrect, because this option attempts to define a Labrador class that extends Dog but doesn't call super() in its 
//constructor. This will result in an error because this cannot be used before super() is called in a subclass constructor.

  // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

//This option is correct. Because this option correctly extends the Dog class with Labrador, calls super(name) to initialize the name 
//property from the Dog class, and initializes its own color property. This is the correct way to extend the Dog class.

  // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

//This option is incorrect. Because calls super() without passing any arguments. Since the Dog class constructor expects a name argument, 
//this will result in this.name being undefined in instances of Labrador.

  // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };

//This option is incorrect. Because method super() missing. If we using extends, the subclass constructor must call super() before 
//accessing this. This is necessary to initialize the superclass (Dog in this case) and bind this to the subclass (Labrador). If super() 
//is not called, attempting to access this.name or any property inherited from Dog will result in an error.
/**========================================================================================================================================= */
//EX6

//Evaluate these (ie True or False)

// [2] === [2] 

//Even though both arrays contain the same value (2), they are different objects in memory. Therefore, [2] === [2] evaluates to false.

// {} === {}

//{} creates a new empty object each time it's called, so these two objects are different instances in memory. Therefore, {} === {} evaluates to false.

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// Output will be: 4, 4, 5
// object1.number is modified to 4. Since object2 and object3 reference the same object as object1, they also reflect this change. 
// So, object2.number and object3.number both become 4.

class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;


    }
    // speak(){
    //     console.log(`I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    // }
};

class Mamal extends Animal{
    constructor(name,type,color,sound){
        super(name, type, color);

        this.sound = sound;
    }
    speak(){
        console.log(`${this.sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
};
const farmerCow = new Mamal('Lylly', 'cow', 'brown and white', 'Mooooo')

farmerCow.speak();
