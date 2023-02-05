import "./style.sass";
import { dateFormatter } from "../../utils/helpers";
import { Row, Col } from "react-bootstrap";

export default function EventList({ events, onDelete }) {
  return (
    <div className="row p-2">
      {events.length
        ? events.map((item, i) => (
            <div key={i} className="note_container">
              <div className="note">
                <Row className="justify-content-between">
                  <Col>
                    <h4>Name of the event: {item.name}</h4>
                  </Col>
                  <Col sm={2} onClick={() => onDelete(item)}>
                    <div className="delete_btn">X</div>
                  </Col>
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
