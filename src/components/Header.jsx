import React, { useState } from "react";
import { Search, User, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Products We Use", path: "/product" },
  { label: "About Us", path: "/aboutus" },
  //{ label: "Profile", path: "/profile" },
];

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="custom-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src="/logo.jpeg" alt="Logo" className="logo" />
          <span className="brand">TerraFlow Drilling & Well Service</span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="header-icons">
          {/* Search Icon */}
          <button
            className="search-toggle"
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? <X size={18} /> : <Search size={18} />}
          </button>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className={`search-input ${isSearchOpen ? "visible" : ""}`}
          />

          {/* Profile Icon */}
          <Link to="/profiles" className="profile-link" title="Profile">
            <User size={20} />
          </Link>

          {/* Contact Button */}
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
