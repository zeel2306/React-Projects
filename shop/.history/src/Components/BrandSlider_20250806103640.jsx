// src/Components/BrandSlider.jsx
import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

export default function BrandSlider() {
  const brands = [
    {
      id: 1,
      image: "/zeeshop-logo.png",
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      id: 2,
      image: "/zeeshop-logo.png",
      title: "Money Back Guarantee",
      description: "30 days return policy"
    },
    {
      id: 3,
      image: "/zeeshop-logo.png",
      title: "24/7 Support",
      description: "Customer service support"
    },
    {
      id: 4,
      image: "/zeeshop-logo.png",
      title: "Secure Payments",
      description: "100% secure checkout"
    }
  ];

  return (
    <div className="bg-light py-5">
      <Container>
        <Carousel
          controls={false}
          indicators={false}
          interval={2500}
          className="brand-slider"
        >
          {brands.map((brand) => (
            <Carousel.Item key={brand.id}>
              <Row className="justify-content-center">
                <Col md={6} lg={4}>
                  <Card className="shadow-sm border-0 text-center p-4">
                    <div className="d-flex justify-content-center mb-3">
                      <img
                        src={brand.image}
                        alt={brand.title}
                        style={{
                          height: "70px",
                          width: "70px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <h4 className="fw-bold">{brand.title}</h4>
                    <p className="text-muted">{brand.description}</p>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
