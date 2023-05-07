const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
  title: String,
  price: String,
  discription: String,
  location: String,
});

module.exports = mongoose.model("Campground", )