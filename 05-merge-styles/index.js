const fs = require('fs').promises;
const path = require('path');
const folderPath = path.join(__dirname, 'styles');
const bundleFilePath = path.join(__dirname, 'project-dist', 'bundle.css');
let styleFiles = [];

async function createBundle() {
    try {      
        let files = await fs.readdir(folderPath);
        for (let file of files) {
            const stats = await fs.stat(path.join(folderPath, file));

            if (stats.isFile() && path.extname(file) === '.css') {
              let styleFile = await fs.readFile(path.join(folderPath, file));
              styleFiles.push(styleFile);
            }
        }
    } catch (error) {
        console.error("Got an error trying to create bundle");
    }
}

async function writeBundle() {
    try {
         
        let start = true;
        for(let style of styleFiles) {
            if (start) {
              await fs.writeFile(bundleFilePath, style);
              start = false;
            } else {
              await fs.writeFile(bundleFilePath, style, { flag: 'a' });
            }
        }
    } catch (error) {
      console.error('Got an error trying to write a file')
    }
}

(async function () {
    await createBundle();
    await writeBundle()
})();


// By promises - to fix
// const { stat, readdir, writeFile, readFile } = require('fs/promises');
// const findFiles = () => readdir(folderPath).then(files => {
//    files.forEach(file => {
//     fs.stat(path.join(folderPath, file), (err, stats) => {
//          if (err) throw err;
  

//          if (stats.isFile() && path.extname(file) === '.css') {
//              let stylesBuffer = fs.readFile(path.join(folderPath, file));
//              console.log(stylesBuffer);
//              styles.push(stylesBuffer);
//       }
       
//     }) 
//    })

// })
   
// const writeCss = () => styleFiles.forEach(style => {
//  writeFile(boundleFilePath, style, { flag: 'a' })
// });

// findFiles()
//    .then(() =>  writeCss())
//    .catch(error => {throw error})