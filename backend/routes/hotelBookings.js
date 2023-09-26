import express from 'express'
import { createHotelBooking, getAllHotelBooking, getHotelBooking } from '../Controllers/hotelBookingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createHotelBooking)
router.get('/:id', verifyUser, getHotelBooking)
router.get('/', verifyAdmin, getAllHotelBooking)

export default router