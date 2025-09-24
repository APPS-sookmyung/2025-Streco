import { useState, useReducer, useEffect, createContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Notfound from "./pages/Notfound";
import AddStreamer from "./pages/AddStreamer";

function scheduleReducer(state, action) {
  switch (action.type) {
    case "INIT_SCHEDULE":
      return action.data;
    case "SAVE_RECORD": {
      const { streamerName, newRecord } = action.data;
      const updatedSchedule = { ...state };

      if (!updatedSchedule[streamerName]) {
        updatedSchedule[streamerName] = [];
      }

      const recordIndex = updatedSchedule[streamerName].findIndex(
        (item) => String(item.id) === String(newRecord.id)
      );

      if (recordIndex !== -1) {
        updatedSchedule[streamerName][recordIndex] = newRecord;
      } else {
        updatedSchedule[streamerName].push(newRecord);
      }

      localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
      return updatedSchedule;
    }
    case "DELETE_RECORD": {
      const { streamerName, recordId } = action.data;
      const updatedSchedule = { ...state };
      if (updatedSchedule[streamerName]) {
        updatedSchedule[streamerName] = updatedSchedule[streamerName].filter(
          (item) => String(item.id) !== String(recordId)
        );
      }
      localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
      return updatedSchedule;
    }
    default:
      return state;
  }
}

function streamerReducer(state, action) {
  switch (action.type) {
    case "INIT_STREAMERS":
      return action.data;
    case "ADD_STREAMER": {
      const isStreamerExists = state.some(
        (name) => name.toLowerCase() === action.data.toLowerCase()
      );
      if (isStreamerExists) {
        return state;
      }
      const nextState = [...state, action.data];
      localStorage.setItem("streamers", JSON.stringify(nextState));
      return nextState;
    }
    default:
      return state;
  }
}

const onAddStreamer = (nickname) => {
  dispatchStreamer({ type: "ADD_STREAMER", data: nickname });
};

export const ScheduleStateContext = createContext();
export const ScheduleDispatchContext = createContext();
export const StreamerStateContext = createContext();
export const StreamerDispatchContext = createContext();

function App() {
  const [scheduleData, dispatchSchedule] = useReducer(scheduleReducer, {});
  const [streamerData, dispatchStreamer] = useReducer(streamerReducer, []);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const storedSchedule = JSON.parse(localStorage.getItem("schedule"));

    if (storedSchedule) {
      const allRecords = Object.values(storedSchedule).flat();
      if (allRecords.length > 0) {
        let maxId = 0;
        allRecords.forEach((item) => {
          if (Number(item.id) > maxId) {
            maxId = Number(item.id);
          }
        });
        nextIdRef.current = maxId + 1;
      }
      dispatchSchedule({ type: "INIT_SCHEDULE", data: storedSchedule });
    }
    const storedStreamers = JSON.parse(localStorage.getItem("streamers"));
    if (Array.isArray(storedStreamers)) {
      const validStreamers = storedStreamers.filter(
        (item) => typeof item === "string"
      );
      dispatchStreamer({ type: "INIT_STREAMERS", data: validStreamers });
    }
  }, []);

  const getNewRecordId = () => {
    return nextIdRef.current++;
  };

  const onAddStreamer = (nickname) => {
    const isStreamerExists = streamerData.some((name) => {
      if (typeof name !== "string") {
        return false;
      }
      return name.toLowerCase() === nickname.toLowerCase();
    });
    if (!isStreamerExists) {
      dispatchStreamer({ type: "ADD_STREAMER", data: nickname });
    } else {
      alert("이미 존재하는 스트리머입니다.");
    }
  };

  const onSaveRecord = (streamerName, newRecord) => {
    dispatchSchedule({
      type: "SAVE_RECORD",
      data: { streamerName, newRecord },
    });
  };

  const onDeleteRecord = (streamerName, recordId) => {
    dispatchSchedule({
      type: "DELETE_RECORD",
      data: { streamerName, recordId },
    });
  };

  return (
    <>
      <ScheduleStateContext.Provider value={scheduleData}>
        <ScheduleDispatchContext.Provider
          value={{ onSaveRecord, onDeleteRecord, getNewRecordId }}
        >
          <StreamerStateContext.Provider value={streamerData}>
            <StreamerDispatchContext.Provider value={{ onAddStreamer }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form/:id?" element={<Form />} />
                <Route path="/addStreamer" element={<AddStreamer />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </StreamerDispatchContext.Provider>
          </StreamerStateContext.Provider>
        </ScheduleDispatchContext.Provider>
      </ScheduleStateContext.Provider>
    </>
  );
}

export default App;
