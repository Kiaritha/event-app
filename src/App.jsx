import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EvApp from "./EvApp"; 
import EventForm from "./EventForm"; 

import "./Event.css";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EvApp />} /> {/*Home page*/}
                 <Route path="/form/:eventType" element={<EventForm />} />{/*dynamic form route*/}
            </Routes>
        </Router>
    );
}
