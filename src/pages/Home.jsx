import Header from "../components/Header";
import StreamerBar from "../components/StreamerBar";
import RecoCalendar from "../components/RecoCalendar";
import Plan from "../components/Plan";
import moment from "moment";

import React, { useState, useMemo } from "react";
import { useScheduleState } from "../hooks/useSchedule";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const schedule = useScheduleState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const recordDates = useMemo(() => {
    const dates = new Set();
    Object.values(schedule).forEach((streamerRecords) => {
      streamerRecords.forEach((record) => {
        if (record.broadcastInfo?.date) {
          dates.add(moment(record.broadcastInfo.date).format("YYYY-MM-DD"));
        }
      });
    });
    return Array.from(dates);
  }, [schedule]);

  return (
    <div>
      <Header />
      <StreamerBar />
      <RecoCalendar
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        recordDates={recordDates}
      />
      <Plan selectedDate={selectedDate} />
    </div>
  );
};

export default Home;
