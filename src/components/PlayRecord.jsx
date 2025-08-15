import "./PlayRecord.css";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import CustomSelect from "./CustomSelect";
import { gameOptions, characterOptions } from "../util/gamedata";

const PlayRecord = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [matchEnabled, setMatchEnabled] = useState(false);
  const [score, setScore] = useState({ my: "", enemy: "" });

  const characters = selectedGame ? characterOptions[selectedGame.value] : [];

  return (
    <div>
      <div className="game">
        <SectionTitle text={"# 게임 종류"} />
        <CustomSelect
          options={gameOptions}
          value={selectedGame}
          onChange={setSelectedGame}
          placeholder="게임 선택"
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
          {selectedCharacter?.image && (
            <img src={selectedCharacter.image} alt={selectedCharacter.label} />
          )}
          <div className="customselect">
            <CustomSelect
              options={characters}
              value={selectedCharacter}
              onChange={setSelectedCharacter}
              placeholder="캐릭터 선택"
            />
            <CustomSelect
              options={characters}
              value={selectedCharacter}
              onChange={setSelectedCharacter}
              placeholder="캐릭터 선택"
            />
          </div>
        </div>
      </div>
      <div className="diary">
        <SectionTitle text={"# 감상 기록"} />
        <textarea name="diarycontents" rows={4} cols={40} />
      </div>
    </div>
  );
};

export default PlayRecord;
