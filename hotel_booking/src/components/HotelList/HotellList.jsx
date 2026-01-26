import React, { useContext } from "react";
import { RoomsContext } from "../../contex/RoomsContext";
import { FaUser, FaWifi } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { FaBedPulse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./../HotelList/HotellList.css";

const amenitiesList = [
  { label: "1-2 person", icon: <FaUser /> },
  { label: "Bathtub", icon: <MdBathtub /> },
  { label: "King Size Bed", icon: <FaBedPulse /> },
  { label: "Free WIFI", icon: <FaWifi /> },
];

export default function HotellList() {
  const { rooms } = useContext(RoomsContext);

  return (
    <div className="hotel-section" id="booknow">
      <div className="hotel-container">
        <h2 className="hotel-title">
          Book your stay <br />
          Relax in Luxury
        </h2>

        <div className="room-grid">
          {rooms.length > 0 ? (
            rooms.map((room) => {
              const { _id, image, name, price } = room;

              return (
                <div key={_id} className="room-card">
                  <Link to={`/room/${_id}`}>
                    <img src={image} alt={name} className="room-image" />
                  </Link>

                  <div className="room-body">
                    <h3 className="room-name">{name}</h3>
                    <p className="room-price">${price}</p>

                    <div className="amenities-grid">
                      {amenitiesList.map((amenity) => (
                        <div key={amenity.label} className="amenity-item">
                          {amenity.icon}
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-rooms">No rooms available</p>
          )}
        </div>
      </div>
    </div>
  );
}
