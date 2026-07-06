export default function RequestQuote() {
  return (
    <section className="quote-section">
      <div className="quote-header">
        <h1>Request a Quote</h1>

        <p>
          Tell us about your dream Maldives trip and we'll build a
          personalised package with exclusive rates and inclusions.
        </p>

        <a href="#">
          See how the booking process works
        </a>
      </div>

      <div className="quote-form-container">
        <form className="quote-form">

          <div className="form-group">
            <label>
              RESORT <span>(optional)</span>
            </label>

            <input
              type="text"
              placeholder="e.g. Baros Maldives — or leave blank"
            />
          </div>

          <p className="helper-text">
            Not sure which resort yet? Leave this blank and tell us about your trip below.
          </p>

          <div className="form-row">
            <div className="form-group">
              <label>YOUR NAME</label>
              <input type="text" placeholder="Full name" />
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>CHECK-IN</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>CHECK-OUT</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>ADULTS</label>

              <select>
                <option>2 Adults</option>
                <option>1 Adult</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>

            <div className="form-group">
              <label>CHILDREN</label>

              <select>
                <option>No children</option>
                <option>1 Child</option>
                <option>2 Children</option>
                <option>3 Children</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>
              PREFERRED ROOM TYPE <span>(optional)</span>
            </label>

            <input
              type="text"
              placeholder="e.g. Beach Villa, Overwater Bungalow"
            />
          </div>

          <div className="form-group">
            <label>
              OCCASION <span>(optional)</span>
            </label>

            <select>
              <option>Select...</option>
              <option>Honeymoon</option>
              <option>Anniversary</option>
              <option>Family Trip</option>
              <option>Birthday</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              BUDGET PER PERSON <span>(optional)</span>
            </label>

            <input
              type="text"
              placeholder="e.g. $5,000 per person"
            />
          </div>

          <div className="form-group">
            <label>
              PREFERRED MEAL PLAN <span>(optional)</span>
            </label>

            <select>
              <option>Select...</option>
              <option>Breakfast Only</option>
              <option>Half Board</option>
              <option>Full Board</option>
              <option>All Inclusive</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              TELL US MORE <span>(optional)</span>
            </label>

            <textarea
              rows={5}
              placeholder="Meal plan, special occasions, anything else we should know..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            SEND QUOTE REQUEST
          </button>

          <p className="response-text">
            We typically respond within 24 hours with a personalised proposal.
          </p>
        </form>
      </div>
    </section>
  );
}