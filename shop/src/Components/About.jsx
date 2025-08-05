import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold text-primary mb-4">About Zeeshop</h2>
      <p className="text-center text-muted mb-5">
        Welcome to Zeeshop! We are committed to bringing you the best shopping experience 
        with quality products at the best prices.
      </p>

      {/* Mission & Vision */}
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">Our Mission</Card.Header>
            <Card.Body>
              <p>
                Our mission is to make online shopping easy, affordable, and enjoyable. 
                We aim to provide a wide variety of products while ensuring quality and customer satisfaction.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">Our Vision</Card.Header>
            <Card.Body>
              <p>
                We envision becoming the most trusted e-commerce platform for customers across the globe,
                where shopping meets convenience and reliability.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <h4 className="text-center fw-bold text-primary mb-4">Why Choose Zeeshop?</h4>
      <Row>
        <Col md={4} className="mb-3">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5 className="fw-bold text-primary">Quality Products</h5>
              <p>We handpick products to ensure quality and value for money.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5 className="fw-bold text-primary">Affordable Prices</h5>
              <p>Get the best deals and offers without compromising on quality.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5 className="fw-bold text-primary">Excellent Support</h5>
              <p>Our support team is always ready to help you with any queries.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
