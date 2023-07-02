const Campground = require("../models/campground");

// Declare Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");

// Connect Mongoose
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database Connected");
});

// Delete All database Data
const seedDB = async () => {
  await Campground.deleteMany({});

  // Testing Delete
  const c = new Campground({ title: "purple field" });
  await c.save();
};

seedDB();
