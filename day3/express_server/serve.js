const express = require("express");

const app = express();


app.get("/", function (req, res) {
  res.send("Hello World !!");
});


app.get("/home", (req, res) => {
  res.sendfile(__dirname + "/home.html");
});


app.get('/mohsen' , (req, res) => {

    jsonFile = {
        name:'mohsen',
        age:21,
        tel:'010023588849',
        address:{
            city:'10th of ramadan',
            area:43,
        }
    }
    res.json(jsonFile)
})
app.listen(3000);
