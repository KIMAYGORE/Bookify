import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    types: {
      type: String,
      required: false,
    },
    hotelreviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "HotelReview",
        required: false,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }

)

export default mongoose.model("Hotel", hotelSchema)
