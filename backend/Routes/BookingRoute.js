import express from 'express';
import Booking from '../models/booking.model.js';

const router = express.Router();


const otpStorage = {};

// Function to generate a 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

// POST route to generate OTP
router.post('/otp', async (req, res) => {
    try {
        const { phoneNumber } = req.body; 
        const otp = generateOTP(); 
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

        // Find or create a booking for this phone number
        let booking = await Booking.findOne({ phoneNumber });

        if (!booking) {
            // Create a new booking if one does not exist
            booking = new Booking({
                phoneNumber,  
                otp,           
                otpExpiry,    
            });
        } else {
            // Update the existing booking with the new OTP and expiry
            booking.otp = otp;
            booking.otpExpiry = otpExpiry;
        }

        // Save the updated booking to the database
        await booking.save();

        // Send the OTP and expiry back to the client (Frontend)
        res.status(200).json({
            message: 'OTP generated successfully!',
            otp: otp,  // OTP visible for frontend
            otpExpiry, // Expiry time (if needed by the frontend)
        });
    } catch (err) {
        console.error('Error while generating OTP:', err); // Log the error
        res.status(400).json({ message: 'Please fill all the details in the Booking Form', error: err.message });
    }
});

// POST route to verify OTP
router.post('/verify-otp', async (req, res) => {
    try {
        const { phoneNumber, otp } = req.body; // Get phone number and OTP from request

        // Find the booking by phone number
        const booking = await Booking.findOne({ phoneNumber });

        if (!booking || !booking.otp) {
            return res.status(400).json({ message: 'OTP not found or has expired' });
        }

        const { otp: storedOtp, otpExpiry } = booking;

        // Check if the OTP is valid
        if (storedOtp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        // Check if OTP has expired
        const currentTime = new Date();
        if (otpExpiry < currentTime) {
            return res.status(400).json({ message: 'OTP has expired' });
        }

        // OTP is valid and not expired
        // Optionally, you can delete or clear OTP fields from the booking after verification
        booking.otp = undefined;
        booking.otpExpiry = undefined;
        await booking.save();

        res.status(200).json({ message: 'OTP verified successfully!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// POST route to create a booking
router.post('/booking', async (req, res) => {
    try {
        const { userId, ...bookingDetails } = req.body;
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Create a new booking linked to the user
        const newBooking = new Booking({
            user: userId, // Set the user field
            ...bookingDetails,
        });

        await newBooking.save();

        res.status(201).json({
            message: 'Booking successful!',
            booking: newBooking,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


export default router;