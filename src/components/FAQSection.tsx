import Link from "next/link";

export default function FaqSection() {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-line"></div>

        <p className="faq-subtitle">COMMON QUESTIONS</p>

        <h2 className="faq-title">
          Maldives Resort <span className="italic-accent">FAQ</span>
        </h2>

        <p className="faq-description">
          The most common questions from travellers planning their first — or next —
          Maldives trip, answered with data from real resort comparisons.
        </p>

        <div className="faq-list">
          <div className="faq-item">
            <h3>How do I choose the right Maldives resort?</h3>
            <p>
              Start with your priorities — budget, reef quality, seclusion, or dining variety —
              then narrow by atoll and transfer type. Our{" "}
              <Link href="#" className="faq-link">
                resort comparison pages
              </Link>{" "}
              break down every property by villa categories, meal plans, reef ratings,
              and guest sentiment so you can compare side by side.
            </p>
          </div>

          <div className="faq-item">
            <h3>How much does a Maldives holiday cost?</h3>
            <p>
              A week in the Maldives typically costs $3,000–$18,000+ per couple depending
              on the resort tier. Entry-level four-star resorts start around $250/night,
              while ultra-luxury properties exceed $2,000/night. Transfers, meal plans,
              and excursions add 20–40% on top. See our{" "}
              <Link href="#" className="faq-link">
                full budget breakdown
              </Link>{" "}
              for real pricing data.
            </p>
          </div>

          <div className="faq-item">
            <h3>When is the best time to visit the Maldives?</h3>
            <p>
              The dry season (December–April) offers the most reliable weather, but also
              the highest prices. Shoulder months — May and November — balance good weather
              with lower rates.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are the Maldives worth the money?</h3>
            <p>
              For many travellers, yes — the combination of private-island seclusion,
              world-class reefs, and overwater living is genuinely unique.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need a visa to visit the Maldives?</h3>
            <p>
              Most nationalities receive a free 30-day visa on arrival in the Maldives.
              You need a valid passport (6+ months), a confirmed resort booking, and a
              return ticket.
            </p>
          </div>

          <div className="faq-item">
            <h3>How do I get to my resort from Malé airport?</h3>
            <p>
              It depends on the resort's location. Nearby atolls use speedboats,
              while more distant resorts require seaplane transfers or domestic flights.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can you snorkel at every Maldives resort?</h3>
            <p>
              Most resorts offer snorkeling, but house reef quality varies enormously.
              We rate every resort's reef independently.
            </p>
          </div>

          <div className="faq-item">
            <h3>What's included in a Maldives resort package?</h3>
            <p>
              Standard packages include accommodation and the meal plan you select.
              Transfers, excursions, spa treatments, and premium drinks are usually extra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}