import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // For popup
  const [showModal, setShowModal] = useState(false);

  // Fetch all orders
  const fetchOrders = async () => {
    const response = await fetch("http://localhost:5000/orders");
    const data = await response.json();
    setOrders(data);
  };

  // Update order status
  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:5000/orders/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchOrders();
    } catch (err) {
      console.error("Error updating status", err);
    }
  };

  // Delete order
  const deleteOrder = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      await fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      });
      fetchOrders();
    }
  };

  // Open popup with cart items
  const viewItems = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Close popup
  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard - Orders</h2>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Payment</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>{order.paymentMethod}</td>
              <td>${order.total}</td>
              <td>{order.date}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => viewItems(order)}
                >
                  View Items
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteOrder(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup Modal */}
      {showModal && selectedOrder && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
