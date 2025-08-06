import React, { useContext, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { AdminAuthContext } from "./AdminAuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const { adminLogin } = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminLogin(username, password)) {
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 shadow rounded bg-white" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-3">Admin Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter admin username"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}
