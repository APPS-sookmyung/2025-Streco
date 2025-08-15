import "./PlayRecord.css";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import CustomSelect from "./CustomSelect";
import { gameOptions, characterOptions } from "../util/gamedata";

const PlayRecord = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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
        {selectedGame && <img src={selectedGame.image} />}
      </div>
      <div className="gameset">
        <SectionTitle text={"# 주요 플레이 기록"} />
        <CustomSelect
          options={characterOptions}
          value={selectedCharacter}
          onChange={setSelectedCharacter}
          placeholder="캐릭터 선택"
        />
      </div>
      <div className="diary">
        <SectionTitle text={"# 감상 기록"} />
        <textarea name="diarycontents" rows={4} cols={40} />
      </div>
    </div>
  );
};

export default PlayRecord;
