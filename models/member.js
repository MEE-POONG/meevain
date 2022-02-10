import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  tel: Number,
  img: String,
  memberId:mongoose.Types.ObjectId

});

module.exports = mongoose.models.Member || mongoose.model("Member", MemberSchema);
