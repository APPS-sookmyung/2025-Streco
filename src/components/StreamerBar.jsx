import Button from "./Button";
("./Button");

import { useEffect, useState } from "react";
import { streamerData } from "../util/streamerdata";
import { useNavigate } from "react-router-dom";
import cpt from "./../assets/streamer1.webp";

const StreamerBar = () => {
  const nav = useNavigate();
  const [storedStreamers, setStoredStreamers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("streamers")) || [];
    setStoredStreamers(stored);
  }, []);

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
          src={cpt}
          alt={streamer.value}
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
