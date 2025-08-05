import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar bg="light" className="shadow-sm" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary d-flex align-items-center">
          <img
            src="/zeeshop-logo.png"
            alt="Zeeshop Logo"
            style={{ height: "40px", width: "40px", marginRight: "10px" }}
          />
          Zeeshop
        </Navbar.Brand>

        <Nav className="d-flex flex-row align-items-center justify-content-center flex-grow-1">
          <Nav.Link as={Link} to="/" className="mx-3 fs-5">Home</Nav.Link>
          <Nav.Link as={Link} to="/shop" className="mx-3 fs-5">Shop</Nav.Link>
          <Nav.Link as={Link} to="/about" className="mx-3 fs-5">About</Nav.Link>
          <Nav.Link as={Link} to="/customer-care" className="mx-3 fs-5">Customer Care</Nav.Link>
        </Nav>

        <Nav className="d-flex flex-row align-items-center">
          <Nav.Link as={Link} to="/login" className="me-3 d-flex align-items-center">
            <FaUser size={22} className="me-1" /> Login
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="position-relative">
            <FaShoppingCart size={28} />
            {cartItems.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "12px" }}
              >
                {cartItems.length}
              </span>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
