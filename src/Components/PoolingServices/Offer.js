import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../Images/Vehicle.png';
function Offer() {
    const typingStyle = {
        overflow: 'hidden',
        borderRight: '.15em solid orange',
        whiteSpace: 'nowrap',
        margin: '0 auto',
        letterSpacing: '.15em',
        marginTop: '100px',
        animation: 'typing 4s steps(30, end) 1s forwards, erase 2s steps(30, end) 4s forwards, blink-caret 0.75s step-end infinite',
    };
    return (
        <>
            <style>
                {`
        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }

    }

        @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: orange; }
        }
        `}
            </style>
            
            <hr style={{ marginTop: "4rem" }} />
            <div className="container" style={{ background: "linear-gradient(to right, #FFFFFF, #87CEEB)" }}>
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="fw-bolder fs-1 typing" style={typingStyle}>OFFER A RIDE AND EARN</div>
                        <div className="fs-3 mt-5">
                            Share your journey and reduce your travel charge
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <img src={pic} alt='error' className='mt-5' style={{ height: "350px", width: "450px" }} />
                    </div>
                </div>
            </div>
            <hr style={{ marginTop: "5rem", border: "2px solid black" }} />
            <div className="container">
                <div className="text-center mt-5 fs-3 fw-bold">
                    Enter Ride Information
                </div>
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='pickup' className='fw-bold'>Pick Up Location</label>
                        <input type="text" className="form-control" placeholder="location" />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='dropoff' className='fw-bold'>Drop Off Location</label>
                        <input type="text" className="form-control" placeholder="location" />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='Repeat Ride' className='fw-bold'>Repeat Ride</label>
                        <select className="form-control">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">NO</option>
                        </select>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='carType' className='fw-bold'>Car Type</label>
                        <input type="text" className="form-control" placeholder="Car Type" />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='time' className='fw-bold'>Date&Time</label>
                        <input type="datetime-local" className="form-control" />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='seats' className='fw-bold'>Available Seats</label>
                        <input type="number" className="form-control" placeholder="number of seats" />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='price' className='fw-bold'>Price Per Seat</label>
                        <input type="text" className="form-control" placeholder="price" />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "40px" }}>
                        <label htmlFor='riderule' className='fw-bold'>Ride Rule(No smoking)</label>
                        <input type="text" className="form-control" placeholder="ride rule" />
                    </div>
                </div>
                <div className=' d-flex justify-content-center'><button className='btn btn-primary mt-5  align-items-center'>Confirm</button>
                </div>
            </div>

        </>
    );
}

export default Offer;