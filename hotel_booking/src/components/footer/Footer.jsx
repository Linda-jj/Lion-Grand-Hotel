import React, { useState } from "react";
import "./../footer/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaRegMap } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineRoomService } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
export default function Footer() {
  const [email, setEmail] = useState("");
  const handlesend = (e) => {
    e.preventDefault();
    alert("Thank you for Subscribe you will get new update");
  };
  return (
    <div className="footer-box">
      <div className="footer-hotel">
        <div className="footer-logo">
          <h2>Lion of Sheba</h2>
          <h1>Grand Hotel</h1>
        </div>
        <div className="address">
          <p>
            <FaRegMap /> Address: Bole Street,Addis Ababa ,Etiopia
          </p>
          <p>
            <GiRotaryPhone /> Telephone:+251 923829008
          </p>
          <p>
            <AiOutlineMail />
            Email: lioncontact@gmail.com
          </p>
          <p>
            <MdOutlineRoomService size={20} />
            Hours of Operation 24/7
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
        <div className="social-icon">
          <h3>Connect withus on social media</h3>
          <FaFacebook size={25} />
          <FaXTwitter size={25} />
          <FaYoutube size={25} />
          <FaInstagramSquare size={25} />
          <FaPinterest size={25} />
        </div>
        <h3>Newsletter Subcription</h3>
        <p>
          Dont miss our exclusive offers ! subscribe and <br />
          get special discounts.
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <button onClick={handlesend}>SEND</button>
      </div>
    </div>
  );
}
