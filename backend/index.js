import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import busreviewRoute from './routes/busreviews.js'
import bookingRoute from './routes/bookings.js'
import busBookingRoute from './routes/busBookings.js'
import paymentRoute from './routes/paymentRoutes.js'
import busRoute from './routes/buses.js'
import Razorpay from "razorpay";
import hotelRoute from "./routes/hotels.js";
import hotelBookingRoute from "./routes/hotelBookings.js";
import hotelreviewRoute from './routes/hotelreviews.js'
import movieRoute from "./routes/movies.js";
import moviereviewRoute from './routes/moviereviews.js'
import movieBookingRoute from "./routes/movieBookings.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
   origin: true,
   credentials: true
}



mongoose.set("strictQuery", false)
const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })

      console.log('MongoDB connected')
   } catch (error) {
      console.log('MongoDB connected failed')
   }
}

// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.post(`/hiBhai`, (req, res) => {
   console.log(req.body);
   res.status(200).json(`Bye`);
});


// Parameters:

// path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or a regular expression pattern to match the paths.
// callback: It is a middleware function or a series/array of middleware functions.
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/tours", tourRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/review", reviewRoute)
app.use("/api/v1/booking", bookingRoute)
app.use("/api/v1/paymentRoutes", paymentRoute)
app.use("/api/v1/busBooking", busBookingRoute)
app.use("/api/v1/buses", busRoute)
app.use("/api/v1/busreviews", busreviewRoute)
app.use("/api/v1/hotels", hotelRoute)
app.use("/api/v1/hotelBooking", hotelBookingRoute)
app.use("/api/v1/movies", movieRoute)
app.use("/api/v1/movieBooking", movieBookingRoute)
app.use("/api/v1/moviereviews", moviereviewRoute)
app.use("/api/v1/hotelreviews", hotelreviewRoute)



export const instance = new Razorpay({
   key_id: "rzp_test_2CZLX7Z2w5aO58",
   key_secret: "jhHqgNo9cP2pw4hmKx9MFVOk",
});


app.listen(port, () => {
   connect()
   console.log('server listening on port', port)
})