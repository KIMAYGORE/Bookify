import express from 'express'
import { createReview } from '../Controllers/busreviewController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:busId', verifyUser, createReview)

export default router