import express from 'express'
import Driver from '../models/driverreg.model.js';
import upload from '../uploadConfig.js'


const router = express.Router();

// Route to handle driver form submission
router.post('/', upload.fields([
    { name: 'panCardImage' },
    { name: 'drivingLicenceImage' },
    { name: 'aadharFront' },
    { name: 'aadharBack' }
]), async (req, res) => {
    try {
        const { name, phoneNumber, email, city, drivingLicenceNumber } = req.body;
        const newDriver = new Driver({
            name,
            phoneNumber,
            email,
            city,
            drivingLicenceNumber,
            panCardImage: req.files['panCardImage'] ? req.files['panCardImage'][0].path : null,
            drivingLicenceImage: req.files['drivingLicenceImage'] ? req.files['drivingLicenceImage'][0].path : null,
            aadharFront: req.files['aadharFront'] ? req.files['aadharFront'][0].path : null,
            aadharBack: req.files['aadharBack'] ? req.files['aadharBack'][0].path : null,
        });

        await newDriver.save();

        // Here you can send an email notification or any other logic
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error submitting form.', error: err });
    }
});

// module.exports = router;
export default router;
