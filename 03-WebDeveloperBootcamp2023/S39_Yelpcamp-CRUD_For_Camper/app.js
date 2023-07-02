const express = require("express");
const app = express();
const path = require("path");

const Campground = require("./models/campground");

// Declare Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");

// Connect Mongoose
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database Connected");
});

// Setting Ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/makecampground", async (req, res) => {
  const camp = new Campground({
    title: "My Backyard",
    discription: "Cheap Camping!",
  });

  await camp.save();
  res.send(camp);
});

app.listen(3000, () => {
  console.log("Serving on Port: 3000");
});
