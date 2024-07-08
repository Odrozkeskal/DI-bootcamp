//EX1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//   console.log(`${index + 1}# choice is ${color}.`);
// });

// if (colors.includes("Violet")) {
//   console.log("Yeah");
// } else {
//   console.log("No...");
// }
/**================================================================================================================================================ */
//EX2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((color, index) => {
//     let elOfOrdinal = index + 1; 

//     let suffix;
//         if (elOfOrdinal === 1) {
//         suffix = ordinal[1]; 
//       } else if (elOfOrdinal === 2) {
//         suffix = ordinal[2]; 
//       } else if (elOfOrdinal === 3) {
//         suffix = ordinal[3]; 
//       } else {
//         suffix = ordinal[0]; 
//       }
      
//     console.log(`${index + 1}${suffix} choice is ${color}.`);
//   });

  /**================================================================================================================================================ */
//EX3

// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

//It will be word "bread" + all elements of vagatables array, + word "chicken", + all elemtnts of fruits array

// const country = "USA";
// console.log([...country]);

//It will be [ 'U', 'S', 'A' ]

// let newArray = [...[,,]];
// console.log(newArray);

//It wiil be undefined, undefined 

  /**================================================================================================================================================ */
//EX4

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

// console.log(welcomeStudents);

// const fStackMembers = users.filter(user => user.role === 'Full Stack Resident').map(user => ` ${user.lastName}`)


// console.log(fStackMembers);

  /**================================================================================================================================================ */
//EX5

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let stringEpic = epic.reduce((words, currentWord) => {
//     return words + " " + currentWord;
// });

// console.log(stringEpic.trim());

  /**================================================================================================================================================ */
//EX6

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

    const passedDudes = students.filter(student => student.isPassed === true).map(student => `${student.name}`)

    console.log(passedDudes);

    const congratulateDudes = students.filter(student => student.isPassed === true).forEach((student, index)=> {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    });
