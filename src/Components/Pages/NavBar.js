import React, { useState, useEffect } from 'react';
import img1 from '../Images/rideflex.png';
import { Link, useNavigate } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomAlert from '../CustomCancelAlert';
import profile from '../Images/driver1.jpeg'

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showLogoutAlert, setShowLogoutAlert] = useState(false); // State for CustomAlert visibility
    const navigate = useNavigate();

    // Check login state on component mount and listen to storage changes
    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem('token'); // Check for token
            setIsLoggedIn(!!token); // Set true if token exists
        };

        checkLoginStatus();

        // Listen to storage events for login/logout changes
        window.addEventListener('storage', checkLoginStatus);

        return () => window.removeEventListener('storage', checkLoginStatus);
    }, []);


    // NProgress configuration and handler for link clicks
    const handleLinkClick = (event, path) => {
        if (!isLoggedIn && path !== '/login') {
            event.preventDefault(); // Prevent navigation
            alert('Please log in to access this page!');
            navigate('/login');
        } else {
            NProgress.start();
            setTimeout(() => {
                NProgress.done();
            }, 500);// Adjust the timeout based on your actual loading time

            // Manually close the navbar after a link is clicked on small screens
            const navbarToggle = document.getElementById('navbarNav');
            if (navbarToggle && navbarToggle.classList.contains('show')) {
                navbarToggle.classList.remove('show');
            }
        }
    };

    // Logout functionality
    const handleLogout = () => {
        setShowLogoutAlert(true); // Show the CustomAlert
    };

    const confirmLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        setShowLogoutAlert(false);  // Close the alert
        navigate('/login');
    };

    const cancelLogout = () => {
        setShowLogoutAlert(false);  // Close the alert without logging out
    };

    return (
        <div>
            <style>
                {`#nprogress .bar {
                        background: red; /* Change this to your desired color */
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4 fixed-top">
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
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                    onClick={(e) => handleLinkClick(e, '/home')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/booking"
                                    onClick={(e) => handleLinkClick(e, '/booking')}
                                >
                                    Booking
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/pooling"
                                    onClick={(e) => handleLinkClick(e, '/pooling')}
                                >
                                    Pooling
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/driver"
                                    onClick={(e) => handleLinkClick(e, '/driver')}
                                >
                                    Driver
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Link to="/profile" onClick={(e) => handleLinkClick(e, '/profile')}>
                                            <img
                                                src={profile} // Replace with profile icon or avatar
                                                alt="Profile"
                                                className="rounded-circle me-2"
                                                style={{ cursor: 'pointer',height:'35px',width:'35px' }}
                                            />
                                        </Link>

                                        <button
                                            className="btn btn-link nav-link"
                                            style={{ color: 'white', cursor: 'pointer' }}
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                        onClick={(e) => handleLinkClick(e, '/login')}
                                    >
                                        Login
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showLogoutAlert && (
                <CustomAlert
                    message="Are you sure you want to log out?"
                    onConfirm={confirmLogout}  // Confirm logout
                    onCancel={cancelLogout}    // Cancel logout
                />
            )}
        </div>
    );
};

export default NavBar;
