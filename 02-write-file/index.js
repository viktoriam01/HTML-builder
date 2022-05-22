const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.output.write(`Hello, type your text!\n`);

fs.open(path.join(__dirname, 'text.txt'), 'w', (err) => {
        if(err) throw err;
});

rl.on('line', (data) => {
   if(data.toString() === 'exit') {
      rl.close()
   } else {
      fs.appendFile(path.join(__dirname, 'text.txt'), `${data}\n`, (err) => {
         if(err) throw err;
      });
   }
})

rl.on('close', () => {
   console.log('Good Bye!');
 })






