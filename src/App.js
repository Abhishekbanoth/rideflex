import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Pages/NavBar';
import Home from './Components/Pages/Home';
import Booking from './Components/Pages/Booking';
import Pooling from './Components/Pages/Pooling';
import Driver from './Components/Pages/Driver';
import Landing from './Components/Pages/Landing';
import Login from './Components/Pages/Login';
// import HomeTest from './Components/Test/HomeTest';
import Footer from './Components/HomePage/Footer';
import Offer from './Components/PoolingServices/Offer';
import Find from './Components/PoolingServices/Find';
import RideDetails from './Components/PoolingServices/RideDetails';

function App() {
  return (
    <div>
      <Router>
        <NavBar /> {/* No need to pass setProgress as a prop */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/pooling" element={<Pooling />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/hometest" element={<HomeTest />} /> */}
          <Route path="/offer" element={<Offer />} />
          <Route path="/find" element={<Find />} />
          <Route path="/ridedetails" element={<RideDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;