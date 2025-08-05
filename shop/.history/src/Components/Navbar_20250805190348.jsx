import React, { useContext } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function AppNavbar() {
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to home
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-primary d-flex align-items-center">
          <img
            src="/zeeshop-logo.png"
            alt="Zeeshop Logo"
            style={{ height: "40px", width: "40px", marginRight: "10px" }}
          />
          Zeeshop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Center Menu */}
          <Nav className="mx-auto">
            <Nav.Link href="/" className="mx-3 fw-semibold">Home</Nav.Link>
            <Nav.Link href="/shop" className="mx-3 fw-semibold">Shop</Nav.Link>
            <Nav.Link href="/about" className="mx-3 fw-semibold">About</Nav.Link>
            <Nav.Link href="/customer-care" className="mx-3 fw-semibold">Customer Care</Nav.Link>
          </Nav>

          {/* Right - Login/Logout & Cart */}
          <Nav className="ms-auto d-flex align-items-center">
            {!isLoggedIn ? (
              <Nav.Link href="/login" className="me-3 d-flex align-items-center">
                <FaUser size={22} className="me-1" /> Login
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogout} className="me-3 d-flex align-items-center">
                <FaUser size={22} className="me-1" /> Logout
              </Nav.Link>
            )}
            <Nav.Link href="/cart" className="position-relative">
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {cartItems.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
