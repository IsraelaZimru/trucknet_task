import { useState, useEffect } from "react";
import { Row, Col, Button, Card, Form, InputGroup } from "react-bootstrap";
import "./EventForm.sass";
import { dateFormatter } from "../../utils/helpers";

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
        <Row id="header" className="justify-content-between">
          <Col sm={10}>
            <h2 className="title">New Event</h2>
          </Col>
          <Col className="text-center">
            <p className="delete_btn ">X</p>
          </Col>
        </Row>

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
                  ? dateFormatter(details.startTime.value)
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
                  ? dateFormatter(details.endTime.value)
                  : ""
              }
              placeholder="End time"
            />
            <Form.Label>End Time</Form.Label>
          </InputGroup>
        </Form.Group>

        <div className="text-right">
          <Button variant="outline-dark" type="submit" disabled={validated}>
            CREATE EVENT
          </Button>
        </div>
      </Form>
    </Card>
  );
}
