const express = require("express");
const playerModel = require("./../models/player.modal");
const router = express.Router();

router.post("/player", (req, res) => {
  let playerDataObj = req.body;
  const player = new playerModel(playerDataObj);


  //   let player = new playerModel({
  //     name: "ahmed",
  //     number: 20,
  //     age: 25,
  //     postion: "center",
  //     club: "alahly",
  //     salary: 50000,
  //     nationalty: "egyptian",
  //   });
  try {
    player.save();
    res.send(playerDataObj);
  } catch (error) {
    res.send(error);
  }
});

router.get("/get-all-players", async (req, res) => {
  let playerList = playerModel
    .find({})
    .populate("club")
    .exec((err, data) => {
      console.log(data);
      res.json(data);
    }); 
  
});

router.post('/update-many-player',async (req,res) => {
  const updated =await playerModel.updateMany(req.body.old,req.body.new)
  res.json(updated)
})
router.post('/update-one-player',async (req,res) => {
  const updated =await playerModel.updateOne(req.body.old,req.body.new)
  res.json(updated)
})
router.post('/delete-one-player',async (req,res) => {
  const deleted =await playerModel.deleteOne(req.body)
  res.json(deleted)
})
router.post('/delete-many-player',async (req,res) => {
  const deleted =await playerModel.deleteMany(req.body)
  res.json(deleted)
})
module.exports = router;
