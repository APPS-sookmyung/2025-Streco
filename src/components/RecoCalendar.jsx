import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./RecoCalendar.css";

const RecoCalendar = ({ selectedDate, onDateChange, recordDates = [] }) => {
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <Calendar
        className="custom-calendar"
        value={selectedDate}
        onChange={onDateChange}
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
            recordDates.includes(moment(date).format("YYYY-MM-DD"))
          ) {
            return <div className="dot-indicator" />;
          }
          return null;
        }}
      />
    </div>
  );
};

export default RecoCalendar;
