

import dbConnect from '../../../lib/dbConnect'
import Group from '../../../models/group'

export default async function  handler (req,res) {
    const { method } = req
    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const groups = await Group.findById(req.query.id)
                res.status(200).json({ success: true, data: groups })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const groups = await Group.findByIdAndUpdate(req.query.id, req.body, { upsert: true });
                res.status(200).json({ success: true, data: groups })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const groups = await Group.deleteOne({_id:req.query.id});
                res.status(200).json({ success: true, data: groups })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
