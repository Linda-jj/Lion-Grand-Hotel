import "./GustesReview.css";

export default function GusestsReview() {
  return (
    <div className="section">
      <h2>Guest Reviews</h2>
      <p>
        Our guests speak for us. Find out what those who have experienced [hotel
        name] have to say.
      </p>

      <div className="reviews-container">
        <div className="review-card">
          <img src="/pic/bbbb.jpg" alt="guest" />
          <div className="review-box">
            <p>
              Incredible experience. Comfortable room, spectacular views and
              delicious breakfast.
            </p>
            <span className="rating">5 ★</span>
          </div>
        </div>

        <div className="review-card">
          <img src="/pic/aaaa.jpg" alt="guest" />
          <div className="review-box">
            <p>
              The private terrace and spa made my trip unforgettable. Perfect
              location.
            </p>
            <span className="rating">5 ★</span>
          </div>
        </div>

        <div className="review-card">
          <img src="/pic/100.jpg" alt="guest" />
          <div className="review-box">
            <p>Fast WiFi and a spectacular rooftop. Great for work and rest.</p>
            <span className="rating">5 ★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
