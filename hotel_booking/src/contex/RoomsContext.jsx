import React, { useEffect } from "react";
import { useState, createContext } from "react";
import axios from "axios";
import { backendUrl } from "../App";

export const RoomsContext = createContext();
const RoomsContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
const fetchHotelRoom =async ()=>{
try {
  const response =await axios.get(`${backendUrl}/api/hotel/list`)
    console.log("Rooms API response:", response.data);
  if(response.data.success && response.data.hotels){
    setRooms(response.data.hotels)

  }else{
console.log("no hotel:" ,response.data.message)
  }
} catch (error) {
  console.log(error)
}
}

useEffect(()=>{
  fetchHotelRoom()
},[])


  return (
    <RoomsContext.Provider value={{ rooms }}>
      {children}
      </RoomsContext.Provider>
  );
};

export default RoomsContextProvider;
