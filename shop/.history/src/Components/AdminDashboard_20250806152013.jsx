import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "./AdminAuthContext";
import { Container, Table, Button } from "react-bootstrap";

export default function AdminDashboard() {
  const { isAdminLoggedIn, adminLogout } = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin-login");
    }
  }, [isAdminLoggedIn, navigate]);

  // Load orders from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleClearOrders = () => {
    if (window.confirm("Are you sure you want to clear all orders?")) {
      localStorage.removeItem("orders");
      setOrders([]);
    }
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Admin Dashboard - Orders</h2>
        <div>
          <Button variant="outline-danger" className="me-2" onClick={handleClearOrders}>
            Clear All Orders
          </Button>
          <Button variant="secondary" onClick={adminLogout}>
            Logout
          </Button>
        </div>
      </div>

      {orders.length === 0 ? (
        <h4>No orders received yet.</h4>
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Products</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.customerName || "N/A"}</td>
                <td>{order.customerEmail || "N/A"}</td>
                <td>
                  {order.items.map((item) => (
                    <div key={item.id}>
                      {item.title} (x{item.qty || 1})
                    </div>
                  ))}
                </td>
                <td>${order.total}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
