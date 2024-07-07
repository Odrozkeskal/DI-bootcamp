//EX2
// function winBattle(){
//     return true;
// }

// const winBattle = () => {return false};
// const experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints);

//EX3

// const isIstring = (value) => {if (typeof value === 'string') {
//     return true; }
//     else {
//       return false;
//     }};

    
// console.log(isIstring('Hello'));
// console.log(isIstring(10));

//EX4

// const summary = (num1, num2) => {let sum =num1 + num2; return sum};

// console.log(summary(2, 3));

//EX5

// Function Declaration
function kgToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
}


console.log(kgToGramsDeclaration(5));

// Function Expression
const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};

console.log(kgToGramsExpression(5));  