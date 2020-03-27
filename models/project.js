const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Ideas for future expansion
// Tags, languages, 
const projectSchema = new Schema({
  contributors: { type: Array, required: true },
  deployedLink: { type: String, required: true},
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: String,
  repositoryLink: { type: String, required: true},
  title: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
