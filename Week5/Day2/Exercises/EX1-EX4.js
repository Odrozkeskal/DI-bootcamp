// EX1

// let sum = 0;
// function displayNumbersDivisible() {
//     for(let i = 0; i <= 500; i++){
//         if(i % 23 == 0){
//             console.log(i)
//             sum += i;
//         }
//         }
//         console.log(sum);
// }

// displayNumbersDivisible()

// let sum = 0;
// function displayNumbersDivisible(divisor){
//     for(let i = 0; i <= 500; i++){
//         if(i % divisor == 0)
//             console.log(i)
//             sum += i
//             console.log(sum);
        
//     }
// }
// displayNumbersDivisible(45)

/**=================================================================================================================== */
//EX2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }

// let shoppingList = ["banana","orange","apple","blueberry"]

// function myBill(){
//     let totalPrice = 0;
//    for(let j of shoppingList){

//    if(j in stock && stock[j] != 0){
  
//       totalPrice += prices[j]
//       stock[j] -= 1

// }
// }
// console.log(totalPrice);
// console.log(stock);
// }

// myBill()

/**=================================================================================================================== */
// EX3

// function  changeEnough(itemPrice, amountOfChange){

//     const quartersValue = amountOfChange[0] * 0.25;
//     const dimesValue = amountOfChange[1] * 0.10;
//     const nickelsValue = amountOfChange[2] * 0.05;
//     const penniesValue = amountOfChange[3] * 0.01;
    
   
//     const totalChange = quartersValue + dimesValue + nickelsValue + penniesValue;
    
    
//     if (totalChange >= itemPrice) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(changeEnough(4.25, [25, 20, 5, 0]));  
// console.log(changeEnough(14.11, [2, 100, 0, 0])); 
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

/**=================================================================================================================== */
// EX4

// function hotelCost() {
//     var duration;
//     var nightCost = 140;

//     do {
//         duration = parseInt(prompt("Enter the duration of staying in the hotel"));
//     } 
//     while (!isCorrectDuration(duration));

//     let totalPrice = duration * nightCost;
//     return totalPrice; 
// }

// function isCorrectDuration(duration) {
//     return !isNaN(duration) && duration > 0 && duration != null;
// }

// var totalCost = hotelCost();
// console.log("Total Price:", totalCost); 

// function planeRideCost(){
//     var destination;
//     var flyingPrice;
    
//     do {
//         destination = prompt("Enter the destination of flying");
//     }
//     while(!isCorrectDestination(destination));

//     if(destination === "London"){
//          flyingPrice = 183;
//     }
//     else if (destination === "Paris") {
//          flyingPrice = 220;
//     } else {
//         flyingPrice = 300;
//     }
//     return flyingPrice
// }

// function isCorrectDestination(destination){
//     return isNaN(destination) && destination != null;
// }
// var totalFlyingCost = planeRideCost();
// console.log(`Flying cost: ${totalFlyingCost}$`);

// function rentalCarCost(){
//     var carRentDuration;
//     var rentPrice = 40;
//     var totalRentPrice;

//     do {
//         carRentDuration = parseInt(prompt("Enter the duration of car rent"));

//     }
//     while(!isCorrectRentDuration(carRentDuration));
    
//     totalRentPrice = carRentDuration * rentPrice;

//     if(carRentDuration > 10){

//         let discount = totalRentPrice * 0.05
//         totalRentPrice = totalRentPrice - discount;
//     }

//     return totalRentPrice
// }

// function isCorrectRentDuration(carRentDuration){
//     return !isNaN(carRentDuration) && carRentDuration > 0 && carRentDuration != null;
// }

// var totalCarRentCost = rentalCarCost();
// console.log(`Total car rental cost: ${totalCarRentCost}$`);

// function totalVacationCost(){
//     console.log(`The car cost: ${totalCarRentCost}$. The hotel cost: ${totalCost}$. Plane tickets cost: ${totalFlyingCost}$`);
// }
// totalVacationCost()

/**=================================================================================================================== */
