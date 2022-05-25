import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageAll = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
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
            <h2 className='manage-title'>Manage Furnitures</h2>
            <table className='table table-zebra w-full'>
                <thead>
                    <tr>
                        <th className='text-center'>Index</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Available Quantity</th>
                        <th className='text-center'>Delete</th>
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
                                <td className='text-center'><button className='delete-btn' onClick={() => handleDelete(product._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className='add-furniture'>
                <Link to='/dashboard/addProduct' className='add-furniture-btn'>Add New Product</Link>
            </div>
        </div >
    );
};

export default ManageAll;