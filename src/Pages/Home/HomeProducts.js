import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Products/Product';

const HomeProducts = () => {
    const [products, setProducts] = useProducts();
    const sixProducts = [...products].reverse().slice(0, 6);
    return (
        <div className='my-16 lg:my-0 lg:mb-16 max-w-7xl mx-auto'>
            <h1 className='text-center font-bold text-4xl text-primary'>Popular By Choice</h1>
            <div className='divider mb-5 md:mb-12 lg:mb-12'></div>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        sixProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='text-center mt-16'>
                <Link to="/products" className='btn bg-primary text-white border-primary hover:bg-transparent hover:border-primary hover:text-primary'>See All Parts</Link>
            </div>
        </div>
    );
};

export default HomeProducts;