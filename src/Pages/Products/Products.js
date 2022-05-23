import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <h2 className='text-center text-4xl font-bold text-primary'>All Parts</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;