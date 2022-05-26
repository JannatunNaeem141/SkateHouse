import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile test">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
                <h2 className='flex justify-start text-3xl md:text-3xl lg:text-4xl text-primary mt-5 ml-5 lg:ml-12'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-cyan-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {admin ? <li className='hidden'><Link to='/dashboard/myOrders'>My Orders</Link></li> : <li><Link to='/dashboard/myOrders'>My Orders</Link></li>}
                    {admin ? <li className='hidden'><Link to='/dashboard/addReview'>Add A Review</Link></li> : <li><Link to='/dashboard/addReview'>Add A Review</Link></li>}
                    {admin && <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>}
                    {admin && <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>}
                    {admin && <li><Link to='/dashboard/manageAll'>Manage All Products</Link></li>}
                    {admin && <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;