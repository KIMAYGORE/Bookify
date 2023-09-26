import express from 'express'
import { createBusBooking, getAllBusBooking, getBusBooking } from '../Controllers/busBookingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createBusBooking)
router.get('/:id', verifyUser, getBusBooking)
router.get('/', verifyAdmin, getAllBusBooking)

export default router