// src/Components/BillingPage.jsx
import React from "react";
import CheckoutForm from "./CheckoutForm";

export default function BillingPage() {
  const handleOrderSubmit = (formData) => {
    console.log("Order Data:", formData);
    alert("Order placed successfully!");
    // Later: Send data to backend API using fetch/axios
    // axios.post('/api/orders', formData)
  };

  return (
    <div className="billing-page">
      <h1>Billing Page</h1>
      <CheckoutForm onSubmit={handleOrderSubmit} />
    </div>
  );
}
