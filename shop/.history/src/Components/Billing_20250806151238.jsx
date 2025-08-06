// src/Components/Billing.jsx
import React, { useContext, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Billing() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.address || !formData.phone || !formData.email) {
      alert("Please fill all fields before placing the order.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      navigate("/cart");
      return;
    }

    // Simulate order placement (you could send data to a backend here)
    setOrderPlaced(true);

    // Clear the cart
    clearCart();

    // Redirect to Thank You page after 2 seconds
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Billing Details</h2>
      {orderPlaced && <Alert variant="success">Order placed successfully!</Alert>}
      <Form onSubmit={handlePlaceOrder}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Place Order
        </Button>
      </Form>
    </Container>
  );
}
