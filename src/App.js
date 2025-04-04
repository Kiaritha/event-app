import { useState } from "react";
import './Event.css'

export default function EvApp() {
    const [inputs, setInputs] = useState({});
    const [evSetting, setEvSetting] = useState("Outdoor");
    const [textarea, setTextarea] = useState("");
    const [imageFile, setImageFile] = useState({
        image1: null,
        image2: null,
        image3:null
    }
    );

    const handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values, [name] : value}))
    }
    const handleDrop = (e, imageKey) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setImageFile((prev) => ({...prev, [imageKey]: droppedFile}));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleSelect = (event)=> {
        setEvSetting (event.target.value)
    }

    const handleTextarea = (event)=> {
        setTextarea (event.target.value);
    }
return(
    <div className="Ev-app">
        <header>
            <div className="Business-name">
          <div className="h1"><h1>Wakashi's Emporium</h1></div> 
            </div>
        <div className="container">
            <div className="content">
              <div className="card"><img src="/eventapp-birthday.jpg" alt="Birthday" />
              <p>Birthday party</p>
              </div>
              <div className="card"><img src="/eventapp-gardenparty.jpg" alt="Garden party"/>
              <p>Garden party</p>
              </div>
              <div className="card"><img src="/eventapp-wedding.jpg" alt="Wedding"/>
              <p>Wedding</p>
              </div>
              <div className="card"><img src="/listening-party.jpg" alt="Listening party"/>
              <p>Listening party</p>
              </div>
            </div>
        </div>
    </header>

  <form onSubmit={handleSubmit}>
    <h2>Book your next event</h2>
    <label>
        Enter you name:
        <input type="text" name="userName" 
        value={inputs.userName || ""} 
        onChange={handleChange}
        />
    </label>
    <br></br>
    <br></br>
    <label>
        Email:
        <input type="email" name="userEmail" 
        value={inputs.userEmail || ""} 
        onChange={handleChange}
        />
    </label>
    <label>
        Type of event:
        <input type="text" name="type"
        value={inputs.type || ""}
        onChange={handleChange}
        />
    </label>
    <br></br>
    <br></br>
    <label>
        Theme colours:
        <input type="text" name="colours"
        value={inputs.colours || ""}
        onChange={handleChange}
        />
    </label>
    <br></br>
    <br></br>
    <label style={{marginTop : "10px"}}>
        Where is your event going to be?
    <select value = {evSetting} onChange={handleSelect}>
        <option value = "Outdoor">Outdoor</option>
        <option value = "Indoor">Indoor</option>
    </select>
    </label>
    <br></br>
    <label>
        Add any information or specifications here:
        <textarea value = {textarea} onChange={handleTextarea}></textarea>
    </label>
    <br></br>
    <div className="img1" onDrop={(e)=> handleDrop(e, "image1")}>
     {imageFile.image1 ? (
        <div>
            <p>{imageFile.image1.name}</p>
            {imageFile.image1.type.startsWith('image') && 
                (<img src={URL.createObjectURL(imageFile.image1)} alt="preview" className="img"
                 />)
            }
        </div>
       ) : (<p>Drag and drop image here</p>)
    }
    </div>
  </form>
    </div>
)
}

