import Button from "./Button";
import { useContext } from "react";
import { streamerData } from "../util/streamerdata";
import { useNavigate } from "react-router-dom";
import cpt from "./../assets/streamer1.webp";
import { StreamerStateContext } from "../App";

const StreamerBar = () => {
  const nav = useNavigate();
  const storedStreamers = useContext(StreamerStateContext);

  return (
    <div className="flex p-2 pb-0 items-center justify-start">
      {streamerData.map((streamer, index) => (
        <img
          key={index}
          src={streamer.image}
          alt={streamer.value}
          className="rounded-full h-[50px] m-[5px]"
        />
      ))}
      {storedStreamers.map((streamer, index) => (
        <img
          key={index}
          src={cpt} //임의의 이미지
          alt={streamer}
          className="rounded-full h-[50px] m-[5px]"
        />
      ))}
      <Button
        className="items-center"
        text="+"
        type="ADD"
        onClick={() => nav("/AddStreamer")}
      />
    </div>
  );
};

export default StreamerBar;
