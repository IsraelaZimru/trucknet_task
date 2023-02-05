import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList/EventList";
import EventForm from "./components/Form/EventForm";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  const deletEvent = (item) => {
    const filterd = events.filter((x) => x !== item);
    setEvents(filterd);
  };
  return (
    <div id="page">
      <EventForm onSubmit={addEvent} />
      <EventList events={events} onDelete={deletEvent} />
    </div>
  );
}

export default App;
