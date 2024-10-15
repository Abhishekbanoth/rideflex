import React from 'react';
import img from '../Images/Pool2.png';

function Ride4() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="container p-3 mb-5 mt-5" 
                // style={styles.card}
                >
                    <div className="row g-0 h-100">
                        {/* Content Section */}
                        <div className="col-lg-7 col-12 d-flex align-items-center" style={styles.contentSection}>
                            <div>
                                <h5 className="card-title fs-2 fw-bolder ">SAVE COST AND SHARE YOUR RIDE</h5>
                                <p className="card-text">Join our vehicle pooling service and optimize your travel</p>
                                <a href="/find" className="btn btn-dark p-2 mx-3 my-2 ">Find a Ride</a>
                                <a href="/offer" className="btn btn-dark p-2 mx-3 ">Offer a Ride</a>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="col-lg-5 col-12" style={styles.imageSection}>
                            <img
                                src={img}
                                alt="Placeholder"
                                className="card-img h-100"
                                style={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    // card: {
    //     width: "80%",
    //     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    //     borderRadius: "10px",
    // },
    contentSection: {
        padding: "20px",
    },
    imageSection: {
        overflow: "hidden",
    },
    image: {
        objectFit: "cover",
        width: "100%",
    },
    // Media query styles for responsiveness
    '@media (max-width: 992px)': {
        contentSection: {
            padding: "10px",
        },
        // card: {
        //     width: "90%", // Slightly wider card on smaller screens
        // },
    },
};

export default Ride4;
