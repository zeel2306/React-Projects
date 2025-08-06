// src/Components/Product.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-center fw-bold">Our Products</h3>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={3} sm={6} className="mb-4">
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100 shadow-sm">
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
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
