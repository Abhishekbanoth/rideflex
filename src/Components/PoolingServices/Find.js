import React, { useState, useEffect } from "react";
import axios from "axios";
import pic from '../Images/Pool2.png';
import { useNavigate } from "react-router-dom";

function FindRide() {
  const [rideOffers, setRideOffers] = useState([]);

  useEffect(() => {
    const fetchRideOffers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/findride");
        setRideOffers(response.data);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchRideOffers();
  }, []);

  let navigate = useNavigate();

  const handleBookNow = (ride) => {
    // Handle the booking logic here
    console.log("Booking ride:", ride);
    navigate('/ridedetails', { state: { ride } });
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

  return (
    <div style={styles.container}>
      <button style={backButtonStyle} onClick={() => navigate(-1)}>Back</button>
      <div className="container" style={{ background: "linear-gradient(to right, #FFFFFF, #a7ff8e)", marginTop: "4rem", padding: "40px", borderRadius: "8px" }}>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="fw-bolder fs-1 typing" style={typingStyle}>FIND A RIDE AND SAVE</div>
            <div className="fs-3 mt-5">Share your journey and reduce your travel charge</div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img src={pic} alt='error' className='mt-5' style={{ height: "350px", width: "450px", borderRadius: "8px" }} />
          </div>
        </div>
      </div>

      <div style={styles.availableRidesSection}>
        <h2>Available Rides</h2>
        <div className="row">
          {rideOffers.map((ride, index) => (
            <div className='row'key={index} style={styles.rideCard}>
              <div className='col-md-9'style={styles.rideDetails}>
                <div>
                  <strong>Location:</strong>
                  <p>{`${ride.pickupLocation} --> ${ride.dropoffLocation}`}</p>
                </div>
                <div>
                  <strong>Date & Time:</strong>
                  {new Date(ride.dateTime).toLocaleString()}
                </div>
                <div>
                  <strong>Available Seats:</strong> {ride.availableSeats}
                </div>
                <div>
                  <strong>Price Per Seat:</strong> {ride.pricePerSeat}
                </div>
                {ride.user && (
                  <div>
                    <strong>Offered by:</strong> {ride.user.name}
                  </div>
                )}
              </div>
              <div className='col-md-3'style={styles.buttonContainer}>
              <button style={styles.bookButton} onClick={() => handleBookNow(ride)}>Book Now</button>

              </div>
            </div>
          ))}
        </div>
        {/* <button style={styles.moreButton}>More ➔</button> */}
      </div>
    </div>
  );
}

export default FindRide;

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
  },
  availableRidesSection: {
    textAlign: "center",
    marginTop: "40px",
  },
  rideCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "start",
    transition: "transform 0.2s ease-in-out",
    maxWidth: "600px",
  },
  "rideCard:hover": {
    transform: "scale(1.02)", // Slight zoom on hover
  },
  rideDetails: {
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  bookButton: {
    padding: "10px 20px",
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
    textDecoration: "none",
  },
  moreButton: {
    marginTop: "20px",
    backgroundColor: "transparent",
    color: "black",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },
};
