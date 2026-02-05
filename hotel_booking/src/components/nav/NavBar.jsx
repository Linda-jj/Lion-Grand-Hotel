import React, { useState } from "react";
import "./NavBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-first">
      {/* Logo */}
      <div className="nav-logo">
        <h2>Lion of Sheba</h2>
        <h1>Grand Hotel</h1>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/activity">Activity</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>

      {/* Hamburger */}
      <i
        className="fa-solid fa-bars icons"
        onClick={() => setOpen(true)}
      ></i>

      {/* Mobile Dropdown */}
      <div className={`dropDown ${open ? "show" : ""}`}>
        <i
          className="fa-solid fa-x icon"
          onClick={() => setOpen(false)}
        ></i>

        <nav>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
          <Link to="/activity" onClick={() => setOpen(false)}>Activity</Link>
          <Link to="/gusest" onClick={() => setOpen(false)}>Guest Review</Link>
        </nav>

        <a
          href="#booknow"
          className="mobile-book"
          onClick={() => setOpen(false)}
        >
          <i className="fa-solid fa-key"></i> BOOK NOW
        </a>
      </div>

      {/* Desktop Book Now */}
      <div className="nav-btn">
        <a href="#booknow">
          <i className="fa-solid fa-key"></i> BOOK NOW
        </a>
      </div>
    </div>
  );
}
