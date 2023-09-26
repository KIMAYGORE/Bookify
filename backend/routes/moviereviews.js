import express from 'express'
import { createReview } from '../Controllers/moviereviewController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:movieId', verifyUser, createReview)

export default router