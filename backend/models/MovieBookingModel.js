import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        movie: {
            type: mongoose.Schema.ObjectId,
            ref: "Movie",
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

export default mongoose.model("MovieBookingModel", bookingSchema);
