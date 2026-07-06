import Image from "next/image";

export default function AtollsSection() {
  return (
    <section className="atolls-section">
      <div className="atolls-container">
        <div className="atolls-line"></div>

        <p className="atolls-subtitle">
          EXPLORE BY ATOLL
        </p>

        <h2 className="atolls-title">
          20 Atolls,
          <span> Each Unique</span>
        </h2>

        <p className="atolls-description">
          From the easiest-access resorts of North Malé
          to the whale shark highways of South Ari.
        </p>

        <div className="atolls-grid">
          <div className="atoll-card">
            <Image
              src="/atoll1.jpg"
              alt="North Male"
              className="atoll-image"
              width={300}
              height={200}
            />
            <div className="atoll-overlay">
              <p>EASIEST ACCESS</p>
              <h3>North Malé</h3>
              <span>29 RESORTS</span>
            </div>
          </div>

          <div className="atoll-card">
            <Image
              src="/atoll2.jpg"
              alt="Baa"
              className="atoll-image"
              width={300}
              height={200}
            />
            <div className="atoll-overlay">
              <p>UNESCO BIOSPHERE</p>
              <h3>Baa</h3>
              <span>15 RESORTS</span>
            </div>
          </div>

          <div className="atoll-card">
            <Image
              src="/atoll3.jpg"
              alt="South Ari"
              className="atoll-image"
              width={300}
              height={200}
            />
            <div className="atoll-overlay">
              <p>WHALE SHARKS</p>
              <h3>South Ari</h3>
              <span>11 RESORTS</span>
            </div>
          </div>

          <div className="atoll-card">
            <Image
              src="/atoll4.jpg"
              alt="Noonu"
              className="atoll-image"
              width={300}
              height={200}
            />
            <div className="atoll-overlay">
              <p>ULTRA-LUXURY</p>
              <h3>Noonu</h3>
              <span>6 RESORTS</span>
            </div>
          </div>
        </div>

        <div className="view-atolls">
          VIEW ALL 20 ATOLLS →
        </div>
      </div>
    </section>
  );
}