import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EventForm.css";

export default function EventForm() {
  const { eventType } = useParams();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [evSetting, setEvSetting] = useState("Outdoor");
  const [textarea, setTextarea] = useState("");
  const [people, setPeople] = useState(0);
  const [imageFile, setImageFile] = useState({
    image1: null,
    image2: null,
    image3: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {//added a navigation to the handle submit
    e.preventDefault();
    const bookingData = {
      eventType:eventType.replace("_", ""),
      ...inputs,
      evSetting,
      textarea,
      people,
      imageFile,
    };
    navigate("/confirmation", {state:bookingData});//used this to pass booking data to the next page which is the Confirmation page 
  };

  const handleDrop = (e, key) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImageFile((prev) => ({ ...prev, [key]: file }));
  };

  const handleDragOver = (e) => e.preventDefault();


  const renderEventSpecificFields = () => {
    switch (eventType) {
      case "wedding":
        return (
          <>
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
              Venue type:
              <select
                value={evSetting}
                onChange={(e) => setEvSetting(e.target.value)}
              >
                <option value="Outdoor">Outdoor</option>
                <option value="Indoor">Indoor</option>
              </select>
            </label><br />
            <label>
              Venue:
              <input
                type="text"
                name="venue"
                value={inputs.venue || ""}
                onChange={handleChange}
              />
            </label>
          </>
        );

      case "corporate":
        return (
          <>
            <label>
              Company name:
              <input
                type="text"
                name="company"
                value={inputs.company || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Department or team:
              <input
                type="text"
                name="department"
                value={inputs.department || ""}
                onChange={handleChange}
              />
            </label>
          </>
        );

      case "birthday":
        return (
          <>
            <label>
              Celebrant’s age:
              <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Type of cake or theme:
              <input
                type="text"
                name="cakeTheme"
                value={inputs.cakeTheme || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Prefered baker (Can be provided if none):
              <input
                type="text"
                name="baker"
                value={inputs.baker || ""}
                onChange={handleChange}
              />
            </label><br />

            <label>
              Menu:
              <input 
              type="text"
              name="foodOptions"
              value={inputs.foodOptions}
              onChange={handleChange}
           />
              </label>

              <label>
              Preferred caterer(can be provided):
              <input 
              type="text"
              name="caterer"
              value={inputs.caterer}
              onChange={handleChange}
           />
              </label>
          </>
        );

      case "garden-party":
        return (
          <>
            <label>
              Type of setup:
              <input
                type="text"
                name="setupType"
                value={inputs.setupType || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Preferred music type:
              <input
                type="text"
                name="musicType"
                value={inputs.musicType || ""}
                onChange={handleChange}
              />
            </label>
          </>
        );

         case "babyShower":
        return (
          <>
            <label>
              Type of setup:
              <input
                type="text"
                name="setupType"
                value={inputs.setupType || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Theme colours
              <input
                type="text"
                name="themeColours"
                value={inputs.themeColours || ""}
                onChange={handleChange}
              />
            </label>
          </>
        );


      case "listening-party":
        return (
          <>
            <label>
              Artist/Album Name:
              <input
                type="text"
                name="album"
                value={inputs.album || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Genre:
              <input
                type="text"
                name="genre"
                value={inputs.genre || ""}
                onChange={handleChange}
              />
            </label>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h2>Book a {eventType.replace("-", " ")}!</h2>

      <form onSubmit={handleSubmit}>
    
        <label>
          Enter your name:
          <input
            type="text"
            required
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
            required
            name="userEmail"
            value={inputs.userEmail || ""}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Event date:
          <input
            type="date"
            required
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

         <label>
          Event commencement  Time:
          <input
            type="time"
            required
            name="time"
            value={inputs.time || ""}
            onChange={handleChange}
          />
        </label>
        <br />


        <label>
          Event location:
          <input
            type="text"
            required
            name="location"
            value={inputs.location || ""}
            onChange={handleChange}
          />
        </label>
        <br />

        {renderEventSpecificFields()}
        <br />

        <div style={{ position: "relative", width: "300px", marginTop: "20px" }}>
          <label>
            Expected number of guests: {people}
            <input
              type="range"
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
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              transition: "left 0.2s ease-out",
            }}
          >
            {people}
          </div>
        </div>

        <br />

        <h3><u>Please use this section to tick off some of the items you may need for your event</u></h3>
        <label>
            Check necessary items:
            <br />
            Flowers
            <input
            type="checkbox"
            name="flowers"
            value={inputs.flowers}
            onChange={handleChange}
               />
        </label>
                <br />
        <label>
          Balloons:
          <input
          type="checkbox"
          name="Balloons"
          value={inputs.balloons}
          obChange={handleChange}
          />
        </label>
                <br />
        <label>
          Tents:
          <input
          type="checkbox"
          name="Tents"
          value={inputs.Tents}
          onChange={handleChange}
          />
        </label>
                <br />
        <label>
          Sound and public address system:
          <input
          type="checkbox"
          name="sound"
          value={inputs.sound}
          onChange={handleChange}
          />
        </label>
                 <br />
        <label>
          Banners:
          <input
          type="checkbox"
          name="banners"
          value={inputs.banners}
          onChange={handleChange}
          />
        </label>
                 <br />
        <label>
          Drapes:
          <input
          type="checkbox"
          name="drapes"
          value={inputs.drapes}
          onChange={handleChange}
          />
        </label>
                <br />
        <label>
          Stands and backdrops:
          <input
          type="checkbox"
          name="stands"
          value={inputs.stands}
          onChange={handleChange}
          />
        </label>
               <br/>
                    <br/>
       <label>
          Additional information:(give as much detail as you can)
          <br />
          <textarea
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </label>
  
        <br />

        
        <p>Insert your Pinterest inspiration pictures here</p>
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

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
