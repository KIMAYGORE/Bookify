import BusBooking from './../models/BusBooking.js'
import Booking from "../models/BusBookingModel.js";
import Bus from "../models/Bus.js";

export const createBusBooking = async (req, res) => {

    try {

        const newBooking = new Booking({
            ...req.body
        });

        await newBooking.save();

        const bus = await Bus.findById(req.body.bus);

        bus.seatsBooked = [...bus.seatsBooked, ...req.body.seats];
        // console.log(bus.seatsBooked);
        // console.log(bus);
        await bus.save();

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
export const getBusBooking = async (req, res) => {
    const id = req.params.id

    try {
        const busBook = await BusBooking.findById(id)

        res.status(200).json({ success: true, message: "Successful!", data: busBook })
    } catch (error) {
        res.status(404).json({ success: true, message: "Not Found!" })
    }
}


// get all booking
export const getAllBusBooking = async (req, res) => {

    try {
        const busBooks = await BusBooking.find()

        res.status(200).json({ success: true, message: "Successful!", data: busBooks })
    } catch (error) {
        res.status(500).json({ success: true, message: "Internal server error!" })
    }
} 