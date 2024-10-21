import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    time: { type: String, required: true },
    vehicle: { type: String, required: true },
    sourceLocation: { type: String,  },
    destinationLocation: { type: String,  },
    date: { type: Date, required: true },
    typeOfServices: { type: String, required: true },
    returnTrip: { type: Boolean, default: false },
    returnDate: { type: Date },
    returnTime: { type: String },
    otp: { type: String},
    otpExpiry: { type: Date},
});

export default mongoose.model('Booking', bookingSchema);
