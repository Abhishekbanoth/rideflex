// backend/routes/profile.js
import express from 'express';
import OfferRide from '../models/offer.model.js';
import Booking from '../models/booking.model.js';  // Assuming this is the model for driver bookings


const router = express.Router();

// Route for Offer Ride bookings

router.get('/booked-rides/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const bookedRides = await OfferRide.find({ user: userId, status: 'booked' });
        res.status(200).json(bookedRides);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching booked rides', error: error.message });
    }
});

// Route for Driver bookings
router.get('/driver-booked-rides/:userId', async (req, res) => {
    const { userId } = req.params;
    

    try {
        const driverBookings = await Booking.find({ user: userId, status: 'booked' });
        res.status(200).json(driverBookings);
    } catch (error) {
        console.error('Error fetching driver booked rides:', error);
        res.status(500).json({ message: 'Error fetching driver booked rides', error: error.message });
    }
});


export default router;