import { useReducer, useEffect, useRef, useCallback } from "react";
import {
  StreamerStateContext,
  StreamerDispatchContext,
} from "./streamerContext.js";

import streamer from "../assets/streamer-default.svg";
import doran from "../assets/doran.svg";
import oner from "../assets/oner.svg";
import faker from "../assets/faker.svg";
import peyz from "../assets/peyz.svg";
import keria from "../assets/keria.svg";

const DEFAULT_IMAGE = streamer;

const initialStreamers = [
  { id: 1, name: "Doran", image: doran },
  { id: 2, name: "Oner", image: oner },
  { id: 3, name: "Faker", image: faker },
  { id: 4, name: "Peyz", image: peyz },
  { id: 5, name: "Keria", image: keria },
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
    case "DELETE": {
      const nextState = state.filter((streamer) => streamer.id !== action.id);
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

  const onDeleteStreamer = useCallback((id) => {
    dispatch({ type: "DELETE", id });
  }, []);

  return (
    <StreamerStateContext.Provider value={state}>
      <StreamerDispatchContext.Provider
        value={{ onAddStreamer, onDeleteStreamer }}
      >
        {children}
      </StreamerDispatchContext.Provider>
    </StreamerStateContext.Provider>
  );
}
