import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ProductDetails = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState([]);
    var { availableQuantity, minOrderQuantity } = product;

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);


    function handleValue(val) {
        setQuantity(val.target.value);
    }

    const handleCheckout = (id) => {
        const url = `http://localhost:5000/product`;
        const newQuantity = Number(availableQuantity) - Number(quantity);
        const newObject = {
            id: productId,
            updatedQuantity: newQuantity
        }
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObject)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='max-w-5xl mx-auto h-screen flex justify-center items-center'>
            <div className='bg-cyan-100 p-12 rounded-lg shadow-lg'>
                <div>
                    <p className='text-right font-bold'>{user.displayName}</p>
                    <p className='text-right'>{user.email}</p>
                </div>
                <h2 className='text-center text-4xl font-bold text-primary mb-12'>Parts Details</h2>
                <div className='flex justify-center items-center'>
                    <div className='text-center'>
                        <img src={product.img} alt="" />
                    </div>
                    <div className='ml-10'>
                        <div>
                            <h3 className='font-bold text-primary'>{product.name}</h3>
                            <h5><span className='font-bold'>Price: </span>${product.price}</h5>
                            <h5><span className='font-bold'>Available Quantity: </span>{product.availableQuantity}</h5>
                            <h5 className='mb-3'><span className='font-bold'>Minimum Order: </span>{product.minOrderQuantity}</h5>
                            <p>{product.description}</p>

                        </div>
                        <div className='flex items-center my-5'>
                            <input onChange={handleValue} type="number" placeholder="Order Quantity" className="border-2 p-1 text-center text-sm" />
                        </div>
                        <div>
                            <button className='btn btn-primary text-white' onClick={handleCheckout()}>Checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;