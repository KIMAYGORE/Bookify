import mongoose from "mongoose";


const busBookingSchema = new mongoose.Schema(
    {
        bus: {
            type: mongoose.Types.ObjectId,
            ref: "Bus",
            // require: true,
        },

        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            // require: true,
        },

        name: {
            type: String,
            ref: "name",
            //require: true,
        },
        email: {
            type: String,
            ref: "users",
            // require: true,
        },
        passenger: {
            type: String,
            // require: true,
        },
        from: {
            type: String,
            // require: true,
        },
        to: {
            type: String,
            //  require: true,
        },
        date: {
            type: Date,
            //  require: true,
        },
        seats: {
            type: Array,
            default: []
            // require: true,
        },
        phone: {
            type: String,
            // require: true,
        },
        totalAmount: {
            type: Number,
            // require: true,
        },

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("BusBooking", busBookingSchema);
