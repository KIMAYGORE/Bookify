import mongoose from "mongoose";


const hotelBookingSchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Types.ObjectId,
      ref: "Hotel",
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
    hotelname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      ref: "users",
      require: true,
    },
    tenant: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },

    date: {
      type: Date,
      require: true,
    },
    rooms: {
      type: Number,
      require: true,
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

export default mongoose.model("HotelBooking", hotelBookingSchema);
