const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  price: String,
  discription: String,
  location: String,
});

mongoose.Schema.Types();

module.exports = mongoose.model("Campground", CampgroundSchema);
