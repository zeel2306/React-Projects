import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import Product from "./Components/Product";
import About from "./Components/About";
import CustomerCare from "./Components/Customercare";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import Billing from "./Components/Billing";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";

import { CartProvider } from "./Components/CartContext";
import { AuthProvider } from "./Components/AuthContext";
import { AdminAuthProvider } from "./Components/AdminAuthContext";

export default function App() {
  return (
    <AdminAuthProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <AppNavbar />
            <Routes>
              {/* User Routes */}
              <Route path="/" element={<><Slider /><Product /></>} />
              <Route path="/shop" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/customer-care" element={<CustomerCare />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/billing" element={<Billing />} />

              {/* Admin Routes */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </AuthProvider>
    </AdminAuthProvider>
  );
}
