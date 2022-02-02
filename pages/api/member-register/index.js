import dbConnect from "../../../lib/dbConnect";
import Member from "../../../models/member";

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
        const member = await Member.create(req.body);
        res.status(201).json({ success: true, data: member });
      } catch (error) {

        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
