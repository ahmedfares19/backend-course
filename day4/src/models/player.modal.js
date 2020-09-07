var mongoose = require('mongoose')
  , Schema = mongoose.Schema
const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: Number,
    },
    age: { type: Number },
    salary: {
      type: Number,
    },
    nationalty: { type: String },
    club: { type: Schema.Types.ObjectId, ref: 'Club'}
  },
  
  {
    collection: "Player",
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);
const playerModel = mongoose.model("Player", playerSchema);
module.exports = playerModel;
