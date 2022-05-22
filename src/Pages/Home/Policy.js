import React from 'react';
import { LocationMarkerIcon, SwitchHorizontalIcon, GlobeIcon, LockClosedIcon } from '@heroicons/react/solid';

const Policy = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center pr-5'>
                    <div><LocationMarkerIcon className="h-10 w-10 mr-2 text-primary" /></div>
                    <div>
                        <p className='font-bold'>Free shipping Bangladesh</p>
                        <p>On orders over $99</p>
                    </div>
                </div>
                <div className='flex justify-center items-center pr-5'>
                    <div><SwitchHorizontalIcon className="h-10 w-10 mr-2 text-primary" /></div>
                    <div>
                        <p className='font-bold'>Easy 60-days Returns/Exchange</p>
                        <p>Unused products. Conditions apply.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center pr-5'>
                    <div><GlobeIcon className="h-10 w-10 mr-2 text-primary" /></div>
                    <div>
                        <p className='font-bold'>Worldwide support</p>
                        <p>We're here to help</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div><LockClosedIcon className="h-10 w-10 mr-2 text-primary" /></div>
                    <div>
                        <p className='font-bold'>100% Secure Checkout</p>
                        <p>Major Credit Cards / PayPal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;