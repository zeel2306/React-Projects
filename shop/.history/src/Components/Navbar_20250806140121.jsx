import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          ShopEase
        </Navbar.Brand>

        {/* Toggle Button (for mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Always show Home & Shop */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>

            {/* If logged in → Show Welcome + Dropdown */}
            {isLoggedIn ? (
              <NavDropdown title={`Welcome, ${user?.name || "User"}`} id="user-dropdown">
                <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/orders">My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              // If NOT logged in → Show Login
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
