const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/exercise/:thing", function (req, res) {
  let thing = req.params.thing;
  res.render("love", { theThing: thing });
});

app.get("/posts", function (req, res) {
  let posts = [
    { title: "Post 1", author: "Suzy" },
    { title: "My adorable pet bunny", author: "Charlie" },
    { title: "Can you believe this Pomsky?", author: "Colt" },
  ];

  res.render("posts", { posts: posts });
});

app.listen(3000, () => console.log("Server is Listening!"));