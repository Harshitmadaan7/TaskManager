import React from "react";
import logo from "../assets/logo.jpg";


export default function Home(){
  return (
    <div className="page-container">
        <div>
        <h1>StackWizard Task Manager</h1>
        <p>Welcome — login to manage your tasks.</p>
        <img src={logo} alt="logo" style={{ maxWidth: "300px", height: "auto" }} />
        </div>
    </div>
  );
}
