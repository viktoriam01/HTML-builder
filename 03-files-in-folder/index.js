const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
  files.forEach(file => {
    fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {

      if (err) {
        console.error(err)
        return
      }

      if (stats.isFile()) {
        let obj = path.parse(path.join(__dirname, 'secret-folder', file))
        console.log(`${obj.name} - ${obj.ext.toString().substring(1)} - ${stats.size}b`);
      }  
    })
  })
})