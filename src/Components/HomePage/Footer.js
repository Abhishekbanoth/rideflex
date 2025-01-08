import React from 'react';
import ride from '../Images/rideflex.png';
import facebook from '../Images/ride_fb.png';
import instagram from '../Images/ride_insta.png';
import linkedin from '../Images/ride_linkedin.png';

function Footer() {
    return (
        <div className="main-container d-flex justify-content-center align-items-start">
            <div className="card bg-black text-white" style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)", borderRadius: "0px" }}>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className="mb-3">
                                <img src={ride} alt="Logo" style={{ height: "50px", width: "auto", backgroundColor: "black" }} />
                            </div>
                            <div className="mb-3 fs-3 fw-bold">Follow Us</div>
                            <div className="mb-4 mt-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
                                        <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                                            <img src={facebook} alt="facebook" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                        </a>
                                    </div>
                                    <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
                                        <a href="https://www.instagram.com/rideflex.in/" target="_blank" rel="noopener noreferrer">
                                            <img src={instagram} alt="instagram" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                        </a>
                                    </div>
                                    <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
                                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                            <img src={linkedin} alt="linkedin" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other columns here */}
                        <div className="col-md-3 text-center">
                            <div className="mb-3 fs-2 fw-bold">About Us</div>
                            <div className="fs-5 mt-1">Blog</div>
                            <div className="fs-5 mt-1">Team</div>
                            <div className="fs-5 mt-1">Contact Us</div>
                            <div className="fs-5 mt-1">Chat With Us</div>
                        </div>

                        <div className="col-md-3 text-center">
                            <div className="mb-3 fs-2 fw-bold">Services</div>
                            <div className="fs-5 mt-1">Trip Driver</div>
                            <div className="fs-5 mt-1">Hourly Driver</div>
                            <div className="fs-5 mt-1">Vehicle Pooling</div>
                            <div className="fs-5 mt-1">Permanent Driver</div>
                            <div className="fs-5 mt-1">Special Event Driver</div>
                        </div>

                        <div className="col-md-3 text-center">
                            <div className="mb-3 fs-2 fw-bold">Business</div>
                            <div className="fs-5 mt-1">Driver with us</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
