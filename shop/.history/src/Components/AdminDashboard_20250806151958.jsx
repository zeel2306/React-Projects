// src/Components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Admin Dashboard - Orders</h2>
      {orders.length === 0 ? (
        <h5 className="text-center">No orders yet.</h5>
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  <strong>{order.customer.name}</strong><br />
                  {order.customer.email}<br />
                  {order.customer.phone}
                </td>
                <td>
                  {order.items.map((item) => (
                    <div key={item.id}>
                      {item.title} (x{item.qty || 1})
                    </div>
                  ))}
                </td>
                <td>${order.total}</td>
                <td>{order.date}</td>
                <td>
                  <Badge bg={order.status === "Pending" ? "warning" : "success"}>
                    {order.status}
                  </Badge>
                </td>
                <td>
                  {order.status === "Pending" && (
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => updateStatus(order.id, "Completed")}
                    >
                      Mark as Completed
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}


