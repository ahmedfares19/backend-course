let fs  = require('fs');

readTextFromFile = (filePath) => {
    fs.readFile(filePath , 'utf8',(err , data) => {
        console.log(data);
    })
}

module.exports = readTextFromFile