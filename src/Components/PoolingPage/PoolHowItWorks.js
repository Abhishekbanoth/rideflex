import React from 'react';
import step1 from '../Images/Poolstep1.png';
import step2 from '../Images/Poolstep2.png';
import step3 from '../Images/Poolstep3.png';
import step4 from '../Images/Poolstep4.png';
import rightarrow from '../Images/rightarrow.png';
import leftarrow from '../Images/leftarrow.png';

const HowItWorks = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>How it Works</h2>

            {/* Step 1 */}
            <div style={styles.stepContainer}>
                <img
                    src={step1}
                    alt="Step 1"
                    style={styles.stepImage}
                />
                <div style={styles.textContainer}>
                    <h3 style={styles.stepTitle}>STEP 1</h3>
                    <p style={styles.stepDescription}>Search for a ride or offer a ride</p>
                </div>
            </div>

            {/* Right Arrow */}
            <div style={styles.arrowContainer}>
                <img src={rightarrow} alt="Arrow" style={styles.arrowImage} />
            </div>

            {/* Step 2 */}
            <div style={styles.stepContainer}>
                <div style={styles.textContainer}>
                    <h3 style={styles.stepTitle}>STEP 2</h3>
                    <p style={styles.stepDescription}>Select a suitable match based on preferences</p>
                </div>
                <img
                    src={step2}
                    alt="Step 2"
                    style={styles.stepImage}
                />
            </div>

            {/* Left Arrow */}
            <div style={styles.arrowContainer}>
                <img src={leftarrow} alt="Arrow" style={styles.arrowImage} />
            </div>

            {/* Step 3 */}
            <div style={styles.stepContainer}>
                <img
                    src={step3}
                    alt="Step 3"
                    style={styles.stepImage}
                />
                <div style={styles.textContainer}>
                    <h3 style={styles.stepTitle}>STEP 3</h3>
                    <p style={styles.stepDescription}>Book the ride and make payment</p>
                </div>
            </div>

            {/* Right Arrow */}
            <div style={styles.arrowContainer}>
                <img src={rightarrow} alt="Arrow" style={styles.arrowImage} />
            </div>

            {/* Step 4 */}
            <div style={styles.stepContainer}>
                <div style={styles.textContainer}>
                    <h3 style={styles.stepTitle}>STEP 4</h3>
                    <p style={styles.stepDescription}>Enjoy your shared ride</p>
                </div>
                <img
                    src={step4}
                    alt="Step 4"
                    style={styles.stepImage}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px 20px',
        fontFamily: '"Lato", sans-serif',
        color: '#333',
    },
    heading: {
        fontSize: '36px',
        fontWeight: '700',
        marginBottom: '40px',
        color: '#1a202c',
    },
    stepContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto 50px',
        backgroundColor: '#ffffff',
        padding: '20px',
    },
    textContainer: {
        textAlign: 'left',
        maxWidth: '40%',
        minWidth: '260px',
        margin: '0 20px',
    },
    stepImage: {
        width: '350px',
        height: '270px',  // Set a uniform height for all images
        maxWidth: '100%',
    },
    stepTitle: {
        fontSize: '40px',
        fontWeight: '600',
        color: '#1a202c',
        marginBottom: '10px',
    },
    stepDescription: {
        fontSize: '25px',
        lineHeight: '1.6',
        color: '#4a5568',
    },
    arrowContainer: {
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowImage: {
        height: '120px',  // Increased arrow size for better visibility
        width: 'auto',
    },
    // Responsive Design
    '@media(max-width: 768px)': {
        stepContainer: {
            flexDirection: 'column',
            textAlign: 'center',
        },
        textContainer: {
            maxWidth: '100%',
            marginBottom: '20px',
        },
        stepImage: {
            marginBottom: '20px',
        },
        arrowImage: {
            height: '80px',  // Adjusted arrow size for mobile screens
        },
    },
};

export default HowItWorks;
