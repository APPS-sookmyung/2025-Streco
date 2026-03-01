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
      import.meta.url,
    ).href;
  }

  const handleMatchToggle = () => {
    setData({ ...data, matchEnabled: !matchEnabled });
  };

  return (
    <div>
      <div className="game">
        <SectionTitle text={"# 게임 종류"} />
        <div className="ml-2 md:ml-4">
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
              className="m-2.5 h-30 md:h-37.5 rounded-2.5"
            />
          )}
        </div>
      </div>

      <div className="gameset">
        <SectionTitle text={"# 주요 플레이 기록"} />
        <div className="flex items-center ml-4 mb-2.5">
          <input
            type="checkbox"
            checked={matchEnabled}
            onChange={handleMatchToggle}
            disabled={!isEditMode}
            className="m-0 h-5 w-5 md:h-6.25 md:w-6.25 rounded-1.25"
          />
          <span className="mx-2 md:mx-2.5 text-center text-white">경기</span>
          <input
            type="number"
            value={score.my}
            onChange={(e) =>
              setData({ ...data, score: { ...score, my: e.target.value } })
            }
            disabled={!isEditMode || !matchEnabled}
            className={`h-6 md:h-6.25 mx-1 md:mx-1.25 w-15 rounded-[5px] text-3.75 pl-1.25 border ${
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
            className={`h-6 md:h-6.25 mx-1 md:mx-1.25 w-15 rounded-[5px] text-3.75 pl-1.25 border ${
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
              className="!ml-0 h-10 md:h-12.5 lg:h-14 rounded-full"
            />
          )}
          <div className="flex ml-0 md:ml-2.5 gap-2 lg:gap-0">
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
        <div className="ml-0 md-ml-3.75">
          <textarea
            name="diarycontents"
            rows={4}
            cols={40}
            disabled={!isEditMode}
            value={memo || ""}
            onChange={(e) => setData({ ...data, memo: e.target.value })}
            placeholder="감상을 입력하세요."
            className="border-0 text-xs md:text-base resize-none overflow-y-scroll w-[97%] h-25 md:h-50 mx-3.75 ml-2.5 bg-[#7b7b7b] rounded-[4px] p-2.5 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayRecord;
