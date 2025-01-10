import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomAlert from '../CustomAlert'; // Import your custom alert


const Profile = () => {
    const [findRideBookings, setFindRideBookings] = useState([]);
    const [driverBookings, setDriverBookings] = useState([]);
    const [otpMap, setOtpMap] = useState({}); // State to store OTPs for each booking
    const [verificationOtpMap, setVerificationOtpMap] = useState({}); // State to store OTPs entered by user
    const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
    const [alertMessage, setAlertMessage] = useState(null); // To store alert message


    useEffect(() => {
        const fetchBookings = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error("User ID not found in localStorage.");
                return;
            }
            try {
                const findRideResponse = await axios.get(`http://localhost:8000/profile/booked-rides/${userId}`);
                setFindRideBookings(findRideResponse.data);

                const driverBookingResponse = await axios.get(`http://localhost:8000/profile/driver-booked-rides/${userId}`);
                setDriverBookings(driverBookingResponse.data);

            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const generateOtp = async (id, type) => {
        try {
            const response = await axios.post(`http://localhost:8000/profile/generate-otp/${type}/${id}`);
            if (response.status === 200) {
                const { otp } = response.data;
                setOtpMap((prev) => ({ ...prev, [id]: otp }));
                setAlertMessage('OTP generated successfully!');
            } else {
                setAlertMessage(`Error: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Error generating OTP:', error.response?.data || error.message);
            setAlertMessage('Something went wrong while generating OTP! Please check the server connection or request parameters.');
        }
    };
    
    const verifyOtp = async (id, type,origin, destination) => {
        const enteredOtp = verificationOtpMap[id]?.join('');
        try {
            const response = await axios.post(`http://localhost:8000/profile/verify-otp/${type}/${id}`, { otp: enteredOtp });
            setAlertMessage(response.data.message);
            redirectToGoogleMaps(origin, destination);
        } catch (error) {
            console.error('Error verifying OTP:', error.response?.data || error.message);
            setAlertMessage('Verification failed: OTP is incorrect or expired.');
        }
    };
    
    const redirectToGoogleMaps = (origin, destination) => {
        const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
        window.open(url, '_blank');
    };
    

    const handleOtpChange = (e, id, index) => {
        const value = e.target.value;
        setVerificationOtpMap((prevVerificationOtpMap) => {
            const otp = prevVerificationOtpMap[id] || ['', '', '', '', '', '']; // Initialize if undefined
            otp[index] = value; // Update the OTP at the specified index
            return {
                ...prevVerificationOtpMap,
                [id]: otp,
            };
        });
        // Move focus to the next input field automatically
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-input-${id}-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleOtpFocus = (id, index) => {
        const input = document.getElementById(`otp-input-${id}-${index}`);
        if (input) {
            input.style.boxShadow = otpBoxFocusStyle.boxShadow;
            input.style.borderColor = otpBoxFocusStyle.borderColor;
        }
    };

    const handleOtpBlur = (id, index) => {
        const input = document.getElementById(`otp-input-${id}-${index}`);
        if (input) {
            input.style.boxShadow = otpBoxStyle.boxShadow;
            input.style.borderColor = otpBoxStyle.border;
        }
    };
    

    const containerStyle = {
        marginTop: '150px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#444',
    };

    const listStyle = {
        padding: '0',
        listStyle: 'none',
    };

    const listItemStyle = (isHovered) => ({
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: isHovered ? '#f1f1f1' : '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: isHovered
            ? '0 6px 12px rgba(0, 0, 0, 0.15)'
            : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        transform: isHovered ? 'translateY(-5px)' : 'none',
    });

    const buttonStyle = {
        padding: '8px 15px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.3s ease',
    };

    const otpBoxStyle = {
        width: '60px', // Adjust width to match the style
        height: '40px',
        fontSize: '18px',
        textAlign: 'center',
        borderRadius: '8px', // Rounder corners
        border: '1px solid #ddd',
        margin: '0 10px', // Add more space between inputs
        backgroundColor: '#fff', // White background
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add subtle shadow for depth
        outline: 'none', // Remove default focus outline
        transition: 'box-shadow 0.3s ease', // Smooth hover transition
    };

    const otpBoxFocusStyle = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Highlight on focus
        borderColor: '#007bff', // Blue border on focus
    };

    const spanStyle = {
        display: 'block',
        marginTop: '10px',
        fontSize: '14px',
        color: '#007bff',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>My Booked Rides</h1>
            <h2 style={headingStyle}>Find Ride Bookings</h2>
            {findRideBookings.length === 0 ? (
                <p>No Find Ride Bookings yet.</p>
            ) : (
                <ul style={listStyle}>
                    {findRideBookings.map((ride) => (
                        <li
                            key={ride._id}
                            style={listItemStyle(hoveredCard === ride._id)}
                            onMouseEnter={() => setHoveredCard(ride._id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <p><strong>From:</strong> {ride.pickupLocation} → <strong>To:</strong> {ride.dropoffLocation}</p>
                            <p><strong>Date & Time:</strong> {new Date(ride.dateTime).toLocaleString()}</p>
                            <button
                                style={{ ...buttonStyle, backgroundColor: '#007bff' }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                                onClick={() => generateOtp(ride._id, 'offerRide')} // Pass ride._id to generate OTP
                            >
                                Generate OTP
                            </button>
                            {otpMap[ride._id] && <span style={spanStyle}><strong>Generated OTP:</strong> {otpMap[ride._id]}</span>}
                            {otpMap[ride._id] && (
                                <>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        {Array(6).fill().map((_, index) => (
                                            <input
                                                key={index}
                                                id={`otp-input-${ride._id}-${index}`}
                                                style={otpBoxStyle}
                                                type="text"
                                                maxLength="1"
                                                value={verificationOtpMap[ride._id]?.[index] || ''}
                                                onChange={(e) => handleOtpChange(e, ride._id, index)} // Track entered OTP
                                                onFocus={() => handleOtpFocus(ride._id, index)}
                                                onBlur={() => handleOtpBlur(ride._id, index)}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        style={{ ...buttonStyle, backgroundColor: '#28a745' }}
                                        onClick={() => verifyOtp(ride._id, 'offerRide', ride.pickupLocation, ride.dropoffLocation)}
                                    >
                                        Verify OTP
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            <h2 style={headingStyle}>Driver Bookings</h2>
            {driverBookings.length === 0 ? (
                <p>No Driver Bookings yet.</p>
            ) : (
                <ul style={listStyle}>
                    {driverBookings.map((booking) => (
                        <li
                            key={booking._id}
                            style={listItemStyle(hoveredCard === booking._id)}
                            onMouseEnter={() => setHoveredCard(booking._id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <p><strong>Driver Name:</strong> {booking.name}</p>
                            <p><strong>From:</strong> {booking.sourceLocation} → <strong>To:</strong> {booking.destinationLocation}</p>
                            <p><strong>Date & Time:</strong> {new Date(booking.date).toLocaleString()}</p>
                            <button
                                style={{ ...buttonStyle, backgroundColor: '#007bff' }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                                onClick={() => generateOtp(booking._id, 'booking')} // Pass booking._id to generate OTP
                            >
                                Generate OTP
                            </button>
                            {otpMap[booking._id] && <span style={spanStyle}><strong>Generated OTP:</strong> {otpMap[booking._id]}</span>}
                            {otpMap[booking._id] && (
                                <>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        {Array(6).fill().map((_, index) => (
                                            <input
                                                key={index}
                                                id={`otp-input-${booking._id}-${index}`}
                                                style={otpBoxStyle}
                                                type="text"
                                                maxLength="1"
                                                value={verificationOtpMap[booking._id]?.[index] || ''}
                                                onChange={(e) => handleOtpChange(e, booking._id, index)} // Track entered OTP
                                                onFocus={() => handleOtpFocus(booking._id, index)}
                                                onBlur={() => handleOtpBlur(booking._id, index)}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        style={{ ...buttonStyle, backgroundColor: '#28a745' }}
                                        onClick={() => verifyOtp(booking._id, 'booking', booking.sourceLocation, booking.destinationLocation)}
                                    >
                                        Verify OTP
                                    </button>
                                </>
                            )}

                        </li>
                    ))}
                </ul>
            )}
            {/* Custom Alert */}
{alertMessage && <CustomAlert message={alertMessage} onClose={() => setAlertMessage(null)} />}
        </div>
    );
};

export default Profile;
