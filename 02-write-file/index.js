const fs = require('fs');
const process = require('process');
const path = require('path');
const { stdin, stdout } = process;
const output = fs.createWriteStream('mynotes.txt');
const readline = require('readline');

// fs.writeFile(
//     path.join(__dirname, 'mynotes.txt'),
//     '',
//     (err) => {
//         if (err) throw err;
//         stdout.write(`Запись начата. Введите текст или закончите командой exit  или Ctrl + C\n`);
//         stdin.on('data', data => {
//             const str = data.toString();
//             if(str === 'exit') {
//                 process.on('exit', () => stdout.write('Programm finished. Have a good day!'));
//             } else {
//                 stdin.on('data', chunk => output.write(chunk));
//                 stdin.on('error', error => console.log('Error', error.message));
//                 }
     
//     });
    
//     }
// );


// let fs = require('fs');
// fs.readFile('file.txt', 'utf8', function(error, fileContent){
//    if(error) throw error; // ошибка чтения файла, если есть
//    console.log(fileContent); // содержимое файла
   
//    let toWrite = fileContent + 'Тише, мыши, кот на крыше';

//    fs.writeFile('file.txt', toWrite, function(error){
//       if(error) throw error; // ошибка чтения файла, если есть
//       console.log('Данные успешно записаны записать файл');
//    });
// });



// stdout.write('Привет, ');
//     stdout.write(data);






// process.on('exit', (code) => {
//     console.log(`About to exit with code: ${code}`);
//   });

//   function handle(signal) {
//     console.log(`Received Ctrl + C. Programm finished. Have a good day!`);
//     process.exit();
//   }
  
//   process.on('SIGINT', handle);