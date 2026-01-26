import React, { useEffect, useState } from "react";
import Login from "./componetnts/Login";
import Sidebar from "./componetnts/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddHotel from "./assets/pages/AddHotel";
import ListHotel from "./assets/pages/ListHotel";
import Reservation from "./assets/pages/Reservation";
import "./App.css";
import { ToastContainer } from "react-toastify";

export const backendUrl = "http://localhost:7000";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="app-container">
      <ToastContainer />
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <div className="dashboard-container">
            <Sidebar setToken={setToken} />
            <div className="main-content">
              <Routes>
                <Route path="/add" element={<AddHotel  token={token}/>} />
                <Route path="/list" element={<ListHotel />} />
                <Route path="/reservation" element={<Reservation />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
