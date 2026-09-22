import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">Artemyx</h2>

      <a href="/about" className="about-link">
        About
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="/about">About</a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
