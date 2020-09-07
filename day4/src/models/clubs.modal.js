const mongoose = require('mongoose');
const clubSchema = new mongoose.Schema({
    name:String,
    nationalty:String,
    yearOfFound:Number,
    numberOfFans:Number,
    trophes:Number,
    rank:Number,
},{
    collection: 'Club',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  })

const clubModel = mongoose.model('Club',clubSchema)
module.exports = clubModel;