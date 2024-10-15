import React, { useState } from "react";
import Profile from '../Images/driver.jpg'

function DriverForm() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        city: "",
        drivingLicenceNumber: "",
        panCardImage: null,
        drivingLicenceImage: null,
        aadharFront: null,
        aadharBack: null,
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit form logic here
    };

    return (
        <div className="container" style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.profilePhoto}>
                    <img
                        src={Profile}
                        alt="profile"
                        style={styles.image}
                    />
                    {/* <p>Your Photo</p> */}
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            style={styles.input}
                        />
                    </div>
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Email id</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            style={styles.input}
                        />
                    </div>
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Driving Licence number</label>
                        <input
                            type="text"
                            name="drivingLicenceNumber"
                            value={formData.drivingLicenceNumber}
                            onChange={handleInputChange}
                            style={styles.input}
                        />
                        {/* <button style={styles.verifyButton}>Verify</button> */}
                    </div>

                    <div style={styles.inputContainer}>
                        <label>Driving Licence image</label>
                        <input
                            type="file"
                            name="drivingLicenceImage"
                            onChange={handleFileChange}
                            style={styles.inputFile}
                        />
                    </div>
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Pan Card image</label>
                        <input
                            type="file"
                            name="panCardImage"
                            onChange={handleFileChange}
                            style={styles.inputFile}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <label>Aadhar Front</label>
                        <input
                            type="file"
                            name="aadharFront"
                            onChange={handleFileChange}
                            style={styles.inputFile}
                        />
                    </div>
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Aadhar Back</label>
                        <input
                            type="file"
                            name="aadharBack"
                            onChange={handleFileChange}
                            style={styles.inputFile}
                        />
                    </div>
                </div>

                <div style={styles.submitContainer}>
                    <button type="submit" style={styles.submitButton}>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}

const styles = {
    container: {
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        width: "100%", // Make container full width
        // maxWidth: "1200px", // Increase max-width
    },
    form: {
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    profilePhoto: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
    },
    image: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
    },
    row: {
        display: "flex",
        flexWrap: "wrap", // Allow wrapping for smaller screens
        gap: "15px",
        marginBottom: "15px",
    },
    inputContainer: {
        flex: "1 1 calc(50% - 15px)", // Two columns with space between
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginTop: "5px",
    },
    inputFile: {
        padding: "10px 0",
        borderRadius: "5px",
        marginTop: "5px",
    },
    submitContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
    },
    submitButton: {
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "200px", // Increase button width
    },
    "@media (max-width: 768px)": {
        row: {
            flexDirection: "column", // Stack elements vertically on smaller screens
        },
        inputContainer: {
            flex: "1 1 100%", // Full width on smaller screens
        },
    },
};

export default DriverForm;