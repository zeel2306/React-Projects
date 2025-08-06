// src/Components/CheckoutForm.jsx
import React, { useState } from "react";

export default function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "COD", // Default is Cash on Delivery
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Billing Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label">Delivery Address</label>
            <textarea
              name="address"
              className="form-control"
              rows="3"
              placeholder="Enter your delivery address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Payment Method */}
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={formData.paymentMethod === "COD"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Cash on Delivery (COD)</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  checked={formData.paymentMethod === "UPI"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">UPI</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={formData.paymentMethod === "Card"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Credit/Debit Card</label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
