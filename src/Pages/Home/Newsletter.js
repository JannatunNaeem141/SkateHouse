import React from 'react';
import { InboxInIcon } from '@heroicons/react/solid';

const Newsletter = () => {
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <div><InboxInIcon className="h-10 w-10 mr-2 text-primary" /></div>
                    <div>
                        <p className='font-bold'>Sign up for our newsletter!</p>
                        <p>Receive emails with sales, product news and tips and tricks for your gear.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <input type="email" placeholder="Enter email here..." className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <button className="btn btn-outline ml-5">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;