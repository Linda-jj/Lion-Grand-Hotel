import React, { useState } from "react";
import "./../nav/NavBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import HotelList from "../../screens/HotelList";

export default function NavBar() {
  return (
    <>
      <div className="nav-first">
        <div className="nav-logo">
          <h2>Lion of Sheba</h2>
          <h1>Grand Hotel</h1>
        </div>

        <div className="nav-links">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about" href="#about">
              About
            </Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/activity">Activity</Link>
            <Link to="/gusest">Guset Review</Link>
          </nav>
        </div>

        <div className="nav-btn">
          <a href="#booknow">
            <i className="fa-solid fa-key"></i> BOOK NOW
          </a>
        </div>
      </div>
    </>
  );
}
