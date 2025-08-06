// src/Components/AdminDashboard.jsx
import { useEffect, useState, useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "./AdminAuthContext";

export default function AdminDashboard() {
  const { isAdminLoggedIn, adminLogout } = useContext(AdminAuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin-login");
    } else {
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      setOrders(storedOrders);
    }
  }, [isAdminLoggedIn, navigate]);

  const handleLogout = () => {
    adminLogout();
    navigate("/");
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Admin Dashboard - Orders</h2>
        <Button variant="secondary" onClick={handleLogout}>Logout</Button>
      </div>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <Table bordered>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Items</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>
                  {order.items.map(item => (
                    <div key={item.id}>
                      {item.title} (x{item.qty || 1})
                    </div>
                  ))}
                </td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
