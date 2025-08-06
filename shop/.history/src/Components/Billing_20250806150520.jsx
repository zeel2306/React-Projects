import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function Billing() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h3 className="mb-4">Billing Details</h3>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your last name" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter zip code" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" className="mt-3">
              Place Order
            </Button>
          </Form>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>Order Summary</h5>
            <p>Subtotal: $200</p>
            <p>Shipping: $10</p>
            <h6>Total: $210</h6>
            <Button variant="success" className="w-100 mt-2">
              Pay Now
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
