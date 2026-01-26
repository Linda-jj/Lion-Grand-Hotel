import React from "react";
import "./../Header/Hearder.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Hearder() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        speed={1000}
        className="hero-swiper"
      >
        <SwiperSlide className="slide slide1">
          <div className="slide-title">
            <h2>Book Your Stay</h2>
            <p>
              Enjoy a cozy stay with modern <br />
              amenities, personalized service and the charm of local retreat.
              <br />
              Whether for a weekend getaway or a long vacation,
              <br />
              we make every moment special <span>FOR YOU!</span>
            </p>

            <span>
              <p>CALL NOW</p>
              <p>0923-829008</p>
              <p>OR</p>
            </span>
            <button>Check Availability</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide slide2">
          <div className="slide-title">
            <h2>Book Your Stay</h2>
            <p>
              Enjoy a cozy stay with modern <br />
              amenities, personalized service and the charm of local retreat.
              <br />
              Whether for a weekend getaway or a long vacation,
              <br />
              we make every moment special <span>FOR YOU!</span>
            </p>

            <span>
              <p>CALL NOW</p>
              <p>0923-829008</p>
              <p>OR</p>
            </span>
            <button>Check Availability</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide slide3">
          <div className="slide-title">
            <h2>Book Your Stay</h2>
            <p>
              Enjoy a cozy stay with modern <br />
              amenities, personalized service and the charm of local retreat.
              <br />
              Whether for a weekend getaway or a long vacation,
              <br />
              we make every moment special <span>FOR YOU!</span>
            </p>
            <span>
              <p>CALL NOW</p>
              <p>0923-829008</p>
              <p>OR</p>
            </span>

            <button>Check Availability</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
