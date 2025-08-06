import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";

export default function AppNavbar() {
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      collapseOnSelect
      expanded={expanded}
      onToggle={setExpanded}
      className="shadow-sm py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary d-flex align-items-center">
          <img src="/zeeshop-logo.png" alt="Zeeshop Logo" style={{ height: 40, width: 40, marginRight: 10 }} />
          Zeeshop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link as={NavLink} to="/" eventKey="home" className="mx-3 fw-semibold">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/shop" eventKey="shop" className="mx-3 fw-semibold">Shop</Nav.Link>
            <Nav.Link as={NavLink} to="/about" eventKey="about" className="mx-3 fw-semibold">About</Nav.Link>
            <Nav.Link as={NavLink} to="/customer-care" eventKey="care" className="mx-3 fw-semibold">Customer Care</Nav.Link>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
            {!isLoggedIn ? (
              <Nav.Link as={NavLink} to="/login" className="me-3 d-flex align-items-center">
                <FaUser size={22} className="me-1" /> Login
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogout} className="me-3 d-flex align-items-center">
                <FaUser size={22} className="me-1" /> Logout
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/cart" className="position-relative d-flex align-items-center">
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
