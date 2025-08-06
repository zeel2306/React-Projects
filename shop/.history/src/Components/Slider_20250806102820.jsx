import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Spinner, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomeSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Top Slider */}
      <Carousel controls indicators={false} interval={2000} pause="hover">
        {products.map(product => (
          <Carousel.Item 
            key={product.id} 
            onClick={() => handleProductClick(product.id)} 
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "400px" }}>
              <img
                className="d-block mb-3"
                src={product.image}
                alt={product.title}
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              <div className="text-center">
                <h5 className="text-dark mb-2">{product.title}</h5>
                <p className="text-primary fw-bold">${product.price}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom styles for black arrows */}
      <style>{`
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: black;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-size: 60%;
        }
      `}</style>

      {/* Product Grid Below */}
      <h3 className="mt-5 mb-4 text-center fw-bold">Our Products</h3>
      <Row>
        {products.slice(0, 8).map(product => ( // showing only first 8
          <Col key={product.id} md={3} sm={6} className="mb-4">
            <Card 
              className="h-100 shadow-sm" 
              style={{ cursor: "pointer" }} 
              onClick={() => handleProductClick(product.id)}
            >
              <div className="d-flex justify-content-center p-3" style={{ height: "200px" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ maxHeight: "180px", width: "auto", objectFit: "contain" }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fs-6">{product.title}</Card.Title>
                <Card.Text className="fw-bold text-primary">${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
