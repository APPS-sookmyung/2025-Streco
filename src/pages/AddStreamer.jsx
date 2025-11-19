import Header from "../components/Header";
import { FiUpload } from "react-icons/fi";
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
    <div className="add-streamer">
      <Header />
      <div className="flex flex-col w-[445px] items-center justify-center p-6 mt-10">
        {/* 이미지 업로드 영역*/}
        <div
          onClick={PressPhotoButton}
          className="flex w-full mb-6 cursor-pointer items-center justify-center transition-all duration-200"
        >
          {image ? (
            // 이미지가 있으면 원형으로 미리보기를 표시
            <img
              src={image}
              alt="프로필 미리보기"
              className="w-[256px] aspect-square object-cover rounded-lg items-center"
            />
          ) : (
            // 이미지가 없으면
            <div className="w-[256px] aspect-square bg-[#f0f0f0] rounded-lg flex flex-col items-center justify-center text-gray-500 hover:bg-[#e2e2e2] shadow-[3px_3px_8px_0_rgba(0,0,0,0.15)]">
              <FiUpload className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium">이미지 삽입하기</span>
            </div>
          )}
        </div>

        {/* 숨겨진 파일 인풋 */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {/* 닉네임 입력*/}
        <input
          type="text"
          name="streamer-nickname"
          placeholder="스트리머 닉네임 입력"
          className="w-64 p-2 my-4 rounded-lg text-center border-1 border-gray-500 text-white text-base focus:outline-none focus:ring-1 focus:ring-[#CD0000] focus:border-transparent"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        {/* 스트리머 추가 버튼*/}
        <div
          type={"EDIT_DONE"}
          onClick={handleAdd}
          className="w-64 p-2 bg-[#960018] mt-4 text-lg shadow-[3px_3px_8px_0_rgba(0,0,0,0.15)] rounded-lg cursor-pointer text-white hover:bg-[#670010] hover:text-gray-50 text-center"
        >
          스트리머 추가
        </div>
      </div>
    </div>
  );
};

export default AddStreamer;
