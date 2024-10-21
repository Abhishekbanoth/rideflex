import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    drivingLicenceNumber: { type: String, required: true },
    panCardImage: { type: String },
    drivingLicenceImage: { type: String },
    aadharFront: { type: String },
    aadharBack: { type: String },
}, { timestamps: true });

const Driver = mongoose.model('Driver', driverSchema);
export default Driver;
