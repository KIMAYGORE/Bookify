import express from 'express'
import { createBus, deleteBus, getAllBus, getSingleBus, getBusBySearch, getBusCount, updateBus } from '../Controllers/busController.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new Bus 
// router.post('/', verifyAdmin, createBus)
router.post('/', createBus)
///POST http://localhost:4000/api/v1/buses/
//Update Bus
// router.put('/:id', verifyAdmin, updateBus)
router.put('/:id', updateBus)

//Delete Bus 
router.delete('/:id', verifyAdmin, deleteBus)

//Get single bus 
router.get('/:id', getSingleBus)

//Get all bus 
router.get('/', getAllBus)

//Get bus by search
router.get("/search/getBusBySearch", getBusBySearch)
//router.get("/search/getFeaturedTour", getFeaturedTour)
router.get("/search/getBusCount", getBusCount)




export default router