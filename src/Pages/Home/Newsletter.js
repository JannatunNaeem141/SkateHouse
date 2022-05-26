import React, { useState } from 'react';
import { InboxInIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import skate2 from '../../images/skate2.png';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    function handleValue(val) {
        setEmail(val.target.value);
    }

    const handleNews = () => {
        if (email) {
            toast.success('Successfully Subscribed to our Newsletter');
        }
    }
    return (
        <div style={{ backgroundImage: `url(${skate2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
            <div className='max-w-7xl mx-auto py-16'>
                <div className='flex justify-center items-center h-96'>
                    <div className='flex justify-center items-center w-1/2'>
                        <div><InboxInIcon className="h-10 w-10 mr-2 text-primary" /></div>
                        <div>
                            <p className='font-bold text-2xl text-primary'>Sign up for our newsletter!</p>
                            <p className='text-primary'>Receive emails with sales, product news and tips and tricks for your gear.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-1/2'>
                        <div className='form-control'>
                            <input type="email" placeholder="Enter email here..." className="input input-bordered w-full max-w-xs border-primary" onChange={handleValue} required />
                        </div>
                        <div>
                            <button type='submit' className="btn btn-primary ml-5 border-primary bg-primary hover:bg-transparent  text-white hover:text-primary" onClick={() => handleNews()}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;