const express = require("express");
const app = express();

// Setting EJS
app.set("view engine", "ejs");
app.set("views", "./pages");

// Setting Base Route
app.get("/", (req, res) => {
  res.render("home.ejs");
  // res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
