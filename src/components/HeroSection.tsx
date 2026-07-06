export default function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <div className="top-line"></div>

        <p className="sub-heading">
          INDEPENDENT MALDIVES RESORT COMPARISON
        </p>

        <h1 className="hero-title">
          Your Maldives,
          <span> Decoded</span>
        </h1>

        <p className="hero-description">
          Planning a Maldives vacation? Compare 134 Maldives resorts
          with honest reviews, villa breakdowns, reef ratings, and
          exclusive packages across 20 atolls.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            EXPLORE ALL RESORTS
          </button>

          <button className="secondary-btn">
            BROWSE BY ATOLL →
          </button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <h2>134</h2>
          <p>RESORTS</p>
        </div>

        <div className="stat">
          <h2>20</h2>
          <p>ATOLLS</p>
        </div>

        <div className="stat">
          <h2>100%</h2>
          <p>INDEPENDENT</p>
        </div>
      </div>
    </section>
  );
}