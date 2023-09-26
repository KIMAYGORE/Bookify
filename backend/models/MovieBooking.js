import mongoose from "mongoose";

const movieBookingSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Types.ObjectId,
      ref: "Movie",
      require: true,
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },

    name: {
      type: String,
      ref: "name",
      require: true,
    },
    email: {
      type: String,
      ref: "users",
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    movieName: {
      type: String,
      required: true
    },
    seats: {
      type: Array,
      default: []
      // require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    totalAmount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("MovieBooking", movieBookingSchema);
