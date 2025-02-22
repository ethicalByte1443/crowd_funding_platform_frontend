import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Crowdfunding Platform</h1>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Campaigns</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
