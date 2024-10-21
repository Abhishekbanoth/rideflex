import React from 'react';
import img from '../Images/DBook.png';

function DriverHead({ scrollToForm }) {
    return (
        <>
            <div className="d-flex justify-content-center" style={{backgroundColor:"black",marginTop:"100px"}}>
                <div className="container p-3 mb-5 " 
                // style={styles.card}
                >
                    <div className="row g-0 h-100">
                        {/* Image Section */}
                        <div className="col-lg-5 col-12" style={styles.imageSection}>
                            <img
                                src={img}
                                alt="Placeholder"
                                className="card-img h-100 mt-5"
                                style={styles.image}
                            />
                        </div>
                        {/* Content Section */}
                        <div className="col-lg-7 col-12 d-flex align-items-center" style={styles.contentSection}>
                            <div>
                                <h5 className="card-title fs-2 fw-bolder " style={{color:"white"}}>Become A Proffesional Driver</h5>
                                <p className="card-text "style={{color:"white"}}>Join our Platform and Start Earning by Driving</p>
                                <button  className="btn btn-primary mx-3 my-2 " style={styles.button} onClick={scrollToForm}>Apply Now</button>
                            </div>
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
    button: {
        padding: '10px 20px',
        backgroundColor: '#fff',
        color: '#0A0E1E',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    // Media query styles for responsiveness
    '@media (max-width: 992px)': {
        contentSection: {
            padding: "10px",
        },
        card: {
            width: "90%", // Slightly wider card on smaller screens
        },
    },
};

export default DriverHead;
