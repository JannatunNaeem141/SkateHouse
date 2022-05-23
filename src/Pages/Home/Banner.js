import React from 'react';
import bannerImg from '../../images/banner.png';

const Banner = () => {
    return (
        <div className="h-screen justify-center items-center flex flex-col lg:flex-row-reverse max-w-7xl mx-3 md:mx-12 lg:mx-auto">
            <img src={bannerImg} alt="" className="  rounded-lg  w-2/3" />
            <div>
                <h1 className=" text-4xl md:text-5xl lg:text-5xl font-bold text-primary">Inline Skate Parts</h1>
                <p className="py-6">In need of replacement parts for your skates to keep them in top notch condition? Whether you need something as big as a boot or frame, or if you need something as small as a replacement axle, you've come to the right place. Get all the inline skate parts you need here!</p>
            </div>
        </div>
    );
};

export default Banner;