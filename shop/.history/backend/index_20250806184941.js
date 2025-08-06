const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ordersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
  status: { type: String, default: "Pending" }
});

const Order = mongoose.model("Order", orderSchema);

// Routes
app.post("/orders", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send({ message: "Order placed successfully!" });
});

app.get("/orders", async (req, res) => {
  const orders = await Order.find().sort({ _id: -1 }); // newest first
  res.send(orders);
});

app.delete("/orders/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.send({ message: "Order deleted successfully!" });
});

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));



// http://localhost:5000/orders