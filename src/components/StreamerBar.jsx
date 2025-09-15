import "./StreamerBar.css";
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
    <div className="streamerbar">
      <div className="streamer_img_wrapper">
        {streamerData.map((streamer, index) => (
          <img key={index} src={streamer.image} alt={streamer.value} />
        ))}

        {storedStreamers.map((streamer, index) => (
          <img key={index} src={cpt} alt={streamer.value} />
        ))}
      </div>
      <Button text={"+"} type={"ADD"} onClick={() => nav("/AddStreamer")} />
    </div>
  );
};

export default StreamerBar;
