// function printFullName(objUser){
//     const {first, last} = objUser
//     console.log(`Your full name is ${first} ${last}`);
// }
// printFullName({first: 'Elie', last:'Schoppik'})

// function objToArray(object){
//    const entries = Object.entries(object);
//    const keys = [];
//    const values = [];

//    entries.forEach((entry)=>{
//     keys.push(entry[0]);
//     values.push(entry[1]);
//    })
//    return [keys,values]
// }
// const output = objToArray({ a: "Apple", b: "Microsoft", c: "Google" })
// console.log(output);

// class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     increment() {
//       this.count++;
//     }
//   }
  
//   const counterOne = new Counter();
//   counterOne.increment(); //count now is 1
//   counterOne.increment(); //count now is 2
  
//   const counterTwo = counterOne;
//   counterTwo.increment(); //count now is 3
  
//   console.log(counterOne.count); //output will be 3

//counterOne.increment() is called twice. After each call, counterOne.count is incremented by 1.
//After counterOne.increment() (called twice), counterOne.count becomes 2. Then counterTwo.increment(); where counterTwo = 2; because counterTwo = counterOne;
//so counterOne.count now is 3
/**=================================================================================================================================================== */
class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
  const pet = new Flamingo();

  //Output will be "I'm pink. 🌸" 
//                 "I'm a bird. 🦢"


// Because in Flamingo class console.log("I'm pink. 🌸"); is upper than super()