import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [findRideBookings, setFindRideBookings] = useState([]);
    const [driverBookings, setDriverBookings] = useState([]);
    const [otp, setOtp] = useState(null); // State for OTP

    useEffect(() => {
        const fetchBookings = async () => {
            const userId = localStorage.getItem('userId'); // Get the logged-in user's ID
            if (!userId) {
                console.error("User ID not found in localStorage.");
                return;
            }
            try {
                // Fetch find ride bookings
                const findRideResponse = await axios.get(`http://localhost:8000/profile/booked-rides/${userId}`);
                setFindRideBookings(findRideResponse.data);
                // console.log(findRideResponse.data)

                // Fetch driver bookings
                const driverBookingResponse = await axios.get(`http://localhost:8000/profile/driver-booked-rides/${userId}`);
                setDriverBookings(driverBookingResponse.data);
                // console.log(driverBookingResponse.data)

            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);


    const generateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
        setOtp(otp);
        alert(`Generated OTP: ${otp}`); // For testing purposes
    };
    return (
        <div style={{ marginTop: '110px' }}>
            <h1>My Booked Rides</h1>
            <h2>Find Ride Bookings</h2>
            {findRideBookings.length === 0 ? (
                <p>No Find Ride Bookings yet.</p>
            ) : (
                <ul>
                    {findRideBookings.map((ride) => (
                        <li key={ride._id} style={{ marginBottom: '20px', listStyle: 'none', padding: '10px', border: '1px solid #ccc' }}>
                            <p><strong>From:</strong> {ride.pickupLocation} → <strong>To:</strong> {ride.dropoffLocation}</p>
                            <p><strong>Date & Time:</strong> {new Date(ride.dateTime).toLocaleString()}</p>
                            <button onClick={generateOtp} style={{ marginRight: '10px' }}>Generate OTP</button>
                            {otp && <span><strong>OTP:</strong> {otp}</span>}
                        </li>
                    ))}
                </ul>
            )}

<h2>Driver Bookings</h2>
            {driverBookings.length === 0 ? (
                <p>No Driver Bookings yet.</p>
            ) : (
                <ul>
                    {driverBookings.map((booking) => (
                        <li key={booking._id}>
                            <p><strong>Driver Name:</strong> {booking.name}</p>
                            <p><strong>From:</strong> {booking.sourceLocation} → <strong>To:</strong> {booking.destinationLocation}</p>
                            <p><strong>Date & Time:</strong> {new Date(booking.date).toLocaleString()}</p>
                            <button onClick={generateOtp} style={{ marginRight: '10px' }}>Generate OTP</button>
                            {otp && <span><strong>OTP:</strong> {otp}</span>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Profile;
