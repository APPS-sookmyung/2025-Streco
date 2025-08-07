import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyle.css";

const CalendarComponent = () => {
  return (
    <div className="calendar-wrapper">
      <div className="today-button">오늘</div>
      <Calendar className="custom-calendar" />
      <div className="dot-indicator"></div>
    </div>
  );
};

export default CalendarComponent;
