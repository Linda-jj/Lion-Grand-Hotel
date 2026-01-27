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
  };

  
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      `${backendUrl}/api/reservation/create`,
      {
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        checkin: bookingData.checkin,
        checkout: bookingData.checkout,
        guests: bookingData.guests,
        roomName: room.name,
        roomId: room._id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.success) {
      setBookingStatus({ success: true, message: "Reservation created!" });

      // OPTIONAL: Navigate to success page
      navigate("/book2", {
        state: {
          bookingData,
          room,
        },
      });
    } else {
      setBookingStatus({ success: false, message: res.data.message });
    }
  } catch (err) {
    console.error(err);
    setBookingStatus({
      success: false,
      message: "Error creating reservation",
    });
  }
};
  if (!room) return <p>Loading room details...</p>;

  return (
    <div className="details-container">
      <div>
        <h1>{room.name}</h1>
        <img src={room.image} alt={room.name} />
        <p>{room.description}</p>
        <p>${room.price}</p>

        <h2>Book this room</h2>
      </div>

      {bookingStatus && (
        <div
          style={{
            color: bookingStatus.success ? "green" : "red",
            marginBottom: "10px",
          }}
        >
          {bookingStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={bookingData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={bookingData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={bookingData.phone}
          onChange={handleChange}
          required
        />

        <label>Check-In</label>
        <input
          type="date"
          name="checkin"
          value={bookingData.checkin}
          onChange={handleChange}
          required
        />

        <label>Check-Out</label>
        <input
          type="date"
          name="checkout"
          value={bookingData.checkout}
          onChange={handleChange}
          required
        />

        <label>Guests</label>
        <select
          name="guests"
          value={bookingData.guests}
          onChange={handleChange}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} Guest(s)
            </option>
          ))}
        </select>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
