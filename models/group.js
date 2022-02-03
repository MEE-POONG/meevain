import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  name: String,
  color: String,
  

});

module.exports = mongoose.models.Group || mongoose.model("Group", GroupSchema);