const fs = require('fs');
const process = require('process');
const { stdin, stdout } = process;
const readline = require('node:readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

stdout.write(`Hello, type your text!\n`);

fs.open('02-write-file/mynotes.txt', 'w', (err) => {
        if(err) throw err;
});

rl.on('line', (data) => {
   if(data.toString() === 'exit') {
      rl.close()

   } else {
          
      fs.appendFile('02-write-file/mynotes.txt', `${data}\n`, (err) => {
         if(err) throw err;
      });

   }
   
})

rl.on('close', () => {
   console.log('Good Bye!');
 })

rl.on('SIGINT', () => {
  rl.close()
});






