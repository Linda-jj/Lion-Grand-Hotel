import React, { useState } from "react";
import "./../contact/Contact.css";
import { FaRegMap } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
export default function Contact() {
  const [fullName,setFullName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [text,setText]=useState("")

   const handlesubmit=  (e) => {
    e.preventDefault();
    alert("Your Message submited Successfully")
  
  }
  return (
    <div className="contact-box">
      <h1>CONTACT US </h1>
      <div className="contact-continer">
        <div className="contact-card">
          <FaRegMap size={40} />
          <p>
            <span>ADDRESS</span>
            <br />
            Lion of Sheba Grand Hotel <br />
            Addis Ababa 1000
          </p>
        </div>
        <div className="contact-card">
          <GiRotaryPhone size={40} />
          <p>
            <span>PHONE </span>
            <br />
            24/7 Reservation via
            <br />
            p.+2519 450 833 16
          </p>
        </div>
        <div className="contact-card">
          <AiOutlineMail size={40} />
          <p>
            <span>E-MAIL</span>
            <br />
            24/7 Reservation Via Email
            <br />
            reservation@liongranhotel.com
            <br />
            (Reception Service Desk)
          </p>
        </div>
      </div>

      <div className="img-contact">
        <div className="img-txt">
          <p>
            The most luxurious and the largest hotel in Ethiopia located at the
            heart of Africa’s diplomatic hub Addis Ababa.the luxurious hotel
            awaits you for your leisure and business needs.
          </p>
          <form onSubmit={handlesubmit}>
            <label>Full Name <span>*</span></label>
            <input
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            type="text"
            required
            
            />
               <label>Email Address<span>*</span></label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            required
            />
                  <label>Phone Number<span>*</span></label>
            <input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            type="number"
            required
            />
            <label>Your Message</label>
            <textarea 
            value={text}
            type="text"
            onChange={(e)=>setText(e.target.value)}
            required
            />
          <button type="submit">Submit</button>
          </form>

        </div>
        <img
          src="/pic/google-maps-fake-listings-1024x576.jpg"
          alt="location of Lion of Sheba grand Hotel"
        />
      </div>
    </div>
  );
}
