const products = require('./products');

function findProductByName(productName) {
  const product = products.find(prod => prod.name === productName);
  return product;
}

console.log("Searching for 'Laptop':");
console.log(findProductByName('Laptop'));

console.log("\nSearching for 'Headphones':");
console.log(findProductByName('Headphones'));

console.log("\nSearching for 'Sunglasses':");
console.log(findProductByName('Sunglasses'));

console.log("\nSearching for 'Shoes':");
console.log(findProductByName('Shoes'));