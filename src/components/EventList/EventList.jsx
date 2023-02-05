import "./style.sass";
import { dateFormatter } from "../../utils/helpers";
import { Row, Col } from "react-bootstrap";

export default function EventList({ events }) {
  return (
    <div className="row p-2">
      {events.length
        ? events.map((item, i) => (
            <div key={i} className="note_container">
              <div className="note">
                <Row>
                  <Col>
                    <h4>Name of the event: {item.name}</h4>
                  </Col>
                  <Col onClick={() => onDelete(item)}>X</Col>
                </Row>
                <p>Start date: {dateFormatter(item.startTime)}</p>
                <p>End Date: {dateFormatter(item.endTime)}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
