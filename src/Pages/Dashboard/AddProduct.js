import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
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
                toast.success('Parts added successfully!')
            })
    };
    return (
        <div className='max-w-2xl mx-auto  my-10 bg-cyan-100 rounded-lg shadow-xl'>
            <div className='p-10'>
                <h2 className='font-bold text-2xl text-cyan-500'>Add New Parts</h2>
                <div class="divider mb-10"></div>
                <form onSubmit={handleSubmit(onSubmit)} className='form-field grid gap-3 justify-items-center'>
                    <input className='mb-3 p-2 w-full border-2' placeholder="Parts Name" {...register("name", { required: true, maxLength: 80 })} />
                    <input className='mb-3  w-full p-2 border-2' placeholder="Price" type="number" {...register("price")} />
                    <input className='mb-3 p-2 w-full border-2' placeholder="Available Quantity" type="number" {...register("availableQuantity")} />
                    <input className='mb-3 p-2 w-full border-2' placeholder="Minimum Order Quantity" type="number" {...register("minOrderQuantity")} />
                    <input className='mb-3 p-2 w-full border-2' placeholder="Image url" type="text" {...register("img")} />
                    <textarea className='p-2 w-full border-2' placeholder="Description" {...register("description")} />
                    <div className='text-center'>
                        <button className='mt-10 px-5 py-2 text-xl border-2 border-cyan-400 text-cyan-400 bg-white hover:bg-cyan-400 hover:text-white hover:rounded-lg'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;