import axios from "axios";
import React, { useEffect, useState } from "react";

import { MdAutoDelete } from "react-icons/md";
import "./ListHotel.css";
import { backendUrl } from "../../App";
import ReactPaginate from "react-paginate";
const ListHotel = ({ token }) => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");
const [currentPage, setCurrentPage] = useState(0);

  const roomsPerPage = 5;
  const fetchRoomList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/hotel/list`, {
        headers: { token },
      });
      if (response.data.success) {
        setList(response.data.hotels);
        setCurrentPage(0)
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteRoom = async (id) => {
    const confirmDelete = window.confirm("Delete this room?");
    if (!confirmDelete) return;

    const res = await axios.delete(`${backendUrl}/api/hotel/delete/${id}`, {
      headers: { token },
    });

    if (res.data.success) {
      setList((prev) => prev.filter((item) => item._id !== id));
      setMessage("Room deleted successfully");
    } else {
      setMessage("Delete failed");
    }

    setTimeout(() => setMessage(""), 1000);
  };
 const startIndex = currentPage * roomsPerPage;
  const currentRooms = list.slice(startIndex, startIndex + roomsPerPage);
  const pageCount = Math.ceil(list.length / roomsPerPage);

  useEffect(() => {
    fetchRoomList();
  }, []);
  return (
    <div className="hotel-list-container">
      <p className="hotel-list-title">Hotel Rooms List</p>

 {message && <p className="message">{message}</p>}
      <div className="hotel-list-wrapper">
        <div className="hotel-list-header">
          <b>Image</b>
          <b>Room Name</b>
          <b>Price</b>
          <b className="center-text">Delete</b>
        </div>
         {currentRooms.length === 0 && <p>No rooms found</p>}
        
        {currentRooms.map((item) => (
          <div key={item._id} className="hotel-list-row">
            <img src={item.image} alt={item.name} className="room-image" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <MdAutoDelete
              className="delete-icon"
              onClick={() => deleteRoom(item._id)}
            />
          </div>
        ))}
      </div>
            {/* PAGINATION */}
      {list.length > roomsPerPage && (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={(e) => setCurrentPage(e.selected)}
          previousLabel="← Prev"
          nextLabel="Next →"
          containerClassName="pagination"
          activeClassName="active"
        />
      )}
    </div>
  );
};
export default ListHotel;
