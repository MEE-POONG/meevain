import mongoose from "mongoose";

const ShiftSchema = new mongoose.Schema({
    shift_name : String,
    shift_corlor : String,
    shitf_start : Date,
    shift_end : Date,


});

module.exports = mongoose.models.Shift || mongoose.model("Shift", ShiftSchema);
