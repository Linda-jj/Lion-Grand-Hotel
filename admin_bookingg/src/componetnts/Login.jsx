import React, { useState } from "react";

import "./Login.css";
import axios from "axios";
export const backendUrl = "http://localhost:7000";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const adminLoginHandler = async (e) => {
    e.preventDefault();
    console.log("LOGIN BUTTON CLICKED");

    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      console.log("API DATA:", response.data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      } else {
      }
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Admin Login</h1>

        <form onSubmit={adminLoginHandler}>
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
