import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap (if not already done)
import img from "../Images/findoffer.png"
const services = [
    {
        icon: "🚗",
        title: "Professional Drivers",
        description:
            "Ride Fex provides you with verified and professional drivers, who are trained and examined before sending them to you.",
    },
    {
        icon: "💵",
        title: "Transparent Billing",
        description:
            "We ensure transparent billing driver services. We provide our customers with an estimate before they start their journey.",
    },
    {
        icon: "📱",
        title: "Track Your Journey",
        description:
            "With our website, customers can easily be notified about their driver and track their journey.",
    },
    {
        icon: "🤝",
        title: "Carpooling",
        description:
            "Carpooling is when people share a car to go to the same place, which helps save money and reduces pollution.",
    },
    {
        icon: "📞",
        title: "24/7 Booking",
        description:
            "Customers can book a driver at any time, any day. Also, call us to inquire about their queries.",
    },
    {
        icon: "🛣️",
        title: "Become a Driver",
        description:
            "Become a professional driver. Join our platform and start earning by driving.",
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
        backgroundImage: `url(${img})`,

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

const Benefits = () => {
    return (
        // <div className="card" style={{borderRadius:"0"}}>
        <div className="container my-4">
            <h1 className="card-title my-3 text-center">Why choose Ride-Flex</h1>
            <h6 className="card-subtitle mb-4 text-center text-body-secondary">
                Experience the convenience, safety, and peace of mind with our rental driver service
            </h6>
            
            {/* Bootstrap grid system for responsive layout */}
            <div className="row" >
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
        // </div>
    );
};

export default Benefits;
