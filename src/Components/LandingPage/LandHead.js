import React from "react";
import img from '../Images/LandHead.jpg'
const App = () => {
    const styles = {
        container: {
            position: "relative",
            textAlign: "left",
            color: "white",
            height: "100vh",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        content: {
            marginLeft: "50px",
        },
        title: {
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        subtitle: {
            fontSize: "20px",
            marginBottom: "20px",
        },
        button: {
            padding: "15px 30px",
            fontSize: "18px",
            color: "#000",
            backgroundColor: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: 'none',
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#ccc",
        },
    };
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Ride Flex</h1>
                <p style={styles.subtitle}>Your Personal Driver Just A Click Away</p>
                <a href="/login"
                    style={styles.button}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                >
                    Book Now
                </a>
            </div>
        </div>
    );
};
export default App;
