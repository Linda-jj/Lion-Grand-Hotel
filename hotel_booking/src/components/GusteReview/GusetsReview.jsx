import { useState } from "react";
import "../GusteReview/GustesReview.css";

import ReactPaginate from "react-paginate";

export default function GusestsReview() {
const[card,setCard]=useState(0)

const handlecardChange=(e)=>{
  setCard(e.selected)
}
  return (
    <div className="section-gus">
      <h2>Guest Reviews</h2>
      <p>
        Our guests speak for us. Find out what those who have experienced<span> Lion of Sheba grand Hotel </span>have to say.
      </p>

      <div className="reviews-container">
        {card ===0 && (
           <>
  <div className="review-card">
          <img src="/pic/alahudin.jpg" alt="guest" />
          <div className="review-box">
            <p>
              Incredible experience. Comfortable room, spectacular views and
              delicious breakfast.
            </p>
            <span className="rating">★★★★★</span>
        
          </div>
        </div>
         <div className="review-card">
          <img src="/pic/danu.jpg" alt="guest" />
          <div className="review-box">
            <p>Fast WiFi and a spectacular rooftop. Great for work and rest.</p>
            <span className="rating">★★★★★</span>
          </div>
        </div>

 <div className="review-card">
          <img src="/pic/fenane.jpg" alt="guest" />
          <div className="review-box">
            <p>
              Incredible experience. Comfortable room, spectacular views and
              delicious breakfast.
            </p>
            <span className="rating">★★★★★</span>
        
          </div>
        </div>
            
         <div className="review-card">
          <img src="/pic/teddy.jpg" alt="guest" />
          <div className="review-box">
            <p>Fast WiFi and a spectacular rooftop. Great for work and rest.</p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
       </>
        )}
      
    {card === 1 && (
      <>
       <div className="review-card">
          <img src="/pic/Liya_Kebede_66eme_Festival_de_Venise_Mostra-1.webp" alt="guest" />
          <div className="review-box">
            <p>
              The private terrace and spa made my trip unforgettable. Perfect
              location.
            </p>
             <span className="rating">★★★★★</span>
          </div>
        </div>

          <div className="review-card">
          <img src="/pic/Samuel-Tafesse.jpg" alt="guest" />
          <div className="review-box">
            <p>Fast WiFi and a spectacular rooftop. Great for work and rest.</p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
         <div className="review-card">
          <img src="/pic/Marcus.webp" alt="guest" />
          <div className="review-box">
            <p>Fast WiFi and a spectacular rooftop. Great for work and rest.</p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
        <div className="review-card">
          <img src="/pic/selam.jpg" alt="guest" />
          <div className="review-box">
            <p>Fast WiFi and a spectacular rooftop. Great for work and rest.</p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
      </>
    )}  
       
      </div>
         <ReactPaginate
        pageCount={2}
        onPageChange={handlecardChange}
        previousLabel="<<"
        nextLabel=">>"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}
