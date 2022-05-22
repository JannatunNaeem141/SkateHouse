import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Newsletter from './Newsletter';
import Policy from './Policy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Policy></Policy>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;