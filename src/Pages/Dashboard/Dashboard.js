import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile test">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
                <h2 className='text-4xl text-primary'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-cyan-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                    <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;