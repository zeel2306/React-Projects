import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    // Define available coupons
    const coupons = {
      SAVE10: 10, // 10% discount
      SAVE20: 20, // 20% discount
      FLAT50: 50, // 50 fixed discount
    };

    if (coupons[coupon.toUpperCase()]) {
      if (coupon.toUpperCase().startsWith("SAVE")) {
        // Percentage discount
        setDiscount(coupons[coupon.toUpperCase()]);
        setMessage(`Coupon Applied! You got ${coupons[coupon.toUpperCase()]}% off.`);
      } else {
        // Flat discount
        setDiscount(coupons[coupon.toUpperCase()]);
        setMessage(`Coupon Applied! You got $${coupons[coupon.toUpperCase()]} off.`);
      }
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code.");
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = coupon.toUpperCase().startsWith("SAVE")
    ? total - (total * discount) / 100
    : total - discount;

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="table">
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
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="btn btn-sm btn-secondary"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="btn btn-sm btn-secondary"
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-outline-danger mb-3" onClick={clearCart}>
            Clear Cart
          </button>

          {/* Coupon Code Section */}
          <div className="mb-3">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter Coupon Code"
              className="form-control mb-2"
            />
            <button onClick={handleApplyCoupon} className="btn btn-success">
              Apply Coupon
            </button>
            {message && <p className="mt-2">{message}</p>}
          </div>

          <h4>Grand Total: ${discountedTotal.toFixed(2)}</h4>
          <button
            onClick={() => navigate("/billing")}
            className="btn btn-primary mt-3"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
