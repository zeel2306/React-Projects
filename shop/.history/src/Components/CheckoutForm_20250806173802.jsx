// src/Components/CheckoutForm.jsx
import React, { useState } from "react";

export default function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Billing Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="address"
        placeholder="Delivery Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
