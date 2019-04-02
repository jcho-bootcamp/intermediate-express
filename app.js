const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/exercise/:thing", function (req, res) {
  let thing = req.params.thing;
  res.render("love.ejs", { theThing: thing });
});

app.listen(3000, () => console.log("Server is Listening!"));