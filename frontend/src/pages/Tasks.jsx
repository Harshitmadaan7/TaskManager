import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosClient";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [msg, setMsg] = useState("");

  const loadTasks = async () => {
    try {
      const res = await api.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      setMsg("Failed to load tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await api.delete(`/api/tasks/${id}`);
      loadTasks();
    } catch (err) {
      setMsg("Delete failed");
    }
  };

  return (
    <div className="page-container">
      <h2>My Tasks</h2>

      {msg && <p>{msg}</p>}

      <Link to="/tasks/add" className="add-btn">
        <button>+ Add New Task</button>
      </Link>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((t) => (
          <div className="task-card" key={t._id}>
            <h3>{t.title}</h3>
            <p>{t.description}</p>
            <p><strong>Status:</strong> {t.status}</p>

            <Link to={`/tasks/edit/${t._id}`}>
              <button style={{ marginRight: "10px" }}>Edit</button>
            </Link>

            <button onClick={() => deleteTask(t._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
