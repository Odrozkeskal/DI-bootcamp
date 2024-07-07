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

// Arrow function to display groceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

// Arrow function to clone groceries
const cloneGroceries = () => {
    let user = client; // Create a copy of the client variable (primitive)
    client = "Betty"; // Change the client variable

    let shopping = { ...groceries }; // Shallow copy of groceries object
    shopping.totalPrice = "$35"; // Modify totalPrice in shopping
    shopping.other.paid = false; // Modify paid in shopping

    // Log statements to observe changes
    console.log("Modified client:", client);
    console.log("Modified user:", user); // Should still log "John"
    console.log("Modified groceries:", groceries); // Should log the original groceries
    console.log("Modified shopping:", shopping); // Should log the modified shopping object
};


displayGroceries();


cloneGroceries();