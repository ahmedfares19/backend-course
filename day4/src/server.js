const express = require("express");
const bodyParser = require('body-parser')
const server = express();
require('./db/mongo')
const playerRouter = require('./routes/player.route')
const clubRouter = require('./routes/clubs.route')

server.use(bodyParser.json());
server.use(playerRouter)
server.use(clubRouter)
const PORT = 5000

server.get('/', (req, res) => {

    res.send("serve is running")
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

