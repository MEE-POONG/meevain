

import dbConnect from '../../../lib/dbConnect'
import Shift from '../../../models/shift'

export default async function  handler (req,res) {
    const { method } = req
    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const shifts = await Shift.findById(req.query.id)
                res.status(200).json({ success: true, data: shifts })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const shifts = await Shift.findByIdAndUpdate(req.query.id, req.body, { upsert: true });
                res.status(200).json({ success: true, data: shifts })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const shifts = await Shift.deleteOne({_id:req.query.id});
                res.status(200).json({ success: true, data: shifts })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
