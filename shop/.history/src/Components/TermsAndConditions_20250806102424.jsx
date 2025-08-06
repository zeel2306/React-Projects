import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function TermsAndConditions() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "50px 0" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary">Terms and Conditions</h2>
              <p className="text-muted">Last updated: August 2025</p>
            </div>
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <section className="mb-4">
                  <h4 className="text-primary mb-3">1. Introduction</h4>
                  <p>
                    Welcome to Zeeshop. By accessing our website, you agree to these terms and conditions. 
                    Please read them carefully.
                  </p>
                </section>

                <section className="mb-4">
                  <h4 className="text-primary mb-3">2. Use of Service</h4>
                  <p>By using our service, you agree to:</p>
                  <ul>
                    <li>Provide accurate and complete information</li>
                    <li>Use the service legally and responsibly</li>
                    <li>Not violate any applicable laws or regulations</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h4 className="text-primary mb-3">3. Account Registration</h4>
                  <p>
                    When you create an account with us, you must provide accurate and complete information. 
                    You are responsible for maintaining the confidentiality of your account.
                  </p>
                </section>

                <section className="mb-4">
                  <h4 className="text-primary mb-3">4. Products</h4>
                  <p>
                    All products are subject to availability. We reserve the right to discontinue any product at any time. 
                    Prices are subject to change without notice.
                  </p>
                </section>

                <section className="mb-4">
                  <h4 className="text-primary mb-3">5. Shipping & Delivery</h4>
                  <p>
                    Delivery times are estimates only. We are not responsible for delays beyond our control. 
                    Risk of loss and title passes to you upon delivery.
                  </p>
                </section>

                <section className="mb-4">
                  <h4 className="text-primary mb-3">6. Returns & Refunds</h4>
                  <p>
                    You may return most new, unopened items within 30 days of delivery for a full refund. 
                    We'll pay the return shipping costs if the return is a result of our error.
                  </p>
                </section>

                <section className="mb-4">
                  <h4 className="text-primary mb-3">7. Privacy Policy</h4>
                  <p>
                    Your use of our service is also governed by our Privacy Policy. 
                    Please review our Privacy Policy to understand our practices.
                  </p>
                </section>

                <section>
                  <h4 className="text-primary mb-3">8. Contact Us</h4>
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us at 
                    <strong> support@zeeshop.com</strong>
                  </p>
                </section>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
