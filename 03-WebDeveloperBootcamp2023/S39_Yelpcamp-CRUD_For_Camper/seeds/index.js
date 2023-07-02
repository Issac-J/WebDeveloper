const Campground = require("../models/campground");
const CITIES = require("./cities");
const { places, descriptors } = require("./seedHelpers");

// Declare Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");

// Connect Mongoose
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database Connected");
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Delete All database Data
const seedDB = async () => {
  // Delete existed data
  await Campground.deleteMany({});

  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);

    const camp = new Campground({
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${CITIES[random1000].city}, ${CITIES[random1000].state}`,
    });

    await camp.save();
  }

  // Testing Delete
  //   const c = new Campground({ title: "purple field" });
  //   await c.save();
};

// Execute seedDB
// seedDB();

// Excute seedDB and Close Database
seedDB().then(() => {
  mongoose.connection.close();
});
