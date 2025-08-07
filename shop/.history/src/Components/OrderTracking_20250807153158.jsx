import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

const OrderTracking = () => {
  // Sample status: 0 = Ordered, 1 = Packed, 2 = Shipped, 3 = Out for Delivery, 4 = Delivered
  const orderStatus = 2;

  const steps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-4">Track Your Order</h3>
            <div className="d-flex justify-content-between mb-3">
              {steps.map((step, index) => (
                <div key={index} className="text-center" style={{ flex: 1 }}>
                  <div
                    className={`rounded-circle mx-auto mb-2 ${
                      index <= orderStatus ? "bg-success" : "bg-secondary"
                    }`}
                    style={{
                      width: "30px",
                      height: "30px",
                      lineHeight: "30px",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {index + 1}
                  </div>
                  <small>{step}</small>
                </div>
              ))}
            </div>
            <ProgressBar now={(orderStatus / (steps.length - 1)) * 100} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderTracking;
