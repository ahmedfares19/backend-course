const router = require("express").Router();
const statusCode = require('./../enums/status-code.enum')

getHome = (req, res) => {
  res.status(statusCode.Successful).send("welcome Home");
};
router.get("/", getHome);


module.exports = router
