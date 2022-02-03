import mongoose from "mongoose";
import dbConnect from "../../../lib/dbConnect";
import Member from "../../../models/member";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const members = await Member.findById(req.query.id);
        res.status(200).json({ success: true, data: members });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

      case 'PUT':
        try {
            const members = await Member.findByIdAndUpdate(req.query.id, {...req.body,
                createdBy: mongoose.Types.ObjectId(req.body.createdBy),
                updatedBy: mongoose.Types.ObjectId(req.body.updatedBy)
            }, { upsert: true });
            res.status(200).json({ success: true, data: members })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break
    case "DELETE":
        try {
            const members = await Member.findByIdAndDelete(req.query.id);
            res.status(200).json({ success: true, data: members })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break
    default:
        res.status(400).json({ success: false })
        break
  }
}
