const express = require("express");
const teachers = require("../teacherdetail");

const teachersRouter = express.Router();

teachersRouter

  .get("/", (req, res) => {
    res.status(200).json({ teachers });
  })

  .post("/", (req, res) => {
    if (req.body.teachers) {
      teachers.push(req.body.teachersRouter);
      res.status(200).json({ message: "Teachers created successfully" });
    } else {
      res.status(400).send("Bad Request");
    }
  })

  .delete("/", (req, res) => {
    const getID = req.body.id;
    let temp;
    getID.forEach(getValue => {
      console.log(getValue);
      const check = teachers.find((teacher, idindex) => {
        if (getValue === teacher.id) {
          teachers.splice(idindex, 1);
          return true;
        } else {
          return false;
        }
      });
      temp = check;
    });
    if (temp) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).send("bad request");
    }
  });

module.exports = teachersRouter;
