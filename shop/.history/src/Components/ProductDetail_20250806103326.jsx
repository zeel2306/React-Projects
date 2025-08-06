// src/Components/ProductDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Spinner, Container, Row, Col, Card } from "react-bootstrap";
import { CartContext } from "./CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img src={product.image} alt={product.title} style={{ maxHeight: "400px", objectFit: "contain" }} />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <h4 className="text-primary">${product.price}</h4>
          <p>{product.description}</p>
          <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}
