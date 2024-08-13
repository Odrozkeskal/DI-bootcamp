var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('John', 'Doe', 30, '123 Main St');
console.log(person.getFullName());
console.log(person.age);
// console.log(person.address);    
