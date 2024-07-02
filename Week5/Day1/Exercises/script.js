// // EX1
// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift();
// people[3] = "Jason";
// people[people.length] = "Paul";
// let maryIndex = people.indexOf("Mary");
// let copyPeople = people.slice(1,4);
// let fooIndex = people.indexOf("Foo");
// let last = people.pop() // it's will delete 'Paul' element from array, and insert 'Paul' enement into last variable
// let last1 = people[people.length-1]; // different way to show the last element of array

// console.log(people);
// console.log(people);
// console.log(maryIndex);
// console.log(copyPeople);
// console.log(fooIndex); // method indexOf returns -1 if element doesn't exist in array
// console.log(last);
// console.log(last1);

// for (let i = 0; i <= people.length; i++) {
//     console.log(people[i]);
// };

// for (let i of people){ // same as above
//     console.log(i);
// };

// for(let i = 0; i <= people.length; i++){
//     console.log(people[i]);

//     if (people[i] == "Devon"){
//         break;

//     };
// };

// for(let i of people){ // same as above
//     console.log(i);
//     if(i == "Devon") {
//         break;
//     };
// };

/**
 * =================================================================================================================================================
 */
// EX2

// const colors = ['turquoise', 'orange-pink', 'green', 'purple', 'crimson'];

// var count = 0;
// var suffix = 0;

// for(let color = 0; color <= colors.length; color++){
//     count += 1;

//     if(count == 1){
//         suffix = "st";
//     }
//     else if (count == 2){
//         suffix = "nd";
//     }
//     else if (count == 3){
//         suffix = "rd";
//     }
//     else if (count <= 4){
//         suffix = "th";
//     }
//     console.log(`My ${count}${suffix} choice is: `  + colors[color]);
// };

/**
 * =================================================================================================================================================
 */
// EX3

// do {
// const userInput = prompt("Enter your number: ");
// numInput = parseInt(userInput);
// let dataType = typeof numInput;
// console.log(dataType);

// }
// while (numInput <= 10){
//     const userInput = prompt("Enter your number: ");
//     let dataType = typeof numInput;
//     console.log(dataType);
   
// }

/**
 * =================================================================================================================================================
 */
// EX4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor["firstFloor"], building.numberOfAptByFloor["thirdFloor"]);
// console.log(`Name of second tenent is: ${building.nameOfTenants[1]}, and it has: ${building.numberOfRoomsAndRent.dan[0]} rooms`);

// // console.log((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]))

// if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);

/**
 * =================================================================================================================================================
 */
// EX5

// const family = {

//     Name: "Hawks",
//     numberOfMembers: 4,
//     country: "USA",
//     city: "Ostin"

// }

// for(let i in family){
//     console.log(i)
    
// }

// for(let i in family){
// console.log(family[i])
// }

/**
 * =================================================================================================================================================
 */
// EX6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   }

//   let keys = [];
//   let values = [];
//   let result = [];

//   counter = 0;

//   for (let i in details){

//     keys.push(i);
//     values.push(details[i]);
//     let result = keys.concat(values)
//     let phrasePart = result.join(' ')
//     counter += 1;

//     if(counter ==3){
//     console.log(phrasePart)
//     }
   
    
//   }
  
/**
 * =================================================================================================================================================
 */
// EX7
  
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let firstChars = []
for(let i = 0; i < names.length; i++){

    let firstChar = names[i].charAt(0);
    firstChars.push(firstChar);
}

firstChars.sort();
let societyName = firstChars.join('');
console.log(societyName);