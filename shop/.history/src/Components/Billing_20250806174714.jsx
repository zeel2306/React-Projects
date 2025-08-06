// src/Components/Billing.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

export default function Billing() {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleOrderSubmit = (formData) => {
    console.log("Order Data:", formData);

    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Create a new order with timestamp
    const newOrder = {
      ...formData,
      date: new Date().toLocaleString()
    };

    // Save updated orders back to localStorage
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // Show success notification
    setShowNotification(true);

    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-center my-4">Billing Page</h1>

      {/* Success Notification */}
      {showNotification && (
        <div className="alert alert-success text-center w-50 mx-auto" role="alert">
          Order placed successfully! Redirecting to home...
        </div>
      )}

      <CheckoutForm onSubmit={handleOrderSubmit} />
    </div>
  );
}
