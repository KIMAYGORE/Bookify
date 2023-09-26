import express from 'express'
import { createMovieBooking, getAllMovieBooking, getMovieBooking } from '../Controllers/movieBookingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', createMovieBooking)
router.get('/:id', verifyUser, getMovieBooking)
router.get('/', verifyAdmin, getAllMovieBooking)

export default router