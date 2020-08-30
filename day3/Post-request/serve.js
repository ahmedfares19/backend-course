const express = require('express');
const server = express();
var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.post('/get-fruits', (req ,res) => {
    console.log(req.body);
    res.send('done')
})

server.listen(8080)