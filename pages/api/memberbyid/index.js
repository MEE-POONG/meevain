// api/menus.js

import dbConnect from '../../../lib/dbConnect'
import UserId from '../../../models/member'

import mongoose from 'mongoose'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await UserId.find({memberId:mongoose.Types.ObjectId(req.query.storeId)})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await UserId.create(req.body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}