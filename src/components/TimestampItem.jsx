import "./TimestampItem.css";

const TimestampItem = ({ text }) => {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <div className="timestamp">00:20</div>
          <div className="description">{text}</div>
        </div>
        <div className="real-time">16:20</div>
      </div>
    </div>
  );
};

export default TimestampItem;
