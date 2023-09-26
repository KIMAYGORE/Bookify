import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  showDate: {
    type: Date,
    // required: true
  },
  showTime: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  seatsBooked: {
    type: Array,
    default: [],
  },
  moviereviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "MovieReview",
    },
  ],
  photo: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);
export default mongoose.model("Movie", movieSchema);
