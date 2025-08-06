import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHandshake, FaThumbsUp, FaClock, FaHeadset } from "react-icons/fa";

export default function Features() {
  const features = [
    { id: 1, icon: <FaHandshake size={40} color="#ff9800" />, text: "Same Day Delivery" },
    { id: 2, icon: <FaThumbsUp size={40} color="#f44336" />, text: "Midnight & Fixtime Delivery" },
    { id: 3, icon: <FaClock size={40} color="#e91e63" />, text: "100% Satisfaction Guaranteed" },
    { id: 4, icon: <FaHeadset size={40} color="#3f51b5" />, text: "Better Customer Support" },
  ];

  return (
    <Container fluid className="border-top border-bottom bg-light py-5">
      <Row className="gx-4 gy-4 justify-content-center">
        {features.map((feature) => (
          <Col
            key={feature.id}
            xs={12}
            sm={6}
            md={3}
            mb={}
            className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-start text-center text-md-start"
          >
            <div className="mb-2 mb-md-0 me-md-3">{feature.icon}</div>
            <small className="fw-semibold fs-6">{feature.text}</small>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
