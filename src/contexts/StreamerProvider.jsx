import { useReducer, useEffect, useRef, useCallback } from "react";
import {
  StreamerStateContext,
  StreamerDispatchContext,
} from "./streamerContext.js";

import cpt from "../assets/streamer1.webp";
import vanilla from "../assets/streamer2.webp";
import chorong from "../assets/streamer3.webp";

const DEFAULT_IMAGE = cpt;

const initialStreamers = [
  { id: 1, name: "CPT", image: cpt },
  { id: 2, name: "VanilLa", image: vanilla },
  { id: 3, name: "CHORONG", image: chorong },
];

function streamerReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "ADD": {
      const nextState = [action.data, ...state];
      localStorage.setItem("streamers", JSON.stringify(nextState));
      return nextState;
    }
    default:
      return state;
  }
}

export default function StreamerProvider({ children }) {
  const [state, dispatch] = useReducer(streamerReducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    let loadedStreamers = JSON.parse(localStorage.getItem("streamers"));
    if (!loadedStreamers || loadedStreamers.length === 0) {
      loadedStreamers = initialStreamers;
    }

    const sanitizedStreamers = loadedStreamers.map((streamer) => ({
      ...streamer,
      image: streamer.image || DEFAULT_IMAGE,
    }));

    if (sanitizedStreamers.length > 0) {
      idRef.current = Math.max(...sanitizedStreamers.map((s) => s.id)) + 1;
    }

    dispatch({ type: "INIT", data: sanitizedStreamers });
  }, []);

  const onAddStreamer = useCallback(
    (data) => {
      const isStreamerExists = state.some(
        (streamer) => streamer.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isStreamerExists) {
        alert("이미 존재하는 스트리머입니다.");
        return;
      }
      dispatch({
        type: "ADD",
        data: {
          id: idRef.current++,
          ...data,
          image: data.image || DEFAULT_IMAGE,
        },
      });
    },
    [state]
  );

  return (
    <StreamerStateContext.Provider value={state}>
      <StreamerDispatchContext.Provider value={{ onAddStreamer }}>
        {children}
      </StreamerDispatchContext.Provider>
    </StreamerStateContext.Provider>
  );
}
