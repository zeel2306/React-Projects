// src/App.js
import React from "react";
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Product from './Components/Product';
import About from './Components/About';
import CustomerCare from './Components/Customercare';
import ProductDetails from './Components/ProductDetail';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';
import StatsSection from "./Components/StatsSection";
import Testimonials from "./Components/Testimonials";
import Cart from './Components/Cart';
import WelcomePopup from "./Components/WelcomePopup";
import Features from './Components/Features';
import Billing from "./Components/Billing";
import AdminDashboard from "./Components/AdminDashboard";
import AdminLogin from "./Components/AdminLogin";
import { AuthProvider } from './Components/AuthContext';
import { CartProvider } from './Components/CartContext';
import { AdminAuthProvider } from './Components/AdminAuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrandSlider from './Components/BrandSlider';
import OrderTracking from "./Components/OrderTracking";

import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Theme loading: Add theme class to body before app loads
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("bg-dark", "text-light");
} else {
  document.body.classList.add("bg-light", "text-dark");
}

function App() {
  return (
    <AdminAuthProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="App d-flex flex-column min-vh-100">
              <Navbar />
              <main className="flex-grow-1 mb-4">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <WelcomePopup />
                        <Slider />
                        <StatsSection />
                        <Product />
                        <Features />
                        <Testimonials />
                        <BrandSlider />
                      </>
                    }
                  />
                  <Route path="/shop" element={<Product />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/customer-care" element={<CustomerCare />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/billing" element={<Billing />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                  <Route path="/OrderTracking" element={<TermsAndConditions />} />

                  {/* Admin Routes */}
                  <Route path="/admin-login" element={<AdminLogin />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </AdminAuthProvider>
  );
}

export default App;
