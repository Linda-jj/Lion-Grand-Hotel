import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Reservation.css";
import ReactPaginate from "react-paginate";

import { backendUrl } from "../../App";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate(); 
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 4;
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const currentReservations = reservations.slice(
  indexOfFirstItem,
  indexOfLastItem
);

const totalPages = Math.ceil(reservations.length / itemsPerPage);
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
      "Are you sure you want to cancle this reservation?"
    );

    if (!confirmDelete) return;

    try {
      const res = await axios.delete(
        `${backendUrl}/api/reservation/delete/${id}`
      );

      if (res.data.success) {
        alert("Reservation cancled successfully");

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
              currentReservations.map((res) => (
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
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="pagination">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((p) => p - 1)}
  >
    Prev
  </button>

  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      className={currentPage === i + 1 ? "active" : ""}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((p) => p + 1)}
  >
    Next
  </button>
</div>

      </div>
    </div>
  );
};

export default Reservation;

