import dbConnect from "../../lib/dbConnect";

import Member from "../../models/member";
// import { comparePassword } from "../../utils/encrypt";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
        try {
            const member = await Member.fineById(req.query.id)
            res.status(200).json({ success: true, data: member })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break;
    case "POST":
      try {
        const { username, password } = req.body;
        const members = await Member.findOne({ username });
        const validPassword = await Member.findOne({ password });
        if (!validPassword) {
          res.status(400).end({ success: false, messages: "password invalid" });
        }
        const member = await Member.findOne(
          { _id: members._id },
          { password: 0 }
        );
        res.status(200).json({ success: true, data: member });

      } catch (error) {
        res.status(400).json({
          success: false,
          messages: "พังยับครับพี่ ต้องเรียกคุณวรายุทธแล้ว",
        });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
