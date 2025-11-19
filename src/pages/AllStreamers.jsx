import Header from "../components/Header";
import React from "react";
import { useStreamerState, useStreamerDispatch } from "../hooks/useStreamer";
import { HiOutlineTrash } from "react-icons/hi";

const AllStreamers = () => {
  const streamers = useStreamerState();
  const { onDeleteStreamer } = useStreamerDispatch();

  return (
    <div className="all-streamers">
      <Header />

      {/* 리스트 컨테이너 */}
      <div className="flex w-[445px] flex-col gap-4 max-w-2xl pt-4">
        {streamers.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            등록된 스트리머가 없습니다.
          </div>
        ) : (
          streamers.map((streamer) => (
            <div
              key={streamer.id}
              className=" w-full flex items-center justify-between bg-[#1a1a1a] border border-white/10 rounded-xl p-4 hover:bg-[#252525] transition-colors"
            >
              {/*이미지, 이름 */}
              <div className="flex items-center justify-start gap-4 !m-0 pl-1">
                <img
                  src={streamer.image}
                  alt={streamer.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="text-lg font-semibold text-white">
                  {streamer.name}
                </span>
              </div>

              {/* 삭제 버튼 */}
              <button
                onClick={() => {
                  if (
                    window.confirm(`${streamer.name}님을 삭제하시겠습니까?`)
                  ) {
                    onDeleteStreamer(streamer.id);
                  }
                }}
                className="p-2  text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-full transition-all cursor-pointer"
                aria-label="삭제"
              >
                <HiOutlineTrash size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllStreamers;
