import React, { useState } from "react";
import "./AddHotel.css";
import axios from "axios";
import { backendUrl } from "../../App";

const AddHotel = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
   const [message, setMessage] = useState("");
  const roomSubmission = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      if (image) formData.append("image", image);
      const response = await axios.post(
        `${backendUrl}/api/hotel/add`,
        formData,
        { headers: { token, "Content-Type": "multipart/form-data"} },
      );
      if (response.data.success) {
        console.log(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage(null);
      } else {
        console.log("error");
setMessage(" Failed to add room");
      }
    } catch (error) {
setMessage(" Failed to add room");
    }
  };

  return (
    <div>
      <form onSubmit={roomSubmission} className="add-hotel-form">
       <h2>Add Hotel Room</h2>
       {message && <p>{message}</p>}
        <div className="upload-container">
          <p>Upload Image</p>
          <div>
            <label className="upload-label" htmlFor="image">
              <img
                src={ image ? URL.createObjectURL(image) : "/pic/cloud-upload.jpg"
                }
                alt="upload"
              />
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                hidden
              />
            </label>
          </div>
        </div>

        <div className="input-container">
          <p>Room Name</p>
          <input
            type="text"
            placeholder="Enter room name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-container">
          <p>Room Description</p>
          <input
            type="text"
            placeholder="Enter room description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="input-container">
          <p>Price</p>
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="add-room-button">
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddHotel;
