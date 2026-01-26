import React from "react";
import "./../footer/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-hotel">
        <div className="footer-logo">
          <h2>Lion of Sheba</h2>
          <h1>Grand Hotel</h1>
        </div>
        <div className="address">
          <p>
            <i class="fa-regular fa-location-check"></i> Address: Bole
            Street,Addis Ababa ,Etiopia
          </p>
          <p>
            
            <i class="fa-regular fa-location-check"></i> Telephone:+251
            923829008
          </p>
          <p>
            
            <i class="fa-regular fa-location-check"></i>Email:
            lioncontact@gmail.com
          </p>
          <p>
            
            <i class="fa-regular fa-location-check"></i>Hours of Operation 24/7
          </p>
        </div>
      </div>
      <div className="footer-navigation-link">
        <h3>Naviation Links</h3>
        <a href="#">Home</a>
        <a href="#">Rooms</a>
        <a href="#">Services</a>
        <a href="#">Activities</a>
      </div>
      <div className="footer-newletter">
        <h3>Newsletter Subcription</h3>
        <p>
          Dont miss our exclusive offers ! subscribe and <br />
          get special discounts.
        </p>
        <input type="email" placeholder="Email" />
        <button>SEND</button>
      </div>
    </div>
  );
}
