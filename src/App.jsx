import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EvApp from "./EvApp"; 
import EventForm from "./EventForm"; 
import "./Event.css";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EvApp />} />
                <Route path="/book-event" element={<EventForm />} />
            </Routes>
        </Router>
    );
}
