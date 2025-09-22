import Header from "../components/Header";
import StreamerRecord from "../components/StreamerRecord";
import { CgProfile } from "react-icons/cg";
import Button from "../components/Button";
import cpt from "./../assets/streamer1.webp";

import { useState } from "react";

const AddStreamer = () => {
  const [nickname, setNickname] = useState("");

  const handleAdd = () => {
    if (!nickname) return;

    const stored = JSON.parse(localStorage.getItem("streamers")) || [];

    const newStreamer = { value: nickname, image: cpt };

    localStorage.setItem("streamers", JSON.stringify([...stored, newStreamer]));
    setNickname("");
  };

  return (
    <div className="addstreamer">
      <Header />
      <StreamerRecord />
      <div
        className="streamerinfo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", margin: "15px", alignItems: "center" }}>
          <CgProfile
            style={{ height: "50px", width: "50px", marginRight: "10px" }}
          />
          <input
            type="text"
            name="streamerinfo"
            placeholder="스트리머 이름 입력"
            style={{
              fontSize: "14px",
              padding: "6px 8px",
              height: "16px",
            }}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <Button text={"추가"} type={"EDIT_DONE"} onClick={handleAdd} />
      </div>
    </div>
  );
};

export default AddStreamer;
