import React, { useState } from 'react';
const ReviewCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    // This function will be used to handle slide changes
    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };


    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px',
                backgroundColor: '#f8f9fa',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    maxWidth: '800px',  // Define a fixed width
                    height: '400px',  // Define a fixed height for the carousel container
                    margin: '0 auto',
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: '#f8f9fa',
                    position: 'relative',
                }}
            >
                <div
                    id="carouselExample"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        backgroundColor: '#f8f9fa',
                        position: 'relative',
                        height: '100%',
                    }}
                >
                    <div className="carousel-inner" style={{ height: '100%' }}>
                        <div className="carousel-item active">
                            <div
                                style={{
                                    padding: '20px',
                                    overflowY: 'auto',  // Allows scrolling if the content overflows
                                    maxHeight: '250px',  // Limit the height of the text content
                                }}
                            >
                                <div style={{ fontSize: '24px', marginBottom: '15px' }}>★★★★★</div>
                                <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
                                    The vehicle pooling service was well-organized and efficient. The vehicle was clean,
                                    and the ride was smooth. The cost savings were noticeable, and I enjoyed the shared
                                    experience. I would recommend this service to others.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div
                                style={{
                                    padding: '20px',
                                    overflowY: 'auto',
                                    maxHeight: '250px',
                                }}
                            >
                                <div style={{ fontSize: '24px', marginBottom: '15px' }}>★★★★☆</div>
                                <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
                                    The driver booking service was reliable and on time. The driver was professional and
                                    courteous. I felt safe and relaxed throughout the journey. A great experience overall.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div
                                style={{
                                    padding: '20px',
                                    overflowY: 'auto',
                                    maxHeight: '250px',
                                }}
                            >
                                <div style={{ fontSize: '24px', marginBottom: '15px' }}>★★★★★</div>
                                <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
                                    I had a fantastic experience with the driver booking service. The ride was comfortable,
                                    and the service was top-notch. I’ll definitely use this service again for future travels.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div
                                style={{
                                    padding: '20px',
                                    overflowY: 'auto',
                                    maxHeight: '250px',
                                }}
                            >
                                <div style={{ fontSize: '24px', marginBottom: '15px' }}>★★★★☆</div>
                                <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
                                    Vehicle pooling was a great idea! I saved a lot of money and met some interesting people 
                                    during the trip. The only downside was the slight delay in pickup, but overall it was worth it.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Previous Button */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            left: '-60px',
                            zIndex: '1000',
                            borderRadius: '50%',
                            border: '1px solid black',
                            background: 'transparent',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ fontSize: '24px' }}>‹</span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    {/* Next Button */}
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: '-60px',
                            zIndex: '1000',
                            borderRadius: '50%',
                            border: '1px solid black',
                            background: 'transparent',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span aria-hidden="true" style={{ fontSize: '24px' }}>›</span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Carousel Indicators */}
                <div style={{ marginTop: '15px' }}>
            <ol className="carousel-indicators" style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                {[0, 1, 2, 3].map((index) => (
                    <li
                        key={index}
                        data-bs-target="#carouselExample"
                        data-bs-slide-to={index}
                        className={activeIndex === index ? 'active' : ''}
                        style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: activeIndex === index ? '#000' : '#ccc',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleSlideChange(index)} // Handle click to change slide
                    ></li>
                ))}
            </ol>
        </div>
            </div>
        </div>
    );
};

export default ReviewCarousel;
