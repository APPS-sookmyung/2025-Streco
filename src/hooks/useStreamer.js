import { useContext } from "react";
import {
  StreamerStateContext,
  StreamerDispatchContext,
} from "../contexts/streamerContext";

export const useStreamerState = () => {
  const context = useContext(StreamerStateContext);
  return context;
};

export const useStreamerDispatch = () => {
  const context = useContext(StreamerDispatchContext);
  return context;
};
