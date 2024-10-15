import React from "react";
import img1 from '../Images/idriver1.jpg';
import img2 from '../Images/driver1.jpeg';
import img3 from '../Images/idriver2.jpg';
import img4 from '../Images/Vehicle.png';

const Service = () => {
    return (
        <>
            <div style={styles.container}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Image 1 */}
                        <div className="col-md-6 my-3 text-center d-flex justify-content-center">
                            <img
                                src={img1}
                                className="img-fluid"
                                alt="Driver"
                                style={styles.image} // Using internal CSS
                            />
                        </div>
                        {/* Text with Icon */}
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center py-4">
                            <img 
                                className="card-img-top" 
                                src={img2} 
                                alt="Card cap" 
                                style={styles.icon} // Using internal CSS
                            />
                            <h1 style={styles.title}>Driver Booking</h1>
                            <p style={styles.description}>
                                Book a professional driver to your doorstep. Enjoy seamless, reliable
                                service with our experienced drivers, ensuring a seamless and
                                personalized travel experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.container}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Text with Icon */}
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center">
                            <img 
                                className="card-img-top" 
                                src={img4} 
                                alt="Card cap" 
                                style={styles.icon} // Using internal CSS
                            />
                            <h1 style={styles.title}>Vehicle Pooling</h1>
                            <p style={styles.description}>
                                Reserve our vehicle pooling service for efficient, cost-effective travel. Share rides with others to reduce costs and environmental impact, while enjoying a comfortable and convenient journey.
                            </p>
                        </div>
                        {/* Image 2 */}
                        <div className="col-md-6 my-3 text-center d-flex justify-content-center">
                            <img
                                src={img3}
                                className="img-fluid"
                                alt="Vehicle"
                                style={styles.image} // Using internal CSS
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                @media (max-width: 768px) {
                    .container {
                        padding: 20px;
                    }

                    .img-fluid {
                        width: 100%;
                    }

                    .card-img-top {
                        width: 80px;
                        height: 80px;
                    }
                }
                `}
            </style>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1px',
        backgroundColor: '#f8f9fa'
    },
    image: {
        width: '90%',
        maxWidth: '450px',
        borderRadius: '8px'
    },
    icon: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '20px'
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    description: {
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#555',
        textAlign: 'center'
    }
};

export default Service;
