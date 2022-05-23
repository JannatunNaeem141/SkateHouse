import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, description, price, _id, availableQuantity } = product;
    const navigate = useNavigate();

    const handlePurchase = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div className='p-5'>
                <h2 className='font-bold text-xl text-center text-primary'>
                    {name}
                </h2>
                <p ><span className='font-bold'>Price: </span>${price}</p>
                <p className='mb-0'><span className='font-bold'>Available Quantity:</span> {availableQuantity}</p>
                <p className='mb-12'>{description}</p>
                <div class="card-actions text-center flex justify-center absolute bottom-0 min-w-full ">
                    <button onClick={() => handlePurchase(_id, name, img)} class="btn btn-primary bg-transparent text-primary  text-center mt-5 hover:text-white  hover:bg-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;