import chalk from 'chalk';

console.log(chalk.blue('Hello, ') + chalk.green('world!'));
console.log(chalk.bold.yellow.bgRed('So,e yellow words on red background.'));

// I tryed with const chalk = require('chalk'); but it didn't works. So I renamed file into app.mjs, then chenged line first line of code to  "import chalk from 'chalk';"
// node --experimental-modules app.mjs in terminal to activate code