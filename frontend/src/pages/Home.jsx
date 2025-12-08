import React from "react";
import logo from "../assets/logo.jpg";


export default function Home(){
  return (
    <div className="page-container">
        <div>
        <h1>StackWizard Task Manager</h1>
        <p>Welcome — login to manage your tasks.</p>
        <img src={logo} alt="logo" style={{ maxWidth: "300px", height: "auto" }} />
        <p style={{ marginTop: "20px", color: "gray" }}>
        This update was added to demonstrate CI/CD pipeline.
        </p>

        </div>
    </div>
  );
}
