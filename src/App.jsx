import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList/EventList";
import EventForm from "./components/Form/EventForm";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };
  return (
    <div id="page">
      <EventForm onSubmit={addEvent} />
      <EventList list={events} />
    </div>
  );
}

export default App;
