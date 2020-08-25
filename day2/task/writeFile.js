let fs = require('fs');

writeTextToFile = (pathFile,text) => {
    fs.writeFileSync(pathFile,text)
}


module.exports = writeTextToFile;