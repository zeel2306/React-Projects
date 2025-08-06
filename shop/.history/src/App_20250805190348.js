// src/App.js
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Product from './Components/Product';
import About from './Components/About';
import CustomerCare from './Components/Customercare';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from "./Components/TermsAndConditions";
import Cart from './Components/Cart';
import WelcomePopup from "./Components/WelcomePopup";  // <-- NEW
import { AuthProvider } from './Components/AuthContext';
import { CartProvider } from './Components/CartContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1 mb-4">
              <Routes>
                <Route path="/" element={<><WelcomePopup /><Slider /><Product /></>} />
                <Route path="/shop" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/customer-care" element={<CustomerCare />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/TermsAndconditions" element={<TermsAndConditions />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
