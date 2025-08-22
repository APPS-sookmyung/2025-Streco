import Header from "../components/Header";
import StreamerRecord from "../components/StreamerRecord";
import BroadcastInfo from "../components/BroadcastInfo";
import PlayRecord from "../components/PlayRecord";
import TimestampList from "../components/TimestampList";

import { useState } from "react";

const Record = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <StreamerRecord isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      </div>
      <BroadcastInfo isEditMode={isEditMode} />
      <PlayRecord isEditMode={isEditMode} />
      <TimestampList isEditMode={isEditMode} />
    </div>
  );
};

export default Record;
