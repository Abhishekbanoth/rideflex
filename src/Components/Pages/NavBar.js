import React, { useState, useEffect } from 'react';
import img1 from '../Images/rideflex.png';
import { Link, useNavigate } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login state on component mount
    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    // NProgress configuration and handler for link clicks
    const handleLinkClick = () => {
        NProgress.start();
        setTimeout(() => {
            NProgress.done();
        }, 500); // Adjust the timeout based on your actual loading time
    };
    NProgress.configure({ showSpinner: false, speed: 500, minimum: 0.1 });

    // Logout functionality
    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false'); // Clear login state
        setIsLoggedIn(false); // Update state
        alert('Logged out successfully!');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            <style>
                {`#nprogress .bar {
                        background: red; /* Change this to your desired color */
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4 justify-content-center fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
                        <img
                            src={img1}
                            alt="RideFlex Logo"
                            height={50}
                            className="d-inline-block align-text-top"
                            style={{ backgroundColor: "black" }}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" style={{ marginLeft: "100px" }} aria-current="page" to="/home" onClick={handleLinkClick}>Home</Link>
                            </li>
                            <li className="nav-item" style={{ marginLeft: "10px" }}>
                                <Link className="nav-link" to="/booking" onClick={handleLinkClick}>Booking</Link>
                            </li>
                            <li className="nav-item" style={{ marginLeft: "10px" }}>
                                <Link className="nav-link" to="/pooling" onClick={handleLinkClick}>Pooling</Link>
                            </li>
                            <li className="nav-item" style={{ marginLeft: "10px" }}>
                                <Link className="nav-link" to="/driver" onClick={handleLinkClick}>Driver</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <button className="nav-link btn btn-link" style={{ marginRight: "10px", color: 'white' }} onClick={handleLogout}>Logout</button>
                                ) : (
                                    <Link className="nav-link" style={{ marginRight: "10px" }} to="/login" onClick={handleLinkClick}>Login</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
