import React, { useRef } from 'react';
import DriverHead from "../DriverPage/DriverHead"
import WhyDriver from '../DriverPage/WhyDriver'
import DriverForm from '../DriverPage/DriverForm'
const Driver = () => {
    const formRef = useRef(null);

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <DriverHead scrollToForm={scrollToForm}/>
            <DriverForm formRef={formRef}/>
            <WhyDriver/>
        </div>
    )
}

export default Driver
