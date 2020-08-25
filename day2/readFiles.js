let fs = require("fs");

// fs.writeFileSync("testFile.txt", "test data to file");

fs.readFile("testFile.txt", "utf8", (err, res) => {
    if(err){
        console.log('error');
        return
    }
    console.log(res);
});
