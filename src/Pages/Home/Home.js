import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Policy from './Policy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Policy></Policy>
        </div>
    );
};

export default Home;