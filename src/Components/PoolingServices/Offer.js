import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../Images/Poolstep4.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CustomAlert from '../CustomAlert'; // Import your custom alert


function Offer() {
    let navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState(null); // To store alert message
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


    const backButtonStyle = {
        position: 'relative',
        top: '120px', 
        left: '30px', 
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };
    const typingStyle = {
        overflow: 'hidden',
        borderRight: '.15em solid orange',
        whiteSpace: 'nowrap',
        margin: '0 auto',
        letterSpacing: '.15em',
        marginTop: '100px',
        animation: 'typing 4s steps(30, end) 1s forwards, erase 2s steps(30, end) 4s forwards, blink-caret 0.75s step-end infinite',
    };

    const formStyle = {
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        marginTop: "40px",
    };

    const inputContainerStyle = {
        marginBottom: "20px",
    };

    const inputStyle = {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginTop: "5px",
    };

    const submitButtonStyle = {
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "200px",
        marginTop: "30px",
    };

    return (
        <>
            <style>
                {`
                    @keyframes typing {
                        from { width: 0; }
                        to { width: 100%; }
                    }
                    @keyframes blink-caret {
                        from, to { border-color: transparent; }
                        50% { border-color: orange; }
                    }
                `}
            </style>
            <button style={backButtonStyle} onClick={() => navigate(-1)}>Back</button>
            <div className="container" style={{ background: "linear-gradient(to right, #FFFFFF, #87CEEB)", marginTop: "4rem", padding: "40px", borderRadius: "8px" }}>
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="fw-bolder fs-1 typing" style={typingStyle}>OFFER A RIDE AND EARN</div>
                        <div className="fs-3 mt-5">Share your journey and reduce your travel charge</div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <img src={pic} alt='error' className='mt-5' style={{ height: "350px", width: "450px", borderRadius: "8px" }} />
                    </div>
                </div>
            </div>

            <div className="container" style={formStyle}>
                <div className="text-center mt-5 fs-3 fw-bold">Enter Ride Information</div>

                <div className="row">
                    <div className="col-md-6" style={inputContainerStyle}>
                        <label htmlFor='pickup' className='fw-bold'>Pick Up Location</label>
                        <input type="text" className="form-control" style={inputStyle} placeholder="Location" value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}/>
                    </div>
                    <div className="col-md-6" style={inputContainerStyle}>
                        <label htmlFor='dropoff' className='fw-bold'>Drop Off Location</label>
                        <input type="text" className="form-control" style={inputStyle} placeholder="Location" value={dropoffLocation}
                            onChange={(e) => setDropoffLocation(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
    <div className="col-md-6" style={inputContainerStyle}>
        <label className='fw-bold'>Repeat Ride</label>
        <input
            type="text"
            className="form-control"
            style={inputStyle}
            value={repeatRide ? getSelectedDaysString() : ""}
            placeholder="Select days"
            readOnly
            onClick={() => {
                setRepeatRide(!repeatRide);
                setDropdownOpen(!repeatRide);
            }}
        />
        {dropdownOpen && (
            <div style={{
                position: 'absolute',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                marginTop: '5px',
                backgroundColor: '#f9f9f9',
                zIndex: 1000,
                minWidth:'630px'
            }}>
                {Object.keys(selectedDays).map((day) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                        <span>{day}</span>
                        <input
                            type="checkbox"
                            checked={selectedDays[day]}
                            onChange={() => handleCheckboxChange(day)}
                        />
                    </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <button onClick={() => setDropdownOpen(false)} style={{ marginRight: '10px' }}>OK</button>
                </div>
            </div>
        )}
    </div>

    <div className="col-md-6" style={inputContainerStyle}>
        <label className='fw-bold'>Car Type</label>
        <input
            type="text"
            className="form-control"
            placeholder="Car Type"
            style={inputStyle}
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
        />
    </div>
</div>


                <div className="row">
                    <div className="col-md-6" style={inputContainerStyle}>
                        <label htmlFor='time' className='fw-bold'>Date & Time</label>
                        <input type="datetime-local" className="form-control" style={inputStyle} value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}/>
                    </div>
                    <div className="col-md-6" style={inputContainerStyle}>
                        <label htmlFor='seats' className='fw-bold'>Available Seats</label>
                        <input type="number" className="form-control" style={inputStyle} placeholder="Number of seats" value={availableSeats}
                            onChange={(e) => setAvailableSeats(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6" style={inputContainerStyle}>
                        <label htmlFor='price' className='fw-bold'>Price Per Seat</label>
                        <input type="text" className="form-control" style={inputStyle} placeholder="Price" value={pricePerSeat}
                            onChange={(e) => setPricePerSeat(e.target.value)}/>
                    </div>
                    <div className="col-md-6" style={inputContainerStyle}>
                        <label htmlFor='riderule' className='fw-bold'>Ride Rules</label>
                        <input type="text" className="form-control" style={inputStyle} placeholder="Eg :-No smoking" value={rideRule}
                            onChange={(e) => setRideRule(e.target.value)}/>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" style={submitButtonStyle} onClick={handleSubmit}>Confirm</button>
                </div>
            </div>
            {/* Custom Alert */}
            {alertMessage && <CustomAlert message={alertMessage} onClose={handleAlertClose}/>}
        </>
    );
}

export default Offer;
