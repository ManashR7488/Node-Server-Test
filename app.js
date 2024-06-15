require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
