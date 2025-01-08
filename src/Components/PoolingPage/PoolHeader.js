import React from "react";
import img from '../Images/PoolingBack.jpeg';

const PoolHead = () => {
    return (
        <div
            style={{
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
                padding: "0 20px",
            }}
        >
            <style>
                {`
                    .poolhead-content {
                        margin-left: 50px;
                        margin-bottom: 50px;
                    }
                    .poolhead-title {
                        font-size: 48px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    .poolhead-subtitle {
                        font-size: 20px;
                        margin-bottom: 50px;
                    }
                    .poolhead-button-container {
                        display: flex;
                        flex-direction: row;
                        gap: 15px;
                    }
                    .poolhead-button {
                        padding: 15px 30px;
                        font-size: 15px;
                        font-weight: bold;
                        color: #000;
                        background-color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        text-decoration: none;
                        margin-top: 20px;
                        transition: background-color 0.3s ease;
                    }
                    .poolhead-button:hover {
                        background-color: #ccc;
                    }
                    /* Responsive Styles */
                    @media (max-width: 768px) {
                        .poolhead-content {
                            margin-left: 0;
                            text-align: center;
                        }
                        .poolhead-title {
                            font-size: 28px;
                        }
                        .poolhead-subtitle {
                            font-size: 14px;
                        }
                        .poolhead-button-container {
                            justify-content: center;
                        }
                        .poolhead-button {
                            padding: 10px 20px;
                            font-size: 14px;
                        }
                    }
                    @media (max-width: 480px) {
                        .poolhead-container {
                            padding: 5px;
                        }
                        .poolhead-title {
                            font-size: 22px;
                        }
                        .poolhead-subtitle {
                            font-size: 12px;
                        }
                        .poolhead-button {
                            padding: 8px 15px;
                            font-size: 12px;
                        }
                    }
                `}
            </style>
            <div className="poolhead-content">
                <h1 className="poolhead-title">Join the Ride Sharing Revolution</h1>
                <p className="poolhead-subtitle">
                    Connect with others and share rides for a more convenient and cost-effective travel experience.
                </p>
                <div className="poolhead-button-container">
                    <a href="/find" className="poolhead-button">Find a Ride</a>
                    <a href="/offer" className="poolhead-button">Offer a Ride</a>
                </div>
            </div>
        </div>
    );
};

export default PoolHead;





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
