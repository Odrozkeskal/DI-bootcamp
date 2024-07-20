const fs = require('fs');

function readFileContent() {
    fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:');
        console.log(data);
    });
}

module.exports = readFileContent;