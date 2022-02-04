import mongoose from "mongoose";
import dbConnect from "../../../lib/dbConnect";
import Member from "../../../models/member";
import bcrypt from "bcryptjs";
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const members = await Member.find({});
        res.status(200).json({ success: true, data: members });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
      

        const checkMember = await Member.find({
          username: { $regex: req.body.username, $options: "i" },
        });

        if (checkMember.length === 0) {
          const members = await Member.create({
            ...req.body,
            createdBy: mongoose.Types.ObjectId(req.body.createdBy),
            updatedBy: mongoose.Types.ObjectId(req.body.updatedBy),
          });
          res.status(201).json({ success: true, data: members });
        } else {
          res.status(400).json({ success: false, message: "มีในระบบแล้ว" });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
