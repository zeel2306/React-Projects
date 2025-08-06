import React, { createContext, useState, useEffect } from "react";

export const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isAdminLoggedIn");
    if (storedLogin === "true") setIsAdminLoggedIn(true);
  }, []);

  const adminLogin = (username, password) => {
    // Set your admin credentials
    if (username === "admin" && password === "12345") {
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
