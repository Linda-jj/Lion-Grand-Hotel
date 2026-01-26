import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentSuccess.css";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  // Optional: get booking info passed from Book2
  const { bookingData, room } = location.state || {};

  return (
    <div className="payment-success-container">
      <div className="success-card">
        <div className="success-icon">✅</div>
        <h1>Payment Successful!</h1>
        {room && bookingData && (
          <p>
            Thank you, <b>{bookingData.name}</b>, for booking <b>{room.name}</b>!<br />
            Check-in: {bookingData.checkin} | Check-out: {bookingData.checkout}<br />
            Guests: {bookingData.guests}
          </p>
        )}
        <button className="home-btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
}