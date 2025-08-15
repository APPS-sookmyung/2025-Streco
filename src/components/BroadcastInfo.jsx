import SectionTitle from "./SectionTitle";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { GoPaperclip } from "react-icons/go";
import "react-datepicker/dist/react-datepicker.css";
import "./BroadcastInfo.css";

const BroadcastInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <div className="broadcast-info">
      <SectionTitle text={"# 방송 시작 시간"} />
      <div className="datepicker">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
          popperPlacement="bottom-start"
        />

        <DatePicker
          selected={selectedTime}
          onChange={(time) => setSelectedTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={1}
          timeCaption="시간"
          dateFormat="HH:mm"
          placeholderText="시간 선택"
        />
      </div>
      <div className="streamlink">
        <GoPaperclip style={{ height: "25px", width: "25px" }} />
        <textarea name="streamlink" rows={4} cols={40} />
      </div>
    </div>
  );
};

export default BroadcastInfo;
