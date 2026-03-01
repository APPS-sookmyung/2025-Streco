import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useStreamerState } from "../hooks/useStreamer";

const StreamerBar = () => {
  const nav = useNavigate();
  const streamers = useStreamerState();

  return (
    <div className="flex items-center justify-between w-full gap-2 p-2 pb-1 lg:pb-3">
      <div className="!m-0 flex flex-1 overflow-x-auto overflow-y-hidden">
        {streamers.map((streamer) => (
          <div
            key={streamer.id}
            className="flex flex-col items-center justify-center shrink-0"
          >
            <img
              src={streamer.image}
              alt={streamer.name}
              className="m-[5px] md:h-18 md:w-18 h-10 w-10 rounded-full object-cover"
            />
            <p className="md:text-base text-[10px] text-white mt-1">
              {streamer.name}
            </p>
          </div>
        ))}
      </div>

      <div className="pl-2 shrink-0">
        <Button
          className="items-center"
          text="+"
          type="ADD"
          onClick={() => nav("/AddStreamer")}
        />
      </div>
    </div>
  );
};

export default StreamerBar;
