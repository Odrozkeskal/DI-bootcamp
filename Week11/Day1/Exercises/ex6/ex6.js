function getDetails(name, age) {
    var message = "Hello, my name is ".concat(name, " and I am ").concat(age, " years old.");
    return [name, age, message];
}
var _a = getDetails("Bob", 30), personName = _a[0], personAge = _a[1], greetingMessage = _a[2];
console.log(personName);
console.log(personAge);
console.log(greetingMessage);
