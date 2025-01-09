import mongoose from 'mongoose';

const offerRideSchema = new mongoose.Schema({
    pickupLocation: {
        type: String,
        required: true,
    },
    dropoffLocation: {
        type: String,
        required: true,
    },
    repeatRide: {
        type: Boolean,
        default: false,
    },
    selectedDays: {
        type: [String],
        default: [],
    },
    carType: {
        type: String,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
    availableSeats: {
        type: Number,
        required: true,
    },
    pricePerSeat: {
        type: String,
        required: true,
    },
    rideRule: {
        type: String,
        required: true,
    },
    user: { // Make user field optional
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false, // Set this to false
    },
    status: { type: String, default: 'available' } 
}, { timestamps: true });

const OfferRide = mongoose.model('OfferRide', offerRideSchema);
export default OfferRide;