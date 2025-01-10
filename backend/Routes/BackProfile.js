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

const generateOTP = () => Math.floor(100000 + Math.random() * 900000);
const OTP_EXPIRY_TIME = 10 * 60 * 1000; // 10 minutes

// Generate OTP for Bookings or Rides
router.post('/generate-otp/:type/:id', async (req, res) => {
    const { type, id } = req.params;
    try {
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + OTP_EXPIRY_TIME);
        let entry;

        if (type === 'booking') {
            entry = await Booking.findById(id);
        } else if (type === 'offerRide') {
            entry = await OfferRide.findById(id);
        }

        if (!entry) return res.status(404).json({ message: 'Entry not found.' });

        entry.otp = otp;
        entry.otpExpiry = otpExpiry;
        await entry.save();

        res.status(200).json({ message: 'OTP generated successfully', otp, otpExpiry });
    } catch (error) {
        res.status(500).json({ message: 'Error generating OTP', error: error.message });
    }
});

// Verify OTP
router.post('/verify-otp/:type/:id', async (req, res) => {
    const { type, id } = req.params;
    const { otp } = req.body;

    try {
        let entry;

        if (type === 'booking') {
            entry = await Booking.findById(id);
        } else if (type === 'offerRide') {
            entry = await OfferRide.findById(id);
        }

        if (!entry || !entry.otp) return res.status(404).json({ message: 'OTP not found or expired.' });

        if (entry.otp !== otp) return res.status(400).json({ message: 'Invalid OTP.' });

        if (new Date() > entry.otpExpiry) return res.status(400).json({ message: 'OTP has expired.' });

        entry.otp = undefined;
        entry.otpExpiry = undefined;
        await entry.save();

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error verifying OTP', error: error.message });
    }
});

export default router;