import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import
import "./Reservation.css";

export const backendUrl = "http://localhost:7000";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate(); // 👈 initialize

  // Fetch all reservations once
  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/reservation/all`);
        if (response.data.success) {
          setReservations(response.data.reservations);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchReservation();
  }, []);

  // Delete reservation function
  const deleteReservation = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (!confirmDelete) return;

    try {
      const res = await axios.delete(
        `${backendUrl}/api/reservation/delete/${id}`
      );

      if (res.data.success) {
        alert("Reservation deleted successfully");

        // Remove from UI without refresh
        setReservations((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert("Delete failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="reservation-container">
      <h2 className="reservation-title">Room Reservation</h2>

      <div className="table-wrapper">
        <table className="reservation-table">
          <thead>
            <tr className="table-header">
              <th>Room Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Guests</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">
                  No Reservations Available
                </td>
              </tr>
            ) : (
              reservations.map((res) => (
                <tr key={res._id} className="table-row">
                  <td>{res.roomName}</td>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.phone}</td>
                  <td>{res.guests}</td>
                  <td>{new Date(res.checkin).toLocaleDateString()}</td>
                  <td>{new Date(res.checkout).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteReservation(res._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;

