import React from 'react';
import img1 from '../Images/driver.jpg';
import img2 from '../Images/idriver1.jpg';
import img3 from '../Images/idriver2.jpg';

const HeadTest = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card " style={{ width: "100%", height: "auto", maxWidth: "1200px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)", borderRadius: "10px",  marginTop:"100px"}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center py-4">
                            <h1 className="text-success font-weight-bold">Ride-Flex</h1>
                            <h6 className="display-4" style={{ fontSize: '1.5rem', lineHeight: '1.2', marginTop: '20px' }}>
                                Your Personal Driver Just a Click Away
                            </h6>
                            <a href="/booking" className="btn btn-dark btn-lg mt-3">Book Now</a>
                        </div>
                        <div className="col-md-6 my-3 text-center d-flex justify-content-center">
                            <div id="carouselExampleControls" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",borderRadius: "10px"}}className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={img1}
                                            className="img-fluid"
                                            alt="Driver"
                                            style={{
                                                width: '100%',
                                                height: '300px',
                                                objectFit: 'cover',
                                                maxWidth: '400px'
                                            }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={img2}
                                            className="img-fluid"
                                            alt="Driver"
                                            style={{
                                                width: '100%',
                                                height: '300px',
                                                objectFit: 'cover',
                                                maxWidth: '400px'
                                            }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={img3}
                                            className="img-fluid"
                                            alt="Driver"
                                            style={{
                                                width: '100%',
                                                height: '300px',
                                                objectFit: 'cover',
                                                maxWidth: '400px'
                                            }}
                                        />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeadTest;
