import "./Plan.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const scheduleData = [
  { time: "16:00", game: "Valorant", streamer: "Cpt" },
  { time: "23:00", game: "GTA", streamer: "VanilLa" },
  { time: "17:00", game: "Overwatch2", streamer: "Cpt" },
  { time: "22:00", game: "League Of Legends", streamer: "CHORONG" },
];

const Plan = () => {
  const nav = useNavigate();

  const renderSchedule = (name) => {
    return scheduleData
      .filter((item) => item.streamer === name)
      .map((item, idx) => (
        <div
          key={idx}
          onClick={() => nav("/record")}
        >{`> ${item.time} | ${item.game}`}</div>
      ));
  };

  return (
    <div className="plan">
      <div className="streamerplan">
        <div className="streamer">
          <Button text={"Cpt"} type={"STREAMER"} />
          <Button text={"+"} type={"ADD"} />
        </div>
        <div className="renderSchedule">{renderSchedule("Cpt")}</div>
      </div>

      <div className="streamerplan">
        <div className="streamer">
          <Button text={"VanilLa"} type={"STREAMER"} />
          <Button text={"+"} type={"ADD"} />
        </div>
        <div className="renderSchedule">{renderSchedule("VanilLa")}</div>
      </div>

      <div className="streamerplan">
        <div className="streamer">
          <Button text={"CHORONG"} type={"STREAMER"} />
          <Button text={"+"} type={"ADD"} />
        </div>
        <div className="renderSchedule">{renderSchedule("CHORONG")}</div>
      </div>
    </div>
  );
};

export default Plan;
