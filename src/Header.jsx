import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title">Daily Verse</h1>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/settings" className="nav-link">Settings</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

