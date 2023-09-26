import Bus from '../models/Bus.js';
//import buses from '../models/Bus.js'

//Create new bus
export const createBus = async (req, res) => {
    try {
        const existingBus = await Bus.findOne({ number: req.body.number });
        if (existingBus) {
            return res.status(200).send({
                success: false,
                message: "Bus already exists",
            });
        }
        const newBus = new Bus(req.body);
        await newBus.save();
        return res.status(200).send({
            success: true,
            message: "Bus added successfully",
        });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

//Update bus
// export const updateBus = async (req, res) => {
//     const id = req.params.id

//     try {
//         await Bus.findByIdAndUpdate(req.body._id, req.body);
//         return res.status(200).send({
//             success: true,
//             message: "Bus updated successfully",
//         });
//     } catch (error) {
//         res.status(500).send({ success: false, message: error.message });
//     }
// }

export const updateBus = async (req, res) => {
    const id = req.params.id

    try {
        const updatedBus = await Bus.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedBus })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update' })
    }
}



//Delete bus
// export const deleteBus = async (req, res) => {
//     try {
//         await Bus.findByIdAndDelete(req.body._id);
//         return res.status(200).send({
//             success: true,
//             message: "Bus deleted successfully",
//         });
//     } catch (error) {
//         res.status(500).send({ success: false, message: error.message });
//     }
// }

export const deleteBus = async (req, res) => {
    const id = req.params.id

    try {
        await Bus.findByIdAndDelete(id)

        // res.status(200).json({ success: true, message: 'Successfully deleted' })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete' })
    }
}



//Get single Bus
export const getSingleBus = async (req, res) => {
    const id = req.params.id

    try {
        const bus = await Bus.findById(id).populate('busreviews');

        res.status(200).json({ success: true, message: 'Successfully', data: bus })
    } catch (error) {
        res.status(404).json({ success: false, message: 'Not Found' })
    }
}

//Get All Buses
export const getAllBus = async (req, res) => {
    //For pagination
    const page = parseInt(req.query.page)

    //console.log(page)

    try {
        const buses = await Bus.find({}).populate('busreviews').skip(page * 8).limit(8)

        res.status(200).json({ success: true, count: buses.length, message: 'Successfully', data: buses })
    } catch (error) {
        res.status(404).json({ success: false, message: 'Not Found' })
    }
}


// Get bus by search
export const getBusBySearch = async (req, res) => {

    // hear 'i' means case sensitive 
    const name = new RegExp(req.query.name, 'i')
    const source = parseInt(req.query.source)
    const destination = parseInt(req.query.destination)

    try {
        // gte means greater than equal
        const buses = await Bus.find({ name, source: { $gte: source }, destination: { $gte: destination } })

        res.status(200).json({ success: true, message: 'Successfully', data: buses })
    } catch (error) {
        res.status(404).json({ success: false, message: 'Not Found' })
    }
}


//Get bus count 
export const getBusCount = async (req, res) => {
    try {
        const busCount = await Bus.estimatedDocumentCount()

        res.status(200).json({ success: true, data: busCount })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch" })
    }
}
