const path = require('path');
const folderName = path.join(__dirname, 'files');
const copyFolderName = path.join(__dirname, 'files-copy');
const { mkdir, readdir, copyFile, unlink } = require('fs/promises');

const copyDir = () => mkdir(copyFolderName, { recursive: true });

const cleanFolder = () => {
    readdir(copyFolderName).then(files => {
        files.forEach(file => {
            unlink(path.join(copyFolderName, file))
            console.log('Файл успешно удален');
        })
    })
}
const copyFiles = () => {
    readdir(folderName).then(files => {
        files.forEach(file => {
        copyFile(path.join(folderName, file), path.join(copyFolderName, file))
            console.log('Файл успешно копирован')
        })
    })
    
}

copyDir()
.then(() => cleanFolder())
.then(() => copyFiles())
.catch(error => {throw error});


// fs.mkdir(copyFolderName, { recursive: true }, (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
// })
// fs.readdir(copyFolderName, (err, files) => {
//         files.forEach(file => {
//             fs.promises.unlink(path.join(copyFolderName, file))
//             console.log('Файл успешно удален');
//         })
//     })
// fs.readdir(folderName, (err, files) => {
//     if (err) {
//       console.error(err)
//       return
//     }   
//     files.forEach(file => {
//         fs.copyFile(path.join(folderName, file), path.join(copyFolderName, file), (err) => {
//             if (err) {
//                 console.error(err)
//                 return
//             }
//             console.log('Файл успешно копирован')
//         });
//     })
// })


