import { useContext, useState, useEffect } from "react";
import { ScheduleStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useRecord = (id) => {
  const schedule = useContext(ScheduleStateContext);
  const [curRecordItem, setCurRecordItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const allRecords = Object.values(schedule).flat();
    const currentRecordItem = allRecords.find(
      (item) => String(item.id) === String(id)
    );
    setCurRecordItem(currentRecordItem);
  }, [id, schedule, nav]);

  return curRecordItem;
};

export default useRecord;
