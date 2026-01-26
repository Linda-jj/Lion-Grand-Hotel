import React from "react";
import "./../contact/Contact.css";

export default function Contact() {
  return (
    <div className="contact-box">
      <div className="contat-continer">
        <div className="contact-title">
          <h2>Book Now</h2>
          <p>
            Book now and live <span>the Lion of Sheba Grand Hotel </span>{" "}
            experience.Get the best price guaranteed only on our website.
          </p>
        </div>
        <div className="booking-cont">
          <form>
            <label>Checkin</label>
            <input
              className="input-cale"
              type="text"
              placeholder="Select date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />
            <label>Checkout</label>
            <input
              className="input-cale"
              type="text"
              // value={new Date()}
              placeholder="Select date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />
          </form>
          <button className="nav-btnn">BooK Now</button>
        </div>
      </div>
      <div className="img-contact">
        <img
          src="/pic/google-maps-fake-listings-1024x576.jpg"
          alt="location of Lion of Sheba grand Hotel"
        />
      </div>
    </div>
  );
}
