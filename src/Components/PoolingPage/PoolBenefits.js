import React from 'react';
import img1 from '../Images/benefitsafety.jpeg';
import img2 from '../Images/benefitcommunity.jpeg';
import img3 from '../Images/benefitcost.png';
import img4 from '../Images/benefitenvironment.png';

function Ride3() {
    return (
        <>
            <div className="main-container d-flex justify-content-center align-items-center  mb-5">
                <div className="container  mt-3" 
                // style={{ width: "80%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}
                >
                    <div className="text-center fw-bolder fs-2 mt-3">
                        Benefits Of Vehicle Pooling
                    </div>
                    <div className="container">
                        <div className="row mt-4 justify-content-center align-items-center">
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <img src={img1} className="img-fluid" alt="Safety" style={{ maxHeight: "150px", objectFit: "cover", borderRadius: "8px" }} />
                                <h5 className="mt-2 text-center">Safety</h5>
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <img src={img2} className="img-fluid" alt="Community" style={{ maxHeight: "150px", objectFit: "cover", borderRadius: "8px" }} />
                                <h5 className="mt-2 text-center">Community</h5>
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <img src={img3} className="img-fluid my-3" alt="Cost Efficiency" style={{ maxHeight: "150px", objectFit: "cover", borderRadius: "8px" }} />
                                <h5 className="mt-2 text-center">Cost Efficiency</h5>
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <img src={img4} className="img-fluid" alt="Environment" style={{ maxHeight: "150px", objectFit: "cover", borderRadius: "8px" }} />
                                <h5 className="mt-2 text-center">Environment</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ride3;
