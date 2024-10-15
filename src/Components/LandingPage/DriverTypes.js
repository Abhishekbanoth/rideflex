import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your images
import hourlyDriverImg from '../Images/Poolstep1.png';
import tripDriverImg from '../Images/Poolstep2.png';
import specialEventDriverImg from '../Images/Poolstep3.png';
import permanentDriverImg from '../Images/Poolstep4.png';

export const DriverTypes = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            easing: 'ease-in-out', // easing function for animation
            once: true, // whether animation should happen only once
        });
    }, []);

    return (
        <div className="container my-5">
            <style>
                {`
                .card {
                    height: 100%; /* Ensure the card takes up the full height of its container */
                    display: flex;
                    flex-direction: column; /* Ensure the card body is at the bottom */
                    // background-color: rgb(245, 245, 245);
                }
                .card-img-top {
                    height: 200px; /* Fixed height for consistency */
                    object-fit: contain; /* Ensure the entire image fits without cropping */
                    width: 100%; /* Ensure the image fills the width of the card */
                }
                .card-body {
                    flex: 1; /* Allow the card body to take up remaining space */
                    display: flex;
                    flex-direction: column;
                    justify-content: center; /* Center the content vertically */
                    text-align: center;
                }
                .card-title {
                    margin-bottom: 1rem; /* Add space below the title */
                }
                .card-text {
                    margin-top: 0; /* Remove space above the text */
                }
                `}
            </style>
            <h1 className="text-center mb-4">Our Services</h1>
            <h6 className="text-center mb-5 text-body-secondary">
                Choose from a variety of drivers to suit your needs
            </h6>
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
                    <div className="card">
                        <img src={hourlyDriverImg} alt="Hourly Driver" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">HOURLY DRIVER</h5>
                            <p className="card-text">Sit back and relax while our professional chauffeurs take you to your destination in style.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
                    <div className="card">
                        <img src={tripDriverImg} alt="Trip Driver" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">TRIP DRIVER</h5>
                            <p className="card-text">Enjoy a night out without worrying about getting home safely. Our designated drivers will ensure you arrive back home soundly.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
                    <div className="card">
                        <img src={specialEventDriverImg} alt="Special Event Driver" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">SPECIAL EVENT DRIVER</h5>
                            <p className="card-text">Sit back and relax while our professional chauffeurs take you to your destination in style.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
                    <div className="card">
                        <img src={permanentDriverImg} alt="Permanent Driver" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">PERMANENT DRIVER</h5>
                            <p className="card-text">Enjoy a night out without worrying about getting home safely. Our designated drivers will ensure you arrive back home soundly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
