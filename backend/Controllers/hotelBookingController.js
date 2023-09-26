import HotelBooking from './../models/hotelBooking.js'


// create new booking
export const createHotelBooking = async(req,res) => {
   const newHotelBooking = new HotelBooking(req.body)

   try {
      const savedHotelBooking = await newHotelBooking.save()

      res.status(200).json({success:true, message:"Your Hotel is booked!", data:savedHotelBooking})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
}

// get single booking
export const getHotelBooking = async(req,res) => {
   const id = req.params.id
   
   try {
      const hotelBook = await HotelBooking.findById(id)

      res.status(200).json({success:true, message:"Successful!", data:hotelBook})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


// get all booking
export const getAllHotelBooking = async(req,res) => {
   
   try {
      const hotelBooks = await HotelBooking.find()

      res.status(200).json({success:true, message:"Successful!", data:hotelBooks})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 