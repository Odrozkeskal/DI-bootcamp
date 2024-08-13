function greet(name: string): string;
function greet(name: string, greeting?: string): string; 

function greet(name: string, greeting?: string): string {
    const defaultGreeting = 'Hello';
    const greetingMessage = greeting === undefined ? defaultGreeting : greeting;
    return `${greetingMessage}, ${name}!`;
}

// Примеры использования функции
console.log(greet('Alice'));            
console.log(greet('Bob', 'Hi'));        
console.log(greet('Charlie', undefined)); 
