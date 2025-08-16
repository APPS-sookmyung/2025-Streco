import "./StreamerBar.css";
import Button from "./Button";
("./Button");

import streamer1 from "./../assets/streamer1.webp";
import streamer2 from "./../assets/streamer2.webp";
import streamer3 from "./../assets/streamer3.webp";

const StreamerBar = () => {
  return (
    <div className="streamerbar">
      <div className="streamer_img_wrapper">
        <img src={streamer1}></img>
        <img src={streamer2}></img>
        <img src={streamer3}></img>
      </div>
      <Button text={"+"} type={"ADD"} />
    </div>
  );
};

export default StreamerBar;
