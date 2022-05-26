import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const userName = user.displayName;
    const url = user.photoURL;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Review added successfully!')
            })
    };
    return (
        <div className='max-w-2xl md:mx-auto lg:mx-auto my-10 lg:my-16 bg-cyan-100 rounded-xl shadow-xl mx-5'>
            <div className='p-5 md:p-10 lg:p-12'>
                <h2 className='font-bold text-2xl text-cyan-500 mb-10'>Add A Review</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='form-field grid gap-3 justify-items-center'>
                    <input className='mb-3 p-2 w-full border-2' placeholder="Name" value={userName} {...register("name", { required: true, maxLength: 80 })} />
                    <input className='mb-3  w-full p-2 border-2' placeholder="Ratings" type="number" {...register("rating")} />
                    <input className='mb-3 p-2 w-full border-2' value={url} placeholder="Image url" type="text" {...register("img")} />
                    <textarea className='p-2 w-full border-2' placeholder="Review" {...register("description")} />
                    <div className='text-center'>
                        <button className='mt-10 px-5 py-2 text-xl border-2 border-cyan-400 text-cyan-400 bg-white hover:bg-cyan-400 hover:text-white hover:rounded-lg'>Add This Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;