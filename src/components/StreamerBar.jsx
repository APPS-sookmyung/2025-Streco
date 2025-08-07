import "./StreamerBar.css";
import Button from "./Button";
("./Button");

import streamer1 from "./../assets/streamer1.jpg";
import streamer2 from "./../assets/streamer2.jpg";
import streamer3 from "./../assets/streamer3.jpg";

const StreamerBar = () => {
  return (
    <div className="streamer_img_wrapper">
      <img src={streamer1}></img>
      <img src={streamer2}></img>
      <img src={streamer3}></img>
      <Button text={"+"} type={"STREAMER_ADD"} />
    </div>
  );
};

export default StreamerBar;
