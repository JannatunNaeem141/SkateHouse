import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='my-10 lg:my-16'>
            <div className='bg-cyan-200 w-11/12 md:w-4/5 lg:w-3/5 mx-auto p-10 rounded-lg shadow-xl'>
                <div className='mt-5'>
                    <p className='text-2xl md:text-3xl lg:text-4xl text-primary'>My Profile</p>
                    <div class="divider"></div>
                </div>
                <div className='flex'>
                    <div className='lg:w-1/4'>
                        <div className='lg:flex justify-center items-center'>
                            <img className='rounded-full' src={user.photoURL} alt="" />
                        </div>
                    </div>
                    <div className='w-3/4 mr-5 pl-3'>
                        <div className='mb-5'>
                            <small className='justify-start flex'>Full Name</small>
                            <p className='justify-start flex'>{user.displayName}</p>
                        </div>
                        <div className='mb-5'>
                            <small className='justify-start flex'>Email Address</small>
                            <p className='justify-start flex'>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;