// backend/models/User.js
import mongoose from 'mongoose';

//const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures the email is unique
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email format'] // Simple regex validation for email format
    },
    phno: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Invalid phone number format'] // Ensures the phone number has 10 digits
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);
export default User;
