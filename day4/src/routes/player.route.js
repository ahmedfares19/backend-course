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
  player.save();
  res.send(playerDataObj);
});


router.get('/get-all-players', async (req,res) => {
   let playerList =  await playerModel.find({});
   res.json(playerList)
})
module.exports = router;
