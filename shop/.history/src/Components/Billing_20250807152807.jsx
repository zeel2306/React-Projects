import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "./CartContext";
import axios from "axios";

export default function Billing() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);

  const handleOrderSubmit = async (formData) => {
    try {
      const newOrder = {
        ...formData,
        cart: cartItems,
        total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        date: new Date().toLocaleString(),
      };

      await axios.post("http://localhost:5000/orders", newOrder);

      clearCart();

      // 👇 Redirect to success animation page
      navigate("/order-success");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Network error: Unable to place order. Please check if the server is running and try again.");
    }
  };

  return (
    <div>
      <h1 className="text-center my-4">Billing Page</h1>
      <CheckoutForm onSubmit={handleOrderSubmit} />
    </div>
  );
}
