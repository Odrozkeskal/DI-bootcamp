const fs = require('fs');

const sourceFilePath = './source.txt';
const destinationFilePath = './destination.txt';  

fs.readFile(sourceFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  fs.writeFile(destinationFilePath, data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log(`Content from ${sourceFilePath} has been copied to ${destinationFilePath} successfully.`);
  });
});