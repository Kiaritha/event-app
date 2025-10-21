import { useLocation, useNavigate } from "react-router-dom";//useLocation helps me to retrieve the data that is passed on from the EventForm.jsx
import "./ConfirmationPage.css";

export default function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;//booking is the variable that now holds the data

  if (!booking) {  //incase there is no booking data
    return (
      <div className="confirmation-container">
        <h2>No booking data found.</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h2>🎉 Booking Confirmed!</h2>
      <p>Thank you, <strong>{booking.userName}</strong>!</p>
      <p>Here are your booking details:</p>

      <div className="details-card">
        <p><strong>Event:</strong> {booking.eventType}</p>
        <p><strong>Email:</strong> {booking.userEmail}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Time:</strong> {booking.time}</p>
        <p><strong>Location:</strong> {booking.location}</p>
        <p><strong>Expected Guests:</strong> {booking.people}</p>
        {booking.evSetting && <p><strong>Venue Type:</strong> {booking.evSetting}</p>}
        {booking.textarea && <p><strong>Additional Info:</strong> {booking.textarea}</p>}
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
