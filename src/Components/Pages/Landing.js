import React from 'react';
import LandHead from '../LandingPage/LandHead';
import WhatRide from '../LandingPage/WhatRide';
import {DriverTypes} from '../LandingPage/DriverTypes';
import WhyRide from '../LandingPage/WhyRide';
import HowRide from '../LandingPage/HowRide';



const Landing = () => {
    return (
        <div>
            <LandHead/>
            <WhatRide/>
            <DriverTypes/>
            <WhyRide/>
            <HowRide/>
        </div>
    );
}

export default Landing;
