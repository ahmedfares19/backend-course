const { request } = require("express");
const studentDao = require("./../dao/student.dao");

/* proprties with same name writen once in object body */
// const studentController = {
//     getStudentWithFilters,
//     createNewStudent
// }
exports.getStudentWithFilters = (request) => {
  studentDao.getStudentWithFilters();
};

exports.createNewStudent = (request) => {
    studentDao.createNewStudent();
};
