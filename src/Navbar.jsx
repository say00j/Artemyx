import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Artemyx</h2>

      <a href="/about" className="about-link">
        About
      </a>
    </nav>
  );
}

export default Navbar;