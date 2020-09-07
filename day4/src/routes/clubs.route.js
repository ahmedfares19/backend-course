const express = require("express");
const clubModel = require("./../models/clubs.modal");
const router = express.Router();

router.post("/club", (req, res) => {

    let clubDataObj = req.body;
    const club = new clubModel(clubDataObj);

    club.save();
  res.send(club);
});


router.get('/get-all-clubs', async (req,res) => {
   let clubList =  await clubModel.find({});
   res.json(clubList)
})
router.post('/update-many-club',async (req,res) => {
  const updated =await clubModel.updateMany(req.body.old,req.body.new)
  res.json(updated)
})
router.post('/update-one-club',async (req,res) => {
  const updated =await clubModel.updateOne(req.body.old,req.body.new)
  res.json(updated)
})
router.post('/delete-one-club',async (req,res) => {
  const deleted =await clubModel.deleteOne(req.body)
  res.json(deleted)
})
router.post('/delete-many-club',async (req,res) => {
  const deleted =await clubModel.deleteMany(req.body)
  res.json(deleted)
})

module.exports = router;
