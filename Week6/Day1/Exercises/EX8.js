// Part 1
// const groceries = {
//     fruits: ['Apple', 'Banana', 'Orange'],
//     vegetables: ['Carrot', 'Broccoli', 'Spinach'],
//     totalPrice: '$30',
//     paid: true
// };

// const displayGroceries = () => {
//     for (let i = 0; i < groceries.fruits.length; i++) {
//         console.log(groceries.fruits[i]);
//     }
// };

// displayGroceries();

// Part 2
const groceries = {
    fruits: ['Apple', 'Banana', 'Orange'],
    vegetables: ['Carrot', 'Broccoli', 'Spinach'],
    totalPrice: '$30',
    paid: true
};

const cloneGroceries = () => {
   
    let user = groceries; 
    
    groceries.client = "Betty"; /**Will we also see this modification in the user variable ? Why ? Answer Yes, we will see this modification in the user variable */ 
    

    let shopping = {...groceries}; // This copies the value, not the reference
    
    shopping.totalPrice = "$35"; /**Will we also see this modification in the shopping object ? Why ? Answer No, this change will not be seen in the groceries object */ 
    
    shopping.paid = false; /** Will we also see this modification in the shopping object ? Why ? Answer: No, this change will not be seen in the groceries object*/

    console.log("Modified groceries:", groceries);
console.log("Modified shopping:", shopping);
};


cloneGroceries();
