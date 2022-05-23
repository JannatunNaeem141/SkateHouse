import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    console.log(product);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    return (
        <div className='max-w-5xl mx-auto h-screen flex justify-center items-center'>
            <div>
                <h2 className='text-center text-4xl font-bold text-primary mb-12'>Details</h2>
                <div className='flex justify-center items-center'>
                    <div className='text-center'>
                        <img src={product.img} alt="" />
                    </div>
                    <div className='ml-10'>
                        <div>
                            <h3 className='font-bold text-primary'>{product.name}</h3>
                            <h5><span className='font-bold'>Supplier:</span>{product.supplier}</h5>
                            <h5><span className='font-bold'>Price: </span>${product.price}</h5>
                            <h5><span className='font-bold'>Available Quantity: </span>{product.availableQuantity}</h5>
                            <h5><span className='font-bold'>Minimum Order: </span>{product.minOrderQuantity}</h5>
                            <p>{product.description}</p>

                        </div>
                        <div>
                            {/* <button className='deliver-btn' onClick={() => handleDeliver(furniture._id)}>Deliver</button>
                        <button className='restock-btn' onClick={() => handleReStock(furniture._id)}>Re-Stock</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;