import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pic from '../Images/findaride.avif';
import Fuse from "fuse.js";


function FindRide() {
  const [rideOffers, setRideOffers] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [filteredRides, setFilteredRides] = useState([]);
  const [showAllRides, setShowAllRides] = useState(false);
  const [suggestions, setSuggestions] = useState({ from: [], to: [] });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRideOffers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/findride");
            const availableRides = response.data.filter(ride => ride.status === 'available');
            setRideOffers(availableRides);
            setFilteredRides(availableRides);
        } catch (error) {
            console.error("Error fetching rides:", error);
        }
    };

    fetchRideOffers();
}, []);


  // Configure Fuse.js for fuzzy matching
  const fuseOptions = {
    keys: ["pickupLocation", "dropoffLocation"],
    threshold: 0.4,
  };
  const fuse = new Fuse(rideOffers, fuseOptions);

  const handleSearch = () => {
    const inputDate = new Date(time);
    
    // Exact match on source, destination, and date
    const exactMatches = rideOffers.filter((ride) => {
      const rideDate = new Date(ride.dateTime); // Assuming ride.dateTime is a valid date string
      const isLocationMatch =
        ride.pickupLocation.toLowerCase() === from.toLowerCase() &&
        ride.dropoffLocation.toLowerCase() === to.toLowerCase();
      const isDateMatch = inputDate.toLocaleDateString() === rideDate.toLocaleDateString();
      
      return isLocationMatch && isDateMatch;
    });
  
    if (exactMatches.length > 0) {
      // Set filtered rides to show only the exact matches
      setFilteredRides(exactMatches);
    } else {
      // If no exact match, show available nearby rides for the given date
      const nearbyRides = rideOffers.filter((ride) => {
        const rideDate = new Date(ride.dateTime); // Assuming ride.dateTime is a valid date string
        const isLocationMatch =
          ride.pickupLocation.toLowerCase() === from.toLowerCase() &&
          ride.dropoffLocation.toLowerCase() === to.toLowerCase();
        const isDateMatch = inputDate.toLocaleDateString() === rideDate.toLocaleDateString();
        
        return isLocationMatch && isDateMatch;
      });
  
      if (nearbyRides.length > 0) {
        setFilteredRides(nearbyRides);
      } else {
        setFilteredRides([]);
        alert("No rides are available for the selected location and date.");
      }
    }
  
    setShowAllRides(false);
  };
  

  const handleInputChange = (value, field) => {
    if (field === "from") setFrom(value);
    else setTo(value);

    const matches = fuse.search(value).map((result) =>
      field === "from" ? result.item.pickupLocation : result.item.dropoffLocation
    );
    const uniqueMatches = [...new Set(matches)];
    setSuggestions((prev) => ({ ...prev, [field]: uniqueMatches }));
  };

  const handleSuggestionClick = (value, field) => {
    if (field === "from") setFrom(value);
    else setTo(value);

    setSuggestions((prev) => ({ ...prev, [field]: [] }));
  };

  const handleBookNow = async (ride) => {
    const userId = localStorage.getItem('userId'); // Retrieve the logged-in user's ID
    try {
      await axios.put(`http://localhost:8000/findride/book/${ride._id}`, { userId });
      alert(`Ride from ${ride.pickupLocation} to ${ride.dropoffLocation} has been booked!`);

        // Remove the ride from the available rides list on the frontend
        const updatedRides = filteredRides.filter((r) => r._id !== ride._id);
        setFilteredRides(updatedRides);

        // Optionally, update the ride offers state
        const updatedRideOffers = rideOffers.filter((r) => r._id !== ride._id);
        setRideOffers(updatedRideOffers);

        // Navigate to ride details page
        navigate("/ridedetails", { state: { ride } });
    } catch (error) {
        console.error("Error booking ride:", error);
        alert("Failed to book the ride. Please try again.");
    }
};

  

  const toggleShowAllRides = () => {
    setShowAllRides((prevState) => !prevState);
  };

  const ridesToDisplay = showAllRides ? filteredRides : filteredRides.slice(0, 4);

  return (
    <div style={styles.container}>
      <button style={styles.backButtonStyle} onClick={() => navigate(-1)}>
        Back
      </button>
      <div
        className="container"
        style={{
          background: "linear-gradient(to right, #FFFFFF, #a7ff8e)",
          marginTop: "4rem",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="fw-bolder fs-1 typing" style={styles.typing}>FIND A RIDE AND SAVE</div>
                        <div className="fs-3 mt-5">Share your journey and reduce your travel charge</div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <img src={pic} alt="Offer Ride" className="img-fluid" />
                    </div>
                </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <div style={styles.search}>
          <div style={styles.searchDivInline}>
            <h2 style={styles.h2}>From:</h2>
            <input
              type="text"
              placeholder="Source"
              style={styles.input}
              value={from}
              onChange={(e) => handleInputChange(e.target.value, "from")}
            />
            <ul style={styles.suggestionsList}>
              {suggestions.from.map((suggestion, index) => (
                <li
                  key={index}
                  style={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(suggestion, "from")}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.searchDivInline}>
            <h2 style={styles.h2}>To:</h2>
            <input
              type="text"
              placeholder="Destination"
              style={styles.input}
              value={to}
              onChange={(e) => handleInputChange(e.target.value, "to")}
            />
            <ul style={styles.suggestionsList}>
              {suggestions.to.map((suggestion, index) => (
                <li
                  key={index}
                  style={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(suggestion, "to")}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.searchDivInline}>
            <h2 style={styles.h2}>Time:</h2>
            <input
              type="date"
              style={styles.input}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div style={styles.searchDivInline}>
            <button
              style={styles.findButton}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  styles.findButtonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor =
                  styles.findButton.backgroundColor)
              }
              onClick={handleSearch}
            >
              Find
            </button>
          </div>
        </div>

        <div style={styles.availableRidesSection}>
          <h2 style={{textAlign:'center'}} >Available Rides</h2>
          <div className="row">
            {ridesToDisplay.map((ride, index) => (
              <div className="row" key={index} style={styles.rideCard}>
                <div className="col-md-9" style={styles.rideDetails}>
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
                <div className="col-md-3" style={styles.buttonContainer}>
                  <button
                    style={styles.bookButton}
                    onClick={() => handleBookNow(ride)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredRides.length > 4 && (
            <div style={styles.seeMoreContainer}>
              <button style={styles.seeMoreButton} onClick={toggleShowAllRides}>
                {showAllRides ? "Show Less" : "See More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindRide;



const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  typing: {
    overflow: "hidden",
    borderRight: ".15em solid orange",
    margin: "0 auto",
    marginTop: "100px",
    animation: "typing 4s steps(30, end) 1s forwards, blink-caret 0.75s step-end infinite",
    maxWidth: "100%", // Default for larger screens
    fontSize: "2rem",
  },
  backButtonStyle: {
    position: "relative",
    top: "120px",
    left: "30px",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px 10px",
    gap: "20px",
    flexWrap: "wrap",
  },
  searchDivInline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "10px",
    flex: "1 1 200px",
  },
  h2: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  suggestionsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    borderRadius: "5px",
    backgroundColor: "#fff",
    maxHeight: "100px",
    overflowY: "auto",
    position: "absolute",
    zIndex: 1000,
    width: "100%",
  },
  suggestionItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
  },
  findButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "0 auto", // Centers the button horizontally
    display: "block",
  },
  findButtonHover: {
    backgroundColor: "#45a049",
  },
  availableRidesSection: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
  rideDetails: {
    flex: 1,
    paddingRight: "20px",
  },
  buttonContainer: {
    textAlign: "center",
    paddingTop: "10px",
  },
  bookButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  seeMoreContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  seeMoreButton: {
    backgroundColor: "#0078d7",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  // Media Queries for Responsiveness
  "@media (max-width: 1200px)": {
    typing: {
      fontSize: "1.8rem",
      maxWidth: "90%",
    },
  },
  "@media (max-width: 768px)": {
    typing: {
      fontSize: "1.5rem",
      maxWidth: "95%",
    },
    search: {
      flexDirection: "column",
      gap: "15px",
    },
    rideCard: {
      maxWidth: "100%",
      padding: "15px",
    },
    bookButton: {
      fontSize: "12px",
      padding: "8px 16px",
    },
  },
  "@media (max-width: 480px)": {
    typing: {
      fontSize: "1.2rem",
      marginTop: "80px",
    },
    backButtonStyle: {
      top: "100px",
      fontSize: "12px",
      padding: "8px 15px",
    },
    input: {
      fontSize: "14px",
    },
    bookButton: {
      fontSize: "12px",
      padding: "6px 12px",
    },
    h2: {
      fontSize: "14px",
    },
  },
};