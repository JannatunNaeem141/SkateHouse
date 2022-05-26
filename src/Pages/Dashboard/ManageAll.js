import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageAll = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://thawing-tundra-73200.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='manage-section overflow-x-auto'>
            <h2 className='manage-title text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-5 mt-12'>Manage Furnitures</h2>
            <div className='flex justify-center'>
                <table className='table w-4/5 shadow-lg'>
                    <thead>
                        <tr>
                            <th className='text-center bg-cyan-100'>Index</th>
                            <th className='text-center bg-cyan-100'>Name</th>
                            <th className='text-center bg-cyan-100'>Price</th>
                            <th className='text-center bg-cyan-100'>Available Quantity</th>
                            <th className='text-center bg-cyan-100'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr key={product._id}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='text-center'>{product.name}</td>
                                    <td className='text-center'>${product.price}</td>
                                    <td className='text-center'>{product.availableQuantity}</td>
                                    <td className='text-center'><button className='btn btn-xs bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:border-primary' onClick={() => handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Link to='/dashboard/addProduct' className='btn btn-primary my-10 text-white hover:bg-transparent hover:border-primary hover:text-primary'>Add New Product</Link>
            </div>
        </div >
    );
};

export default ManageAll;