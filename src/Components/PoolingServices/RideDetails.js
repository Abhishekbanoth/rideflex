import React from 'react';
import { FaChevronRight, FaRegUserCircle } from 'react-icons/fa';

const RideDetails = () => {
    return (
        <div className="container  mb-5" style={{marginTop:"150px"}}>
            <div className="text-center mb-4">
                <h3>Ride Details</h3>
                <p>Thursday 12 September</p>
            </div>

            {/* Route details */}
            <div className="border-top border-bottom py-3">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="mb-0">12:30 AM</p>
                        <p className="text-muted small">2h30</p>
                        <p>Uppal cross road</p>
                        <p className="text-muted">Hydrabad</p>
                    </div>
                    <div className="align-self-center">
                        <FaChevronRight />
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <div>
                        <p className="mb-0">03:00 PM</p>
                        <p>Warangle, Telangana</p>
                        <p className="text-muted">Hanamakonda</p>
                    </div>
                    <div className="align-self-center">
                        <FaChevronRight />
                    </div>
                </div>
            </div>

            {/* Total price */}
            <div className="py-3 border-bottom">
                <div className="d-flex justify-content-between">
                    <span>Total price for 1 passenger</span>
                    <span>₹ 360</span>
                </div>
            </div>

            {/* Driver details */}
            <div className="py-3 border-bottom">
                <div className="d-flex align-items-center">
                    <FaRegUserCircle size={40} className="me-3" />
                    <div>
                        <p className="mb-0">Rohith</p>
                        <p className="text-muted small">Never cancels rides</p>
                    </div>
                    <div className="ms-auto align-self-center">
                        <FaChevronRight />
                    </div>
                </div>
            </div>

            {/* Question */}
            <div className="text-center mt-4">
                <a href="/" className="text-muted">
                    Ask SaiPavan a question
                </a>
            </div>

            {/* Book button */}
            <div className="text-center mt-5">
                <button className="btn btn-dark btn-lg">Book</button>
            </div>
        </div>
    );
};

export default RideDetails;
