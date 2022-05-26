import React from 'react';

const CheckOut = () => {

    const handlePurchase = () => {
    }
    return (
        <div className='max-w-5xl mx-auto my-16 lg:my-0 lg:h-screen flex justify-center items-center'>
            <div className='bg-cyan-100 p-5 lg:p-10 rounded-lg shadow-lg'>
                <div className="grid md:flex lg:flex justify-center items-center text-center mb-14">
                    <div>
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-5" required />
                        <label className="label">
                            <span className="label-text">Country/Region</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-5" required />
                        <label className="label">
                            <span className="label-text">Full Address</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-5" required />
                    </div>
                    <div className='md:ml-16 lg:ml-16'>
                        <label className="label">
                            <span className="label-text">Postcode</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-5" required />
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-5" required />
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-5" required />
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary text-white hover:text-primary hover:bg-transparent hover:border-primary' onClick={handlePurchase()}>Purchase</button>
                </div>
            </div>
        </div >
    );
};

export default CheckOut;