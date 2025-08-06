// src/Components/Features.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHandshake, FaThumbsUp, FaClock, FaHeadset } from "react-icons/fa";

export default function Features() {
  const features = [
    { id: 1, icon: <FaHandshake size={40} color="#ff9800" />, text: "Same Day Delivery" },
    { id: 2, icon: <FaThumbsUp size={40} color="#f44336" />, text: "Midnight and Fixtime Delivery" },
    { id: 3, icon: <FaClock size={40} color="#e91e63" />, text: "100% Satisfaction Guaranteed" },
    { id: 4, icon: <FaHeadset size={40} color="#3f51b5" />, text: "Better Customer Support" },
  ];

  return (
    <div className="border-top border-bottom" style={{ background: "#f8f9fa", padding: "40px 0" }}>
      <Container>
        <Row className="justify-content-between align-items-center">
          {features.map((feature, index) => (
            <Col key={feature.id} xs={12} sm={6} md={3} className="text-center position-relative">
              <div className="d-flex align-items-center justify-content-center">
                <div className="me-2">{feature.icon}</div>
                <div className="text-start">
                  <small className="d-block fs-6 fw-semibold">{feature.text}</small>
                </div>
              </div>
              {index < features.length - 1 && (
                <div 
                  className="d-none d-md-block" 
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '1px',
                    height: '70%',
                    background: '#dee2e6'
                  }}
                />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
