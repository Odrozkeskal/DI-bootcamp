function processInput(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else if (typeof input === 'boolean') {
        return !input;
    }
    throw new Error('Invalid input type');
}
console.log(processInput(5));
console.log(processInput('hello'));
console.log(processInput(true));
console.log(processInput(false));