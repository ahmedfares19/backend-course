//node-modules
const express = require("express");
const bodyParser = require("body-parser");
// my modules
const statusCode = require("./enums/status-code.enum");
const config = require("./config/serve.config");
// -- routes
const basicRouter = require("./router/basic.routes");
const studentRouter = require("./router/student.route");

// calling the database connect fu1nction
require("./config/mongo.config");

const server = express();

// server port CONFIG with 8080 as default
const PORT = config.PORT || "8080";

//routes functions

get404 = (req, res) => {
  res.status(statusCode.NotFound).send("404");
};

// routes URLs
// server.get("*", get404);
// server.post("*", get404);

// router use
server.use(basicRouter);
server.use(studentRouter);
// server USE
server.use(bodyParser);
server.use(get404);

// run server on port 'PORT'
server.listen(PORT, () => {
  console.log(config.serverURL + PORT);
});

/* ********   HINTS *********** */
// listOfGETApis = ['/','/home','/contacts','*']
