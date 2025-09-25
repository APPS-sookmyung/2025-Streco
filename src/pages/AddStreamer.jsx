import Header from "../components/Header";
import { CgProfile } from "react-icons/cg";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStreamerDispatch } from "../hooks/useStreamer";

const AddStreamer = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const { onAddStreamer } = useStreamerDispatch();

  const cpt = "src/assets/streamer1.webp";

  const handleAdd = () => {
    if (!nickname.trim()) {
      alert("스트리머 이름을 입력해주세요.");
      return;
    }
    onAddStreamer({
      name: nickname,
      image: cpt,
    });
    alert("스트리머가 추가되었습니다!");
    setNickname("");
    navigate("/");
  };

  return (
    <div className="addstreamer">
      <Header />
      <div
        className="streamerinfo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
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
