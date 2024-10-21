// routes/offer.route.js

import express from 'express';
import OfferRide from '../models/offer.model.js'; // Ensure the path is correct

const router = express.Router();

// POST route to handle ride offers
router.post('/', async (req, res) => {
    try {
        const {
            pickupLocation,
            dropoffLocation,
            repeatRide,
            selectedDays,
            carType,
            dateTime,
            availableSeats,
            pricePerSeat,
            rideRule
        } = req.body;

        // Create a new ride offer
        const newRide = new OfferRide({
            pickupLocation,
            dropoffLocation,
            repeatRide,
            selectedDays,
            carType,
            dateTime,
            availableSeats,
            pricePerSeat,
            rideRule,
        });

        await newRide.save();
        res.status(201).json({ message: 'Thank you for saving CO2 emissions!' });
    } catch (error) {
        console.error('Error saving ride offer:', error);
        res.status(500).json({ message: 'Error saving ride offer', error: error.message });
    }
});

export default router;
