import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./RecoCalendar.css";

const RecoCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const attendDay = ["2025-08-19", "2025-08-22"]; // 특정 날짜 예시

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setActiveStartDate(today);
    setDate(today);
  };

  return (
    <div className="calendar-wrapper">
      <Calendar
        className="custom-calendar"
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        formatShortWeekday={(locale, date) => moment(date).format("ddd")}
        calendarType="gregory"
        showNeighboringMonth={true}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        activeStartDate={activeStartDate === null ? undefined : activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        tileContent={({ date, view }) => {
          if (
            view === "month" &&
            attendDay.includes(moment(date).format("YYYY-MM-DD"))
          ) {
            return <div className="dot-indicator" />;
          }
          return null;
        }}
      />
      <div className="today-button" onClick={handleTodayClick}>
        Today
      </div>
    </div>
  );
};

export default RecoCalendar;
