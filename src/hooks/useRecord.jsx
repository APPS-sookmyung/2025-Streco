// src/hooks/useRecord.jsx (최종 완성본)

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScheduleState } from "../hooks/useSchedule";

const useRecord = (id) => {
  const schedule = useScheduleState();
  const [curRecordItem, setCurRecordItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    if (Object.keys(schedule).length === 0) {
      return;
    }
    const allRecords = Object.values(schedule).flat();
    const currentRecordItem = allRecords.find(
      (item) => String(item.id) === String(id)
    );
    setCurRecordItem(currentRecordItem);
  }, [id, schedule, nav]);

  return curRecordItem;
};

export default useRecord;
