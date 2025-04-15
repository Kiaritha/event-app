import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EventForm.css'

export default function EventForm() {
    const [inputs, setInputs] = useState({});
    const [evSetting, setEvSetting] = useState("Outdoor");
    const [textarea, setTextarea] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted!");
    };

    return (
    
             <div style={{ backgroundImage: `url('/backgroundevent.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

        <div className="event-form">
            <h2>Book Your Event</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type="text" name="userName" value={inputs.userName || ""} onChange={handleChange} />
                </label>
                <br />

                <label>
                    Email:
                    <input type="email" name="userEmail" value={inputs.userEmail || ""} onChange={handleChange} />
                </label>
                <br />

                <label>
                    Type of event:
                    <input type="text" name="type" value={inputs.type || ""} onChange={handleChange} />
                </label>
                <br />

                <label>
                    Theme colours:
                    <input type="text" name="colours" value={inputs.colours || ""} onChange={handleChange} />
                </label>
                <br />

                <label>
                    Where is your event going to be?
                    <select value={evSetting} onChange={(e) => setEvSetting(e.target.value)}>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Indoor">Indoor</option>
                    </select>
                </label>
                <br />

                <label>
                    Additional information:
                    <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} />
                </label>
                <br />

                <button className="submit" type="submit">Submit</button>
            </form>

            <button className="back-btn" onClick={() => navigate("/")}>
                Back to Home
            </button>
        </div>
        </div>
      

    );
}
