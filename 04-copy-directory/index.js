const fs = require('fs');
const path = require('path');
const folderName = path.join(__dirname, 'files');
const copyFolderName = path.join(__dirname, 'files-copy');

fs.mkdir(copyFolderName, { recursive: true }, (err) => {
    if (err) {
        console.error(err)
        return
    }
})
fs.readdir(copyFolderName, (err, files) => {
        files.forEach(file => {
            fs.promises.unlink(path.join(copyFolderName, file))
            console.log('Файл успешно удален');
        })
    })
fs.readdir(folderName, (err, files) => {
    if (err) {
      console.error(err)
      return
    }   
    files.forEach(file => {
        fs.copyFile(path.join(folderName, file), path.join(copyFolderName, file), (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log('Файл успешно копирован')
        });
    })
})


// if (!fs.access(copyFolderName)) {
//     fs.mkdir(copyFolderName, { recursive: true }, (err) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//     })
   
// } else {

     
// }
