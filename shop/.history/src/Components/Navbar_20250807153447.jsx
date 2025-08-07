import React, { useContext } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";
import ThemeToggle from "./ThemeToggle"; // ✅ New import

export default function AppNavbar() {
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo (Left) */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-primary d-flex align-items-center"
        >
          <img
            src="/zeeshop-logo.png"
            alt="Zeeshop Logo"
            style={{ height: "40px", width: "40px", marginRight: "10px" }}
          />
          Zeeshop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <div className="d-flex justify-content-between w-100 align-items-center">
            {/* Center: Nav Links */}
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" className="mx-3 fw-semibold">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/shop" className="mx-3 fw-semibold">
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="mx-3 fw-semibold">
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/customer-care"
                className="mx-3 fw-semibold"
              >
                Customer Care
              </Nav.Link>
            </Nav>
                         

                         
            {/* Right: User & Cart */}
            <Nav className="d-flex align-items-center">
              {!isLoggedIn ? (
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="me-3 d-flex align-items-center"
                >
                  <FaUser size={22} className="me-1" /> Login
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    disabled
                    className="me-3 d-flex align-items-center text-success fw-semibold"
                  >
                    <FaUser size={22} className="me-1" /> Welcome,{" "}
                    {user?.name || "User"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={handleLogout}
                    className="me-3 fw-semibold text-danger"
                  >
                    Logout
                  </Nav.Link>
                </>
              )}

              <Nav.Link as={NavLink} to="/cart" className="position-relative">
                <FaShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartItems.length}
                  </Badge>
                )}
              </Nav.Link>

              {/* ✅ Theme Toggle Button */}
              <ThemeToggle />
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
