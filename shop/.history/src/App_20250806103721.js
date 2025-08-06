// src/App.js
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';   // <-- Using your updated Slider
import Product from './Components/Product';
import About from './Components/About';
import CustomerCare from './Components/Customercare';
import ProductDetails from './Components/ProductDetail';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';
import Cart from './Components/Cart';
import WelcomePopup from "./Components/WelcomePopup";
import { AuthProvider } from './Components/AuthContext';
import { CartProvider } from './Components/CartContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrandSlider from './Components/BrandSlider';

function App() {
  return (
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
                      <Slider />  {/* Your new auto-slider */}
                      <Product /> {/* Optional: show few products on home */}
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
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              </Routes>
            </main>
            <BrandSlider?
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
