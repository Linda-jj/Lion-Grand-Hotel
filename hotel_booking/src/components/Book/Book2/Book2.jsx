import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./../Book.css";

export default function Book2() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData, room } = location.state || {};

  if (!room || !bookingData) {
    return <p>No booking data available</p>;
  }

  // Calculate number of days
  const checkinDate = new Date(bookingData.checkin);
  const checkoutDate = new Date(bookingData.checkout);
  const diffTime = Math.abs(checkoutDate - checkinDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const total = room.price * diffDays * bookingData.guests;
  const initialPayment = total * 0.3; // Example: 30% upfront

  const handlePayment = (e) => {
    e.preventDefault();

    // Optionally here you can call backend to save reservation
    // axios.post("/api/reservation/create", { ... })

    // Navigate to Payment Success
    navigate("/payment-success", { state: { bookingData, room } });
  };
  return (
    <div className="book2">
      <div className="book-header">
        <h1>Payment</h1>
        <p>Kindly follow the instructions below</p>
      </div>

      <div className="book-main">
        <div className="book-info">
          <p>
            {diffDays} Days at {room.name}
            <br />
            Grand Hotel
          </p>
          <p>Total: ${total}</p>
          <p>Initial Payment: ${initialPayment}</p>
        </div>

        <div className="book-card">
          <form>
            <label>Card Number</label>
            <input name="number" placeholder="Payment card number" />
            <label>Bank</label>
            <input name="text" placeholder="Bank Name" />
            <label>Exp Date</label>
            <input name="number" placeholder="MM/YY" />
            <label>CVV</label>
            <input name="number" placeholder="XXX" />
          </form>
        </div>
      </div>

      <div className="book-btnn">
        <button className="book-btn1" onClick={handlePayment}>
          Pay Now
        </button>
        <button
          className="book-btn2"
          onClick={() => navigate(-1)} // Go back to room details
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
