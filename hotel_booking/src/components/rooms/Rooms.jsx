import { useEffect, useState } from "react";
import axios from "axios";
import "./../rooms/Rooms.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Rooms() {
  return (
    <div className="rooms-box">
      <div className="rooms-title">
        <h3>COME AND ENJOY</h3>
        <h1>Choose your perfect Room & Suites</h1>
        <div>
          <h1> Rooms and Suites </h1>
          <p>
            Our luxury rooms and suites are thoughtfully designed to offer an
            atmosphere of refined comfort and timeless elegance. Each space
            blends modern sophistication with subtle cultural accents, creating
            a serene retreat for discerning travelers. From plush bedding and
            spacious layouts to panoramic views and curated interiors, every
            detail is crafted to elevate your stay.
          </p>
        </div>
      </div>
      <div className="rooms-continer">
        <div className="room">
          <img src="/pic/pexels-pixabay-164595.jpg" />
          <div className="des-one">
            <div className="price-box">
              <p>$290 /per Night</p>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <hr />
            </div>
            <h3>Deluxe Family Room</h3>
            <div className="description">
              <div className="description-detile">
                <p>pick & Drop Service</p>
                <p>Swimming Pool</p>
              </div>
              <div className="description-detile">
                <p>City Tour Guide</p>
                <p>Fibre Internet</p>
              </div>
            </div>
            <div className="description-2">
              <p>
                Expeience A Serene stay in Our Beautifully Designed Deluxe Room
              </p>
            </div>
            <button className="nav-btnn">
              BOOK NOW <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </div>
        <div className="room">
          <img src="\pic\image.png" />
          <div className="des-one">
            <div className="price-box">
              <p>$350 /per Night</p>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <hr />
              <div className="hover-box">
                <img
                  src="\pic\luxury-hotel-bedroom-night-city-view-358653736.webp"
                  alt="room"
                  className="hover-img"
                />
              </div>
            </div>
            <h3>Exclusive Deluxe Room</h3>
            <div className="description">
              <div className="description-detile">
                <p>pick & Drop Service</p>
                <p>Swimming Pool</p>
              </div>
              <div className="description-detile">
                <p>City Tour Guide</p>
                <p>Fibre Internet</p>
              </div>
            </div>
            <div className="description-2">
              <p>
                Expeience A Serene stay in Our Beautifully Designed Deluxe Room
              </p>
            </div>
            <button className="nav-btnn">
              BOOK NOW <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </div>
        <div className="room">
          <img src="/pic/648c6fbc2b4da9c936d70d0468d6d880.jpg" />
          <div className="des-one">
            <div className="price-box">
              <p>$490 /per Night</p>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <hr />
            </div>
            <h3>Indusrty Experience Room</h3>
            <div className="description">
              <div className="description-detile">
                <p>pick & Drop Service</p>
                <p>Swimming Pool</p>
              </div>
              <div className="description-detile">
                <p>City Tour Guide</p>
                <p>Fibre Internet</p>
              </div>
            </div>
            <div className="description-2">
              <p>
                Expeience A Serene stay in Our Beautifully Designed Deluxe Room
              </p>
            </div>
            <button className="nav-btnn">
              BOOK NOW <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </div>
        <div className="room">
          <img src="/pic/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png" />
          <div className="des-one">
            <div className="price-box">
              <p>$ 690 /per Night</p>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <hr />
            </div>
            <h3>Luxury Signature Suite </h3>
            <div className="description">
              <div className="description-detile">
                <p>pick & Drop Service</p>
                <p>Swimming Pool</p>
              </div>
              <div className="description-detile">
                <p>City Tour Guide</p>
                <p>Fibre Internet</p>
              </div>
            </div>
            <div className="description-2">
              <p>
                Expeience A Serene stay in Our Beautifully Designed Deluxe Room
              </p>
            </div>
            <button className="nav-btnn">
              BOOK NOW <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
