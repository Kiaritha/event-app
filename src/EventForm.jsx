import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EventForm.css";

export default function EventForm() {
  const { eventType } = useParams();
  const [inputs, setInputs] = useState({});
  const [evSetting, setEvSetting] = useState("Outdoor");
  const [textarea, setTextarea] = useState("");
  const [imageFile, setImageFile] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [people, setPeople] = useState(0);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted!");
  };

  const handleDrop = (e, imageKey) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setImageFile((prev) => ({ ...prev, [imageKey]: droppedFile }));
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="form-container">
      <h2>Book a {eventType.replace("-", " ")}!</h2>
      {eventType === "wedding" && (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              name="userName"
              value={inputs.userName || ""}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              name="userEmail"
              value={inputs.userEmail || ""}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Type of event:
            <input
              type="text"
              name="type"
              value={inputs.type || ""}
              onChange={handleChange}
            />
          </label>
          <br />

          <img
            src="/purple_flower.jpg"
            alt="purple-flower"
            className="purple-flower"
          />

          <label>
            Theme colours:
            <input
              type="text"
              name="colours"
              value={inputs.colours || ""}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Where is your event going to be?
            <select
              value={evSetting}
              onChange={(e) => setEvSetting(e.target.value)}
            >
              <option value="Outdoor">Outdoor</option>
              <option value="Indoor">Indoor</option>
            </select>
          </label>
          <br />

          <img
            src="/mauve_flower.jpg"
            alt="mauve-flower"
            className="mauve-flower"
          />

          {/* People slider */}
          <div style={{ position: "relative", width: "300px", marginTop: "40px" }}>
            <label>
              Number of people in your event: {people}
              <input
                type="range"
                className="pple"
                name="pple"
                min="0"
                max="1000"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </label>

            <div
              style={{
                position: "absolute",
                left: `${(people / 1000) * 100}%`,
                transform: "translateX(-50%)",
                top: "-25px",
                background: "#eee",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "0.8rem",
                pointerEvents: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                transition: "left 0.2s ease-out",
              }}
            >
              {people}
            </div>
          </div>
          <br />

          <label>
            Additional information:
            <textarea
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            />
          </label>
          <br />

          <p>Insert your Pinterest inspiration pictures here</p>

          {/* Drag and Drop Boxes */}
          <div className="drag-and-drop">
            {["image1", "image2", "image3"].map((key) => (
              <div
                key={key}
                style={{
                  border: "2px dashed black",
                  width: "100px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "orange",
                  margin: "20px",
                }}
                onDrop={(e) => handleDrop(e, key)}
                onDragOver={handleDragOver}
              >
                {imageFile[key] ? (
                  <div>
                    <p>✓</p>
                    {imageFile[key].type.startsWith("image") && (
                      <img
                        src={URL.createObjectURL(imageFile[key])}
                        alt="preview"
                        style={{
                          width: "90px",
                          height: "55px",
                          marginTop: "2px",
                        }}
                      />
                    )}
                  </div>
                ) : (
                  <p>+</p>
                )}
              </div>
            ))}
          </div>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      )}

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
