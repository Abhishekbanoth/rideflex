import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Images/Homemain.jpeg'

const RideFlex = () => {
    
    const containerStyle = {
        backgroundImage: `url(${img})`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    };

    const overlayStyle = {
        backgroundColor: 'black',
        padding: '40px 80px',
        borderRadius: '10px',
        textAlign: 'center',
        color: '#fff',
    };
    
    const button= {
        padding: "10px 20px",
        fontSize: "18px",
        color: "#000",
        backgroundColor: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        textDecoration: 'none',
        transition: "background-color 0.3s ease",
    };
    const buttonHover= {
        backgroundColor: "#ccc",
    };

    return (
        <div style={containerStyle}>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-lg-4">
                        <div style={overlayStyle}>
                            <h1>Ride Flex</h1>
                            <p>Your Personal Driver Just A Click Away</p>
                            <a href='/booking'
                    style={button}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                >
                    Book Now
                </a>                        
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RideFlex;
