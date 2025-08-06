// src/Components/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake login — in real case, get this data from backend
    login({ name: "Zeel Patel", email });
    navigate("/"); // Redirect to home
  };

  return (
    <div className="container my-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
