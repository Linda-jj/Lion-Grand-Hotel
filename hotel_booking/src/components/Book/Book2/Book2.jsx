import React, {useState}from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./../Book.css";

export default function Book2() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData, room } = location.state || {};
 const [bank, setBank] = useState('CBE');
 const[refe,setRefe]=useState("")
 const[acc,setAcc]=useState("")
  if (!room || !bookingData) {
    return <p>No booking data available</p>;
  }

  // Calculate number of days
  const checkinDate = new Date(bookingData.checkin);
  const checkoutDate = new Date(bookingData.checkout);
  const diffTime = Math.abs(checkoutDate - checkinDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const total = room.price * diffDays * bookingData.guests;
  const initialPayment = total 

   const handleChange = (event) => {
    setBank(event.target.value);
  };

  
  const handlePayment = (e) => {
    e.preventDefault();

    // Optionally here you can call backend to save reservation
    // axios.post("/api/reservation/create", { ... })

;

 
    navigate("/payment-success", { state: { bookingData, room } });
  };
  return (
    <div className="book2">
      <div className="book-header">
        <h1>Payment</h1>
        <p>Kindly follow the instructions below</p>
      </div>

      <div className="book-main">
        <div className="book-info">
          <p>
            {diffDays} Days at {room.name}
            <br />
            Grand Hotel
          </p>
          <p>Total: {total}</p>
          <p>Initial Payment: {initialPayment}</p>
        </div>

        <div className="book-card">
          <form onSubmit={ handleChange }>
            <p>Choose payment option </p>
            <label>
              <input
            type="radio"
            name="bank"
            value="CBE"
            onChange={handleChange}
            />{" "}CBE</label>
            <label><input
            type="radio"
            name="bank"
            value="Telebirr"
            checked={bank=== "Telebirr"}
            onChange={handleChange}
            />{" " } Telebirr</label>
            {bank === "CBE" && <>
                 <label>Accout Number</label>
          <input 
          type="text"
          value={acc}
          onChange={(e)=>setAcc(e.target.value)}
          placeholder="Enter Your Account Number"
        />
            </>}
        {bank === "Telebirr" && (<>
        <label>Reference Number</label>
          <input 
          type="text"
          value={refe}
          onChange={(e)=>setRefe(e.target.value)}
          placeholder="Enter Your Reference Number"
        />
        </>)}
            
      
          </form>
            <div className="book-btnn">
        <button className="book-btn1" onClick={handlePayment}>
          Pay Now
        </button>
        <button
          className="book-btn2"
          onClick={() => navigate(-1)} // Go back to room details
        >
          Cancel
        </button>
      </div>
        </div>
      </div>

      
    </div>
  );
}
