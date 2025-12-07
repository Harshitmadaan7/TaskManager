import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  return (
    <nav className="navbar" style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      {token ? (
        <>
          <Link to="/tasks" style={{ marginRight: 12 }}>My Tasks</Link>
          <Link to="/profile" style={{ marginRight: 12 }}>My Profile</Link>
          <button onClick={() => { logout(); window.location = "/"; }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: 12 }}>Login</Link>
          <Link to="/signup" style={{ marginRight: 12 }}>Sign Up</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
