import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaAward, FaCity, FaShippingFast } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    { id: 1, icon: <FaUsers size={40} color="blue" />, number: "5Lac+", text: "Happy Clients", color: "blue" },
    { id: 2, icon: <FaAward size={40} color="blue" />, number: "10k+", text: "Fresh & Quality Products", color: "blue" },
    { id: 3, icon: <FaCity size={40} color="blue" />, number: "200+", text: "Delivering Cities", color: "blue" },
    { id: 4, icon: <FaShippingFast size={40} color="blue" />, number: "365 Days", text: "Express Delivery", color: "blue" },
  ];

  return (
    <div className="py-5" style={{ background: "#fff" }}>
      <Container>
        <Row className="text-center">
          {stats.map((stat) => (
            <Col md={3} sm={6} xs={12} key={stat.id} className="mb-4">
              {/* Icon Circle */}
              <div
                style={{
                  background: "rgba(46, 125, 50, 0.05)",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  margin: "0 auto 15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                {stat.icon}
              </div>
              {/* Colored Number */}
              <h5 style={{ color: stat.color, fontWeight: "bold", fontSize: "1.5rem" }}>
                {stat.number}
              </h5>
              {/* Text */}
              <p>{stat.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
