import express from 'express';
import OfferRide from '../models/offer.model.js'; // Adjust the path as necessary

const router = express.Router();

// GET route to fetch all ride offers
router.get('/', async (req, res) => {
    const { pickupLocation, dropLocation, dateTime, seatsRequired } = req.query;

    try {
        const rides = await OfferRide.find().populate('user', 'name');; // Fetch all rides from the database
        res.status(200).json(rides);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rides', error: error.message });
    }
});

router.put('/book/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find the ride and update its status
        const ride = await OfferRide.findByIdAndUpdate(
            id,
            { status: 'booked' }, // Add a status field
            { new: true } // Return the updated ride
        );

        if (!ride) {
            return res.status(404).json({ message: 'Ride not found' });
        }

        res.status(200).json({ message: 'Ride booked successfully', ride });
    } catch (error) {
        res.status(500).json({ message: 'Error booking ride', error: error.message });
    }
});





export default router;