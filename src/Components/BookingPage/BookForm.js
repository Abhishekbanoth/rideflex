import { useState } from 'react';

 function BookForm() {
    const [showReturnTrip, setShowReturnTrip] = useState(false);

    const handleCheckboxChange = (e) => {
        setShowReturnTrip(e.target.checked);
    };

    return (
        <div className="container">
            <form style={{ marginTop: '200px' }}>
                <div className="row">
                    {/* First Column */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="inputname">Name</label>
                            <input type="text" className="form-control" id="inputname" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputphno">Phone Number</label>
                            <input type="text" className="form-control" id="inputphno" placeholder="123456789" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputtime">Time</label>
                            <input type="time" className="form-control" id="inputtime" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehcile">Vehicle</label>
                            <input type="text" className="form-control" id="vehcile" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Payment">Payment Method</label>
                            <select id="typeofpayment" className="form-control" name="typeofpayment" required>
                                <option value="">Type Of Payment</option>
                                <option value="upi">UPI</option>
                                <option value="DC">Debit Card</option>
                                <option value="CC">Credit Card</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="return">Return Trip:</label>
                            <input
                                type="checkbox"
                                id="return"
                                name="return"
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="return">(if yes)</label>
                            {showReturnTrip && (
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className='form-group'>
                                            <label htmlFor="returnDate">Return Date:</label>
                                            <input type="date" id="returnDate" className="form-control" name="returnDate" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='form-group'>
                                            <label htmlFor="returnTime">Return Time:</label>
                                            <input type="time" id="returnTime" className="form-control" name="returnTime" required />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="form-group my-4">
                                <input type="checkbox" id="tc" name="tc" required />
                                <label htmlFor="tc">Terms & Conditions</label>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="inputlocation">Location</label>
                            <input type="text" className="form-control" id="inputlocation" placeholder="Enter Location" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" className="form-control" id="inputdate" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputservices">Type Of Services</label><br />
                            <select id="typeofservices" className="form-control" name="typeofservices" required>
                                <option value="">Type Of Service</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Event">Event</option>
                                <option value="Permanent">Permanent</option>
                                <option value="Trip">Trip</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehciletype">Vehicle Type</label>
                            <input type="text" className="form-control" id="vehcile" />
                        </div>

                    </div>
                </div>

                {/* Centered Button */}
                <div className="row">
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary mt-3">Hire Me</button>
                    </div>
                </div>
            </form>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    );
}

export default BookForm;