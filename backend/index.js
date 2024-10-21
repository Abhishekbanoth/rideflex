import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url';
import registerRoute from './Routes/RegisterBack.js';
import loginRoute from './Routes/BackLogin.js';
import offerrideRoute from './Routes/offer.route.js';
import findrideRoute from './Routes/findride.route.js'
import DriverRegRoute from './Routes/DriverRegRoute.js'
import bookingRoutes from './Routes/BookingRoute.js'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose.connect('mongodb+srv://prathikpatilofcl00:Driveflex123@cluster0.1iqwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log(err));

    


// Use API routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/offerride', offerrideRoute);
app.use('/findride', findrideRoute);
app.use('/driverreg',DriverRegRoute);
app.use('/Bookings', bookingRoutes);


app.listen(8000, () => {
    console.log(`Server running on port 8000`);
});
