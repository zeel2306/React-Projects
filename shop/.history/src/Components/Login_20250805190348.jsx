import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AuthContext } from "./AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      navigate(from); // Redirect back to previous page
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row className="shadow rounded overflow-hidden w-75" style={{ maxWidth: "900px" }}>
        {/* Left side - Login Form */}
        <Col md={6} className="bg-white p-5">
          <h3 className="mb-3 text-center">Welcome Back</h3>
          <p className="text-center text-muted">Login to your Zeeshop account</p>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="dark" className="w-100">
              Login
            </Button>
          </Form>
        </Col>

        {/* Right side - Only Logo */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center bg-dark"
        >
          <img
            src="/zeeshop-high-resolution-logo.png"
            alt="Zeeshop Logo"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
