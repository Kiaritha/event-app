import { useState } from "react";

export default function EvApp() {
    const [inputs, setInputs] = useState({});
    const [evSetting, setEvSetting] = useState("Outdoor");
    const [textarea, setTextarea] = useState("");

    const handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values, [name] : value}))
    }

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
  <form onSubmit={handleSubmit}>
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
  </form>
    </div>
)
}

