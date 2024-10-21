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

export default router;