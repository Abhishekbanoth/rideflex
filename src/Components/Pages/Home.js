import React from 'react'
import  Header  from "../HomePage/Header";
import What from '../HomePage/What'
import Service from '../HomePage/Service'
// import Review from '../HomePage/Review';
const Home = () => {
    return (
        <div>
            <Header/>
            <hr></hr>
            <What/>
            <hr></hr>
            <Service/>
            <hr></hr>
            {/* <Review/> */}
        </div>
    )
}

export default Home
