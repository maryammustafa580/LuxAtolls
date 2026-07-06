import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>
              <span>LUX</span>
              <br />
              ATOLLS
            </h2>
          </div>

          <div className="footer-column">
            <h4>RESORTS</h4>

            <a href="#">All Resorts</a>
            <a href="#">Best Maldives Resorts</a>
            <a href="#">All-Inclusive</a>
            <a href="#">Honeymoon</a>
            <a href="#">Adults-Only</a>
            <a href="#">Family Vacation</a>
            <a href="#">Overwater Bungalows</a>
            <a href="#">Group Bookings & Weddings</a>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>

            <a href="#">About</a>
            <a href="#">Journal</a>
            <a href="#">How We Rate</a>
            <a href="#">Booking Process</a>
            <a href="#">Press</a>
            <a href="#">Pricing Index</a>
          </div>

          <div className="footer-column">
            <h4>PLAN YOUR TRIP</h4>

            <a href="#">Trip Planning</a>
            <a href="#">Atolls Guide</a>
            <a href="#">Snorkeling Guide</a>
            <a href="#">Budget & Costs</a>
            <a href="#">How to Get There</a>
            <a href="#">Best Time to Visit</a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-contact">
            hello@luxatolls.com
          </div>

          <div className="footer-badge">
            <div className="badge-box">
              ATAS / AFTA
            </div>

            <span>
              Bookings with ATAS/AFTA partners.
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms & Conditions</a>
          </div>

          <p>
            © 2026 LuxAtolls.com — Independent Maldives resort comparison
            and booking.
          </p>
        </div>
      </div>
    </footer>
  );
}