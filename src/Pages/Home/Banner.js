import React from 'react';
import bannerImg from '../../images/banner.png';

const Banner = () => {
    return (
        <div className='h-screen'>
            <div className='bg-cyan-100 h-2/4'>
                <div className="flex justify-center items-center max-w-7xl mx-3 md:mx-12 lg:mx-auto">
                    {/* flex flex-col lg:flex-row-reverse  */}
                    <div className='text-center pt-12 w-2/3'>
                        <div>
                            <h1 className=" text-4xl md:text-5xl lg:text-5xl font-bold text-primary">Inline Skate Parts</h1>
                            <p className="py-6">In need of replacement parts for your skates to keep them in top notch condition? Whether you need something as big as a boot or frame, or if you need something as small as a replacement axle, you've come to the right place. Get all the inline skate parts you need here!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center h-2/4'>
                <img src={bannerImg} alt="" className="  rounded-lg  w-2/3 rounded-lg shadow-2xl -mt-52 h-full" />
            </div>
        </div>
    );
};

export default Banner;