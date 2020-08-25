const generateText = require("./getString");
const writeFile = require("./writeFile");
const readFile = require("./readFile");

let filePath = "textFile.txt";

list = ['ahmed','fares','20','cairo']
// console.log('name','age','asd');
let text = generateText(...list);
writeFile(filePath, text);
readFile(filePath);
