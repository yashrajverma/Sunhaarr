import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import ManageOrders from './ManageOrders';
import AdminDashboard from './Dashboard';
import Products from './Products';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { logoutUser } from '../../routines';

const AdminLayout = ({ user, logoutUser }) => {
    // Redirect to login if not authenticated or not admin
    if (!user || !user.token || !user.is_admin) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                <div className="p-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
                </div>
                <nav className="mt-6">
                    <Link to="/admin" className="block py-3 px-6 text-gray-600 hover:bg-gray-100">
                        Dashboard
                    </Link>
                    <Link to="/admin/add-product" className="block py-3 px-6 text-gray-600 hover:bg-gray-100">
                        Add Product
                    </Link>
                    <Link to="/admin/products" className="block py-3 px-6 text-gray-600 hover:bg-gray-100">
                        All Products
                    </Link>
                    <Link to="/admin/orders" className="block py-3 px-6 text-gray-600 hover:bg-gray-100">
                        Manage Orders
                    </Link>
                    <Button color="red" onClick={() => logoutUser()}>Logout</Button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                <div className="container mx-auto px-6 py-4">
                    <Routes>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="/add-product" element={<AddProduct />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/orders" element={<ManageOrders />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { logoutUser })(AdminLayout);
