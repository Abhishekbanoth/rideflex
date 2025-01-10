import { useState, 
    // useRef, 
    // useEffect 
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as bootstrap from 'bootstrap'; // Import Bootstrap JS
import CustomAlert from '../CustomAlert'; // Import your custom alert

function BookForm() {
    const [showReturnTrip, setShowReturnTrip] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        time: '',
        vehicle: '',
        sourceLocation: '',
        destinationLocation: '',
        date: '',
        typeOfServices: '',
        vehicleType: '',
        returnTrip: false,
        returnDate: '',
        returnTime: '',
        otp:'',
        otpExpiry:'',
    });
    // const [otp, setOtp] = useState(null); // State to store OTP
    // const [otpInput, setOtpInput] = useState(''); // State for OTP input
    // const offcanvasRef = useRef(null);
    const [alertMessage, setAlertMessage] = useState(null); // To store alert message


    // useEffect(() => {
    //     // Add event listener for offcanvas close event
    //     const offcanvasElement = offcanvasRef.current;
    //     if (offcanvasElement) {
    //         const handleOffcanvasClose = () => {
    //             setOtp(null); // Reset OTP
    //             setOtpInput(''); // Reset OTP input
    //         };

    //         offcanvasElement.addEventListener('hidden.bs.offcanvas', handleOffcanvasClose);

    //         return () => {
    //             offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleOffcanvasClose);
    //         };
    //     }
    // }, []);

    const handleCheckboxChange = (e) => {
        setShowReturnTrip(e.target.checked);
        setFormData({ ...formData, returnTrip: e.target.checked });
    };
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId'); // Get the logged-in user's ID

        if (!formData.name || !formData.phoneNumber || !formData.time || !formData.vehicle ||
            !formData.sourceLocation || !formData.destinationLocation || !formData.date || !formData.typeOfServices) {
                setAlertMessage('Please fill all required fields');
            return; // Prevent form submission if validation fails
        }
        // console.log(formData);
        try {
            const response = await fetch('http://localhost:8000/Bookings/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, ...formData }),
            });
            const data = await response.json();
            
            if (response.ok) {
                setAlertMessage('Booking successful!');                // alert('Booking successful!');
                // if (offcanvasRef.current) {
                //     const offcanvasInstance = new bootstrap.Offcanvas(offcanvasRef.current);
                //     offcanvasInstance.show();
                // }
            } else {
                setAlertMessage(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage('Something went wrong!');
        }
    };
    // const handleGenerateOtp = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8000/Bookings/otp', { // Assuming this is the endpoint for generating OTP
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ phoneNumber: formData.phoneNumber }),
    //         });
    //         const data = await response.json();
    //         if (response.ok) {
    //             setOtp(data.otp); // Store the OTP in state
    //             setAlertMessage('OTP generated successfully!'); // Display success alert

    //             if (offcanvasRef.current) {
    //                 const offcanvasInstance = new bootstrap.Offcanvas(offcanvasRef.current);
    //                 offcanvasInstance.show(); // Show the offcanvas to verify OTP
    //             }
    //         } else {
    //             setAlertMessage(`Error: ${data.message}`);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         setAlertMessage('Something went wrong while generating OTP!');
    //     }
    // };

    // const handleVerifyOtp = async () => {
    //     if (otpInput === '') {
    //         setAlertMessage('Please enter the OTP');
    //         return;
    //     }

    //     try {
    //         if (otpInput === otp.toString()) {
    //             setAlertMessage('OTP verified successfully!');
    //             // Redirect to Google Maps with destination
    //             const origin = formData.sourceLocation;
    //             const destination = formData.destinationLocation;
    //             const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
    //             window.open(url, '_blank'); // Open Google Maps in a new tab
    //             // if (offcanvasRef.current) {
    //             //     const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
    //             //     if (offcanvasInstance) {
    //             //         offcanvasInstance.hide();
    //             //     }
    //             // }
    //         } else {
    //             setAlertMessage('Verification failed: OTP is incorrect.');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         setAlertMessage('Something went wrong while verifying OTP!');
    //     }
    // };
    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder="enter phone number"
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Time</label>
                        <input
                            type="time"
                            id="time"
                            placeholder="00:00"
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <label>Vehicle</label>
                        <input
                            type="text"
                            id="vehicle"
                            placeholder="eg :- Inova"
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                </div>

                <div style={styles.row}>
                <div style={styles.inputContainer}>
                        <label>Source Location</label>
                        <input
                            type="text"
                            id="sourceLocation"
                            placeholder="Enter Location"
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <label> Destination Location</label>
                        <input
                            type="text"
                            id="destinationLocation"
                            placeholder="Enter Location"
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Date</label>
                        <input
                            type="date"
                            id="date"
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <label>Type Of Services</label>
                        <select id="typeOfServices" name="typeofservices" required style={styles.input} onChange={handleChange}>
                            <option value="">Type Of Service</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Event">Event</option>
                            <option value="Permanent">Permanent</option>
                            <option value="Trip">Trip</option>
                        </select>
                    </div>
                </div>

                <div style={styles.row}>
                    <div style={styles.inputContainer}>
                        <label>Return Trip</label>
                        <input type="checkbox" id="return" onChange={handleCheckboxChange} />
                        {showReturnTrip && (
                            <div style={styles.row}>
                                <div style={styles.inputContainer}>
                                    <label>Return Date</label>
                                    <input type="date" id="returnDate" className="form-control" required style={styles.input} onChange={handleChange} />
                                </div>
                                <div style={styles.inputContainer}>
                                    <label>Return Time</label>
                                    <input type="time" id="returnTime" className="form-control" required style={styles.input} onChange={handleChange} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div style={styles.submitContainer}>
                    <button type="submit" 
                    // data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" 
                    style={styles.submitButton}>Hire Me</button>
                </div>
            </form>


            {/* <div className="offcanvas offcanvas-bottom" ref={offcanvasRef} tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{minHeight: '250px'}}>
    <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasBottomLabel" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your OTP</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div className="offcanvas-body small" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '0 0 0.5rem 0.5rem', boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="row"> */}
            {/* First row with Generate OTP and Verify OTP buttons */}
            {/* <div className="col-md-6 mb-3">
                <button
                    onClick={handleGenerateOtp}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '10px 0', fontSize: '1rem' }}>
                    Generate OTP
                </button>
            </div>

            {otp && (
                <div className="col-md-6 mb-3">
                    <button
                        onClick={handleVerifyOtp}
                        className="btn btn-success"
                        style={{ width: '100%', padding: '10px 0', fontSize: '1rem' }}>
                        Verify OTP
                    </button>
                </div>
            )} */}

            {/* Second row with OTP display and input */}
            {/* {otp ? (
                <>
                    <div className="col-md-6">
                        <h3 className="text mb-3" style={{ color: '#333', fontSize: '1.2rem',marginTop: '10px', marginLeft: '295px' }}>Your OTP: <span style={{ fontWeight: 'bold' }}>{otp}</span></h3>
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otpInput}
                            onChange={(e) => setOtpInput(e.target.value)}
                            style={{ width: '100%' }}
                            className="form-control mb-3"
                        />
                    </div>
                </>
            ) : (
                <p className="text" style={{ textAlign: 'start', color: '#777', marginTop: '10px', marginLeft: '295px' }}>No OTP generated yet.</p>
            )}

        </div>
    </div> */}
    {/* Custom Alert */}
{alertMessage && <CustomAlert message={alertMessage} onClose={() => setAlertMessage(null)} />}
{/* </div> */}



        </div>
    );
}

const styles = {
    container: {
        marginTop: "160px",
        marginBottom: '0',
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        width: "100%",
    },
    form: {
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        marginBottom: "15px",
    },
    inputContainer: {
        flex: "1 1 calc(50% - 15px)",
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
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
        width: "200px",
    },
    "@media (max-width: 768px)": {
        row: {
            flexDirection: "column",
        },
        inputContainer: {
            flex: "1 1 100%",
        },
    },
};

export default BookForm;
