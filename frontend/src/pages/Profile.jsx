import React, { useEffect, useState } from "react";
import api from "../api/axiosClient";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  const loadUser = async () => {
    try {
      const res = await api.get("/api/auth/me");
      setUser(res.data);
    } catch (err) {
      setMsg("Failed to load user info");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (!user) {
    return (
      <div className="page-container">
        <h2>My Profile</h2>
        <p>Loading...</p>
        {msg && <p>{msg}</p>}
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>My Profile</h2>

      <div className="task-card">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {user.createdAt && (
          <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        )}
      </div>
    </div>
  );
}
