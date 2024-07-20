const fileManager = require('./fileManager');

const helloWorldFile = 'Hello World.txt';
const byeWorldFile = 'Bye World.txt';

fileManager.readFile(helloWorldFile, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Content of Hello World.txt:', data);
    

    const contentToWrite = 'Writing to the file';
    fileManager.writeFile(byeWorldFile, contentToWrite, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log(`Successfully wrote "${contentToWrite}" to ${byeWorldFile}`);
    });
});