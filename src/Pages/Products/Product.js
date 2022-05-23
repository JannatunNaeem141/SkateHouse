import React from 'react';

const Product = ({ product }) => {
    const { name, img, description, _id, price, availableQuantity } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div className='p-5'>
                <h2 className='font-bold text-xl text-center'>
                    {name}
                </h2>
                <p >Price: {price}</p>
                <p className='mb-0'>Available Quantity: {availableQuantity}</p>
                <p className='mb-12'>{description}</p>
                <div class="card-actions text-center flex justify-center absolute bottom-0 min-w-full ">
                    <button class="btn btn-primary  text-center mt-5 text-white hover:text-primary hover:border-primary hover:bg-transparent">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;