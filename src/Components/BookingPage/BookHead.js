import React from "react";
import img from '../Images/PoolingBack.jpeg';

const BookHead = () => {
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
            padding: "0 20px", // Padding for smaller screens
        },
        content: {
            marginLeft: "50px",
            marginBottom: "50px",
        },
        title: {
            fontSize: "48px", // Large screen size
            fontWeight: "bold",
            marginBottom: "10px",
        },
        subtitle: {
            fontSize: "20px", // Large screen size
            marginBottom: "50px",
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
            gap: "15px", // Space between buttons
        },
        button: {
            padding: "15px 30px", // Large screen size
            fontSize: "15px",
            fontWeight: "bold",
            color: "#000",
            backgroundColor: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: 'none',
            marginTop: "20px",
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#ccc",
        },
        // Media Queries for responsiveness
        '@media (max-width: 768px)': {
            container: {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px", // Reduce padding for tablet screens
            },
            content: {
                marginLeft: "0px",
                textAlign: "center",
            },
            title: {
                fontSize: "28px", // Further reduce title size
            },
            subtitle: {
                fontSize: "14px", // Further reduce subtitle size
            },
            buttonContainer: {
                justifyContent: "center",
            },
            button: {
                padding: "10px 20px", // Smaller padding for buttons
                fontSize: "14px", // Smaller button font size
            },
        },
        '@media (max-width: 480px)': {
            container: {
                padding: "5px", // Further reduce padding for small screens
                marginLeft:"5px"
            },
            title: {
                fontSize: "22px", // Reduce title size for mobile
            },
            subtitle: {
                fontSize: "12px", // Reduce subtitle size for mobile
            },
            button: {
                padding: "8px 15px", // Further reduce button padding
                fontSize: "12px", // Smaller button font size for mobile
            },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Your Driver Awaits</h1>
                <p style={styles.subtitle}>
                Experience the freedom of travel without the hassle of driving. Join us and discover a world of convenient rental options tailored just for you.
                </p>
                <div style={styles.buttonContainer}>
                    <a href="/find"
                        style={styles.button}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                    >
                        Find a Ride
                    </a>
                    <a href="/offer"
                        style={styles.button}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                    >
                        Offer a Ride
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookHead;




// import React from "react";
// import img from '../Images/PoolingBack.jpeg'

// const App = () => {
//     const styles = {
//         container: {
//             position: "relative",
//             textAlign: "center",
//             color: "white",
//             height: "100vh",
//             backgroundImage: `url(${img})`, // Replace with your image URL
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//         },
//         content: {
//             maxWidth: "800px",
//             padding: "20px",
//             textAlign: "center",
//         },
//         title: {
//             fontSize: "48px",
//             fontWeight: "bold",
//             marginBottom: "20px",
//         },
//         subtitle: {
//             fontSize: "20px",
//             marginBottom: "30px",
//         },
//         buttonContainer: {
//             display: "flex",
//             justifyContent: "center",
//             gap: "20px",
//         },
//         button: {
//             padding: "15px 30px",
//             fontSize: "18px",
//             color: "white",
//             backgroundColor: "black",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             transition: "background-color 0.3s ease",
//         },
//         buttonHover: {
//             backgroundColor: "#333",
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.content}>
//                 <h1 style={styles.title}>Join the Ride Sharing Revolution</h1>
//                 <p style={styles.subtitle}>
//                     Connect with others and share rides for a more convenient and
//                     cost-effective travel experience.
//                 </p>
//                 <div style={styles.buttonContainer}>
//                     <button
//                         style={styles.button}
//                         onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor =
//                             styles.buttonHover.backgroundColor)
//                         }
//                         onMouseLeave={(e) =>
//                             (e.currentTarget.style.backgroundColor = "black")
//                         }
//                     >
//                         Find a Ride
//                     </button>
//                     <button
//                         style={styles.button}
//                         onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor =
//                             styles.buttonHover.backgroundColor)
//                         }
//                         onMouseLeave={(e) =>
//                             (e.currentTarget.style.backgroundColor = "black")
//                         }
//                     >
//                         Offer a Ride
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;
