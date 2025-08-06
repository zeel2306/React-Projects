// src/Components/AdminAuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isAdminLoggedIn");
    if (stored === "true") setIsAdminLoggedIn(true);
  }, []);

  const adminLogin = (username, password) => {
    // Simple hardcoded login (can replace with API later)
    if (username === "admin" && password === "admin123") {
      setIsAdminLoggedIn(true);
      localStorage.setItem("isAdminLoggedIn", "true");
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn");
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, adminLogin, adminLogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}
