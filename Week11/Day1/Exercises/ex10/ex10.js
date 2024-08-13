function greet(name, greeting) {
    var defaultGreeting = 'Hello';
    var greetingMessage = greeting === undefined ? defaultGreeting : greeting;
    return "".concat(greetingMessage, ", ").concat(name, "!");
}
// Примеры использования функции
console.log(greet('Alice'));
console.log(greet('Bob', 'Hi'));
console.log(greet('Charlie', undefined));
