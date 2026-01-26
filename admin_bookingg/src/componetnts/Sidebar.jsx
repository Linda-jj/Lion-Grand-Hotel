import React from "react";
import { NavLink } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdChecklistRtl } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import "./Sidebar.css";

const SideBar = ({ setToken }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Deluxe Hotel</h2>
      </div>

      <div className="sidebar-links">
        <NavLink to="/add" className="sidebar-link">
          <FaAddressCard className="sidebar-link-icon" />
          <p className="sidebar-link-text">Add Rooms</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-link">
          <FaListUl className="sidebar-link-icon" />
          <p className="sidebar-link-text">Rooms List</p>
        </NavLink>

        <NavLink to="/reservation" className="sidebar-link">
          <MdChecklistRtl className="sidebar-link-icon" />
          <p className="sidebar-link-text">Reservation</p>
        </NavLink>

        <button onClick={()=>setToken("")} className="sidebar-logout">
          <p className="sidebar-link-text">Logout</p>
          <LuLogOut className="sidebar-logout-icon" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
