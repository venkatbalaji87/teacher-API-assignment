const express = require("express");
const bodyParser = require("body-parser");
const teachersDesDetail = require("./teacherdetail");
const teachersRouter = require("./teachRouter/teachersRouter");
const teacherRouter = require("./teachRouter/teacherRouter");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/teachers", teachersRouter);

app.use("/teacher", teacherRouter);

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
