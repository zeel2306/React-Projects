import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:5000/orders");
    setOrders(res.data);
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:5000/orders/${id}`);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container my-5">
      <h2>Admin Dashboard - Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order._id} className="card mb-4 shadow">
            <div className="card-body">
              <h5 className="card-title">
                Order #{index + 1} - {order.name || "Unknown"}
              </h5>
              <p><b>Email:</b> {order.email || "N/A"}</p>
              <p><b>Phone:</b> {order.phone || "N/A"}</p>
              <p><b>Address:</b> {order.address || "N/A"}</p>
              <p><b>Date:</b> {order.date || "N/A"}</p>
              <p><b>Payment Method:</b> {order.paymentMethod}</p>
              {order.paymentMethod === "UPI" && <p><b>UPI ID:</b> {order.upiId}</p>}
              {order.paymentMethod === "Card" && (
                <>
                  <p><b>Card:</b> **** **** **** {order.cardNumber?.slice(-4)}</p>
                  <p><b>Expiry:</b> {order.cardExpiry}</p>
                </>
              )}
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
              <button
                className="btn btn-danger mt-3"
                onClick={() => deleteOrder(order._id)}
              >
                Delete Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
