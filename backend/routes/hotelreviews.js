import express from 'express'
import { createReview } from '../Controllers/hotelreviewController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:hotelId', verifyUser, createReview)

export default router