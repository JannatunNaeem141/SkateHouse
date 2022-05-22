import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import HomeReviews from './HomeReviews';
import Newsletter from './Newsletter';
import Policy from './Policy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeReviews></HomeReviews>
            <BusinessSummery></BusinessSummery>
            <Policy></Policy>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;