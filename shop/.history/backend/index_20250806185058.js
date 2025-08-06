const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ordersDB");

// Order Schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  paymentMethod: String,
  upiId: String,
  cardNumber: String,
  cardExpiry: String,
  cart: Array,
  total: Number,
  date: String,
  status: { type: String, default: "Pending" }, // NEW
});

const Order = mongoose.model("Order", orderSchema);

// Create new order
app.post("/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Error placing order" });
  }
});

// Get all orders (sorted by latest)
app.get("/orders", async (req, res) => {
  const orders = await Order.find().sort({ date: -1 });
  res.json(orders);
});

// Update order status
app.put("/orders/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Error updating status" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));


app.listen(5000, () => console.log("Server running on http://localhost:5000"));
// 