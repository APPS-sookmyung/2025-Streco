import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useStreamerState } from "../hooks/useStreamer";

const StreamerBar = () => {
  const nav = useNavigate();
  const streamers = useStreamerState();

  return (
    <div className="flex w-full items-center justify-between p-2 pb-1">
      <div className="!m-0 flex">
        {streamers.map((streamer) => (
          <div key={streamer.id} className="flex flex-col items-center justify-center">
            <img
              src={streamer.image}
              alt={streamer.name}
              className="m-[5px] h-[50px] rounded-full"
            />
            <p className="text-xs text-white mt-1">{streamer.name}</p>
          </div>
        ))}
      </div>
      
      <Button
        className="items-center"
        text="+"
        type="ADD"
        onClick={() => nav("/AddStreamer")}
      />
    </div>
  );
};

export default StreamerBar;