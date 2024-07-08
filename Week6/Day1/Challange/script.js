let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};


const displayGroceries = (arr) => {
    for(let fruit of arr) {
        console.log(fruit);
    };
};
displayGroceries(groceries["fruits"]);
displayGroceries(groceries.vegetables);
displayGroceries(groceries.other.meansOfPayment);


const cloneGroceries = () => {
    let user = client; 
    client = "Betty"; 

    let shopping = { ...groceries }; 
    shopping.totalPrice = "$35"; 
    shopping.other.paid = false; 

   
    console.log(client);
    console.log(user); 
    console.log(groceries); 
    console.log(shopping); 
};


// displayGroceries();


cloneGroceries();