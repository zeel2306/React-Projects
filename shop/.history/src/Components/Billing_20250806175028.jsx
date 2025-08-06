// src/Components/Billing.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "./CartContext";

export default function Billing() {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext); // get cart

  const handleOrderSubmit = (formData) => {
    console.log("Order Data:", formData);

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      ...formData,
      cart: cartItems, // save products
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toLocaleString()
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    clearCart(); // empty cart after order
    setShowNotification(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-center my-4">Billing Page</h1>
      {showNotification && (
        <div className="alert alert-success text-center w-50 mx-auto" role="alert">
          Order placed successfully! Redirecting to home...
        </div>
      )}
      <CheckoutForm onSubmit={handleOrderSubmit} />
    </div>
  );
}
