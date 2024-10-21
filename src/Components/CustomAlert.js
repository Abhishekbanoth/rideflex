import React from 'react';

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        maxWidth: '80%',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        animation: 'fadeIn 0.3s ease',
    },
    header: {
        fontSize: '20px',
        marginBottom: '15px',
        fontWeight: 'bold',
        color: '#1d4ed8',
    },
    message: {
        fontSize: '16px',
        marginBottom: '20px',
        color: '#333',
    },
    button: {
        backgroundColor: '#1d4ed8',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    },
    buttonHover: {
        backgroundColor: '#090908',
    },
};

const CustomAlert = ({ message, onClose }) => {
    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <div style={styles.header}>Notification</div>
                <div style={styles.message}>{message}</div>
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                    onClick={onClose}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;
