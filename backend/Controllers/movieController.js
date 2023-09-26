import Movie from '../models/Movie.js';
//import Moviees from '../models/Movie.js'

//Create new Movie
// export const createMovie = async (req, res) => {
//    try {
//       const existingMovie = await Movie.findOne({ number: req.body.number });
//       if (existingMovie) {
//          return res.status(200).send({
//             success: false,
//             message: "Movie already exists",
//          });
//       }
//       const newMovie = new Movie(req.body);
//       await newMovie.save();
//       return res.status(200).send({
//          success: true,
//          message: "Movie added successfully",
//       });
//    } catch (error) {
//       res.status(500).send({ success: false, message: error.message });
//    }
// };

//Create new Movie
export const createMovie = async (req, res) => {
   try {
      const existingMovie = await Movie.findOne({ title: req.body.title });
      if (existingMovie) {
         return res.status(200).send({
            success: false,
            message: "Movie already exists",
         });
      }
      const newMovie = new Movie(req.body);
      await newMovie.save();
      return res.status(200).send({
         success: true,
         message: "Movie added successfully",
      });
   } catch (error) {
      res.status(500).send({ success: false, message: error.message });
   }
};

//Update Movie
//Update Movie
export const updateMovie = async (req, res) => {
   const id = req.params.id

   try {
      const updatedMovie = await Movie.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true })

      // res.status(200).json({ success: true, message: 'Successfully updated', data: updatedMovie })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update' })
   }
}


//Delete Movie
export const deleteMovie = async (req, res) => {
   const id = req.params.id

   try {
      await Movie.findByIdAndDelete(id)

      // res.status(200).json({ success: true, message: 'Successfully deleted' })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete' })
   }
}

//Getsingle Tour
export const getSingleMovie = async (req, res) => {
   const id = req.params.id

   try {
      const movie = await Movie.findById(id).populate('moviereviews')

      res.status(200).json({ success: true, message: 'Successfully', data: movie })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get All Tour
export const getAllMovie = async (req, res) => {
   //For pagination
   const page = parseInt(req.query.page)

   //console.log(page)

   try {
      const movies = await Movie.find({}).populate('moviereviews').skip(page * 8).limit(8)

      res.status(200).json({ success: true, count: movies.length, message: 'Successfully', data: movies })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}


// Get tour by search
export const getMovieBySearch = async (req, res) => {

   // hear 'i' means case sensitive 
   const name = new RegExp(req.query.name, 'i')
   const source = parseInt(req.query.source)
   const destination = parseInt(req.query.destination)

   try {
      // gte means greater than equal
      const movies = await Movie.find({ name, source: { $gte: source }, destination: { $gte: destination } }).populate('moviereviews')

      res.status(200).json({ success: true, message: 'Successfully', data: movies })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}


//Get tour count 
export const getMovieCount = async (req, res) => {
   try {
      const movieCount = await Movie.estimatedDocumentCount()

      res.status(200).json({ success: true, data: movieCount })
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch" })
   }
}
