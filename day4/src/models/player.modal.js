const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  age: { type: Number },
  club: {
    type: String,
  },
  salary: {
    type: Number,
  },
  nationalty: { type: String },
});
const playerModel = mongoose.model('playerModel',playerSchema)
module.exports = playerModel;