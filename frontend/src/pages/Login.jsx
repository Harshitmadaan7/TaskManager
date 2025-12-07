import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axiosClient";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await api.post("/api/auth/login", formData);

      // Save token using context
      login(res.data.token);

      setMsg("Login successful! Redirecting...");
      setTimeout(() => navigate("/tasks"), 700);
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page-container">
        <div style={{ maxWidth: 400, margin: "40px auto" }}>
        <h2>Login</h2>

        {msg && <p>{msg}</p>}

        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
            type="email"
            name="email"
            style={{ width: "100%", marginBottom: 10 }}
            value={formData.email}
            onChange={handleChange}
            />

            <label>Password</label>
            <input
            type="password"
            name="password"
            style={{ width: "100%", marginBottom: 10 }}
            value={formData.password}
            onChange={handleChange}
            />

            <button style={{ width: "100%", marginTop: 10 }}>
            Login
            </button>
        </form>
        </div>
    </div>
  );
}
