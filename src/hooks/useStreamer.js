import { useContext } from "react";
import {
  StreamerStateContext,
  StreamerDispatchContext,
} from "../contexts/streamerContext";

export const useStreamerState = () => {
  const context = useContext(StreamerStateContext);
  if (context === undefined) {
    throw new Error("useStreamerState must be used within a StreamerProvider");
  }
  return context;
};

export const useStreamerDispatch = () => {
  const context = useContext(StreamerDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useStreamerDispatch must be used within a StreamerProvider"
    );
  }
  return context;
};
