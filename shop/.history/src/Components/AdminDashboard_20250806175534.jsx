// src/Components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="container my-5">
      <h2>Admin Dashboard - Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                Order #{index + 1} - {order.name}
              </h5>
              <p><b>Email:</b> {order.email}</p>
              <p><b>Phone:</b> {order.phone}</p>
              <p><b>Address:</b> {order.address}</p>
              <p><b>Date:</b> {order.date}</p>

              <h6>Products:</h6>
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.cart.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p><b>Total:</b> ${order.total.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
