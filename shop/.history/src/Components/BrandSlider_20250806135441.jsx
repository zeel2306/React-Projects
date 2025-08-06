// src/Components/BrandSlider.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function BrandSlider() {
  const brands = [
    { id: 1, image: "/zeeshop-logo.png", title: "Free Shipping", description: "On orders over $50" },
    { id: 2, image: "/zeeshop-logo.png", title: "Money Back Guarantee", description: "30 days return policy" },
    { id: 3, image: "/zeeshop-logo.png", title: "24/7 Support", description: "Customer service support" },
    { id: 4, image: "/zeeshop-logo.png", title: "Secure Payments", description: "100% secure checkout" },
    { id: 5, image: "/zeeshop-logo.png", title: "Fast Delivery", description: "Quick shipping across cities" },
  ];

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <div className="py-5" style={{ background: "#f9f9f9" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: "#007bff" }}>
          Why Shop With Us?
        </h2>
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id}>
              <Card className="shadow-sm border-0 text-center p-4 mx-2 brand-card">
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
                <h5 className="fw-bold">{brand.title}</h5>
                <p className="text-muted">{brand.description}</p>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
