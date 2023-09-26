import MovieBooking from "./../models/MovieBooking.js";
import Booking from "../models/MovieBookingModel.js";
import Movie from "../models/Movie.js";

// create new booking
export const createMovieBooking = async (req, res) => {
  try {

    const newBooking = new Booking({
      ...req.body
    });

    await newBooking.save();

    const movie = await Movie.findById(req.body.movie);

    movie.seatsBooked = [...movie.seatsBooked, ...req.body.seats];
    console.log(movie.seatsBooked);
    console.log(movie);
    await movie.save();

    res.status(200).send({
      message: "Booking successful",
      data: newBooking,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Booking failed",
      data: error,
      success: false,
    });
  }
}

// get single booking
export const getMovieBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const movieBook = await MovieBooking.findById(id);

    res
      .status(200)
      .json({ success: true, message: "Successful!", data: movieBook });
  } catch (error) {
    res.status(404).json({ success: true, message: "Not Found!" });
  }
};

// get all booking
export const getAllMovieBooking = async (req, res) => {
  try {
    const movieBooks = await MovieBooking.find();

    res
      .status(200)
      .json({ success: true, message: "Successful!", data: movieBooks });
  } catch (error) {
    res.status(500).json({ success: true, message: "Internal server error!" });
  }
};
