import React from 'react';
import CountUp from 'react-countup';
import { ArrowRightIcon, UserGroupIcon, CurrencyDollarIcon, ThumbUpIcon, CogIcon } from '@heroicons/react/solid';

const BusinessSummery = () => {
    return (
        <div className='h-96 bg-gradient-to-b from-primary to-secondary flex justify-center items-center pt-12 lg:pt-0'>
            <div className='p-5 m-5'>
                <div>
                    <p className='text-center text-2xl md:text-4xl lg:text-5xl text-white  my-5 lg:my-14 flex justify-center items-center uppercase'>All We Have <ArrowRightIcon className="h-8 w-10 ml-5" /></p>
                </div>
                <div className='lg:flex md:flex grid grid-cols-2 gap-2 text-white mb-16 '>
                    <div>
                        <p className='ml-7'><UserGroupIcon className="h-12 w-12 lg:h-14 lg:w-14 lg:ml-5" /></p>
                        <p className='text-4xl md:text-5xl lg:text-6xl mr-12  font-bold mb-5 text-accent'><CountUp end={100} />+</p>
                        <p className='ml-5 text-xl'>Customers</p>
                    </div>
                    <div>
                        <p className='ml-7'><CurrencyDollarIcon className="h-12 w-12 lg:h-14 lg:w-14 lg:ml-5" /></p>
                        <p className='text-4xl md:text-5xl lg:text-6xl mr-12  font-bold mb-5 text-accent'><CountUp end={120} />M+</p>
                        <p className='ml-5 text-xl'>Annual Revenue</p>
                    </div>
                    <div>
                        <p className='ml-7'><ThumbUpIcon className="h-12 w-12 lg:h-14 lg:w-14 lg:ml-3" /></p>
                        <p className='text-4xl md:text-5xl lg:text-6xl mr-12  font-bold mb-5 text-accent'><CountUp end={33} />K+</p>
                        <p className='ml-5 text-xl'> Reviews</p>
                    </div>
                    <div>
                        <p className='ml-7'><CogIcon className="h-12 w-12 lg:h-14 lg:w-14" /></p>
                        <p className='text-4xl md:text-5xl lg:text-6xl mr-12  font-bold mb-5 text-accent'><CountUp end={50} />+</p>
                        <p className='ml-5 text-xl'>Tools</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;