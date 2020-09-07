const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema =new schema({
    name:{
        type:String
    },
    studentID:{
        type:String
    },
    img:{
        type:String
    },
    totalGPA:{
        type:Number
    }
},{
    collection: 'student',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  })
const studentModel = mongoose.model('studentModel',studentSchema);
module.exports = studentModel;