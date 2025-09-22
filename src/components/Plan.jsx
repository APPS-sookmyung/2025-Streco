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
          className="block mx-[10px] cursor-pointer hover:bg-[#d2d2d2] border-b border-black py-[5px] pr-[10px]"
        >
          {`> ${item.time} | ${item.game}`}
        </div>
      ));
  };

  return (
    <div className="plan">
      <div className="mb-[20px]">
        <div className="flex items-center">
          <Button text={"Cpt"} type={"STREAMER"} />
          <Button
            text={"+"}
            type={"ADD"}
            className="w-[25px] h-[25px] m-[5px]"
          />
        </div>
        <div>{renderSchedule("Cpt")}</div>
      </div>

      <div className="mb-[20px]">
        <div className="flex items-center">
          <Button text={"VanilLa"} type={"STREAMER"} />
          <Button
            text={"+"}
            type={"ADD"}
            className="w-[25px] h-[25px] m-[5px]"
          />
        </div>
        <div>{renderSchedule("VanilLa")}</div>
      </div>

      <div className="mb-[20px]">
        <div className="flex items-center">
          <Button text={"CHORONG"} type={"STREAMER"} />
          <Button
            text={"+"}
            type={"ADD"}
            className="w-[25px] h-[25px] m-[5px]"
          />
        </div>
        <div>{renderSchedule("CHORONG")}</div>
      </div>
    </div>
  );
};

export default Plan;
