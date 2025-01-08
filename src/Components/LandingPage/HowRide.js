// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// const HowRide = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 1000, // animation duration in ms
//             easing: 'ease-in-out', // easing function for animation
//             once: true, // whether animation should happen only once
//         });
//     }, []);
//     return (
//             <section className="container my-5">
//                 <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>How It Works</h2>
//                 <p className="text-center mb-5" style={{ fontSize: '18px', maxWidth: '800px', margin: 'auto' }}>
//                     Learn how to rent a driver in just a few simple steps.
//                 </p>
//                 <div className="row text-center">
//                     <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
//                         <h4>Step 1: Register</h4>
//                         <p>Create an account on our platform by providing your personal details and car information.</p>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
//                         <h4>Step 2: Find a Driver</h4>
//                         <p>Browse through available drivers in your area and select the one that suits your needs.</p>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
//                         <h4>Step 3: Book</h4>
//                         <p>Choose the date and time for your drive and make a booking request.</p>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
//                         <h4>Step 4: Confirmation</h4>
//                         <p>Once the driver approves your booking, you will receive a confirmation.</p>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
//                         <h4>Step 5: Payment</h4>
//                         <p>Make the payment for your drive through our secure payment gateway.</p>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
//                         <h4>Step 6: Enjoy Your Drive</h4>
//                         <p>On the scheduled date and time, meet the driver and enjoy your drive!</p>
//                     </div>
//                 </div>
//             </section>
        
//     )
// }

// export default HowRide
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowRide = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className="container my-5">
            <style>{`
                .timeline-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    padding: 50px 0;
                }

                .timeline-item {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    width: 20%;
                    position: relative;
                }

                .step-box {
                    width: 120px;
                    height: 120px;
                    background-color: #007bff;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 20px;
                    transform: rotate(-45deg); /* Rotate the boxes */
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    font-size: 20px;
                }

                .timeline-item:nth-child(2) .step-box {
                    background-color: #28a745;
                }

                .timeline-item:nth-child(3) .step-box {
                    background-color: #ff6600;
                }

                .timeline-item:nth-child(4) .step-box {
                    background-color: #f7b500;
                }

                .step-text {
                    margin-top: 20px;
                    font-size: 16px;
                }

                .description-box {
                    margin-top: 30px;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    font-size: 14px;
                    max-width: 300px;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .timeline-container {
                        flex-direction: column;
                    }

                    .timeline-item {
                        margin-bottom: 40px;
                    }

                    .timeline-item .step-box {
                        transform: none;
                    }
                }
            `}</style>

            <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>How It Works</h2>
            <p className="text-center mb-5" style={{ fontSize: '18px', maxWidth: '800px', margin: 'auto' }}>
                Learn how to rent a driver in just a few simple steps.
            </p>

            <div className="timeline-container">
                <div className="timeline-item" data-aos="zoom-in">
                    <div className="step-box">
                        <h4>01 </h4>
                        <span>Step</span>
                    </div>
                    <div className="description-box">
                        <p className="step-text"><b>Register:</b> Sign up on the platform to get started.</p>
                    </div>
                </div>

                <div className="timeline-item" data-aos="zoom-in">
                    <div className="step-box">
                        <h4>02 </h4>
                        <span>Step</span>
                    </div>
                    <div className="description-box">
                        <p className="step-text"><b>Find a Driver:</b> Browse through available drivers.</p>
                    </div>
                </div>

                <div className="timeline-item" data-aos="zoom-in">
                    <div className="step-box">
                        <h4>03 </h4>
                        <span>Step</span>
                    </div>
                    <div className="description-box">
                        <p className="step-text"><b>Book:</b> Book your drivers for ur ride.</p>
                    </div>
                </div>

                <div className="timeline-item" data-aos="zoom-in">
                    <div className="step-box">
                        <h4>04 </h4>
                        <span>Step</span>
                    </div>
                    <div className="description-box">
                        <p className="step-text"><b>Enjoy Your Drive:</b> Sit back and relax.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowRide;
