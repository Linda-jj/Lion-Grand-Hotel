import React from "react";
import "./../Activity/Activity.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Activity() {
  const services = [
    {
      title: "Buffet breakfast included",
      img: "https://media.istockphoto.com/id/1772714735/photo/breakfast-coffee-table.jpg?s=612x612&w=0&k=20&c=UccpfNVfmz2r7xDYmtZbrPhK66RdACJjoPmkOYZt2NI=",
    },
    {
      title: "Pool & Spa",
      img: "https://dreamlandadventuretourism.com/wp-content/uploads/2024/11/Indoor-swimming-pools-Dubai.jpg",
    },
    {
      title: "Private parking",
      img: "https://www.shutterstock.com/image-photo/private-parking-campers-luxurious-underground-600w-2676748131.jpg",
    },
    {
      title: "High-speed WiFi",
      img: "https://www.shutterstock.com/image-photo/closeup-view-connecting-smartphone-hotel-260nw-2212435985.jpg",
    },
    {
      title: "Gym",
      img: "https://c8.alamy.com/comp/2M7W7TG/inteiror-view-of-a-luxury-hotel-gym-fitness-center-in-located-in-phu-quoc-vietnam-2M7W7TG.jpg",
    },
    {
      title: "Transfer to the airport",
      img: "https://www.shutterstock.com/image-photo/travel-by-plane-woman-passenger-600nw-2467550689.jpg",
    },
  ];

  return (
    <div className="servicesContainer">
      <h1>Exclusive Services</h1>
      <p>
        Much more than a stay: a complete experience. Enjoy our services
        designed to make your trip even more special.
      </p>

      <div className="servicesGrid">
        {services.map((s, index) => (
          <div key={index} className="serviceCard">
            <img  className="img-activity"src={s.img} alt={s.title} />
            <p>{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
