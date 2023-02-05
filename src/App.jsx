import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList/EventList";
import EventForm from "./components/Form/EventForm";

function App() {
  return (
    <>
      <EventForm />
      <EventList />
    </>
  );
}

export default App;
