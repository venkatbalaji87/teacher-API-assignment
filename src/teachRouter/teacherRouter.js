const express = require("express");
const teachers = require("../teacherdetail");

const teacherRouter = express.Router();

teacherRouter
  .post("/", (req, res) => {
    if (req.body.id && req.body.firstName) {
      teachers.push(req.body);
      res.status(200).json({ message: "Teacher created successfully" });
    } else {
      res.status(400).send("Bad Request");
    }
  })
  .get("/:id", (req, res) => {
    const { id = "" } = req.params;
    const requiredTeacher = teachers.find(teacher => {
      if (parseInt(id) === teacher.id) return true;
      else return false;
    });
    res.status(200).json({ teachers: requiredTeacher });
  })
  //update
  .patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, gender } = req.body;

    let requiredTeacherIndex;
    const requiredTeacher = teachers.find((teacher, teacherIndex) => {
      if (parseInt(id) === teacher.id) {
        requiredTeacherIndex = teacherIndex;
        return true;
      } else return false;
    });

    if (requiredTeacher) {
      const {
        firstName = requiredTeacher.firstName,
        lastName = requiredTeacher.lastName,
        age = requiredTeacher.age,
        gender = requiredTeacher.gender
      } = req.body;
      teachers[requiredTeacherIndex] = {
        id: requiredTeacher.id,
        firstName,
        lastName,
        age,
        gender
      };
      res.status(200).json({ message: "Teacher details updated" });
    } else {
      res.status(400).send("Bad Request");
    }

    console.log(requiredStudent);
    console.log(requiredTeacherIndex);
  })
  //delete operation
  .delete("/:id", (req, res) => {
    const { id } = req.params;
    let requiredTeacherIndex;
    const requiredTeacher = teachers.find((teacher, teacherIndex) => {
      if (parseInt(id) === teacher.id) {
        requiredTeacherIndex = teacherIndex;
        return true;
      }
      return false;
    });
    if (requiredTeacher) {
      teachers.splice(requiredTeacherIndex, 1);
      res.status(200).json({ message: "Teaccher has been deleted" });
    } else {
      res.status(400).send("Bad Request");
    }
  });

module.exports = teacherRouter;
