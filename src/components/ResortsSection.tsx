import Image from "next/image";

export default function ResortsSection() {
  return (
    <section className="resorts-section">
      <div className="resorts-container">
        <p className="resorts-subtitle">
          EDITOR'S PICKS
        </p>

        <h2 className="resorts-title">
          <span>Best</span> Resorts in Maldives
        </h2>

        <p className="resorts-description">
          Hand-picked luxury Maldives resorts that stand out for
          quality, value, or a unique experience. Updated regularly
          based on guest feedback and our latest reviews.
        </p>

        <div className="resorts-grid">

          {/* CARD 1 */}
          <div className="resort-card">
            <div className="image-container">
              <span className="save-badge">SAVE 37%</span>
              <Image
                src="/resorts3.jpg"
                alt="Anantara Kihavah"
                className="resort-image"
                width={400}
                height={250}
              />
            </div>

            <div className="resort-info">
              <div className="resort-header-row">
                <p className="resort-location">BAA</p>
                <p className="resort-stars">5 ★</p>
              </div>

              <h3>Anantara Kihavah</h3>

              <p className="resort-text">
                Inside the Baa Atoll UNESCO Biosphere Reserve,
                Anantara Kihavah combines one of the finest
                house reefs in the Maldives with an underwater...
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="resort-card">
            <div className="image-container">
              <Image
                src="/resorts1.jpg"
                alt="Soneva Fushi"
                className="resort-image"
                width={400}
                height={250}
              />
            </div>

            <div className="resort-info">
              <h3>Soneva Fushi</h3>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="resort-card">
            <div className="image-container">
              <span className="save-badge">SAVE 66%</span>
              <Image
                src="/resorts2.jpg"
                alt="Ayada"
                className="resort-image"
                width={400}
                height={250}
              />
            </div>

            <div className="resort-info">
              <h3>Ayada</h3>
            </div>
          </div>

        </div>

        <div className="view-all">
          VIEW ALL 134 RESORTS →
        </div>
      </div>
    </section>
  );
}