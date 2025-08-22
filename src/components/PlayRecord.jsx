import "./PlayRecord.css";

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
          <img src={selectedGame.image} alt={selectedGame.label} />
        )}
      </div>

      <div className="gameset">
        <SectionTitle text={"# 주요 플레이 기록"} />
        <div className="match">
          <input
            type="checkbox"
            checked={matchEnabled}
            onChange={() => setMatchEnabled((prev) => !prev)}
            disabled={!isEditMode}
          />
          <span>경기</span>
          <input
            type="number"
            value={score.my}
            onChange={(e) => setScore({ ...score, my: e.target.value })}
            disabled={!matchEnabled}
          />
          <span style={{ margin: "0" }}>:</span>
          <input
            type="number"
            value={score.enemy}
            onChange={(e) => setScore({ ...score, enemy: e.target.value })}
            disabled={!matchEnabled}
          />
        </div>

        <div className="playinfo">
          {selectedGame && selectedCharacter?.value && !imgError && (
            <img
              src={getImgUrl(selectedGame, selectedCharacter.value)}
              alt={selectedCharacter.label}
              onError={() => setImgError(true)}
            />
          )}
          <div className="customselect">
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
      <div className="diary">
        <SectionTitle text={"# 감상 기록"} />
        <textarea
          name="diarycontents"
          rows={4}
          cols={40}
          disabled={!isEditMode}
        />
      </div>
    </div>
  );
};

export default PlayRecord;
