import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import CustomSelect from "./CustomSelect";
import {
  gameOptions,
  characterOptions,
  positionOptions,
} from "../util/gamedata";

const PlayRecord = ({ isEditMode, data, setData }) => {
  const { game, character, position, memo, matchEnabled, score } = data;

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [game, character]);

  const characters = game?.value ? characterOptions[game.value] : [];
  const positions = game?.value ? positionOptions[game.value] : [];

  function getImgUrl(selectedGame, name) {
    if (!selectedGame || !name) return "";
    return new URL(
      `../assets/${selectedGame.value}/${name}.webp`,
      import.meta.url
    ).href;
  }

  const handleMatchToggle = () => {
    setData({ ...data, matchEnabled: !matchEnabled });
  };

  return (
    <div>
      <div className="game">
        <SectionTitle text={"# 게임 종류"} />
        <div className="!ml-[15px]">
          <CustomSelect
            options={gameOptions}
            value={game}
            onChange={(val) =>
              setData({ ...data, game: val, character: null, position: null })
            }
            placeholder="게임 선택"
            isDisabled={!isEditMode}
          />
          {game?.image && (
            <img
              src={game.image}
              alt={game.label}
              className="m-[10px] h-[150px] rounded-[10px]"
            />
          )}
        </div>
      </div>

      <div className="gameset">
        <SectionTitle text={"# 주요 플레이 기록"} />
        <div className="flex items-center !ml-[25px] !mb-[10px]">
          <input
            type="checkbox"
            checked={matchEnabled}
            onChange={handleMatchToggle}
            disabled={!isEditMode}
            className="m-0 h-[25px] w-[25px] rounded-[5px]"
          />
          <span className="mx-[10px] text-center">경기</span>
          <input
            type="number"
            value={score.my}
            onChange={(e) =>
              setData({ ...data, score: { ...score, my: e.target.value } })
            }
            disabled={!isEditMode || !matchEnabled}
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
            onChange={(e) =>
              setData({ ...data, score: { ...score, enemy: e.target.value } })
            }
            disabled={!isEditMode || !matchEnabled}
            className={`h-[25px] mx-[5px] w-[60px] rounded-[5px] text-[15px] pl-[5px] border ${
              matchEnabled
                ? "border-black bg-white text-black"
                : "border-gray-300 bg-[#f5f5f5] text-gray-500"
            }`}
          />
        </div>

        <div className="flex self-start items-center !ml-[15px]">
          {game?.value && character?.value && !imgError && (
            <img
              src={getImgUrl(game, character.value)}
              alt={character.label}
              onError={() => setImgError(true)}
              className="!ml-[10px] h-[50px] rounded-full"
            />
          )}
          <div className="flex !ml-2.5">
            <CustomSelect
              options={characters}
              value={character}
              onChange={(val) => setData({ ...data, character: val })}
              placeholder="캐릭터 선택"
              isDisabled={!isEditMode}
            />
            {game?.value && positionOptions[game.value] && (
              <CustomSelect
                options={positions}
                value={position}
                onChange={(val) => setData({ ...data, position: val })}
                placeholder="포지션 선택"
                isDisabled={!isEditMode}
              />
            )}
          </div>
        </div>
      </div>

      <div className="diary">
        <SectionTitle text={"# 감상 기록"} />
        <div className="!ml-[15px]">
          <textarea
            name="diarycontents"
            rows={4}
            cols={40}
            disabled={!isEditMode}
            value={memo || ""}
            onChange={(e) => setData({ ...data, memo: e.target.value })}
            className="border-0 text-[15px] resize-none overflow-y-scroll w-[425px] h-[200px] mx-[15px] ml-[10px] bg-[#e6e6e6] rounded-[8px] p-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayRecord;
