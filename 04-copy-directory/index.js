const fs = require('fs');
const path = require('path');
const folderName = path.join(__dirname, 'files');
const copyFolderName = path.join(__dirname, 'files-copy');


if (!fs.exists(copyFolderName)) {
    fs.mkdir(copyFolderName, { recursive: true }, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
   
} else {

     fs.readdir(copyFolderName, (err, files) => {
        if (err) {
        console.error(err)
        return
        }
        files.forEach(file => {
            fs.unlink(path.join(copyFolderName, file), (err) => {
                if (err) throw err;
                console.log('Файл успешно удален');
            });
        })
    })
}



// fs.mkdir(copyFolderName, { recursive: true }, (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
// })

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