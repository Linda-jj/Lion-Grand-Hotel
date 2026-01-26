import { useEffect, useState } from "react";
import axios from "axios";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(
          " http://localhost:7000/api/rooms/getallrooms",
        );
        setRooms(res.data);
      } catch (err) {
        console.error(err);
        setError("Backend not reachable");
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Rooms count: {rooms.length}</h1>
    </div>
  );
}
