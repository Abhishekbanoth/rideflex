import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PoolHeader from '../PoolingPage/PoolHeader';
import PoolHowItWorks from '../PoolingPage/PoolHowItWorks';
import PoolBenefits from '../PoolingPage/PoolBenefits';
import PoolFooter from '../PoolingPage/PoolFooter'
function Pooling() {
    return (<>
        <PoolHeader/>
        <PoolHowItWorks/>
        <PoolBenefits/>
        <PoolFooter/>
        </>

    );
}
export default Pooling;