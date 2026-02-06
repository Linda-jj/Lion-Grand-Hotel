import React from "react";
import "../About/About.css";


export default function About() {
  return (
    <div className="section" id="about">
      <div className="picture">
        <img  src="/pic/photo_2026-01-13_12-13-49.jpg" alt="about-img" />
      </div>
      <div className="about-content">
        
        <h1 className="section-head">About </h1>
        <h2>
          Where Elegance Meets <span>Excellance</span>
        </h2>
        
          <p>
            Our luxury hotel redefines elegance in Ethiopia, offering premium
            accommodations, exceptional dining, and unparalleled service.
            Designed for discerning travelers, we create memorable stays rooted
            in comfort, culture, and excellence. Guests enjoy premium amenities
            including high-speed connectivity, elegant bathrooms with luxury
            toiletries, and personalized services that anticipate every need.
            Whether you choose a beautifully appointed luxury room or an
            expansive suite, you’ll experience a perfect balance of comfort,
            privacy, and indulgence — where every stay feels exceptional.
          </p>
        </div>
      </div>
    
  );
}
