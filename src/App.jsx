import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList/EventList";
import EventForm from "./components/Form/EventForm";

function App() {
  return (
    <div id="page">
      <EventForm />
      <EventList />
    </div>
  );
}

export default App;
