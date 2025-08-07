import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart = [], removeFromCart, updateQuantity, clearCart } = useContext(CartContext); // Safe default
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    // Define available coupons
    const coupons = {
      SAVE10: { type: "percent", value: 10 }, // 10% discount
      SAVE20: { type: "percent", value: 20 }, // 20% discount
      FLAT50: { type: "flat", value: 50 }, // Flat $50 discount
    };

    const code = coupon.toUpperCase();
    if (coupons[code]) {
      setDiscount(coupons[code]);
      setMessage(
        coupons[code].type === "percent"
          ? `Coupon Applied! You got ${coupons[code].value}% off.`
          : `Coupon Applied! You got $${coupons[code].value} off.`
      );
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code.");
    }
  };

  // Calculate total safely
  const total =
    cart && cart.length > 0
      ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0;

  // Calculate discounted total
  const discountedTotal =
    discount && discount.type === "percent"
      ? total - (total * discount.value) / 100
      : discount && discount.type === "flat"
      ? total - discount.value
      : total;

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
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
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
            onClick={() =>
              navigate("/billing", {
                state: { appliedCoupon: coupon, discountedTotal }, // Pass coupon & total to billing
              })
            }
            className="btn btn-primary mt-3"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
