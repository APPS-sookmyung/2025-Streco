import "./StreamerRecord.css";

import streamer2 from "./../assets/streamer2.webp";
import Button from "./Button";

const StreamerRecord = () => {
  return (
    <div className="streamerrecord">
      <div className="streamer">
        <img src={streamer2}></img>
        <h3>Vanilla</h3>
      </div>
      <div className="edit">
        <Button text={"삭제"} type={"EDIT_DELETE"} />
        <Button text={"완료"} type={"EDIT_DONE"} />
      </div>
    </div>
  );
};

export default StreamerRecord;
