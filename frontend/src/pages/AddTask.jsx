import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosClient";

export default function AddTask() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/tasks", formData);
      navigate("/tasks"); // go back to dashboard
    } catch (err) {
      setMsg("Failed to create task");
    }
  };

  return (
    <div className="page-container">
      <h2>Add New Task</h2>

      {msg && <p>{msg}</p>}

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button style={{ width: "100%" }}>Create Task</button>
      </form>
    </div>
  );
}
