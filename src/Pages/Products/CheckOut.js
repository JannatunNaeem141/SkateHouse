import React from 'react';

const CheckOut = () => {
    const handlePurchase = () => {

    }
    return (
        <div className='max-w-5xl mx-auto h-screen flex justify-center items-center'>
            <div>
                <div className="flex justify-center items-center text-center mb-14">
                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text">Country/Region</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text">Full Address</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='ml-16'>
                        <label className="label">
                            <span className="label-text">Postcode</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary text-white hover:text-primary hover:bg-transparent hover:border-primary' onClick={handlePurchase()}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;