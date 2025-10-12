import { useNavigate } from "react-router-dom";

export default function EvApp() {
  const navigate = useNavigate();

  return (
    <div className="Ev-app">
      <header>
        <div className="Business-name">
          <div className="h1"><h1>Wakashi's Emporium</h1></div> 
        </div>

        <div className="container">
          <div className="content">
            <div className="card" onClick={() => navigate("/form/birthday")}>
              <img src="/eventapp-birthday.jpg" alt="Birthday" />
              <p>Birthday party</p>
            </div>

            <div className="card" onClick={() => navigate("/form/garden-party")}>
              <img src="/eventapp-gardenparty.jpg" alt="Garden party" />
              <p>Garden party</p>
            </div>

            <div className="card" onClick={() => navigate("/form/wedding")}>
              <img src="/eventapp-wedding.jpg" alt="Wedding" />
              <p>Wedding</p>
            </div>

            <div className="card" onClick={() => navigate("/form/listening-party")}>
              <img src="/listening-party.jpg" alt="Listening party" />
              <p>Listening party</p>
            </div>

            <div className="card" onClick={() => navigate("/form/corporate")}>
              <img src="/corp.jpeg" alt="Corporate events" />
              <p>Corporate events</p>
            </div>
          </div>
        </div>
      </header>

      <button className="bk-ev" onClick={() => navigate("/book-event")}>
        Book your next event
      </button>
    </div>
  );
}
