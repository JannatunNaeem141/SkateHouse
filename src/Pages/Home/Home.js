import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import HomeProducts from './HomeProducts';
import HomeReviews from './HomeReviews';
import Newsletter from './Newsletter';
import Policy from './Policy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <HomeReviews></HomeReviews>
            <Policy></Policy>
            <BusinessSummery></BusinessSummery>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;