import Hotel from '../models/Hotel.js';
//import buses from '../models/Hotel.js'

//Create new hotel
export const createHotel = async (req, res) => {
   try {
      const existingHotel = await Hotel.findOne({ title: req.body.title });
      if (existingHotel) {
         return res.status(200).send({
            success: false,
            message: "Hotel already exists",
         });
      }
      const newHotel = new Hotel(req.body);
      await newHotel.save();
      return res.status(200).send({
         success: true,
         message: "Hotel added successfully",
      });
   } catch (error) {
      res.status(500).send({ success: false, message: error.message });
   }
};

//Update hotel
export const updateHotel = async (req, res) => {
   const id = req.params.id

   try {
      await Hotel.findByIdAndUpdate(req.body._id, req.body);
      return res.status(200).send({
         success: true,
         message: "Hotel updated successfully",
      });
   } catch (error) {
      res.status(500).send({ success: false, message: error.message });
   }
}



//Delete Hotel
export const deleteHotel = async (req, res) => {
   try {
      await Hotel.findByIdAndDelete(req.body._id);
      return res.status(200).send({
         success: true,
         message: "Hotel deleted successfully",
      });
   } catch (error) {
      res.status(500).send({ success: false, message: error.message });
   }
}


//Getsingle Tour
export const getSingleHotel = async (req, res) => {
   const id = req.params.id

   try {
      const hotel = await Hotel.findById(id).populate('hotelreviews');

      res.status(200).json({ success: true, message: 'Successfully', data: hotel })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get All Tour
export const getAllHotel = async (req, res) => {
   //For pagination
   const page = parseInt(req.query.page)

   //console.log(page)

   try {
      const hotels = await Hotel.find({}).populate('hotelreviews').skip(page * 8).limit(8)

      res.status(200).json({ success: true, count: hotels.length, message: 'Successfully', data: hotels })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

export const getFeaturedHotel = async (req, res) => {
   //console.log(page)

   try {
      const hotels = await Hotel.find({ featured: true }).populate('reviews').limit(8)

      res.status(200).json({ success: true, message: 'Successfully', data: hotels })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}



// Get tour by search
export const getHotelBySearch = async (req, res) => {

   // hear 'i' means case sensitive 
   const name = new RegExp(req.query.name, 'i')
   const rating = parseInt(req.query.rating)
   const address = parseInt(req.query.address)

   try {
      // gte means greater than equal
      const hotels = await Hotel.find({ name, rating: { $gte: rating }, address: { $gte: address } })

      res.status(200).json({ success: true, message: 'Successfully', data: hotels })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}


//Get tour count 
export const getHotelCount = async (req, res) => {
   try {
      const hotelCount = await Hotel.estimatedDocumentCount()

      res.status(200).json({ success: true, data: hotelCount })
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch" })
   }
}

