const mongoose = require('mongoose');
const schema = new mongoose.Schema;

const profSchema = schema({
    name:{
        type:String
    },
    SSN:{
        type:String
    },
    img:{
        type:String
    },
    field:{
        type:String
    }
},{
    collection: 'prof',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  })
const profModel = mongoose.model('profModel',profSchema);
module.exports = profModel;