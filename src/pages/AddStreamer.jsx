import Header from "../components/Header";
import { CgProfile } from "react-icons/cg";
import Button from "../components/Button";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStreamerDispatch } from "../hooks/useStreamer";

const AddStreamer = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const { onAddStreamer } = useStreamerDispatch();

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const PressPhotoButton = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    if (!nickname.trim()) {
      alert("스트리머 이름을 입력해주세요.");
      return;
    }

    onAddStreamer({
      name: nickname,
      image: image,
    });

    alert("스트리머가 추가되었습니다!");
    setNickname("");
    setImage(null);
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
          <div className="relative flex-col">
            {image ? (
              <img
                src={image}
                alt="스트리머 프로필 미리보기"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <CgProfile
                style={{ height: "50px", width: "50px", marginRight: "10px" }}
              />
            )}

            {/* "import images" 버튼 및 숨겨진 파일 인풋 */}
            <div className="p-4 rounded-md" onClick={PressPhotoButton}>
              {"이미지 \n 불러오기"}
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="streamerinfo"
            placeholder="스트리머 이름 입력"
            style={{
              fontSize: "14px",
              padding: "6px 8px",
              height: "20px",
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
