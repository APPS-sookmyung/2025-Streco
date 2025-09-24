import { useReducer, useEffect, useRef } from "react";
import {
  ScheduleStateContext,
  ScheduleDispatchContext,
} from "./scheduleContext.js";

function scheduleReducer(state, action) {
  switch (action.type) {
    case "INIT_SCHEDULE":
      return action.data;

    case "SAVE_RECORD": {
      const { streamerName, newRecord } = action.data;
      const originalRecords = state[streamerName] || [];
      let newRecords;
      const recordIndex = originalRecords.findIndex(
        (item) => String(item.id) === String(newRecord.id)
      );
      if (recordIndex !== -1) {
        newRecords = originalRecords.map((item) =>
          String(item.id) === String(newRecord.id) ? newRecord : item
        );
      } else {
        newRecords = [...originalRecords, newRecord];
      }
      const nextState = { ...state, [streamerName]: newRecords };
      localStorage.setItem("schedule", JSON.stringify(nextState));
      return nextState;
    }

    case "DELETE_RECORD": {
      const { streamerName, recordId } = action.data;
      const updatedRecords = (state[streamerName] || []).filter(
        (item) => String(item.id) !== String(recordId)
      );
      const nextState = { ...state, [streamerName]: updatedRecords };
      localStorage.setItem("schedule", JSON.stringify(nextState));
      return nextState;
    }

    default:
      return state;
  }
}

export default function ScheduleProvider({ children }) {
  const [state, dispatch] = useReducer(scheduleReducer, {});
  const idRef = useRef(0);

  useEffect(() => {
    const storedSchedule = JSON.parse(localStorage.getItem("schedule")) || {};
    const allRecords = Object.values(storedSchedule).flat();
    if (allRecords.length > 0) {
      idRef.current =
        Math.max(...allRecords.map((item) => Number(item.id))) + 1;
    }
    dispatch({ type: "INIT_SCHEDULE", data: storedSchedule });
  }, []);

  const onSaveRecord = (streamerName, newRecord) => {
    dispatch({ type: "SAVE_RECORD", data: { streamerName, newRecord } });
  };
  const onDeleteRecord = (streamerName, recordId) => {
    dispatch({ type: "DELETE_RECORD", data: { streamerName, recordId } });
  };
  const getNewRecordId = () => {
    return idRef.current++;
  };

  return (
    <ScheduleStateContext.Provider value={state}>
      <ScheduleDispatchContext.Provider
        value={{ onSaveRecord, onDeleteRecord, getNewRecordId }}
      >
        {children}
      </ScheduleDispatchContext.Provider>
    </ScheduleStateContext.Provider>
  );
}
