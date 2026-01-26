import React from "react";
import "./../About/About.css";
import { vip } from "../../assets/vip (1).jpg";

export default function About() {
  return (
    <div className=" section " id="about">
      <img className="picture" src="/pic/vip.jpg" alt="about-img" />

      <div className="about-content">
        <div className="section-title">
          <h1 className="section-head">About </h1>
          <h2>
            Where Elegance Meets <span>Excellance</span>
          </h2>
        </div>
        <p className="section-p">
          Our luxury hotel redefines elegance in Ethiopia, offering premium
          accommodations, exceptional dining, and unparalleled service. Designed
          for discerning travelers, we create memorable stays rooted in comfort,
          culture, and excellence. Guests enjoy premium amenities including
          high-speed connectivity, elegant bathrooms with luxury toiletries, and
          personalized services that anticipate every need. Whether you choose a
          beautifully appointed luxury room or an expansive suite, you’ll
          experience a perfect balance of comfort, privacy, and indulgence —
          where every stay feels exceptional.
        </p>
      </div>
    </div>
  );
}
