export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-line"></div>

        <p className="why-subtitle">
          WHY LUX ATOLLS
        </p>

        <h2 className="why-title">
          <span>More Than</span> a Booking Site
        </h2>

        <div className="features-grid">
          {/* Feature 1: Honest Reviews */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>

            <h3>Honest Reviews</h3>

            <p>
              Every resort is independently reviewed with no paid
              rankings or sponsored placements.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              </svg>
            </div>

            <h3>Exclusive Packages</h3>

            <p>
              Book through us for complimentary upgrades and exclusive benefits.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              </svg>
            </div>

            <h3>Reef Ratings</h3>

            <p>
              Snorkeling and diving quality scored for every resort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}