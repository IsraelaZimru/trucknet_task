import { useState, useEffect } from "react";
import { Button, Card, Collapse, InputGroup, Alert } from "react-bootstrap";
import "./EventForm.sass";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function EventForm({ onSubmit }) {
  const [error, setError] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const [validated, setValidated] = useState(false);
  const [details, setDetails] = useState({
    name: {
      isRequired: true,
      pattern: /\w{2,}/,
      msg: [],
      value: "",
      isInValid: false,
    },
    startTime: {
      isRequired: true,
      pattern:
        /^([1-9]|([012][0-9])|(3[01]))\-([0]{0,1}[1-9]|1[012])\-\d\d\d\d\s([0-1]?[0-9]|2?[0-3]):([0-5]\d)$/,
      msg: [],
      value: "",
      isInValid: false,
    },
    endTime: {
      isRequired: true,
      pattern:
        /^([1-9]|([012][0-9])|(3[01]))\-([0]{0,1}[1-9]|1[012])\-\d\d\d\d\s([0-1]?[0-9]|2?[0-3]):([0-5]\d)$/,
      msg: [],
      value: "",
      isInValid: false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: details.name.value,
      startTime: details.startTime.value,
      endTime: details.endTime.value,
    };
    console.log("newEvent", newEvent);
    onSubmit(newEvent);
  };

  const checkingMatch = () => {};

  function update({ target: { name, value } }) {
    const errorMsg = [];
    let isMsgShowing = false;
    if (value === "") {
      isMsgShowing = true;
      errorMsg.push(`This Field is Required`);
    } else if (details[name].isRequired && details[name].pattern.test(value)) {
      isMsgShowing = false;
    } else {
      errorMsg.push(`Not Valid.`);
      isMsgShowing = true;
    }
    // console.log(
    //   name,
    //   "value",
    //   value,
    //   "isMsgShowing",
    //   isMsgShowing,
    //   "errorMsg",
    //   errorMsg
    // );
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: {
        ...prevDetails[name],
        value,
        isInValid: isMsgShowing,
        msg: errorMsg,
      },
    }));
    return errorMsg[0]; //importent for sumbit form!!!
  }

  return (
    <Card id="formCard" className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              type="datetime-local"
              name="startTime"
              onBlur={update}
              onChange={update}
              value={details.startTime.value}
              placeholder="Start time"
            />
            <Form.Label>Start Time</Form.Label>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <InputGroup className="input_container">
            <Form.Control
              type="datetime-local"
              name="endTime"
              onBlur={update}
              onChange={update}
              value={details.endTime.value}
              placeholder="End time"
            />
            <Form.Label>End Time</Form.Label>
          </InputGroup>
        </Form.Group>

        <Button variant="outline-dark" type="submit">
          CREATE EVENT
        </Button>
      </Form>
    </Card>
  );
}
