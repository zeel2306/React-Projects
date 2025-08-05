import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function CustomerCare() {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Customer Care</h2>
      <p className="text-center text-muted mb-5">
        Need help? Contact us anytime — we’re here to support you!
      </p>

      <Row>
        {/* Contact Information */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">Contact Information</Card.Header>
            <Card.Body>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Email:</strong> support@zeeshop.com</p>
              <p><strong>Address:</strong> Zeeshop Pvt. Ltd., Ahmedabad, India</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">Send us a message</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message here" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
