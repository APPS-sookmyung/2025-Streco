import Header from "../components/Header";
import StreamerBar from "../components/StreamerBar";
import RecoCalendar from "../components/RecoCalendar";
import Plan from "../components/Plan";
import moment from "moment";

import { useState, useMemo } from "react";
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
      <div className="lg:flex lg:w-full lg:gap-8">
        <div className="lg:w-1/2 lg:flex-1">
          <RecoCalendar
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            recordDates={recordDates}
          />
        </div>

        <div className="lg:w-1/2 lg:flex-1 lg:mt-5">
          <Plan selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default Home;
