import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import registerRoute from './Routes/RegisterBack.js';
import loginRoute from './Routes/BackLogin.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://prathikpatilofcl00:Driveflex123@cluster0.1iqwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log(err));

// Use API routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.listen(8000, () => {
    console.log(`Server running on port 8000`);
});
