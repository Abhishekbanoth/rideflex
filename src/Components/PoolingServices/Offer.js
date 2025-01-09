import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../Images/offeraride.avif';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CustomAlert from '../CustomAlert'; // Import your custom alert

function Offer() {
    let navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState(null);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [repeatRide, setRepeatRide] = useState(false);
    const [selectedDays, setSelectedDays] = useState({
        Sun: false,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
    });
    const [carType, setCarType] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');
    const [pricePerSeat, setPricePerSeat] = useState('');
    const [rideRule, setRideRule] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCheckboxChange = (day) => {
        setSelectedDays((prevDays) => ({
            ...prevDays,
            [day]: !prevDays[day],
        }));
    };

    const getSelectedDaysString = () => {
        const selected = Object.keys(selectedDays).filter((day) => selectedDays[day]);
        return selected.join(', ');
    };

    const handleSubmit = async () => {
        const rideData = {
            pickupLocation,
            dropoffLocation,
            repeatRide,
            selectedDays: Object.keys(selectedDays).filter((day) => selectedDays[day]),
            carType,
            dateTime,
            availableSeats,
            pricePerSeat,
            rideRule,
        };

        try {
            const response = await axios.post('http://localhost:8000/offerride', rideData);
            setAlertMessage(response.data.message);
        } catch (error) {
            console.error('Error submitting ride offer:', error);
        }
    };

    const handleAlertClose = () => {
        setAlertMessage(null);
        navigate(-1); // Navigate one page back when alert closes
    };

    const styles = {
        container: {
            background: "linear-gradient(to right, #FFFFFF, #87CEEB)",
            marginTop: "4rem",
            padding: "40px",
            borderRadius: "8px",
        },
        typing: {
            overflow: "hidden",
            borderRight: ".15em solid orange",
            margin: "0 auto",
            marginTop: "100px",
            animation: "typing 4s steps(30, end) 1s forwards, blink-caret 0.75s step-end infinite",
            maxWidth: "100%", // Default for larger screens
            fontSize: "1rem",
        },
        form: {
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginTop: "40px",
        },
        backButtonStyle: {
            position: 'relative',
            top: '120px',
            left: '30px',
            padding: '10px 20px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        input: {
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginTop: "5px",
        },
        submitButton: {
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "200px",
            marginTop: "30px",
        },
        dropdown: {
            position: 'absolute',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
            zIndex: 1000,
            minWidth: '100%',
        },
    };

    return (
        <>

            <button style={styles.backButtonStyle} onClick={() => navigate(-1)}>
                Back
            </button>

            <div className="container" style={styles.container}>
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="fw-bolder fs-1 typing" style={styles.typing}>OFFER A RIDE AND EARN</div>
                        <div className="fs-3 mt-5">Share your journey and reduce your travel charge</div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <img src={pic} alt="Offer Ride" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="container" style={styles.form}>
                <div className="text-center mt-5 fs-3 fw-bold">Enter Ride Information</div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="pickup" className="fw-bold">Starting Location</label>
                        <input type="text" className="form-control" style={styles.input} placeholder="Location"
                            value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="dropoff" className="fw-bold">Ending Location</label>
                        <input type="text" className="form-control" style={styles.input} placeholder="Location"
                            value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="fw-bold">Repeat Ride</label>
                        <input type="text" className="form-control" style={styles.input} placeholder="Select days" readOnly
                            value={repeatRide ? getSelectedDaysString() : ""}
                            onClick={() => {
                                setRepeatRide(!repeatRide);
                                setDropdownOpen(!repeatRide);
                            }} />
                        {dropdownOpen && (
                            <div style={styles.dropdown}>
                                {Object.keys(selectedDays).map((day) => (
                                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>{day}</span>
                                        <input type="checkbox" checked={selectedDays[day]}
                                            onChange={() => handleCheckboxChange(day)} />
                                    </div>
                                ))}
                                <button onClick={() => setDropdownOpen(false)} className="btn btn-secondary mt-2">OK</button>
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="fw-bold">Car Type</label>
                        <input type="text" className="form-control" style={styles.input} placeholder="Car Type"
                            value={carType} onChange={(e) => setCarType(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="fw-bold">Date & Time</label>
                        <input type="datetime-local" className="form-control" style={styles.input} value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="fw-bold">Available Seats</label>
                        <input type="number" className="form-control" style={styles.input} placeholder="Number of seats"
                            value={availableSeats} onChange={(e) => setAvailableSeats(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="fw-bold">Price Per Seat</label>
                        <input type="text" className="form-control" style={styles.input} placeholder="Price"
                            value={pricePerSeat} onChange={(e) => setPricePerSeat(e.target.value)} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="fw-bold">Ride Rules</label>
                        <input type="text" className="form-control" style={styles.input} placeholder="E.g., No smoking"
                            value={rideRule} onChange={(e) => setRideRule(e.target.value)} />
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" style={styles.submitButton} onClick={handleSubmit}>Confirm</button>
                </div>
            </div>

            {alertMessage && <CustomAlert message={alertMessage} onClose={handleAlertClose} />}
        </>
    );
}

export default Offer;
