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
                Order #{index + 1} - {order.name || "Unknown"}
              </h5>
              <p><b>Email:</b> {order.email || "N/A"}</p>
              <p><b>Phone:</b> {order.phone || "N/A"}</p>
              <p><b>Address:</b> {order.address || "N/A"}</p>
              <p><b>Date:</b> {order.date || "N/A"}</p>

              {order.cart && order.cart.length > 0 ? (
                <>
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
                          <td>{item.title || "Unknown"}</td>
                          <td>${item.price || 0}</td>
                          <td>{item.quantity || 0}</td>
                          <td>${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <p className="text-muted">No products data available for this order.</p>
              )}

              <p><b>Total:</b> ${order.total ? order.total.toFixed(2) : "0.00"}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
