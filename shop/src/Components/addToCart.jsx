import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Toast } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from './CartContext';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="py-4">
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Item added to cart!</Toast.Body>
      </Toast>

      <h2 className="text-center mb-4 fw-bold">Our Products</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((product) => {
          const inCart = cartItems.find(item => item.id === product.id);
          
          return (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm">
                <div className="d-flex justify-content-center p-3" style={{ height: "200px" }}>
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    style={{ maxHeight: "180px", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6">{product.title}</Card.Title>
                  <Card.Text className="fw-bold text-primary">${product.price}</Card.Text>
                  <Button 
                    variant={inCart ? "success" : "primary"}
                    className="mt-auto" 
                    onClick={() => handleAddToCart(product)}
                  >
                    {inCart ? "In Cart" : "Add to Cart"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
