var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
console.log(numberStack.isEmpty());
var stringStack = new Stack();
stringStack.push('hello');
console.log(stringStack.pop());
