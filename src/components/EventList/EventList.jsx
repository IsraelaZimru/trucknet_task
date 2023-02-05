export default function EventList({ events }) {
  return (
    <div className="row p-2 d-flex felx-wrap justify-conent-center">
      {events.length
        ? events.map((item, i) => (
            <div key={i}>
              <p>name: {item.name}</p>
            </div>
          ))
        : null}
    </div>
  );
}
