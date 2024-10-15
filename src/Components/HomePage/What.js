import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Images/Homehead.png'; // Replace with actual image path

const What = () => {
    return (
        // <div className='card ' style={{borderRadius:"0"}}>
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-lg-start text-center">
                    <h2 style={styles.title}>
                        What is Ride-Flex ?
                    </h2>
                    <p style={styles.subtitle}>
                        Ride Flex connects car owners with professional drivers.
                        Our platform helps individuals who have cars but need a driver, offering
                        a seamless and reliable solution. Users can easily request a driver, get
                        matched with verified professionals, and enjoy safe and comfortable rides.
                        We prioritize safety, user-friendliness, and community support.
                    </p>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                    <img
                        style={styles.image}
                        src={img}
                        alt="Ride Flex"
                    />
                </div>
            </div>
        </div>
        // </div>
    );
};

const styles = {
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    subtitle: {
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#555',
    },
    image: {
        width: '100%',             // Ensure the image is responsive
        maxWidth: '400px',         // This retains the original size
        height: 'auto',            // Keep aspect ratio
        backgroundColor: '#e0e0e0', // Light gray background
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Adds subtle shadow to the image
    }
};

export default What;
