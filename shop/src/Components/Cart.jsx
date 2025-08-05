import React, { useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);

  // Ensure price is numeric
  const parsePrice = (price) => parseFloat(price.toString().replace("$", ""));

  const calculateTotal = (item) => (parsePrice(item.price) * (item.qty || 1)).toFixed(2);
  const calculateGrandTotal = () => {
    return cartItems
      .reduce((sum, item) => sum + parsePrice(item.price) * (item.qty || 1), 0)
      .toFixed(2);
  };

  // Properly update quantity using setCartItems
  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, qty: Math.max((item.qty || 1) + change, 1) }
        : item
    );
    setCartItems(updatedCart);
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
      <h3 className="mb-4">Your Cart</h3>
      <Table bordered striped>
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
              <td>{item.title}</td>
              <td>${parsePrice(item.price)}</td>
              <td>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </Button>
                <span className="mx-2">{item.qty || 1}</span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </Button>
              </td>
              <td>${calculateTotal(item)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4 className="text-end">Grand Total: ${calculateGrandTotal()}</h4>
    </Container>
  );
}
