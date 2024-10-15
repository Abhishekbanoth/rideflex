import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap (if not already done)

const services = [
    {
        icon: "⏰", // Changed to a clock emoji for flexible timing
        title: "Flexible Timing",
        description:
            "Flexible timing for cab drivers refers to allowing drivers to choose their own work hours.",
    },
    {
        icon: "🚀", // Changed to a rocket emoji for easy onboarding
        title: "Easy Onboarding",
        description:
            "Easy onboarding for cab drivers refers to a streamlined and user-friendly process that allows drivers.",
    },
    {
        icon: "💸", // Changed to a money with wings emoji for on-time payment
        title: "On-time Payment",
        description:
            "On-time payment for cab drivers is essential for maintaining trust, loyalty, and satisfaction among drivers.",
    },
    {
        icon: "🌟", // Changed to a star emoji for 24/7 support
        title: "24/7 Support",
        description:
            "Enjoy the convenience of our rental drive service available round the clock.",
    },
    {
        icon: "🔄", // Changed to a circular arrows emoji for part-time/full-time job
        title: "Part Time / Full Time Job",
        description:
            "Offering both part-time and full-time job options for cab drivers provides flexibility.",
    },
    {
        icon: "🗺️", // Changed to a map emoji for live tracking
        title: "Live Tracking",
        description:
            "A section dedicated to real-time tracking, featuring a map interface with a moving vehicle icon, bold 'Live Tracking' text.",
    },
];

const styles = {
    serviceBox: {
        background: "rgba(255, 255, 255, 0.9)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "transform 0.3s ease",
        minHeight: "220px", // Set a minimum height for all boxes
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    icon: {
        fontSize: "40px",
        marginBottom: "15px",
    },
    title: {
        fontSize: "18px",
        marginBottom: "10px",
    },
    description: {
        fontSize: "14px",
        color: "#555",
    },
};

const ServiceBox = ({ icon, title, description }) => (
    <div
        style={styles.serviceBox}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
        <div style={styles.icon}>{icon}</div>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
    </div>
);

const WhyDriver = () => {
    return (
        <div className="container my-4">
            <h1 className="card-title my-3 text-center">Why Choose Ride-Flex</h1>
            <h6 className="card-subtitle mb-4 text-center text-body-secondary">
                Experience the convenience, safety, and peace of mind with our rental driver service
            </h6>
            
            {/* Bootstrap grid system for responsive layout */}
            <div className="row">
                {services.map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <ServiceBox
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyDriver;
