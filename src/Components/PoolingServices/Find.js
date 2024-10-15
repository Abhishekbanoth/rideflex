import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function RideSharingApp() {
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    dropLocation: "",
    dateTime: "",
    seatsRequired: "",
    phoneNumber: "",
    gender: "",
    numberOfSeats: "",
    priceRange: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit the form data to search for rides
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Find a Ride</h1>
        <p style={styles.heroSubtitle}>Making Your Trip Fun And Cost Saving</p>
        <p style={styles.heroDescription}>Ready to Find a Ride?</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.row}>
            <input
              type="text"
              name="pickUpLocation"
              placeholder="Pick up location"
              value={formData.pickUpLocation}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="dropLocation"
              placeholder="Drop location"
              value={formData.dropLocation}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="datetime-local"
              name="dateTime"
              placeholder="Date/Time"
              value={formData.dateTime}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="seatsRequired"
              placeholder="Seats required"
              value={formData.seatsRequired}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="numberOfSeats"
              placeholder="Number of Seats"
              value={formData.numberOfSeats}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="priceRange"
              placeholder="Price Range"
              value={formData.priceRange}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Find Ride
          </button>
        </form>
      </div>

      <div style={styles.availableRidesSection}>
        <h2>Available Rides</h2>
        <div style={styles.rideCard}>
          <img
            src="https://via.placeholder.com/50"
            alt="driver"
            style={styles.rideImage}
          />
          <div style={styles.rideDetails}>
            <p>Name :- Abhishek</p>
            <p>Time :- 9:45AM-5PM</p>
          </div>
          <Link to="/ridedetails" style={styles.bookButton}>
            Book Now
          </Link>
        </div>

        <div style={styles.rideCard}>
          <img
            src="https://via.placeholder.com/50"
            alt="driver"
            style={styles.rideImage}
          />
          <div style={styles.rideDetails}>
            <p>Name :- Vamshi</p>
            <p>Time :- 9:45AM-5PM</p>
          </div>
          <Link to="/ridedetails" style={styles.bookButton}>
            Book Now
          </Link>
        </div>

        <div style={styles.rideCard}>
          <img
            src="https://via.placeholder.com/50"
            alt="driver"
            style={styles.rideImage}
          />
          <div style={styles.rideDetails}>
            <p>Name :- Sai</p>
            <p>Time :- 9:45AM-5PM</p>
          </div>
          <Link to="/ridedetails" style={styles.bookButton}>
            Book Now
          </Link>
        </div>

        <button style={styles.moreButton}>More ➔</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
  },
  heroSection: {
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    padding: "50px 20px",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0",
  },
  heroSubtitle: {
    fontSize: "24px",
    margin: "10px 0",
  },
  heroDescription: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  form: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
  },
  availableRidesSection: {
    textAlign: "center",
  },
  rideCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "15px",
  },
  rideImage: {
    borderRadius: "50%",
  },
  rideDetails: {
    flex: 1,
    marginLeft: "20px",
    textAlign: "left",
  },
  bookButton: {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none", // Make sure to remove link underline
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

export default RideSharingApp;
