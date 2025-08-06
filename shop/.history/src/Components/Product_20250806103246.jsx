import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
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

  // Add to cart with login check
  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      // Not logged in → Redirect to login
      alert("Please login first to add items to your cart.");
      navigate("/login");
    } else {
      // Logged in → Add product to cart
      addToCart(product);
      alert(`${product.title} added to cart!`);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  // Filter products based on current path
  const displayProducts = location.pathname === '/' 
    ? products.slice(0, 6) 
    : products;

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">
        {location.pathname === '/' ? 'Featured Products' : 'All Products'}
      </h2>
      <Row xs={1} md={2} lg={location.pathname === '/' ? 3 : 4} className="g-4">
        {displayProducts.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <div className="d-flex justify-content-center" style={{ height: "250px" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ maxHeight: "250px", objectFit: "contain", padding: "10px" }}
                />
              </div>
              <Card.Body className="d-flex flex-column box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;">
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
      
      {location.pathname === '/' && products.length > 6 && (
        <div className="text-center mt-4">
          <Button href="/shop" variant="outline-primary">
            View All Products
          </Button>
        </div>
      )}
    </Container>
  );
}
