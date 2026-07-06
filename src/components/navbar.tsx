import Link from "next/link";
import "./navbar.css";



export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-symbol">⋮</div>
        <div className="logo-text">
          <span className="lux">LUX</span>
          <span className="atolls">ATOLLS</span>
        </div>
      </div>

      <ul className="nav-links">
        {/* Resorts Dropdown */}
        <li className="dropdown">
          <span className="dropdown-trigger">
            RESORTS <span className="arrow">▼</span>
          </span>

          <div className="dropdown-menu resorts-menu">
            <div className="dropdown-column">
              <h4>BROWSE</h4>
              <a href="#">All Resorts (134)</a>
              <a href="#">Best Maldives Resorts</a>
              <a href="#">
                Hot Deals <span className="red-dot"></span>
              </a>

              <h4>BY ATOLL</h4>
              <a href="#">North Malé</a>
              <a href="#">South Malé</a>
              <a href="#">Baa</a>
              <a href="#">North Ari</a>
              <a href="#">South Ari</a>
              <a href="#">Lhaviyani</a>
              <a href="#" className="gold-link">
                All 20 atolls →
              </a>
            </div>

            <div className="dropdown-column">
              <h4>BY THEME</h4>
              <a href="#">All-Inclusive</a>
              <a href="#">Honeymoon</a>
              <a href="#">Family Vacation</a>
              <a href="#">Adults-Only</a>
              <a href="#">Overwater Bungalows</a>
              <a href="#">Private Pool Villas</a>
              <a href="#">Snorkeling</a>
              <a href="#">Diving</a>
              <a href="#">Groups & Weddings</a>
            </div>

            <div className="dropdown-column">
              <h4>BY BRAND</h4>
              <a href="#">Four Seasons</a>
              <a href="#">Marriott Group</a>
              <a href="#">Hilton Group</a>
              <a href="#">Anantara</a>
              <a href="#">Soneva</a>
              <a href="#">Six Senses</a>
              <a href="#">IHG</a>
              <a href="#">Accor</a>
            </div>
          </div>
        </li>

        {/* Plan Dropdown */}
        <li className="dropdown">
          <span className="dropdown-trigger">
            PLAN <span className="arrow">▼</span>
          </span>

          <div className="dropdown-menu planning-menu">
            <a href="#">TRIP PLANNING</a>
            <a href="#">RESORT FINDER</a>
            <a href="#">MALDIVES MAP</a>
            <a href="#">BEST TIME TO VISIT</a>
            <a href="#">HOW TO GET THERE</a>
            <a href="#">BUDGET & COSTS</a>
            <a href="#">HOW WE RATE</a>
          </div>
        </li>

        <li className="deals">
          DEALS <span className="red-dot"></span>
        </li>
      </ul>

      {/* GET A QUOTE BUTTON */}
      <Link href="/quote">
        <button className="quote-btn">GET A QUOTE</button>
      </Link>
    </nav>
  );
}