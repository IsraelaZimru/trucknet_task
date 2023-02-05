import { useState, useEffect } from "react";
import { Button, Card, Collapse, InputGroup, Alert } from "react-bootstrap";
import "./EventForm.sass";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const initialState = {
  name: {
    isRequired: true,
    value: "",
  },
  startTime: {
    isRequired: true,
    value: "",
  },
  endTime: {
    isRequired: true,
    value: "",
  },
};
export default function EventForm({ onSubmit }) {
  const [validated, setValidated] = useState(true);
  const [details, setDetails] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: details.name.value,
      startTime: details.startTime.value,
      endTime: details.endTime.value,
    };
    console.log("newEvent", newEvent);
    onSubmit(newEvent);
    setDetails(initialState);
  };

  function update({ target: { name, value } }) {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: {
        ...prevDetails[name],
        value: name !== "name" ? new Date(value) : value,
      },
    }));

    let btnDisabled = false;
    for (const filed in details) {
      if (!details[filed].value) {
        btnDisabled = true;
      }
    }
    setValidated(btnDisabled);
  }

  return (
    <Card id="formCard" className="container">
      <Form noValidate onSubmit={handleSubmit}>
        <h1 className="display-4 text-left">New Event</h1>

        <Form.Group>
          <InputGroup className="input_container">
            <Form.Control
              id="name"
              type="text"
              name="name"
              onBlur={update}
              onChange={update}
              value={details.name.value}
              placeholder="Name of the Event"
            />
            <Form.Label className="label_show">Name of the Event</Form.Label>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <InputGroup className="input_container">
            <Form.Control
              type="text"
              name="startTime"
              onBlur={(e) => (e.target.type = "text")}
              onChange={update}
              onFocus={(e) => (e.target.type = "datetime-local")}
              value={
                details.startTime.value
                  ? details.startTime.value
                      .toISOString()
                      .replace("T", ", ")
                      .substring(0, 19)
                  : ""
              }
              placeholder="Start time"
            />
            <Form.Label>Start Time</Form.Label>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <InputGroup className="input_container">
            <Form.Control
              id="end_time"
              type="text"
              name="endTime"
              onBlur={(e) => (e.target.type = "text")}
              onChange={update}
              onFocus={(e) => (e.target.type = "datetime-local")}
              value={
                details.endTime.value
                  ? details.endTime.value
                      .toISOString()
                      .replace("T", ", ")
                      .substring(0, 19)
                  : ""
              }
              placeholder="End time"
            />
            <Form.Label>End Time</Form.Label>
          </InputGroup>
        </Form.Group>

        <Button variant="outline-dark" type="submit" disabled={validated}>
          CREATE EVENT
        </Button>
      </Form>
    </Card>
  );
}
