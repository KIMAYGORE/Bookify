import express from 'express'
import { createMovie, deleteMovie, getAllMovie, getSingleMovie, getMovieBySearch, getMovieCount, updateMovie } from '../Controllers/movieController.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new tour 
// router.post('/', verifyAdmin, createMovie)
router.post('/', createMovie)
///POST http://localhost:4000/api/v1/tours/
//Update tour 
router.put('/:id', verifyAdmin, updateMovie)

//Delete tour 
router.delete('/:id', verifyAdmin, deleteMovie)

//Get single tour 
router.get('/:id', getSingleMovie)

//Get all tour 
router.get('/', getAllMovie)

//Get tour by search
router.get("/search/getMovieBySearch", getMovieBySearch)
//router.get("/search/getFeaturedTour", getFeaturedTour)
router.get("/search/getMovieCount", getMovieCount)




export default router