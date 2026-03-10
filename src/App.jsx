import React, { useState } from "react";
import moovitLogo from "./assets/moovit.jpg";
import grabLogo from "./assets/grab.jpg";
import boltLogo from "./assets/bolt.jpg";
import googleMapsLogo from "./assets/google-maps.jpg";
import centralMarketEntrance from "./assets/central-market-entrance.png";
import klccAvenueKMeetpoint from "./assets/klcc-avenue-k-meetpoint.png";

const sections = [
  { id: "overview", label: "1. Overview" },
  { id: "prep", label: "2. Before You Go" },
  { id: "travel", label: "3. Travel Plan" },
  { id: "itinerary", label: "4. Itinerary" },
  { id: "apps", label: "5. Apps & MRT" },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, sections.length - 1)));
  };

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <p className="eyebrow">National University of Malaysia</p>
          <h1>KL Day Trip Guide</h1>
        </div>
        <p className="trip-date">For incoming exchange students</p>
      </header>

      <main className="container">
        <nav className="tabs" aria-label="Trip sections">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`tab ${currentIndex === index ? "active" : ""}`}
              onClick={() => goTo(index)}
              aria-selected={currentIndex === index}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <section className={`panel ${currentIndex === 0 ? "active" : ""}`}>
          <h2>Trip Overview</h2>
          <p>
            Welcome to your first Kuala Lumpur day trip. This page gives you everything in one
            place: meeting info, route, what to bring, transport apps, and MRT + Touch &apos;n Go
            basics.
          </p>
          <div className="grid two-col">
            <article className="card">
              <h3>Quick Facts</h3>
              <ul>
                <li>
                  <strong>Trip type:</strong> 1-day city trip
                </li>
                <li>
                  <strong>Departure:</strong> KIZ lobby, UKM
                </li>
                <li>
                  <strong>Destination:</strong> Kuala Lumpur city center
                </li>
                <li>
                  <strong>Meet-up time:</strong> 9:15 am
                </li>
              </ul>
            </article>
            <article className="card">
              <h3>Important Reminder</h3>
              <p>
                Please arrive <strong>15 minutes early</strong>. We leave as a group so nobody gets
                left behind.
              </p>
              <p>Save this page on your phone home screen for quick access during the trip.</p>
            </article>
          </div>
        </section>

        <section className={`panel ${currentIndex === 1 ? "active" : ""}`}>
          <h2>Before You Go</h2>
          <div className="grid two-col">
            <article className="card">
              <h3>What To Bring</h3>
              <ul>
                <li>Passport copy or student ID</li>
                <li>Comfortable walking shoes</li>
                <li>Water bottle</li>
                <li>Small umbrella or light rain jacket</li>
                <li>Light, comfortable clothes</li>
                <li>Cap or hat (optional)</li>
                <li>Sunscreen (recommended)</li>
                <li>Portable charger + cable</li>
                <li>Cash (small notes) + card payment option</li>
              </ul>
            </article>
            <article className="card">
              <h3>Before Trip Checklist</h3>
              <p>Please prepare these essentials before the KL day trip:</p>
              <ul>
                <li>Comfortable shoes and light clothing</li>
                <li>Umbrella or raincoat</li>
                <li>Touch &apos;n Go card with at least RM10 balance</li>
                <li>Water bottle</li>
                <li>Charged phone and power bank</li>
                <li>Some cash for food and transport</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={`panel ${currentIndex === 2 ? "active" : ""}`}>
          <h2>How We Travel (UKM to KL)</h2>
          <div className="card">
            <h3>Recommended Group Route</h3>
            <ol>
              <li>Meet at KIZ lobby.</li>
              <li>Take shuttle bus / Grab to nearest train station (if needed).</li>
              <li>Use KTM/MRT toward central KL interchange.</li>
              <li>Transfer as needed and continue to city center stops.</li>
              <li>Walk short distances to each activity point.</li>
            </ol>
          </div>
        </section>

        <section className={`panel ${currentIndex === 3 ? "active" : ""}`}>
          <h2>Itinerary</h2>
          <p className="note">This schedule is set by organizers and will be updated by code only.</p>
          <div className="itinerary-table-wrap">
            <table className="itinerary-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Place</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Time">9:15 am</td>
                  <td data-label="Place">Gather at KIZ Lobby (College Ibu Zain, UKM)</td>
                </tr>
                <tr>
                  <td data-label="Time">9:40 am</td>
                  <td data-label="Place">Bus station (from UKM)</td>
                </tr>
                <tr>
                  <td data-label="Time">9:55 am</td>
                  <td data-label="Place">On bus</td>
                </tr>
                <tr>
                  <td data-label="Time">10:36 am</td>
                  <td data-label="Place">MRT Kajang</td>
                </tr>
                <tr>
                  <td data-label="Time">11:25 am</td>
                  <td data-label="Place">Pasar Seni (arrive and disembark)</td>
                </tr>
                <tr>
                  <td data-label="Time">11:30 am onwards</td>
                  <td data-label="Place">Pasar Seni area (lunch and sightseeing)</td>
                </tr>
                <tr>
                  <td data-label="Time">11:30 am - 2:00 pm</td>
                  <td data-label="Place">
                    <div className="place-links">
                      <span className="place-links-label">Pasar Seni options:</span>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Petaling+Street+Kuala+Lumpur"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Petaling Street
                      </a>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Central+Market+Kuala+Lumpur"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Central Market
                      </a>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Kwai+Chai+Hong+Kuala+Lumpur"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Kwai Chai Hong
                      </a>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=RexKL+Kuala+Lumpur"
                        target="_blank"
                        rel="noreferrer"
                      >
                        RexKL
                      </a>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Sri+Mahamariamman+Temple+Kuala+Lumpur"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sri Mahamariamman Temple
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Time">2:00 pm</td>
                  <td data-label="Place">
                    <div className="itinerary-place-detail">
                      <p>Pasar Seni meeting point: Central Market entrance (gather)</p>
                      <img
                        src={centralMarketEntrance}
                        alt="Central Market Pasar Seni entrance meeting point"
                        className="itinerary-place-image"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Time">2:15 pm</td>
                  <td data-label="Place">Depart Pasar Seni (train to KLCC)</td>
                </tr>
                <tr>
                  <td data-label="Time">2:35 pm</td>
                  <td data-label="Place">KLCC</td>
                </tr>
                <tr>
                  <td data-label="Time">4:00 pm</td>
                  <td data-label="Place">
                    <div className="itinerary-place-detail">
                      <p>KLCC LRT station at Avenue K (Basement Level) - gather</p>
                      <img
                        src={klccAvenueKMeetpoint}
                        alt="KLCC LRT station entrance at Avenue K meeting point"
                        className="itinerary-place-image"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Time">4:15 pm</td>
                  <td data-label="Place">Depart KLCC (LRT to MRT Merdeka)</td>
                </tr>
                <tr>
                  <td data-label="Time">~5:00 pm</td>
                  <td data-label="Place">MRT Merdeka Gate B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={`panel ${currentIndex === 4 ? "active" : ""}`}>
          <h2>Apps & Touch &apos;n Go / MRT Setup</h2>
          <div className="grid two-col app-section-grid">
            <article className="card">
              <h3>Install These Apps</h3>
              <div className="app-gallery">
                <figure className="app-item">
                  <img src={moovitLogo} alt="Moovit app icon" />
                  <figcaption>Moovit</figcaption>
                </figure>
                <figure className="app-item">
                  <img src={grabLogo} alt="Grab app icon" />
                  <figcaption>Grab</figcaption>
                </figure>
                <figure className="app-item">
                  <img src={boltLogo} alt="Bolt app icon" />
                  <figcaption>Bolt</figcaption>
                </figure>
                <figure className="app-item">
                  <img src={googleMapsLogo} alt="Google Maps app icon" />
                  <figcaption>Google Maps</figcaption>
                </figure>
              </div>
              <div className="app-quick-list">
                <div className="app-quick-item">
                  <strong>Moovit</strong>
                  <span>Public transport routes and timing</span>
                </div>
                <div className="app-quick-item">
                  <strong>Grab</strong>
                  <span>Ride-hailing and backup transport</span>
                </div>
                <div className="app-quick-item">
                  <strong>Bolt</strong>
                  <span>Alternative ride-hailing option</span>
                </div>
                <div className="app-quick-item">
                  <strong>Google Maps</strong>
                  <span>Pins and walking navigation</span>
                </div>
              </div>
            </article>
            <article className="card">
              <h3>Touch &apos;n Go + Rail Tips</h3>
              <ul>
                <li>MRT bus and buses other than the blue UKM bus usually only accept Touch &apos;n Go card payment.</li>
                <li>Card price is RM20 total: RM10 card + RM10 minimum load.</li>
                <li>
                  You can purchase via Touch &apos;n Go eWallet app (version 1.7.72 and above), official
                  TnG store in NU Sentral KL, or selected stores (7-Eleven, KK Mart, Petronas Seksyen 9,
                  Watsons, Mr. DIY / Mr. Dollar), and online (Shopee / Lazada).
                </li>
                <li>
                  Official enhance card outlet list:{" "}
                  <a href="https://www.touchngo.com.my/consumer/toll/card/enhance-card-outlet/" target="_blank" rel="noreferrer">
                    touchngo.com.my/consumer/toll/card/enhance-card-outlet
                  </a>
                </li>
              </ul>
            </article>
          </div>
          <div className="card">
            <h3>If You Cannot Get a Card</h3>
            <p>
              You can buy single-journey tickets or LRT/MRT tokens at the station. This works, but
              Touch &apos;n Go is still the easiest option for a full-day KL trip.
            </p>
          </div>
          <div className="card">
            <h3>Return to UKM (Self-Return Guide)</h3>
            <ul>
              <li>After MRT Merdeka, everyone returns to UKM by themselves.</li>
              <li>Use Moovit first for live directions if needed.</li>
              <li>If unsure, take MRT Merdeka directly to MRT Kajang (one direct route).</li>
              <li>From MRT Kajang, either book Grab/Bolt to KIZ hostel, or take bus T451.</li>
            </ul>
          </div>
          <div className="card">
            <h3>From UKM: How To Get a Touch &apos;n Go Card</h3>
            <ol>
              <li>Try nearby KK Mart / 7-Eleven / Watsons / Mr. DIY / petrol stations around UKM first.</li>
              <li>If unavailable, buy at NU Sentral official TnG store or listed enhance-card outlets in KL.</li>
              <li>Prepare RM20 (RM10 card + RM10 minimum load) before trip day.</li>
              <li>If card stock is finished, use station single-journey tickets or tokens for that day.</li>
            </ol>
            <p className="note">
              We will help each other check availability on the way, so do not panic if you cannot
              find one near campus.
            </p>
          </div>
        </section>

        <div className="actions">
          <button className="secondary" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0}>
            Previous
          </button>
          <button
            className="primary"
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === sections.length - 1}
          >
            Next
          </button>
        </div>
      </main>
      <div className="discreet-contact" aria-label="private contact">
        lakxhanaselvarajah@gmail.com
      </div>

    </>
  );
}
