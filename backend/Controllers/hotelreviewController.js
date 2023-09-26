
import Hotel from "../models/Hotel.js"
import HotelReview from "../models/HotelReview.js"


export const createReview = async (req, res) => {
    const hotelId = req.params.hotelId
    const newReview = new HotelReview({ ...req.body })

    try {
        const savedReview = await newReview.save()

        // after creating a new review now update the reviews array of the tour 
        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { hotelreviews: savedReview._id }
        })
        console.log(savedReview);
        res.status(200).json({ success: true, message: "Review submitted", data: savedReview })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to submit" })
    }
}
