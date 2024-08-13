function getDetails(name: string, age: number): [string, number, string] {
    let message = `Hello, my name is ${name} and I am ${age} years old.`;
    return [name, age, message];
}

const [personName, personAge, greetingMessage] = getDetails("Bob", 30);
console.log(personName);  
console.log(personAge);    
console.log(greetingMessage); 
