import React, { useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { CartContext } from "./CartContext";

export default function Billing() {
  const { cartItems } = useContext(CartContext);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const shipping = subtotal > 0 ? 10 : 0; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center text-primary">Billing Details</h2>
      <Row>
        <Col md={8}>
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
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <h6>Total: ${total.toFixed(2)}</h6>
            <Button variant="success" className="w-100 mt-2">
              Pay Now
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
