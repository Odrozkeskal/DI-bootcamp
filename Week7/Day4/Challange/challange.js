const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

const userName = 'Alice';
console.log(greet(userName));

displayColorfulMessage();

readFileContent();