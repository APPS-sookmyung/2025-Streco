import { useNavigate } from "react-router-dom";
import moment from "moment";
import Button from "../components/Button";

import { useScheduleState, useScheduleDispatch } from "../hooks/useSchedule";
import { useStreamerState } from "../hooks/useStreamer";

const Plan = ({ selectedDate }) => {
  const schedule = useScheduleState();
  const streamers = useStreamerState();
  const { getNewRecordId } = useScheduleDispatch();
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
      {streamers.map((streamer) => {
        const recordsForSelectedDate = getScheduleForDate(streamer.name);
        return (
          <div key={streamer.id} className="mb-[20px]">
            <div className="flex items-center">
              <Button text={streamer.name} type="STREAMER" />
              <Button
                text={"+"}
                type={"ADD"}
                onClick={() => {
                  const newId = getNewRecordId();
                  nav(`/form/${newId}`, { state: { streamer: streamer.name } });
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
                      className="block flex bg-[#e2e2e2] justify-between shadow-[3px_3px_8px_0_rgba(0,0,0,0.15)] rounded-lg !mx-[10px] cursor-pointer hover:bg-[#28242a] hover:text-gray-50 py-[5px] pr-[10px]"
                    >
                      <div className="!mx-4 !my-1">
                        <span className="text-xs pr-4 text-gray-500">{`${broadcastTime}`}</span>
                        <span className="font-bold">{`${gameName}`}</span>
                      </div>
                      <span className="!mx-4 !my-1">&gt;</span>
                    </div>
                  );
                })
              ) : (
                <div className="mx-[10px] text-gray-500"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Plan;
