const express = require("express");
const app = express();
const path = require("path");

data = {
  name: "ahmed",
  address: "cairo 10th street",
};
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/get-data", function (req, res) {
  res.json(data);
});
app.listen(3000);
