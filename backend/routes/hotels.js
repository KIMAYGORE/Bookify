import express from 'express'

import { verifyAdmin } from '../utils/verifyToken.js'
import { createHotel, deleteHotel, getAllHotel, getSingleHotel, updateHotel, getHotelCount, getHotelBySearch, getFeaturedHotel }
    from '../Controllers/hotelController.js'

const router = express.Router()

//Create new tour 
router.post('/', createHotel)
///POST http://localhost:4000/api/v1/tours/
//Update tour 
router.put('/:id', updateHotel)

//Delete tour 
router.delete('/:id', deleteHotel)

//Get single tour 
router.get('/:id', getSingleHotel)

//Get all tour 
router.get('/', getAllHotel)

//Get tour by search
router.get("/search/getHotelBySearch", getHotelBySearch)
router.get("/search/getFeaturedHotel", getFeaturedHotel)
router.get("/search/getHotelCount", getHotelCount)




export default router