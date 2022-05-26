import React from 'react';
import { LocationMarkerIcon, SwitchHorizontalIcon, GlobeIcon, LockClosedIcon } from '@heroicons/react/solid';
import skate2 from '../../images/skate2.png';

const Policy = () => {
    return (
        <div style={{ backgroundImage: `url(${skate2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
            <div className='max-w-7xl mx-auto py-16'>
                <div className='grid md:grid md:grid-cols-2 lg:flex justify-around items-center h-96'>
                    <div className='flex justify-center items-center mb-5 lg:mb-0 lg:pr-5'>
                        <div><LocationMarkerIcon className="h-10 w-10 mr-2 text-cyan-700" /></div>
                        <div>
                            <p className='font-bold text-primary text-xl'>Free shipping Bangladesh</p>
                            <p className='text-primary'>On orders over $99</p>
                        </div>
                    </div>
                    <div className='flex justify-center  items-center pr-5'>
                        <div><SwitchHorizontalIcon className="h-10 w-10 mr-2 text-cyan-700" /></div>
                        <div>
                            <p className='font-bold text-primary text-xl'>Easy 60-days Returns/Exchange</p>
                            <p className='text-primary'>Unused products. Conditions apply.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center pr-5'>
                        <div><GlobeIcon className="h-10 w-10 mr-2 text-cyan-700" /></div>
                        <div>
                            <p className='font-bold text-primary text-xl'>Worldwide support</p>
                            <p className='text-primary'>We're here to help</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div><LockClosedIcon className="h-10 w-10 mr-2 text-cyan-700" /></div>
                        <div>
                            <p className='font-bold text-primary text-xl'>100% Secure Checkout</p>
                            <p className='text-primary'>Major Credit Cards / PayPal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;