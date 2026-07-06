import Image from "next/image";

export default function CoverageSection() {
  return (
    <section className="coverage-section">
      <div className="coverage-container">
        <div className="coverage-left">
          <Image
            src="/detail compared.PNG"
            alt="coverage"
            width={500}
            height={400}
          />
        </div>

        <div className="coverage-right">
          <div className="coverage-small-line"></div>

          <p className="coverage-subtitle">
            WHAT WE COVER
          </p>

          <h2 className="coverage-title">
            Every Detail, <span>Compared</span>
          </h2>

          <div className="coverage-item">
            <h4>Villa Breakdowns</h4>
            <p>
              Sizes, pool vs non-pool, and actual pricing by category.
            </p>
          </div>

          <div className="coverage-divider"></div>

          <div className="coverage-item">
            <h4>House Reef Ratings</h4>
            <p>
              Snorkeling quality scored for every resort — not just the highlights.
            </p>
          </div>

          <div className="coverage-divider"></div>

          <div className="coverage-item">
            <h4>Meal Plan Analysis</h4>
            <p>
              What’s truly included and what costs extra at each tier.
            </p>
          </div>

          <div className="coverage-divider"></div>

          <div className="coverage-item">
            <h4>Transfer Details</h4>
            <p>
              Seaplane, speedboat, or domestic flight — with real prices.
            </p>
          </div>

          <button className="coverage-btn">
            BROWSE RESORTS
          </button>
        </div>
      </div>
    </section>
  );
}