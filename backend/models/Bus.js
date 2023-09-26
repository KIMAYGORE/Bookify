import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    journeyDate: {
        type: String,
        required: true,
    },
    departure: {
        type: String,
        required: true,
    },
    arrival: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
    },
    fare: {
        type: Number,
        required: true,
    },
    seatsBooked: {
        type: Array,
        default: [],
    },
    status: {
        type: String,
        default: "Yet To Start",
    },
    busreviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: "BusReview",
        },
    ],
    photo: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model("Bus", busSchema);