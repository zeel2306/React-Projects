// src/Components/Billing.jsx
import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Billing() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Get existing orders or empty array
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Create new order
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      date: new Date().toLocaleString(),
      status: "Pending"
    };

    // Save to localStorage
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    clearCart();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <Container className="py-5">
      <h2>Billing</h2>
      <p>Review your cart and confirm your order.</p>
      <Button variant="success" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </Container>
  );
}
