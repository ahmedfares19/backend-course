const express = require("express");
const bodyParser = require('body-parser')
const server = express();
require('./db/mongo')
const playerRouter = require('./routes/player.route')
server.use(bodyParser.json());
server.use(playerRouter)

const PORT = 5000

server.get('/', (req, res) => {

    res.send("serve is running")
})

server.listen(PORT, () => {
    console.log(`server is up on http:\\localhost:${PORT}`);
})

