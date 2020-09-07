const studentRouter = require('express').Router();
const studentController = require('./../controller/student.controller')
getStudentWithFilters = (req, res)=> {
    /* 
    :- PARAMS
    name,
    studentID,
    GPA,
    limit 10 as default
    skip 0 as default
    */
   studentController.getStudentWithFilters();
   //TODO :- logger , interface   
    res.send('getStudentWithFilters')
}

createNewStudent = (req,res) => {
    studentController.createNewStudent();
    //TODO :- logger , interface   
    res.send('createNewStudent')
}


studentRouter.get('/get-student-with-filters',getStudentWithFilters);
studentRouter.post('/create-new-student',createNewStudent);

//export student router
module.exports = studentRouter;