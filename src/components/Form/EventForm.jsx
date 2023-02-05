import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  Collapse,
  InputGroup,
  Alert,
} from "react-bootstrap";
import "./EventForm.css";

export default function EventForm() {
  const onClose = () => {};
  const setConnected = () => {};
  const setUser = () => {};

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

  const handleSubmit = () => {};

  const checkingMatch = () => {};

  function update({ name, value }) {
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
    console.log(
      name,
      "value",
      value,
      "isMsgShowing",
      isMsgShowing,
      "errorMsg",
      errorMsg
    );
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: {
        ...prevDetails[name],
        value,
        isInVaild: isMsgShowing,
        msg: errorMsg,
      },
    }));
    return errorMsg[0]; //importent for sumbit form!!!
  }
  return (
    <div>
      <Card id="formCard">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="display-4 text-left">New Event</h1>

          <Form.Group className="">
            <Form.Label>Name of the Event</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="name"
                onBlur={update}
                onChange={update}
                value={details.name.value}
                placeholder="Name of the Event"
                isInvalid={details.name.isInValid}
              />
              <Form.Control.Feedback type="invalid" className="feedback">
                {details.name.msg}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label>Start Time</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="startTime"
                onBlur={update}
                onChange={update}
                value={details.startTime.value}
                placeholder="Start time"
                isInvalid={details.startTime.isInValid}
              />
              <Form.Control.Feedback type="invalid" className="feedback">
                {details.startTime.msg}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label>End Time</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="endTime"
                onBlur={update}
                onChange={update}
                value={details.endTime.value}
                placeholder="End time"
                isInvalid={details.endTime.isInValid}
              />
              <Form.Control.Feedback type="invalid" className="feedback">
                {details.endTime.msg}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Submit{" "}
          </Button>
        </Form>
      </Card>
    </div>
  );
}
