const mongoose = require('mongoose');
const schema = new mongoose.Schema;

const courseSchema = schema({
    name:{
        type:String
    },
    code:{
        type:String
    },
    units:{
        type:Number
    }
},{
    collection: 'course',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  })
const courseModel = mongoose.model('courseModel',courseSchema);
module.exports = courseModel;