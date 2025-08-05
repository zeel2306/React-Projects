import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      addToCart(product);
    }
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
      <h2 className="text-center mb-4">Our Products</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <div className="d-flex justify-content-center" style={{ height: "250px" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ maxHeight: "250px", objectFit: "contain", padding: "10px" }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
                  {product.description.substring(0, 50)}...
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">${product.price}</span>
                  <Button onClick={() => handleAddToCart(product)} variant="primary">
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
