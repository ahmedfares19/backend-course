const http = require('http');


http.createServer((req , res) => {
    if(req.url == '/') {
        let sum = 5 + 6
        res.write(`sum is ${sum}`)
        res.end();
        return
    } else if(req.url == '/home') {
        res.write(`welcome home !!!!`)
        res.end();
        return
    }
   
}).listen('8000',() => {
    console.log('serve is running on 8000');
})