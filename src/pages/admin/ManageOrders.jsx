import React, { useState, useEffect } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // TODO: Implement API call to fetch orders
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            // Add API call here
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (orderId, newStatus) => {
        try {
            // TODO: Implement API call to update order status
            // Update local state after successful API call
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order.id === orderId ? { ...order, status: newStatus } : order
                )
            );
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    if (loading) {
        return <div>Loading orders...</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>

            <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Order ID</th>
                            <th className="py-3 px-6 text-left">Customer</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-center">Status</th>
                            <th className="py-3 px-6 text-center">Amount</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {orders.map(order => (
                            <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    #{order.id}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {order.customer_name}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {new Date(order.created_at).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className={`bg-${order.status === 'completed' ? 'green' : 'yellow'}-200 text-${order.status === 'completed' ? 'green' : 'yellow'}-600 py-1 px-3 rounded-full text-xs`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    ₹{order.total_amount}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                        value={order.status}
                                        onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="processing">Processing</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
