import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "./AdminAuthContext";

export default function AdminDashboard() {
  const { isAdminLoggedIn, adminLogout } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin-login");
    }
  }, [isAdminLoggedIn, navigate]);

  // ... rest of your code

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Admin Dashboard - Orders</h2>
        <Button variant="secondary" onClick={adminLogout}>Logout</Button>
      </div>
      {/* Orders Table */}
      {/* rest of code */}
    </Container>
  );
}
