// src/Components/Cart.jsx
import React, { useContext } from "react";
import { Container, Table, Button, ButtonGroup } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const calculateTotal = (item) => (item.price * (item.qty || 1)).toFixed(2);
  const calculateGrandTotal = () => {
    return cartItems
      .reduce((sum, item) => sum + item.price * (item.qty || 1), 0)
      .toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <Container className="py-5">
        <h3 className="text-center">Your cart is empty</h3>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="m-0">Your Cart</h3>
        <Button variant="outline-danger" size="sm" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                  )}
                  {item.title}
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    variant="outline-secondary"
                    onClick={() => updateQuantity(item.id, (item.qty || 1) - 1)}
                  >
                    -
                  </Button>
                  <Button variant="outline-secondary" disabled>
                    {item.qty || 1}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => updateQuantity(item.id, (item.qty || 1) + 1)}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </td>
              <td>${calculateTotal(item)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">
        <h4>Grand Total: ${calculateGrandTotal()}</h4>
        <Button variant="primary" className="mt-3">
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );
}
