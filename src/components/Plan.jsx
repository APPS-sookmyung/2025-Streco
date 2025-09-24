import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScheduleDispatchContext,
  ScheduleStateContext,
  StreamerStateContext,
} from "../App";
import Button from "./Button";
import moment from "moment";

const Plan = ({ selectedDate }) => {
  const schedule = useContext(ScheduleStateContext);
  const streamers = useContext(StreamerStateContext);
  const { getNewRecordId } = useContext(ScheduleDispatchContext);
  const nav = useNavigate();

  const getScheduleForDate = (streamerName) => {
    const targetDate = moment(selectedDate).format("YYYY-MM-DD");
    const streamerRecords = schedule[streamerName] || [];

    return streamerRecords.filter((item) => {
      if (!item.broadcastInfo.date) return false;
      const recordDate = moment(item.broadcastInfo.date).format("YYYY-MM-DD");
      return recordDate === targetDate;
    });
  };

  return (
    <div className="plan">
      {streamers.map((name) => {
        const recordsForSelectedDate = getScheduleForDate(name);
        return (
          <div key={name} className="mb-[20px]">
            <div className="flex items-center">
              <Button text={name} type="STREAMER" />
              <Button
                text={"+"}
                type={"ADD"}
                onClick={() => {
                  const newId = getNewRecordId();
                  nav(`/form/${newId}`, { state: { streamer: name } });
                }}
              />
            </div>
            <div>
              {recordsForSelectedDate.length > 0 ? (
                recordsForSelectedDate.map((item) => {
                  const gameName =
                    item.playRecord.game?.label || "게임 정보 없음";
                  const broadcastTime = item.broadcastInfo.startTime
                    ? new Date(item.broadcastInfo.startTime).toLocaleTimeString(
                        [],
                        { hour: "2-digit", minute: "2-digit" }
                      )
                    : "시간 정보 없음";
                  return (
                    <div
                      key={item.id}
                      onClick={() => nav(`/form/${item.id}`)}
                      className="block mx-[10px] cursor-pointer hover:bg-[#d2d2d2] border-b border-black py-[5px] pr-[10px]"
                    >
                      {`> ${broadcastTime} | ${gameName}`}
                    </div>
                  );
                })
              ) : (
                <div className="mx-[10px] text-gray-500">
                  {moment(selectedDate).format("M월 D일")} 기록이 없습니다.
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Plan;
