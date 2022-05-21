const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'text.txt');
const { stdin, stdout } = process;
let data = '';
const readableStream = fs.createReadStream(pathToFile, `utf-8`);

readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => stdout.write(data));
readableStream.on(`error`, error => console.log(`Error`, error.message));




