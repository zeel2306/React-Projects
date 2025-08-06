// src/Components/Billing.jsx
import React from "react";
import CheckoutForm from "./CheckoutForm";

export default function Billing() {
  const handleOrderSubmit = (formData) => {
    console.log("Order Data:", formData);
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h1 className="text-center my-4">Billing Page</h1>
      <CheckoutForm onSubmit={handleOrderSubmit} />
    </div>
  );
}
