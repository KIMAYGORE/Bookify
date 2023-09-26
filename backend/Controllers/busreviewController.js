import Bus from "../models/Bus.js"
import BusReview from "../models/BusReview.js"


export const createReview = async (req, res) => {
    const busId = req.params.busId
    const newReview = new BusReview({ ...req.body })

    try {
        const savedReview = await newReview.save()

        // after creating a new review now update the reviews array of the tour 
        await Bus.findByIdAndUpdate(busId, {
            $push: { busreviews: savedReview._id }
        })
        console.log(savedReview);
        res.status(200).json({ success: true, message: "Review submitted", data: savedReview })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to submit" })
    }
}
