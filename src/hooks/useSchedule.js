import { useContext } from "react";
import {
  ScheduleStateContext,
  ScheduleDispatchContext,
} from "../contexts/scheduleContext";

export const useScheduleState = () => {
  const context = useContext(ScheduleStateContext);
  return context;
};

export const useScheduleDispatch = () => {
  const context = useContext(ScheduleDispatchContext);
  return context;
};
