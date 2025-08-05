import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function AppFooter() {
  return (
    <footer className="bg-light text-dark py-4 border-top">
      <Container fluid>
        <Row className="align-items-start gx-2">
          {/* Brand + Address (Wider Column) */}
          <Col md={6} className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <img
                src="/zeeshop-logo.png"
                alt="Zeeshop Logo"
                style={{ height: "50px", width: "50px", marginRight: "10px" }}
              />
              <h5 className="fw-bold text-primary m-0">Zeeshop</h5>
            </div>
            <p className="text-muted small m-0">
              © 2025 Zeeshop™ | All Rights Reserved.
            </p>
            <p className="text-muted small m-0">
              <strong>Registered Office:</strong> Zeeshop Pvt. Ltd., 123 Business Street, Vastrapur, Ahmedabad, Gujarat - 380015
            </p>
          </Col>

          {/* Resources */}
          <Col md={2} className="mb-3">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled m-0">
              <li><a href="/" className="text-dark text-decoration-none">Shop</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
            </ul>
          </Col>

          {/* Follow Us */}
          <Col md={2} className="mb-3">
            <h6 className="fw-bold">Follow Us</h6>
            <ul className="list-unstyled m-0">
              <li className="mb-2">
                <a href="https://instagram.com" className="text-dark text-decoration-none d-flex align-items-center">
                  <FaInstagram className="me-2 fs-4" /> <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-dark text-decoration-none d-flex align-items-center">
                  <FaFacebook className="me-2 fs-4" /> <span>Facebook</span>
                </a>
              </li>
            </ul>
          </Col>

          {/* Legal */}
          <Col md={2} className="mb-3">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled m-0">
              <li><a href="/privacy" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-dark text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
