import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='my-16'>
            <div className='bg-cyan-200 w-3/5 mx-auto p-10'>
                <div className='mt-5'>
                    <p className='text-4xl text-primary'>My Profile</p>
                    <div class="divider"></div>
                </div>
                <div className='flex'>
                    <div className='w-1/4'>
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full' src={user.photoURL} alt="" />
                        </div>
                    </div>
                    <div className='w-3/4'>
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