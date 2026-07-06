import Image from "next/image";

export default function GuidesSection() {
  return (
    <section className="guides-section">
      <div className="guides-container">
        <div className="guides-header">
          <div className="guides-line"></div>

          <p className="guides-subtitle">
            PLAN YOUR TRIP
          </p>

          <h2 className="guides-title">
            <span>Essential</span> Maldives Vacation Guides
          </h2>

          <p className="guides-description">
            Whether you're budgeting your first trip, chasing the best house reef,
            or wondering when to fly — these guides cover every angle with real
            resort data behind the advice.
          </p>
        </div>

        <div className="guides-grid">
          <div className="guide-card">
            <Image
              src="/upgraded-points-KVym2PAn1gA-unsplash.jpg"
              alt="Honeymoon Guide"
              width={300}
              height={200}
            />
            <h3>Honeymoon Guide</h3>
            <p>
              Top romantic resorts ranked, adults-only options, and real honeymoon budgets.
            </p>
          </div>

          <div className="guide-card">
            <Image
              src="/victoria-ballesteros-xsTqMVvStMA-unsplash.jpg"
              alt="Snorkeling Guide"
              width={300}
              height={200}
            />
            <h3>Snorkeling Guide</h3>
            <p>
              Every house reef rated and ranked — from manta rays to whale sharks.
            </p>
          </div>

          <div className="guide-card">
            <Image
              src="/moosa-haleem-kSslUrbE2Kc-unsplash.jpg"
              alt="Budget & Costs"
              width={300}
              height={200}
            />
            <h3>Budget & Costs</h3>
            <p>
              Real pricing — villa rates, transfers, meal plans, and sample trip budgets.
            </p>
          </div>

          <div className="guide-card">
            <Image
              src="/mike-swigunski-k9Zeq6EH_bk-unsplash.jpg"
              alt="Trip Planning"
              width={300}
              height={200}
            />
            <h3>Trip Planning</h3>
            <p>
              Best time to visit, transfer logistics, and how to choose your resort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}