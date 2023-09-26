import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bus: {
      type: mongoose.Schema.ObjectId,
      ref: "Bus",
      require: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
    seats: {
      type: Array,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BusBookingModel", bookingSchema);
