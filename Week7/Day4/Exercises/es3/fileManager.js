const fs = require('fs');

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file ${filePath}:`, err);
            callback(err);
            return;
        }
        console.log(`Successfully wrote to ${filePath}`);
        callback(null);
    });
}

module.exports = {
    readFile,
    writeFile
};