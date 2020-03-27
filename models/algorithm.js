const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const algorithmSchema = new Schema({
  date: { type: Date, default: Date.now },
  galing: { type: String, required: true },
  image: String,
  mySolution: String,
  problem: { type: String, required: true },
  solutions: Array,
  title: { type: String, required: true }

});

const Algorithm = mongoose.model("Algorithm", algorithmSchema);

module.exports = Algorithm;
