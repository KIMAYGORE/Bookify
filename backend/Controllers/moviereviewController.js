import Movie from "../models/Movie.js"
import MovieReview from "../models/MovieReview.js"


export const createReview = async (req, res) => {
    const movieId = req.params.movieId
    const newReview = new MovieReview({ ...req.body })

    try {
        const savedReview = await newReview.save()

        // after creating a new review now update the reviews array of the tour 
        await Movie.findByIdAndUpdate(movieId, {
            $push: { moviereviews: savedReview._id }
        })
        console.log(savedReview);
        res.status(200).json({ success: true, message: "Review submitted", data: savedReview })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to submit" })
    }
}
