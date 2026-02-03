import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import "./HotelDetails.css";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  const [bookingStatus, setBookingStatus] = useState(null); // success / error message
  const [conflictDetected, setConflictDetected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Fetch room details by ID
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/hotel/${id}`);
        if (res.data.success) setRoom(res.data.hotel);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchRoom();
  }, [id]);

  // Update form data
  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });

    if (e.target.name === "checkin" || e.target.name === "checkout") {
      setConflictDetected(false);
      setBookingStatus(null);
    }
  };
  // if (bookingStatus?.success) return;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!room) return;
    setConflictDetected(false);
    setBookingStatus(null);
    setIsSubmitting(true);
    if (!bookingData.checkin || !bookingData.checkout) {
      setBookingStatus({
        success: false,
        message: "Please select both check-in and check-out dates",
      });
      setIsSubmitting(false);
      return;
    }
    // Normalize dates
    const checkInDate = new Date(bookingData.checkin);
    const checkOutDate = new Date(bookingData.checkout);

    // date validation
    if (checkOutDate <= checkInDate) {
      setBookingStatus({
        success: false,
        message: "Check-out must be after check-in",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await axios.post(
        `${backendUrl}/api/reservation/create`,
        {
          name: bookingData.name.trim(),
          email: bookingData.email.trim(),
          phone: bookingData.phone.trim(),
          checkin: bookingData.checkin,
          checkout: bookingData.checkout,
          guests: Number(bookingData.guests),
          roomName: room.name,
          roomId: room._id,
        },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        },
      );

      if (res.data.success) {
        setBookingStatus({
          success: true,
          message: "Reservation created successfully!",
        });
        setTimeout(() => {
          navigate("/book2", {
            state: { bookingData, room },
          });
        }, 1500);
      }
    } catch (err) {
      console.error("Booking error:", err);
      if (err.response?.status === 409) {
        setBookingStatus({
          success: false,
          message: err.response.data.message,
        });
        setConflictDetected(true);
      } else if (err.response?.status === 400) {
        setBookingStatus({
          success: false,
          message: err.response.data.message || "Invalid booking data",
        });
      } else {
        setBookingStatus({
          success: false,
          message:
            err.response?.data?.message ||
            "Error creating reservation. Please try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!room) return <p>Loading room details...</p>;
  const isBooked = bookingStatus?.success === true;
  return (
    <div className="details-container">
      <div>
        <h1>{room.name}</h1>
        <img src={room.image} alt={room.name} />
        <p>{room.description}</p>
        <p>{room.price}</p>

        <h2>Book this room</h2>
      </div>
      {bookingStatus && (
        <div
          className={`status-message ${bookingStatus.success ? "success" : "error"}`}
          style={{
            color: bookingStatus.success ? "green" : "red",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: bookingStatus.success ? "#e8f5e8" : "#ffe6e6",
            border: `1px solid ${bookingStatus.success ? "green" : "red"}`,
          }}
        >
          {bookingStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={bookingData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={bookingData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={bookingData.phone}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <label>Check-In</label>
        <input
          type="date"
          name="checkin"
          value={bookingData.checkin}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
          disabled={isSubmitting}
        />

        <label>Check-Out</label>
        <input
          type="date"
          name="checkout"
          value={bookingData.checkout}
          onChange={handleChange}
          min={bookingData.checkin || new Date().toISOString().split("T")[0]}
          required
          disabled={isSubmitting}
        />

        <label>Guests</label>
        <select
          name="guests"
          value={bookingData.guests}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} Guest(s)
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={isSubmitting || isBooked}
          style={{
            backgroundColor: isBooked
              ? "#4CAF50"
              : isSubmitting
                ? "#ccc"
                : "#007bff",
            cursor: isSubmitting || isBooked ? "Not-allowed" : "pointer",
          }}
        >
          {" "}
          {isSubmitting
            ? " processing ..."
            : isBooked
              ? "Booked successfully!"
              : "Book Now"}
        </button>
      </form>
      {conflictDetected && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h3>This Room us unavailable for your selected Dates.</h3>
          <p>What Would you like to Do?</p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => {
                setConflictDetected(false);
                setBookingStatus(null);
                setBookingData({
                  ...bookingData,
                  checkin: "",
                  checkout: "",
                });
              }}
            >
              Choose Different Dates
            </button>
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => navigate("/rooms")}
            >
              Choose Another Room
            </button>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
