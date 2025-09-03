import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Stats Cards */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
                    <p className="text-3xl font-bold text-gray-700">0</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
                    <p className="text-3xl font-bold text-gray-700">0</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
                    <p className="text-3xl font-bold text-gray-700">₹0</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm font-medium">Low Stock Items</h3>
                    <p className="text-3xl font-bold text-gray-700">0</p>
                </div>
            </div>

            {/* Recent Orders Section */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
                <div className="bg-white shadow-md rounded">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Order ID</th>
                                <th className="py-3 px-6 text-left">Customer</th>
                                <th className="py-3 px-6 text-center">Status</th>
                                <th className="py-3 px-6 text-center">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                            <tr className="border-b border-gray-200 text-center">
                                <td colSpan="4" className="py-4">No recent orders</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Low Stock Products Section */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Low Stock Products</h3>
                <div className="bg-white shadow-md rounded">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Product Name</th>
                                <th className="py-3 px-6 text-center">Current Stock</th>
                                <th className="py-3 px-6 text-center">Category</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                            <tr className="border-b border-gray-200 text-center">
                                <td colSpan="3" className="py-4">No low stock products</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
