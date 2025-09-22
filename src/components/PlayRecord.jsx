import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import CustomSelect from "./CustomSelect";
import {
  gameOptions,
  characterOptions,
  positionOptions,
} from "../util/gamedata";

const PlayRecord = ({ isEditMode }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [matchEnabled, setMatchEnabled] = useState(false);
  const [score, setScore] = useState({ my: "", enemy: "" });
  const [imgError, setImgError] = useState(false);

  const characters = selectedGame ? characterOptions[selectedGame.value] : [];
  const position = selectedGame ? positionOptions[selectedGame.value] : [];

  function getImgUrl(selectedGame, name) {
    if (!selectedGame || !name) return "";
    return new URL(
      `../assets/${selectedGame.value}/${name}.webp`,
      import.meta.url
    ).href;
  }

  useEffect(() => {
    setImgError(false);
  }, [selectedGame, selectedCharacter]);

  return (
    <div>
      {/* 게임 선택 */}
      <div className="game">
        <SectionTitle text={"# 게임 종류"} />
        <CustomSelect
          options={gameOptions}
          value={selectedGame}
          onChange={setSelectedGame}
          placeholder="게임 선택"
          isDisabled={!isEditMode}
        />
        {selectedGame?.image && (
          <img
            src={selectedGame.image}
            alt={selectedGame.label}
            className="m-[10px] h-[150px] rounded-[10px]"
          />
        )}
      </div>

      {/* 주요 플레이 기록 */}
      <div className="gameset">
        <SectionTitle text={"# 주요 플레이 기록"} />
        <div className="flex items-center !ml-[10px] !mb-[10px]">
          <input
            type="checkbox"
            checked={matchEnabled}
            onChange={() => setMatchEnabled((prev) => !prev)}
            disabled={!isEditMode}
            className="m-0 h-[25px] w-[25px] rounded-[5px]"
          />
          <span className="mx-[10px] text-center">경기</span>
          <input
            type="number"
            value={score.my}
            onChange={(e) => setScore({ ...score, my: e.target.value })}
            disabled={!matchEnabled}
            className={`h-[25px] mx-[5px] w-[60px] rounded-[5px] text-[15px] pl-[5px] border ${
              matchEnabled
                ? "border-black bg-white text-black"
                : "border-gray-300 bg-[#f5f5f5] text-gray-500"
            }`}
          />
          <span className="m-0">:</span>
          <input
            type="number"
            value={score.enemy}
            onChange={(e) => setScore({ ...score, enemy: e.target.value })}
            disabled={!matchEnabled}
            className={`h-[25px] mx-[5px] w-[60px] rounded-[5px] text-[15px] pl-[5px] border ${
              matchEnabled
                ? "border-black bg-white text-black"
                : "border-gray-300 bg-[#f5f5f5] text-gray-500"
            }`}
          />
        </div>

        <div className="flex self-start">
          {selectedGame && selectedCharacter?.value && !imgError && (
            <img
              src={getImgUrl(selectedGame, selectedCharacter.value)}
              alt={selectedCharacter.label}
              onError={() => setImgError(true)}
              className="!ml-[10px] h-[50px] rounded-full"
            />
          )}
          <div className="flex !ml-2.5">
            <CustomSelect
              options={characters}
              value={selectedCharacter}
              onChange={setSelectedCharacter}
              placeholder="캐릭터 선택"
              isDisabled={!isEditMode}
            />
            {selectedGame && positionOptions[selectedGame.value] && (
              <CustomSelect
                options={position}
                value={selectedPosition}
                onChange={setSelectedPosition}
                placeholder="포지션 선택"
                isDisabled={!isEditMode}
              />
            )}
          </div>
        </div>
      </div>

      {/* 감상 기록 */}
      <div className="diary">
        <SectionTitle text={"# 감상 기록"} />
        <textarea
          name="diarycontents"
          rows={4}
          cols={40}
          disabled={!isEditMode}
          className="border-0 text-[20px] resize-none overflow-y-scroll w-[425px] h-[200px] mx-[15px] ml-[10px] bg-[#e6e6e6] rounded-[8px] p-[10px]"
        />
      </div>
    </div>
  );
};

export default PlayRecord;
