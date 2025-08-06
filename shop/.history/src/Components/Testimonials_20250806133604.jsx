// src/Components/Testimonials.jsx
import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";       // <-- Added
import "slick-carousel/slick/slick-theme.css"; 

const testimonials = [
  {
    id: 1,
    title: "Timely Delivered",
    text: "good work team!",
    rating: 5,
  },
  {
    id: 2,
    title: "Good Service",
    text: "Super pretty bouquet!",
    rating: 5,
  },
  {
    id: 3,
    title: "Same As Picture",
    text: "Same as picture. Loved it!",
    rating: 5,
  },
  {
    id: 4,
    title: "Amazing Experience",
    text: "The delivery was super fast.",
    rating: 5,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="my-5 container">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="p-3">
            <Card className="p-3 custom-shadow h-100">
              <Card.Body>
                <Card.Title className="fw-bold">
                  <em>{t.title}</em>
                </Card.Title>
                <div className="mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                </div>
                <Card.Text>{t.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
