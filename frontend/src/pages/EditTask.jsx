import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiosClient";

export default function EditTask() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const [msg, setMsg] = useState("");

  // Load existing task
  const loadTask = async () => {
    try {
      const res = await api.get(`/api/tasks/${id}`);
      setFormData({
        title: res.data.title,
        description: res.data.description,
        status: res.data.status,
      });
    } catch (err) {
      setMsg("Failed to load task");
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  // Update form data
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/tasks/${id}`, formData);
      navigate("/tasks");
    } catch (err) {
      setMsg("Update failed");
    }
  };

  return (
    <div className="page-container">
      <h2>Edit Task</h2>

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

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "12px"
          }}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button style={{ width: "100%" }}>Update Task</button>
      </form>
    </div>
  );
}
