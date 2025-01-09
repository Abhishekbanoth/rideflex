import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaRegUserCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";
import CustomAlert from '../CustomAlert'; // Import your custom alert


const RideDetails = () => {
    const location = useLocation();
    const { ride } = location.state || {};  // Get the passed ride details
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [alertMessage, setAlertMessage] = useState(null); // To store alert message

    useEffect(() => {
        // Get the user's name from localStorage
        const savedUsername = localStorage.getItem('username');
        setUsername(savedUsername);
    }, []);
    const backButtonStyle = {
        position: 'relative',
        top: '-15px',
        left: '-80px',
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };
    if (!ride) {
        return <div>No ride details available.</div>;
    }

    const handleclick = async () => {
        try {
            const response = await fetch(`http://localhost:8000/findride/book/${ride._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                setAlertMessage('Ride booked successfully');
                setTimeout(() => navigate(-1), 2000); // Navigate back after 2 seconds
            } else {
                setAlertMessage('Failed to book the ride');
            }
        } catch (error) {
            setAlertMessage('Error booking the ride');
        }
    };
    

    const handleAlertClose = () => {
        setAlertMessage(null); // Close the alert
        // Open Google Maps after closing the alert
        const origin = ride.pickupLocation;
        const destination = ride.dropoffLocation;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
        window.open(url, '_blank'); 
    };
    return (
        <div className="container  mb-5" style={{ marginTop: "150px" }}>
            <button style={backButtonStyle} onClick={() => navigate(-1)}>Back</button>

            <div className="text-center mb-4">
                <h3>Ride Details</h3>
                <p>{new Date(ride.dateTime).toLocaleString()}</p>
            </div>

            {/* Route details */}
            <div className="border-top border-bottom py-3">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="mb-0">{new Date(ride.dateTime).toLocaleTimeString()}</p>
                        <p>{ride.pickupLocation}</p>
                    </div>
                    <div className="align-self-center">
                        <FaChevronRight />
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <div>
                        <p>{ride.dropoffLocation}</p>
                    </div>
                    <div className="align-self-center">
                        <FaChevronRight />
                    </div>
                </div>
            </div>

            {/* Total price */}
            <div className="py-3 border-bottom">
                <div className="d-flex justify-content-between">
                    <span>Total price for 1 passenger</span>
                    <span>₹ {ride.pricePerSeat}</span>
                </div>
            </div>

            {/* Driver details */}
                <div className="py-3 border-bottom">
                    <div className="d-flex align-items-center">
                        <FaRegUserCircle size={40} className="me-3" />
                        <div>
                            <p className="mb-0">{username}</p>
                            <p className="text-muted small">Never cancels rides</p>
                        </div>
                        <div className="ms-auto align-self-center">
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            <div className="text-center mt-5">
                <button className="btn btn-dark btn-lg" onClick={handleclick}>Book</button>
            </div>
            {/* Custom Alert */}
{alertMessage && <CustomAlert message={alertMessage} onClose={handleAlertClose} />}
        </div>
    );
};

export default RideDetails;