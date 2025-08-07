const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Enable CORS for all origins (good for development)
app.use(cors());
app.use((req, res, next) => {
  res.header("Access‑Control‑Allow‑Origin", "*");
  res.header("Access‑Control‑Allow‑Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access‑Control‑Allow‑Headers", "Origin, X‑Requested‑With, Content‑Type, Accept");
  next();
});

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ordersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Order schema & model
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
  status: { type: String, default: "Pending" },
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

// Get all orders
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

// Delete an order
app.delete("/orders/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting order" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));



